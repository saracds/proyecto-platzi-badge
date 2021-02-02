import React from 'react';
import Navbar from './Navbar';

export default function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar/>
      {props.children}
    </React.Fragment>
  );
}


