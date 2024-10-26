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
            <a className={css.links} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className={css.links} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className={css.links} href="#contacts">
              Contacts
            </a>
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
