import { Link, NavLink } from "react-router-dom";
import MyButton from "../button";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.links}>
      <li>
        <NavLink
          to="/clients"
          className={(isActive) =>
            styles.navLink + (!isActive ? ` ${styles.unselected}`  : "")
          }
        >
          Клиенты
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/database"
          className={(isActive) =>
            styles.navLink + (!isActive ? ` ${styles.unselected}` : "")
          }
        >
          Тренировки
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
