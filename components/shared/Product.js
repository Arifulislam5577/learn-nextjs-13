import { BsCart3 } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
const Product = ({ id, name, price, img, ratings, ratingsCount }) => {
  const rating = (ratings) => {
    let arr = [];
    for (let i = 0; i < ratings; i++) {
      arr.push(<AiTwotoneStar color="#f97316" size="15" />);
    }
    return arr;
  };
  return (
    <div className="col-span-1 bg-white p-4  shadow relative overflow-hidden">
      <div className="product-img">
        <Link href={`/product/${id}`}>
          <Image src={img} alt={name} height="200" width="300" />
        </Link>
      </div>
      <div className="details mt-3">
        <h2 className="md:text-sm text-xs">{name}</h2>
        <div className="md:text-sm text-xs flex items-center gap-3 my-2">
          <h2 className="md:text-sm text-xs flex items-center">
            {[...rating(ratings)].map((icon, i) => (
              <span key={i}>{icon}</span>
            ))}
          </h2>
          <h2>({ratingsCount})</h2>
        </div>
        <h3 className="text-base mt-2">${price}</h3>
      </div>
      <button
        className={`absolute block bottom-0 right-0  bg-slate-900
        p-3 hover:bg-orange-500 transition-all duration-300`}
      >
        <BsCart3 color="white" size="15" />
      </button>
    </div>
  );
};

export default Product;
