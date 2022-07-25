import { Link } from 'react-router-dom';
import { nav_link_props } from '../../data/NavLink';

import styles from './styles.module.scss';

export const getNavLink = () => {
   const nav_link = props => (
      <NavLink key={props.id} name={props.name} path={props.path} />
   );
   return nav_link_props.map(nav_link);
};

const NavLink = ({ name, path }) => {
   return (
      <Link to={`/${path}`}>
         <button className={styles.nav_link}>{name}</button>
      </Link>
   );
};
