import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cardList } from "../components/About/CardList.js";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate()
  
    useEffect(() => {
      const pro = cardList.find((b) => b.id === id);
      setProduct(pro);
    }, [id]);
  return (
    <div className="product-details pt-[15rem] flex flex-col w-full min-h-screen">
        <div className="flex">
            <div className='w-[50%] h-[500px]'>
                <img src={product?.pro_img} alt="product_image" className="flex justify-center items-center object-cover w-full h-full" />
            </div>
            <div className="ml-4">
                <div className="title_of_pro font-semibold text-[2rem]">
                    {product?.title}
                </div>
                <div className="desc_of_pro text-[1.5rem] w-[80%]">
                    {product?.description}
                </div>
                <div className="flex mt-5">
                    <div className="font-semibold text-[1.5rem]">Quantity -</div>
                    <div className="text-[1.5rem] ml-4">{product?.quantity}</div>
                </div>
                <div className="flex mt-2">
                    <div className="font-semibold text-[1.5rem]">Price -</div>
                    <div className="text-[1.5rem] ml-4">{product?.price}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails