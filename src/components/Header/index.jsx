import { Link } from "react-scroll";
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
          <Link
                to="nfts"
                activeClass="active-nav"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                Explore
            </Link>
            <Link
                to="collections"
                activeClass="active-nav"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Collections
            </Link>
            <Link
                to="categories"
                activeClass="active-nav"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Categories
            </Link>
        </ul>
        <button className="connect-wallet green-button">
          Connect Wallet
        </button>
      </div>
    </header>
  )
}

export default Header