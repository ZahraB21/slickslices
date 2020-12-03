import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
