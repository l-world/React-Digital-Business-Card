import React from 'react'
import twitterIcon from "../images/twitter.png"
import facebookIcon from "../images/facebook.png"
import insIcon from "../images/ins.png"
import githupIcon from "../images/githup.png"
import linkedinIcon from "../images/linkedin.png"

export default function Footer() {
  return (
    <footer>
      <ul className="footer--links">
          <li><a href="https://www.twitter.com"><img src={twitterIcon} alt="twitter"/></a></li>
          <li><a href="https://www.facebook.com"><img src={facebookIcon} alt="facebook" /></a></li>
          <li><a href="https://www.instagram.com"><img src={insIcon} alt="instagram" /></a></li>
          <li><a href="https://github.com"><img src={githupIcon} alt="github" /></a></li>
          <li><a href="https://www.linkedin.com"><img src={linkedinIcon} alt="linkedin" /></a></li>
      </ul>
    </footer>
  )
}
