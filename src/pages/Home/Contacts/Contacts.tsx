import css from './styles.module.css';

export default function Contacts() {
  return (
    <div className={css.wrapper}>
      <div>Contact me:</div>
      <div>
        <div>
          <img alt="Linkedin" />{' '}
          <a href="https://www.linkedin.com/in/rozalinaag/">
            www.linkedin.com/in/rozalinaag/
          </a>
        </div>

        <div>
          <img alt="Git" />{' '}
          <a href="https://github.com/rozalinaag">
            https://github.com/rozalinaag
          </a>
        </div>

        <div>
          <img alt="mail" />
          <a href="mailto:rozalina.ag@gmail.com">rozalina.ag@gmail.com</a>
        </div>

        <div>
          <img alt="number" />
          <div>+13477309924</div>
        </div>

        <div>
          <img alt="leetcode" />
          <a href="https://leetcode.com/u/rozalinaag/">
            leetcode.com/u/rozalinaag/
          </a>
        </div>

        <div>
          <img alt="youtube" />
          <a href="https://www.youtube.com/@Rozalinaag/videos">
            YouTube Channel about my life
          </a>
        </div>
      </div>
    </div>
  );
}
