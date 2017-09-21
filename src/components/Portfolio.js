import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class  Portfolio extends Component {
  render() {
    return(
      <center>
      <div className='Portfolio'>

      <h2 className='port'> S Z @'S &nbsp;&nbsp;&nbsp;&nbsp; P0RTFOLI0 </h2>
      <div className='port_gallery'>

      <img className='sza_a' src={require('../images/sza-lg.gif')}/>
<p className='description_port'> To Solana 'Love Galore'  is a song all about the range of emotions you go through when you realize that you're getting played by a guy.
 In the song she even admits some truths
about herself. She talks about having a sharp
tongue that's hard to come back from when she's
 angry. And how, yes she has dated girls before.
 She concludes the sit down by summarizing the song
  as a representation of how she got her feelings
   hurt but bounced back
  stronger and better than before.
      </p>

      <img className='sza_b' src={require('../images/sza_blue.jpg')}/>
<p className='sza_name'> SZA was born Solana Rowe.

She was born in St. Louis, Missouri, and grew up in Maplewood, New Jersey.
She attended a Muslim prep school and did not watch much current television or
 listen to much current music. She was a gymnast in high school - she had no plans of becoming a
 pro singer.
      </p>

      <img className='sza_e' src={require('../images/heart-sza.gif')}/>


      <a href="https://www.facebook.com/pg/sza/about/" target="new">
<img className='f_symbol' src={require('../images/FB.png')} alt="random image"/></a>

     <a href="https://www.instagram.com/sza/?hl=en" target="new">
 <img className='i_symbol'  src={require('../images/insta.png')} alt="random image"/></a>

    <a href="https://www.etsy.com/market/sza" target="new">
    <img className='e_symbol' src={require('../images/etsy.png')} alt="random image"/></a>


      <p className='quote'>
    "I feel good being a black woman;<br></br> I've always felt good. But to be a black woman right now,
  it definitely feels like I have back up," she told Complex in 2016. "That's a good feeling. I've never
  felt like that before." <br></br>-SZA
      </p>

      <img className='sza_c' src={require('../images/sza_tommy.jpg')}/>

      <p className='before'>
      She wanted to be a SeaWorld trainer – and still wants to work in a zoo<br></br>

  Before she came around to the idea that she could make a career out of singing
  – the only people to hear her singing voice before TDE president Punch were her mom
  , boyfriend and best friend – SZA was studying marine biology.“I definitely still break
  into a good handstand randomly”, and so, naturally, at one point she wanted to be a SeaWorld trainer.
      </p>

      <img className='sza_d' src={require('../images/bread.gif')}/>

      <p className='bread'>
    “The last job that I quit – I actually got fired. I was bartending and I asked to take off. It was for CMJ. I had a show, but I lied and said I had to babysit for my sister,” SZA laughs. “One of the girls I used to bartend with texted me recently like, ‘What the f*ck happened to you?’ I was like, ‘Uhhh, I sing a little bit...’” <br></br>-SZA
      </p>

      <img className='sza_f' src={require('../images/homes-sza.gif')}/>

      <p className='albums_'>Albums</p>
  <img className='albums' src={require('../images/albums.png')}/>

      <img className='sza_g' src={require('../images/idk-sza.gif')}/>

      <p className='sza_more'>
      After releasing three different EPs in the past few years, R&B singer-songwriter SZA finally released her debut studio album on June 9th of this year. The album “Ctrl” (including features from Travis Scott, Kendrick Lamar, and more) allows you to truly connect to the lyrics and get into your emotions while simultaneously providing the perfect beats to dance your heart out to
      </p>



      <img className='sza_h' src={require('../images/laugh-sza.gif')}/>



</div>
      </div>
          </center>
    )
  }
}



export default Portfolio;
