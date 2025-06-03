import css from './styles.module.css';

export default function Footer() {
  return (
      <footer className={css.footer}>
        © {new Date().getFullYear()} Rozalina Agisheva. All rights reserved.
      </footer>
  );
}
