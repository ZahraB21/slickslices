import React from 'react';
import { Link, navigate } from 'gatsby';

function goToPizzasPage() {
  setTimeout(() => {
    console.log('Going to Pizzas Page');
    navigate('/pizzas', { replace: true }); // replace adds the page to the history
  }, 2000);
}

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
        <li>
          <button type="button" onClick={goToPizzasPage}>
            Pizzas
          </button>
        </li>
      </ul>
    </nav>
  );
}
