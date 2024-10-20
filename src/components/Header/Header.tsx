import { Link } from 'react-router-dom';
import css from './styles.module.css';
import classNames from 'classnames';
import icon from '/hacker.png';

export default function Header() {
  return (
    <nav className={css.header}>
      <div className={classNames(css.content)}>
        <Link to="/" className={css.title}>
          <img src={icon} alt="" width={30} />
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
