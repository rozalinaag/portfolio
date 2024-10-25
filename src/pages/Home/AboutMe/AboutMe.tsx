import css from './styles.module.css';
import avatar from '../img/ready.jpg';

export default function AboutMe() {
  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.title}>Hi, my name is</div>
        <div className={css.name}>Rozalina Agisheva.</div>
        <div className={css.whatToDo}>I build things for the web.</div>

        <div className={css.description}>
          I’m a <b className={css.accent}>software engineer</b> specializing in
          creating user-friendly websites. For more than{' '}
          <b className={css.accent}>three years</b>, I worked at{' '}
          <b className={css.accent}>Magnit</b>, a large retail company, where I
          developed <b className={css.accent}>corporate portals</b>.<br /> My
          bachelor's degree in <b className={css.accent}>Computer Science</b>{' '}
          has significantly contributed to my work.
        </div>

        <div className={css.passion}>
          Web development is my passion, and I truly enjoy what I do.
        </div>
      </div>

      <div className={css.picture}>
        <img src={avatar} alt="" className={css.avatar} />
        <div className={css.square}></div>
        <div className={css.square2}></div>
      </div>
    </div>
  );
}
