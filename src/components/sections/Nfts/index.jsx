import { useSelector } from "react-redux"
import "./index.scss"

const Nfts = () => {
    const data = useSelector(state => state.nfts.data);
  return (
    <section className="nfts space">
        <div className="wrapper">
            <h1 className="title">Tranding nfts</h1>
            <ul className="nfts-list space">
                {
                    data?.map(item => {
                        const {id, name, code, image_url, currency, price, highest_bid} = item;
                        return (
                            <li key={id}>
                                <img src={image_url} alt="pic" />
                                <div className="info">
                                    <div className="texts">
                                        <h1>{name}</h1>
                                        <p>{code}</p>
                                    </div>
                                    <div className="pricing gray">
                                        <div className="price">
                                            <h1>Price</h1>
                                            <p>00.3 ETH</p>
                                        </div>
                                        <div className="highest-bid">
                                            <h1>Highest Bid</h1>
                                            <p>0.07 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Nfts