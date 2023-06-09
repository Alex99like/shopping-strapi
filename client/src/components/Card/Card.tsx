import { Link } from "react-router-dom";

interface Image {
  data: {
    attributes: {
      url: string
    }
  }
}

export interface IProductItem {
  id: string;
  oldPrice: number
  quantity: number
  desc: string
  attributes: {
    isNew: boolean
    title: string
    price: number
    desc: string
    img: Image
    img2: Image
  }
}

export const Card = ({ item }: { item: IProductItem }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              'http://localhost:1337/api' + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              'http://localhost:1337/api' + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};
