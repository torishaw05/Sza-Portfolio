import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class  Home extends Component {
  render() {
    return(
      <div className='home'>
      <center>
      <h4 className='volume'> Turn Up Your Volume! </h4>
      <img className='sza_1' src={require('../images/szy.gif')}/>

      </center>
      </div>
    )
  }
}


export default Home;
