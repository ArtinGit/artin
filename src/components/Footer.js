import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

        <div>
        <form action='/'>
  <label for="name">Name:</label> {'\n'}
  <input type="text" id="name" name="user_name" /> {'\n'}
  <label for="mail">E-mail:</label> {'\n'}
  <input type="email" id="mail" name="user_mail" /> {'\n'}
  <label for="msg">Message:</label> {'\n'}
  <textarea id="msg" name="user_message"></textarea> {'\n'}
  <button type="submit">Send your message</button> {'\n'}
</form>
        </div>



            <div className='container'>
                <div className='col col-1'>
                    <h1>Artin<span className='primary'>C</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='/'><FaFacebook className='icon'/></a>
                        <a href='/'><FaTwitter className='icon'/></a>
                        <a href='/'><FaLinkedin className='icon'/></a>
                        <a href='/'><FaGithub className='icon'/></a>
                </div>

                
            </div>
            
        </div>
        
    )
}

export default Footer
