import Head from "next/head";
import Image from "next/image";

const ProductDetails = (props) => {
  const { name, img, seller, category, stock, price, id } = props?.product;

  return (
    <section className="py-5">
      <Head>
        <title>{name}</title>
      </Head>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="col-span-1">
            <Image src={img} alt={name} height="600" width="800" />
          </div>
          <div className="col-span-1">
            <p className="text-xs mb-2 bg-orange-500 inline-block py-1 px-3 text-white">
              {seller}
            </p>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm text-gray-400 my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore
              quos consequuntur saepe, consectetur corrupti velit distinctio
              quaerat dignissimos rerum minus a hic minima! Id maiores illo quae
              accusamus adipisci!
            </p>

            <p className="text-sm mb-2">
              Category: <span className="text-orange-500">{category}</span>
            </p>
            <p className="text-sm mb-2">
              Stock:{" "}
              <span className="text-orange-500">
                {stock === 0 ? "Out of Stock" : "In Stock"}
              </span>
            </p>

            <p className="text-sm mb-2">
              Price: <span className="text-orange-500 font-bold">${price}</span>
            </p>

            <div className="my-3 flex items-center gap-5">
              <button className="uppercase text-sm py-3 px-5 bg-slate-900 text-white">
                add to cart
              </button>
              <button className="uppercase text-sm py-3 px-5 border border-gray-500 text-slate-900">
                add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/products/${context.params.id}`
  );
  const product = await response.json();
  return {
    props: { product },
  };
}

export default ProductDetails;
