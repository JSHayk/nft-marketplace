// Assets
import applePicture from "../../../assets/apple.svg";
import androidPicture from "../../../assets/android.svg";
import "./index.scss"

const Download = () => {
  return (
    <section className="download black space">
        <div className="wrapper">
        <h1>Download Qeeb app to track your NFT portfolio and discover more</h1>
        <div className="download-buttons">
          <div className="app-store gray">
            <img src={applePicture} alt="apple" />
            <p>App Store</p>
          </div>
          <div className="google-play green">
            <img src={androidPicture} alt="android" />
            <p>Google Play</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Download