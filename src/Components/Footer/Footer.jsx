import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_icon">
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card </li>
        <li>Media Center </li>
        <li>Invester Relation </li>
        <li>Jobs </li>
        <li>Term and Use </li>
        <li>Legal Notice</li>
        <li>Cookie Preference </li>
        <li> Contect us</li>
      </ul>
      <div className="copyright-text">@1997 - 2024 Netflix.Inc.</div>
    </div>
  )
}

export default Footer
