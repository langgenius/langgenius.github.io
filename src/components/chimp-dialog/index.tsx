import { useCallback, useRef, useState } from 'react'
import Button from '../basic/button'
import style from './chimp-dialog.module.css'
import isEmail from 'validator/es/lib/isEmail'
import jsonp from 'jsonp'

export type ChimpDialogProps = {
  open?: boolean
  onClose?: () => void
}

type ValidationResult = {
  success: true
  data?: string
} | {
  success: false
  error: string
}

const chimpUrl = 'https://langgenius.us12.list-manage.com/subscribe/post-json?u=9fe281ea555091f91d5183066&id=668e3674f6&f_id=00de6ee0f0'

const ChimpDialog = ({
  open = true,
  onClose,
}: ChimpDialogProps) => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [validationResult, setValidationResult] = useState<ValidationResult | undefined>(undefined)

  const validateEmail = useCallback((email?: string, isForced = false): ValidationResult => {
    if (!email) {
      if (isForced) {
        return {
          success: false,
          error: 'please fill in your email address',
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
        error: 'please check your email address',
      }
    }
    return {
      success: true,
      data: email,
    }
  }, []);

  const validate = useCallback(() => {
    setValidationResult(validateEmail(emailInputRef.current?.value))
  }, [validateEmail])

  const submit = useCallback(() => {
    const email = emailInputRef.current?.value
    const result = validateEmail(email, true)
    setValidationResult(result)
    if (result.success) {
      jsonp(`${chimpUrl}&EMAIL=${result.data}`, { param: 'c' }, (_, data) => {
        console.log(_, _)
        console.log(data, data)
        onClose?.()
      })
    }
  }, [onClose, validateEmail])

  return open ? (
    <div className={style.dialog} onClick={onClose}>
      <div className={style.modal} onClick={e => e.stopPropagation()}>
        <h2 className={style.header}>Subscribe</h2>
        <p className={style.tip}>Subscribe and get latest updates from LangGenius</p>
        <form className={style.form}>
          <div className={style.field}>
            <label className={style.label}>
              <span className={style.fieldName}>Email</span>
              <div className={style.inputSet}>
                <input name="email" className={style.input} ref={emailInputRef} onInput={validate} />
                <div className={style.error}>{validationResult?.success === false ? validationResult.error : ''}</div>
              </div>
            </label>
          </div>
          <div className={style.controls}>
            <Button onClick={submit}>Subscribe</Button>
            <Button type="white" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  ) : null
}

export default ChimpDialog
