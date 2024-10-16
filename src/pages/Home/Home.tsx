import Layout from '../../app/Layout/Layout';
import css from './styles.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <div className={css.title}>Hi, my name is</div>
        <div className={css.name}>Rozalina Agisheva.</div>
        <div className={css.whatToDo}>I build things for the web.</div>
        <div className={css.description}>
          I’m a software engineer specializing in creating user-friendly
          websites. For more than three years, I worked at Magnit, a large
          retail company, where I developed two corporate portals. My bachelor's
          degree in Computer Science has significantly contributed to my work.
          Web development is my passion, and I truly enjoy what I do.
        </div>
      </div>
    </Layout>
  );
}
