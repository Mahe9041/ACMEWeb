import React from "react";
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <nav className="navv">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#clubs"> Clubs</a>
          </li>
          <li>
            <Link to="/events">Events Galary</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </nav>
    )
}