import React from 'react';
import { Link, navigate } from 'gatsby';
import Styles from 'styled-components';

const NavStyles = Styles.nav`
  margin: 0;
  padding: 0;
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    list-style: none;
    text-align: center;
    align-items: center;
  }
`;

function goToPizzasPage() {
  setTimeout(() => {
    console.log('Going to Pizzas Page');
    navigate('/pizzas', { replace: true }); // replace adds the page to the history
  }, 2000);
}

export default function Nav() {
  return (
    <NavStyles>
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
    </NavStyles>
  );
}
