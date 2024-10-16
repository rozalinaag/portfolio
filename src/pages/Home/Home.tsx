import Layout from '../../app/Layout/Layout';
import css from './styles.module.css';
import avatar from './img/ready.jpg';

export default function Home() {
  return (
    <Layout>
      <div className={css.content}>
        <div>
          <div className={css.title}>Hi, my name is</div>
          <div className={css.name}>Rozalina Agisheva.</div>
          <div className={css.whatToDo}>I build things for the web.</div>

          <div className={css.description}>
            I’m a <b>software engineer</b> specializing in creating
            user-friendly websites. For more than <b>three years</b>, I worked
            at <b>Magnit</b>, a large retail company, where I developed{' '}
            <b>corporate portals</b>.<br /> My bachelor's degree in{' '}
            <b>Computer Science</b> has significantly contributed to my work.
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
    </Layout>
  );
}
