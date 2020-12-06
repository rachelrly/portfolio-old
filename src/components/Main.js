import React from 'react';
import Nav from './Nav';
import HeaderMain from './HeaderMain';
import RightMain from './RightMain';
import '../css/Main.css';

function Main(){

return (
   <div className='main-wrapper'>
   <HeaderMain />
   {/* <Nav /> */}
   <RightMain />
   </div>
)}

export default Main;