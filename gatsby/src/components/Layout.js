import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
