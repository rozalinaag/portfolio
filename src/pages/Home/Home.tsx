import Layout from '../../app/Layout/Layout';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import css from './styles.module.css';
import Experience from "./Experience/Experience.tsx";
import Projects from "./Projects/Projects.tsx";

export default function Home() {
  return (
    <Layout>
      <div className={css.content}>
        <AboutMe />
          <Experience/>
          <Projects />
        <Contacts />
      </div>
    </Layout>
  );
}
