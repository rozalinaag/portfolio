import Layout from '../../app/Layout/Layout';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import css from './styles.module.css';
import Experience from "./Experience/Experience.tsx";

export default function Home() {
  return (
    <Layout>
      <div className={css.content}>
        <AboutMe />
          <Experience/>
        <Contacts />
      </div>
    </Layout>
  );
}
