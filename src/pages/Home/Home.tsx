import Layout from '../../app/Layout/Layout';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import css from './styles.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={css.content}>
        <AboutMe />
        <Contacts />
      </div>
    </Layout>
  );
}
