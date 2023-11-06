import { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";
import { Data } from "@/utils/productData";

const getProductBySortBy = (sortby: string) => {
  return Data.filter((product) => product.sortby === sortby);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductBySortBy(params.slug);

  return (
    <>
      <div className="flex mt-6 flex-wrap px-6 justify-around lg:grid-cols-3 grid-col-1">
        {result.length > 0 ? (
          result.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image as StaticImageData}
              category={product.category}
              id={product.id}
              sale={product.sale}
            />
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </>
  );
}
