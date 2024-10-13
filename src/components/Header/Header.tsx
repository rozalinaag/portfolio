import { Link } from 'react-router-dom';
import css from './styles.module.css';
import classNames from 'classnames';

export default function Header() {
  return (
    <nav className={css.header}>
      <div className={classNames('content', css.content)}>
        <Link to="/">About me</Link>
        <ul>
          <li>
            <Link to="/projects">My projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
