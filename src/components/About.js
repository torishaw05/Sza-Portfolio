import React, { Component } from 'react';
import {Link} from 'react-router-dom';



 class  About extends Component {
  render() {
    return(
      <div className='about'>
      <center>
      <h4 className='title_title'> All -About- S Z A </h4>
      </center>
      <div className='gallery'>
      <img className='sza_5' src={require('../images/sza-awesome.gif')}/>

      <p className='dscp'>
      Raspy-voiced singer-songwriter known for EP's' like "S" and "Z".
      Her image and sense of style have landed her interviews with
      magazines like Vogue.
      </p>

      <img className='weneedflex' src={require('../images/amazing-sza.jpg')}/>

      <p className='before'>
      Before Fame * <br></br>
      She was raised as a Muslim and was the victim of bullying
      following the September 11th attacks on the World Trade Center.
      </p>

      <img className='weneeflex' src={require('../images/love-galore.jpg')}/>

      <p className='trivia'>
      Her stage name is taken from the Supreme Alphabet,
       where "Z" and "A" stand for "Zig-Zag" and "Allah," respectively.
       </p>


      <img className='sza_4' src={require('../images/orange.jpg')}/>
</div>




      </div>
    )
  }
}

export default About;
