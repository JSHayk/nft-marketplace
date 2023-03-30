// Assets
import logoPicture from "../../assets/logo.svg"
import telegramPicture from "../../assets/telegram.svg"
// Links
import instagramPicture from "../../assets/instagram.svg"
import linkedinPicture from "../../assets/linkedin.svg"
import youtubePicture from "../../assets/youtube.svg"
import tiktokPicture from "../../assets/tiktok.svg"

import "./index.scss"

const Footer = () => {
  return (
    <footer className="footer space">
      <div className="wrapper">
        <div>
          <div className="logo">
            <img src={logoPicture} alt="logo" />
            <p>Qeeb</p>
          </div>
          <div className="lists">
            <div className="quick-links">
              <h1>Quick Links</h1>
              <ul>
                <li>About us</li>
                <li>Services</li>
                <li>API</li>
                <li>Become a partner</li>
                <li>Branding</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="marketplace">
              <h1>Marketplace</h1>
              <ul>
                <li>Explore</li>
                <li>How it works</li>
                <li>Insights</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
          <div className="newsletter green">
            <h1>Sign Up to Receive Updates Services</h1>
            <div className="info">
              <p>nftmarketplace@gmail.com</p>
              <img src={telegramPicture} alt="telegram" />
            </div>
          </div>
        </div>
        <div className="space">
          <p className="rights">Qeeb 2022. All Rights Reserved</p>
          <p className="terms-conditions">Terms & Conditions Privacy</p>
          <div className="links">
            <img src={instagramPicture} alt="instagram" />
            <img src={linkedinPicture} alt="linkedin" />
            <img src={tiktokPicture} alt="tiktok" />
            <img src={youtubePicture} alt="youtube" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer