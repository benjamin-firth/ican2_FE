import React from 'react';
import { useParams} from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './NavButton.scss';

const NavButton = ({ nav, name }) => {
  // let params = useParams();
  // console.log(params);
  // console.log(nav.split('/')[1]);
  // console.log(window.location.pathname);

  const checkSelected = () => {
    if (window.location.pathname === nav) {
      return 'selected';
    } else {
      return ''
    }
  }

  return (
    <Link to={nav}>
      <button className={checkSelected()}>
        {name}
      </button>
    </Link>
  );
}

export default NavButton;
