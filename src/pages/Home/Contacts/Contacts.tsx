import css from './styles.module.css';
import { LinkedinLogo, GithubLogo, Envelope, Phone, Code } from '@phosphor-icons/react';

export default function Contacts() {
  return (
      <section id="contacts" className={css.wrapper}>
        <span className={css.label}>Contact me:</span>
        <ul className={css.list}>
          <li className={css.item}>
            <LinkedinLogo className={css.icon} weight="fill" />
            <a href="https://www.linkedin.com/in/rozalinaag/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className={css.item}>
            <GithubLogo className={css.icon} weight="fill" />
            <a href="https://github.com/rozalinaag" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className={css.item}>
            <Envelope className={css.icon} weight="fill" />
            <a href="mailto:rozalina.ag@gmail.com">Email</a>
          </li>
          <li className={css.item}>
            <Phone className={css.icon} weight="fill" />
            <a href={""}>3477309924</a>
          </li>
          <li className={css.item}>
            <Code className={css.icon} weight="fill" />
            <a href="https://leetcode.com/u/rozalinaag/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
          </li>
        </ul>
      </section>
  );
}
