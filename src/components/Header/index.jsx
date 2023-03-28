// Assets
import "./index.scss"
import logoPicture from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logoPicture} alt="logo" />
      </div>
      <ul className="header-links">
          <li>Explore</li>
          <li>Collections</li>
          <li>Creators</li>
          <li>Blog</li>
      </ul>
      <button className="connect-wallet">
        Connect Wallet
      </button>
    </header>
  )
}

export default Header