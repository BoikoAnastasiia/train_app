import { Link, NavLink } from "react-router-dom";
import MyButton from "../button";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
    <ul className={styles.links}>
      <li>
        <NavLink
          to="/clients"
          className={(navData) =>
           navData.isActive ? styles.navLinkActive  : styles.unselected
          }
        >
          Клиенты
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/database"
          className={(navData) =>
           navData.isActive ? styles.navLinkActive  : styles.unselected
          }
        >
          Тренировки
        </NavLink>
      </li>
      </ul>
      </nav>
  );
};

export default Navbar;
