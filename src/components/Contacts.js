import React, { Component } from 'react';
import {Link} from 'react-router-dom';



 class  Contacts extends Component {
  render() {
    return(

            <div className='contacts'>
            <center>
            <h4 className='contact_me'> W@NNA' C0NT@CT  ME?</h4>

<form>
<label for="MyName">Name:</label>
<br></br><input type="myName" id="myName" required="required"/><br></br>
 <label for="MyEmail">E-mail:</label>
 <br></br><input type="Email" id="myEmail" required="required"/><br></br>
 <label for="MyDate">Birthday:</label>
 <br></br><input className='birthdate' type="date" name="myDate" id="myDate"/><br></br>
 <label for="HearAbout">How Did You Hear About Me?:</label><br></br>
 <br></br><input type="HearAbout" id="HearAbout"/><br></br>
 <label for="mycomments">Comments:</label><br></br><textarea name="myComments" id="myComments" required="required" cols="20" rows="4">Enter your comments here</textarea>
<br></br>
<input className='submit_button' type='submit' value='$ubmit'></input>
</form>

<div className='symbols'>
            <a href="https://www.facebook.com/pg/sza/about/" target="new">
      <img className='f_symbol' src={require('../images/FB.png')} alt="random image"/></a>
      &nbsp;&nbsp;
      &nbsp;&nbsp;
      &nbsp;&nbsp;
      &nbsp;&nbsp;


           <a href="https://www.instagram.com/sza/?hl=en" target="new">
       <img className='i_symbol'  src={require('../images/insta.png')} alt="random image"/></a>
       &nbsp;&nbsp;
       &nbsp;&nbsp;
       &nbsp;&nbsp;
       &nbsp;&nbsp;


          <a href="https://www.etsy.com/market/sza" target="new">
          <img className='e_symbol' src={require('../images/etsy.png')} alt="random image"/></a>
          <h3 className='check_me'> Check Me 0UT on Facebook,Insta and Etsy!</h3>

</div>




            </center>
            </div>
          )
        }
      }


      export default Contacts;
