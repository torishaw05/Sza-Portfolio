import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Sound from 'react-sound';





class  BaseLayout extends Component {
  render() {
    return(
      <div className='App'>
      <div className='body'>
      <h1>
      <center>
       S  Z  A
       </center>
       </h1>
      <nav>
      <NavLink className='text_nav' to='/'> H0ME </NavLink>
      // <NavLink className='text_nav' to='/About'> AB0UT </NavLink>
      <NavLink className='text_nav' to='/Portfolio'> P0RTF0LI0 </NavLink>
      </nav>

      </div>
      {this.props.children}
      </div>
    )
  }
}



export default BaseLayout;