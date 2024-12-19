import css from './styles.module.css';
import git from './img/git.svg';
import { LinkedinLogo } from '@phosphor-icons/react'

export default function Contacts() {
  return (
    <div id="contacts" className={css.wrapper}>
      <div>Contact me:</div>
      <div>
        <div>
          <LinkedinLogo className={css.icon} />
          <a href="https://www.linkedin.com/in/rozalinaag/">
            www.linkedin.com/in/rozalinaag/
          </a>
        </div>

        <div>
          <img className={css.icon} src={git} alt="Git" />{' '}
          <a href="https://github.com/rozalinaag">
            https://github.com/rozalinaag
          </a>
        </div>

        <div>
          <img className={css.icon} alt="mail" />
          <a href="mailto:rozalina.ag@gmail.com">rozalina.ag@gmail.com</a>
        </div>

        <div>
          <img className={css.icon} alt="number" />
          <div>+13477309924</div>
        </div>

        <div>
          <img className={css.icon} alt="leetcode" />
          <a href="https://leetcode.com/u/rozalinaag/">
            leetcode.com/u/rozalinaag/
          </a>
        </div>
      </div>
    </div>
  );
}
