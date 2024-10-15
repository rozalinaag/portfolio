import { Link } from 'react-router-dom';
import css from './styles.module.css';
import classNames from 'classnames';

export default function Header() {
  return (
    <nav className={css.header}>
      <div className={classNames('content', css.content)}>
        <Link to="/" className={css.title}>
          Rozalina Agisheva
        </Link>
        <ul>
          <li>
            <Link className={css.links} to="/projects">
              Experience
            </Link>
          </li>
          <li>
            <Link className={css.links} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={css.links} to="/contacts">
              Contacts
            </Link>
          </li>
          <li>
            <Link className={classNames(css.links, css.resume)} to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
