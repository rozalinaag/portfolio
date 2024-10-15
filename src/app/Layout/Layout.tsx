import Header from '../../components/Header/Header';
import css from './styles.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={css.wrapper}>
      <Header />
      {children}
    </div>
  );
}
