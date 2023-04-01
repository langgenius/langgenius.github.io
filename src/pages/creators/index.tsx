import cn from "classnames";
import s from './index.module.css';


const Creators = () => {
    return (
      <div className={s.content}>
        <div className={s.sectionOne}>
          <div className={s.sectionContent}>
            <h2 className={s.h2}>Build the future of development</h2>
            <div className={s.text}>Unlock the full potential of language models with LangGenius, make it intuitive and quick for both professional and non-developers to design, build, and deploy operational AI applications. We are striving to be the best open source LLMOps platform.</div>
          </div>
        </div>
        <div className={s.sectionTwo}>
          <div className={s.aboutBgOne} />
          <div className={s.sectionTwoContent}>
            <div className={s.teamIntro}>
              <span className={s.tag}>THE TEAM</span>
              <h2 className={s.title}>A small team with impressive cred.</h2>
              <div className={s.introText}>The core members of LangGenius come from Tencent Cloud's DevOps platform, where we were once the cream of the crop. With over 6 years of R&D experience in DevOps, developer tools, and productivity tools, we're on a mission to leverage cutting-edge technology as our cornerstone, making AI applications easy to use and develop with a touch of love and humor.</div>
            </div>
            <div className={s.teamMembers}>
              <div className={cn(s.profile, s.luyu)}>
                <div className={s.name}>Luyu</div>
                <div className={s.role}>Founder&PO</div>
              </div>
              <div className={cn(s.profile, s.takatost)}>
                <div className={s.name}>Takatost</div>
                <div className={s.role}>Lead Developer</div>
              </div>
              <div className={cn(s.profile, s.evan)}>
                <div className={s.name}>Evan</div>
                <div className={s.role}>UX Designer</div>
              </div>
              <div className={cn(s.profile, s.joel)}>
                <div className={s.name}>Joel</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.niteKnite)}>
                <div className={s.name}>NiteKnite</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.panpan)}>
                <div className={s.name}>Panpan</div>
                <div className={s.role}>QA&DevRel</div>
              </div>
              <div className={cn(s.profile, s.minco)}>
                <div className={s.name}>Minco W.</div>
                <div className={s.role}>Product Designer</div>
              </div>
              <div className={cn(s.profile, s.banana)}>
                <div className={s.name}>Banana Z.</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.moneyZhu)}>
                <div className={s.name}>Money Zhu</div>
                <div className={s.role}>Backend</div>
              </div>
              <div className={cn(s.profile, s.jinxia)}>
                <div className={s.name}>Jinxia S</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.xiLiu)}>
                <div className={s.name}>Xi Liu</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.xiaohang)}>
                <div className={s.name}>Xiaohang Z.</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.chocobo)}>
                <div className={s.name}>Gillian Z.</div>
                <div className={s.role}>SRE</div>
              </div>
              <div className={cn(s.profile, s.minco)}>
                <div className={s.name}>Chocobo</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.zehong)}>
                <div className={s.name}>Zehong J.</div>
                <div className={s.role}>Frontend</div>
              </div>
              <div className={cn(s.profile, s.pengfei)}>
                <div className={s.name}>Pengfei L.</div>
                <div className={s.role}>Website Designer</div>
              </div>
              {/* <div className={cn(s.profile, s.jyong)}>
                <div className={s.name}>Jyong</div>
                <div className={s.role}>Backend</div>
              </div> */}
            </div>
            <div className={s.line}></div>
            <div className={s.thanks}>The growth of LangGenius wouldn't be possible without the support of open-source communities like Github, especially our contributors. A special shoutout to <a className={s.link} target="_blank" rel="noreferrer" href="https://www.apidog.com">Apidog</a> for their invaluable help.</div>
          </div>
        </div>
        <div className={s.sectionThree}>
          <div className={s.aboutBgTwo} />
          <div className={s.sectionThreeContent}>
            <h2 className={cn(s.title)}>Product Story</h2>
            <div className={s.quote}>
              <div className={s.quoteText}>When a great team meets a lousy market, market wins.</div>
              <div className={s.quoteText}>When a lousy team meets a great market, market wins.</div>
              <div className={s.quoteText}>When a great team meets a great market, something special happens.</div>
              <div className={s.signature}>
                <div className={s.signatureName}>—— Andy Rachleff</div>
                <div className={s.signatureRole}>Benchmark Capital</div>
              </div>
            </div>
            <div className={s.timeline}>
              <div className={s.timelineDecoration}></div>
              <div className={s.timelineItem}>
                <div className={s.time}>W9, 2023</div>
                <div className={s.achivement}>After experiencing the complex process of developing applications based on GPT and fine-tuning models, we suddenly had an idea: to enable everyone to develop their own LLM applications.</div>
              </div>
              <div className={s.timelineItem}>
                <div className={s.time}>W10, 2023</div>
                <div className={s.achivement}>Luyu gathered 15 friends in just two days, and we finalized the product and technical plan within a few days.</div>
              </div>
              <div className={s.timelineItem}>
                <div className={s.time}>W11, 2023</div>
                <div className={s.achivement}>We kicked off a hackathon and completed most of the coding within a week, which was made possible by the team's years of experience and passion for the product.</div>
              </div>
              <div className={s.timelineItem}>
                <div className={cn(s.time, s.latest)}>W12, 2023</div>
                <div className={s.achivement}>The product was launched, along with both the open-source version and the cloud-based version.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.sectionFour}>
          <div className={s.bgPic} />
          <div className={s.sectionFourContent}>
            <div className={s.contact}>
              <span className={s.tag}>CONTACT US</span>
              <h2 className={cn(s.title, s.mb8)}>We'd love to hear from you</h2>
              <div className={s.introText}>Our friendly team is always here to chat.</div>
            </div>
            <div className={s.contactCards}>
              <div className={s.contactCard}>
                <div className={cn(s.cardIcon, s.iconChat)}/>
                <div className={s.contactWay}>Community</div>
                <div className={s.contactText}>For product usage support or communication, please join our Discord or you can participate in building LangGenius by submitting issues on GitHub.</div>
                <div className={s.extraLinks}>
                  <div className={s.linkItem}>
                    <div className={s.logoGithub}/>
                    <a className={s.extraLink} target="_blank" rel="noreferrer" href="https://github.com/langgenius">Github</a>
                  </div>
                  <div className={s.linkItem}>
                    <div className={s.logoDiscord}/>
                    <a className={s.extraLink}>Discord</a>
                  </div>
                </div>
              </div>
              <div className={s.contactCard}>
                <div className={cn(s.cardIcon, s.iconMail)}/>
                <div className={s.contactWay}>Email us</div>
                <div className={s.contactText}>Email us for general queries, including marketing and partnership opportunities.</div>
                <div className={s.extraLinks}>
                  <div className={s.linkItem}>
                    <a href="mailto:contact@langgenius.ai" className={s.extraLinkActive}>contact@langgenius.ai</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Creators;
  