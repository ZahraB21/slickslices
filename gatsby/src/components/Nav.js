import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slice Master</Link>
        </li>
        <li>
          <Link to="/order">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
