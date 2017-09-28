import React, { Component } from 'react';
import {Link} from 'react-router-dom';



 class  References extends Component {
  render() {
    return(

            <div className='home'>
            <center>
            <h2 className='ref'> References List </h2>

            <div className='contact1'>
            <h2> Shannon Middleton </h2>
            <h3> Position : Manager </h3>
            <h2 className='phone'>Phone Number : (666)-666-6666</h2>
            <h3>Email : shannon@gmail.com </h3></div>

            <div className='contact2'>
            <h2> Mary Joe </h2>
            <h3> Position : Recent Employer </h3>
            <h2 className='phone'>Phone Number : (666)-666-6666</h2>
            <h3>Email : mary@gmail.com </h3></div>

            <div className='contact3'>
            <h2> Joseph Gray </h2>
            <h3> Position : Recent Employer </h3>
            <h2 className='phone'>Phone Number : (666)-666-6666</h2>
            <h3>Email : joseph@gmail.com </h3></div>


</center>
            </div>
          )
        }
      }


      export default References;
