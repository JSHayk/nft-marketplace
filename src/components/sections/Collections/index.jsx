import { useSelector } from "react-redux"
import "./index.scss"

const Collections = () => {
  const data = useSelector(state => state.collections.data);
  return (
    <section className="collections space">
      <div className="wrapper">
        <h1 className="title">top collections</h1>
        <ul className="collections-list space">
          {
            data?.map(item => {
              const {id, name, floor, currency, price: {ETH, USD, top}, image_url,} = item;
              return (
                <li className="gray" key={id}>
                  <div className="info">
                    <div className="picture">
                      <img src={image_url} alt="collection" />
                    </div>
                    <div className="texts">
                      <h1>{name}</h1>
                      <p>Floor: {floor}{currency}</p>
                    </div>
                  </div>
                  <div className="pricing">
                    <p className="eth">{ETH}ETH</p>
                    <p className="usd">${USD}</p>
                    <p className="top">+{top}%</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="button-container">
          <button className="green-button">See all collection</button>
        </div>
      </div>
    </section>
  )
}

export default Collections