import React, { Component } from 'react';
import {Link} from 'react-router-dom';



 class  About extends Component {
  render() {
    return(
      <div className='about'>
      <center>
      <h4 className='title_title'> All -About- S Z A </h4>
      </center>
      <center>
      <div className='gallery'>

      <img className='sza_5' src={require('../images/sza-awesome.gif')}/>

      <p className='dscp'>
      Raspy-voiced singer-songwriter known for EP's' like "S" and "Z".
      Her image and sense of style have landed her interviews with
      magazines like Vogue.
      </p>

      <img className='sza_2' src={require('../images/amazing-sza.jpg')}/>

      <p className='before'>
      Before Fame * <br></br>
      She was raised as a Muslim and was the victim of bullying
      following the September 11th attacks on the World Trade Center.
      </p>

      <img className='sza_3' src={require('../images/love-galore.jpg')}/>

      <p className='trivia'>
      Her stage name is taken from the Supreme Alphabet,
       where "Z" and "A" stand for "Zig-Zag" and "Allah," respectively.
       </p>


      <img className='sza_4' src={require('../images/orange.jpg')}/>

      <p className='family'>
      Her father was a CNN producer while her mother worked for AT&T.
       She has a half-sister.
       </p>

       <img className='sza_6' src={require('../images/sza.jpg')}/>

       <p className='info'>
       BIRTHDAY       <br></br>

       November 8, 1990       <br></br>

       BIRTHPLACE       <br></br>

       St. Louis, MO
       <br></br>
       AGE       <br></br>

       26 years old
       <br></br>
       BIRTH SIGN:       <br></br>

       Scorpio
        </p>



</div>

</center>


      </div>
    )
  }
}

export default About;
