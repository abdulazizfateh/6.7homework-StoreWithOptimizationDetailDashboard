import React, { useEffect, useState } from "react";
import { api } from "../../api"
// Product Cards Component
import ProductCards from '../../components/productCards/ProductCards';
// Cards Per Load
export const cardsPerLoad = 20;

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastProduct, setLastProduct] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/products?limit=${cardsPerLoad}&skip=${count}`)
      .then((response) => {
        setProductsData((prev) => {
          const allProducts = { ...response.data, products: [...(prev.products || []), ...response.data.products] };
          if (allProducts.products.length >= productsData.total) {
            setLastProduct(true);
          }
          return allProducts;
        })
      }).catch((error) => {
        alert(error);
      }).finally(() => {
        setLoading(false);
      })
  }, [count])
  return (
    <>
      <ProductCards productsData={productsData} count={count} setCount={setCount} loading={loading} lastProduct={lastProduct} />
    </>
  )
}

export default React.memo(Home);