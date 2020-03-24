import React from 'react';
import { Link } from 'react-dom';
import img from './components/images/politico1.png';


function Header() {
  return (
    <header>
    <div class="header">
   <img  src={img} alt="logo"></img>
</div>
<div class="header">
      <h1>Welcome to politico Application</h1>
      </div>
    </header>
  );
}

export default Header;