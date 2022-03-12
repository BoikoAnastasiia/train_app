import {Link} from "react-router-dom";
import MyButton from "../button";
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
      <ul className={styles.links}>
        <li>
          <Link to="/clients">Клиенты</Link>
        </li>
        <li>
          <Link to="/database">Тренировки</Link>
        </li>
      </ul>
    );
};

export default Navbar;
