import React from 'react';
import styles from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styles.div`
  padding: 2rem;
  background: white;
`;

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav />
        {children}
      </ContentStyles>
      <Footer />
    </>
  );
}
