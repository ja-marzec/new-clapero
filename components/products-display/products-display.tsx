import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const ProductsDisplay = ({ products }: any) => {
  const [visible, setVisible] = useState<number>(0);
  const limit = 6;

  const ProductItem = ({ item }: any) => {
    console.log(item);

    return (
      <Link href={`/product-display/${item.id}`}>
        <div className="col-6 col-sm-4  product-item">
          <div className="">
            <Image
              src={item.images[0]}
              width={100}
              height={100}
              layout="responsive"
            />
          </div>

          <div className="d-flex justify-content-between mt-2">
            <p className="pl-2">{item.name}</p>
            <p className="pr-5">{item.metadata.priceFormatted} zł</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div
      style={{
        // backgroundColor: "lightgreen",
      }}
    >
      <div className="container">
        <div className="row pt-5 gx-5">
          {products.map((item: any) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
