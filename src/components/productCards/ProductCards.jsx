import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Loading Products Component
import LoadingProducts from "../loadingProducts/LoadingProducts";
// Cards Per Load
import { cardsPerLoad } from "../../pages/home/Home";
// Icons
import { IoAdd } from "react-icons/io5";

const ProductCards = ({ productsData, count, setCount, loading, lastProduct }) => {
    const handleSeeMore = () => {
        setCount((count + cardsPerLoad));
    }
    const navigate = useNavigate();

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='section_products text-[#fff]'>
            <div className="container mx-auto">
                {
                    loading && <LoadingProducts />
                }
                <div className='products_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5'>
                    {
                        productsData?.products?.map((product) => (
                            <div key={product.id} className='card overflow-hidden rounded-[8px] border border-[#3d444d] group'>
                                <div className='card_image flex items-center justify-center bg-[#151d24] overflow-hidden'>
                                    <img onClick={() => navigate(`/product/${product.id}`)} loading="lazy" className='object-contain h-[160px] sm:h-[220px] md:h-[289px] group-hover:scale-[1.03] duration-500' src={product.images[0]} alt={product.title} />
                                </div>
                                <div className='card_body p-[8px] sm:pt-[10px] sm:p-[18px]'>
                                    <h4 className='card_title text-[11px] sm:text-[15px] font-medium h-[18px] sm:h-[26px] mb-[4px] line-clamp-1'>{product.title}</h4>
                                    <p className='line-clamp-2 text-[10px] sm:text-[13px] min-h-[24px] sm:min-h-[40px] text-[#9198a1] mb-[16px]'>{product.description}</p>
                                    <div className='flex gap-[8px] items-center justify-between'>
                                        <p className='text-[hotpink] text-[12px] sm:text-[15px]'>${product.price}</p>
                                        <button className='size-[34px] cursor-pointer rounded-[6px] flex items-center justify-center border border-[#3d444d]'>
                                            <IoAdd />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {!lastProduct && showButton && (
                    <div className="flex items-center justify-center mb-[30px] sm:mb-[45px] lg:mb-[60px]">
                        <button
                            onClick={handleSeeMore}
                            className='cursor-pointer capitalize text-[11px] sm:text-[14px] font-medium px-[12px] py-[4px] sm:px-[16px] sm:py-[5px] text-[#f0f6fc] border border-[#3f934b] rounded-[6px] bg-[#238636]'>
                            See more
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
export default React.memo(ProductCards);