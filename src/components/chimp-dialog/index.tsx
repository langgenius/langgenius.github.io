import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../basic/button'
import style from './chimp-dialog.module.css'
import isEmail from 'validator/es/lib/isEmail'
import jsonp from 'jsonp'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

export type ChimpDialogProps = {
  open?: boolean
  onClose?: () => void
}

const FormStates = [
  'filling',
  'success',
  'redundant',
] as const
type FormState = typeof FormStates[number]

type ValidationResult = {
  success: true
  data?: string
} | {
  success: false
  error: string
}

const chimpUrl = 'https://langgenius.us12.list-manage.com/subscribe/post-json?u=9fe281ea555091f91d5183066&id=668e3674f6&f_id=00de6ee0f0&tags=10504697&b_9fe281ea555091f91d5183066_668e3674f6=&subscribe=Subscribe'

const ChimpDialog = ({
  open = true,
  onClose,
}: ChimpDialogProps) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>('filling')
  const emailInputRef = useRef<HTMLInputElement>(null)
  const briefInputRef = useRef<HTMLTextAreaElement>(null)
  const [emailValidationResult, setEmailValidationResult] = useState<ValidationResult | undefined>(undefined)
  const [briefValidationResult, setBriefValidationResult] = useState<ValidationResult | undefined>(undefined)

  useEffect(() => {
    if (open) {
      setFormState('filling')
    }
  }, [open])

  useEffect(() => {
    if (open && formState === 'filling' && emailInputRef.current) {
      emailInputRef.current.focus()
    }
  }, [formState, open])

  const validateEmail = useCallback((email?: string, isForced = false): ValidationResult => {
    if (!email) {
      if (isForced) {
        return {
          success: false,
          error: t('请输入您的邮箱地址'),
        }
      } else {
        return {
          success: true,
          data: email,
        }
      }
    }
    if (!isEmail(email)) {
      return {
        success: false,
        error: t('请输入正确的邮箱地址'),
      }
    }
    return {
      success: true,
      data: email,
    }
  }, [t]);

  const validateBrief = useCallback((email?: string, isForced = false): ValidationResult => {
    if (!email) {
      if (isForced) {
        return {
          success: false,
          error: t('请简单介绍你自己'),
        }
      } else {
        return {
          success: true,
          data: email,
        }
      }
    }
    return {
      success: true,
      data: email,
    }
  }, [t]);

  const looseValidateEmail = useCallback(() => {
    setEmailValidationResult(validateEmail(emailInputRef.current?.value))
  }, [validateEmail])

  const looseValidateBrief = useCallback(() => {
    setBriefValidationResult(validateBrief(briefInputRef.current?.value))
  }, [validateBrief])

  const isSubmittingRef = useRef(false)
  const submit = useCallback(() => {
    const email = emailInputRef.current?.value
    const brief = briefInputRef.current?.value
    const emailValidation = validateEmail(email, true)
    setEmailValidationResult(emailValidation)
    const briefValidation = validateBrief(brief, true)
    setBriefValidationResult(briefValidation)
    if (!isSubmittingRef.current && emailValidation.success && briefValidation.success) {
      isSubmittingRef.current = true
      jsonp(`${chimpUrl}&EMAIL=${emailValidation.data}&MMERGE6=${brief}`, { param: 'c' }, (error, result) => {
        isSubmittingRef.current = false
        if (!error) {
          console.log('result', result)
          setFormState('success')
        }
      })
    }
  }, [validateBrief, validateEmail])

  return open ? (
    <div className={style.dialog} onClick={onClose}>
      <div className={style.modal} onClick={e => e.stopPropagation()}>
        {formState === 'filling' ? (
          <>
            <span className={classNames(style.emoji, style.envelope)} />
            <h2 className={style.heading}>{t('申请内测')}</h2>
            <p className={style.intro}>{t('请留下您的信息，我们将分批次发放邀请码。')}</p>
            <form className={style.form}>
              <label className={style.field}>
                <div className={style.fieldName}>{t('Email')}</div>
                <div className={style.inputSet}>
                  <input
                    name="email"
                    className={classNames(
                      style.input,
                      emailValidationResult && emailValidationResult.success === false && style.isError
                    )}
                    ref={emailInputRef}
                    onInput={looseValidateEmail}
                    placeholder={t('你的 Email') || ''}
                  />
                  <div className={style.error}>{emailValidationResult?.success === false ? emailValidationResult.error : ''}</div>
                </div>
              </label>
              <label className={style.field}>
                <div className={style.fieldName}>{t('简单介绍你自己')}</div>
                <div className={style.inputSet}>
                  <textarea
                    name="brief"
                    className={classNames(
                      style.input,
                      style.briefInput,
                      briefValidationResult && briefValidationResult.success === false && style.isError
                    )}
                    ref={briefInputRef}
                    onInput={looseValidateBrief}
                    placeholder={t('简单介绍你自己') || ''}
                  />
                  <div className={style.error}>{briefValidationResult?.success === false ? briefValidationResult.error : ''}</div>
                </div>
              </label>
              <Button size="large" className={style.submit} onClick={submit}>{t('提交')}</Button>
              <p className={style.tip}>{t('提交此表单，即代表您同意接收 LangGenius 发送的产品资讯邮件')}</p>
            </form>
          </>
        ) : (
          <>
            <span className={classNames(style.emoji, style.popper)} />
            <h2 className={style.heading}>{formState === 'success' ? t('已加入等待队列') : t('别着急嘛')}</h2>
            <p className={style.intro}>{formState === 'success' ? t('感谢对 LangGenius 的关注。') : t('该邮箱已登记过了，请耐心等待。')}</p>
            <Button type="white" size="large" className={style.close} onClick={onClose}>{t('关闭')}</Button>
          </>
        )}
        <span className={style.cross} onClick={onClose} />
      </div>
    </div>
  ) : null
}

export default ChimpDialog
