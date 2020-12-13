import React from 'react';
import { Link, navigate } from 'gatsby';
import Styles from 'styled-components';
import Logo from './Logo';

const NavStyles = Styles.nav`
  margin-bottom: 3rem;
  .logo{
    transform: translateY(-25%);
  }
  ul{
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    list-style: none;
    text-align: center;
    align-items: center;
    grid-gap: 2rem;
    margin-top: -6rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }

    &:hover {
      --rotate: 3deg;
    }
  }
  a{
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    &[aria-current="page"]{
      color: var(--red);
    }
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
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">Slice Master</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead</Link>
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
