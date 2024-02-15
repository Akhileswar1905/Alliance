import { NavLink, Outlet, useResolvedPath } from "react-router-dom";
import styles from "./InnerNav.module.css";

const paths = [
  {
    path: "org",
    title: "Organization",
  },
  {
    path: "dev",
    title: "Developer",
  },
];

const InnerNav = () => {
  const nav = useResolvedPath();
  //   console.log(nav.pathname.split("/")[2]);
  const path = nav.pathname.split("/")[2];
  // if (n)
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {paths.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={path === item.path ? styles.active : ""}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default InnerNav;
