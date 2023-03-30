// Assets
import "./index.scss"
import logoPicture from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={logoPicture} alt="logo" />
          <p>Qeeb</p>
        </div>
        <ul className="header-links">
            <li>Explore</li>
            <li>Collections</li>
            <li>Creators</li>
            <li>Blog</li>
        </ul>
        <button className="connect-wallet green-button">
          Connect Wallet
        </button>
      </div>
    </header>
  )
}

export default Header