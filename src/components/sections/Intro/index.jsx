import {Link} from "react-scroll"
// Assets
import "./index.scss"
import manPicture from "../../../assets/man.png"

const Intro = () => {
  return (
    <section className="intro space">
        <div className="wrapper">
          <div className="intro-info">
            <div className="intro-info-texts">
              <h1>NFT Marketplace</h1>
              <h1 className="upper">Collect<br /> rare digital artworks</h1>
            </div>
          <div className="intro-info-status">
            <div>
              <Link
                  to="nfts"
                  activeClass="active-nav"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}>
                <button className="green-button explore">Explore</button>
              </Link>
            </div>
            <div className="popularity">
                <div>
                  <h1 className="count">50K</h1>
                  <p className="type">Artwork</p>
                </div>
                <div>
                  <h1 className="count">35K</h1>
                  <p className="type">Auction</p>
                </div>
                <div>
                  <h1 className="count">25K+</h1>
                  <p className="type">Artist</p>
                </div>
            </div>
          </div>
          </div>
          <div className="intro-picture">
            <img src={manPicture} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Intro