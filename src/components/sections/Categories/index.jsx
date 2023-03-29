import { useSelector } from 'react-redux'
// Assets
import "./index.scss"

const Categories = () => {
  const data = useSelector(state => state.categories.data);

  return (
    <section className="categories space">
        <div className='wrapper'>
          <h1 className="title">popular categories</h1>
          <ul className="categories-list space">
            {
              data?.map(item => {
                const {id, name, image_url} = item;
                return (
                  <li className='gray' key={id}>
                    <img src={image_url} alt="games" />
                    <p>{name}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </section>
  )
}

export default Categories