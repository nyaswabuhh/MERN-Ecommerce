import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'sonner';


const selectedProduct = {
    name: "Stylish Jumper",
    price: 1200,
    originalPrice: 1500,
    description: "the best stylish jumper unisex",
    brand: "Nike",
    material: "Genuine Leather",
    sizes: ["S", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Orange"],
    images: [{
        url: "https://picsum.photos/300/300?random=9",
        altText: "stylish jumper 1",
    },
    {
        url: "https://picsum.photos/300/300?random=8",
        altText: "stylish jumper 2",

    }]
}

const ProductDetails = () => {
    const [mainImage, setMainImage]= useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(()=>{
        if(selectedProduct?.images?.length >0){
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct]);

    const handleQuantityChange =(action)=>{
        if(action==="plus")setQuantity((prev)=>prev+1);
        if(action==="minus" && quantity>1) setQuantity((prev)=>prev-1);

    };
    const handleAddToCart = () =>{
        if(!selectedSize || !selectedColor){
            toast.error("Please select size and color before adding to cart.", {
                duration:1000,
            });
            return;
        }
        setIsButtonDisabled(true);

        setTimeout(()=> {
            toast.success("Product added to cart!", {
                duration:1000,
            });
            setIsButtonDisabled(false);
        },500)
    }; 

    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>

                <div className='flex flex-col md:flex-row'>
                    {/* left thrumbnails */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (

                            <img key={index} 
                            src={image.url} 
                            alt={image.altText || `Thumbanail${index}`}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                                ${mainImage===image.url ? "border-black" : "border-gray-300"}`}
                            onClick={()=>setMainImage(image.url)}
                            />
                        ))}

                    </div>
                    {/* main image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={mainImage} alt="Main Product"
                                className='w-full h-auto object-cover rounded-lg' />

                        </div>

                    </div>
                    {/* mobile thumbnail */}
                    <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>

                        {selectedProduct.images.map((image, index) => (

                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage===image.url ? "border-black" : "border-gray-300"}`} 
                                onClick={()=>setMainImage(image.url)}/>
                        ))}

                    </div>
                    {/* right side details */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        <p className='text-lg text-gray-600 mb-1 line-through'>
                            {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                        </p>
                        <p className='text-xl mb-2 text-gray-500'>
                            Ksh {selectedProduct.price.toLocaleString()}
                        </p>
                        <p className='text-gray-600 mb-6'>
                            {selectedProduct.description}
                        </p>
                        <div className='mb-4'>
                            <p className='text-gray-600 '> Color: </p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color)=>(
                                    <button
                                    key={color}
                                    onClick={()=>setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border 
                                        ${selectedColor===color ? "border-4 border-black" : "border-gray300"}`}
                                    style={{
                                        backgroundColor: color.toLocaleLowerCase(),
                                        filter:"brightness(0.5)",
                                    }}
                                    
                                    >

                                    </button>
                                ))}

                            </div>
                        </div>
                        {/* sizes */}
                        <div className='mb-4'>
                            <p className='text-gray-600'> Size: </p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size)=>(
                                    <button 
                                    key={size} 
                                    onClick={()=>setSelectedSize(size)}
                                    className= {`py-2 px-4 rounded border 
                                        ${selectedSize===size ? "bg-black text-white" : ""}`}>
                                        {size}
                                    </button>
                                ))}

                            </div>

                        </div>
                        {/* quantity */}
                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity</p>
                            <div className='flx items-center space-x-4 mt-2'>
                                <button 
                                    onClick={()=>handleQuantityChange("minus")}
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                    -
                                </button>
                                <span className='text-lg'>{quantity}</span>
                                <button 
                                    onClick={()=>handleQuantityChange("plus") }
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                    +
                                </button>

                            </div>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`bg-black text-white w-full rounded  mb-4 px-6 py-2 ${isButtonDisabled 
                                ? "cursor-not-allowed opacity-50" 
                                : "hover:bg-gray-900"
                            }`}
                            
                            >
                                {isButtonDisabled ? "Adding..." :"ADD TO CART"} </button>
                        <div className='text-gray-700 mt-10'>
                            <h3 className='text-xl font-bold mb-4'>Characteristics</h3>
                            <table className='text-sm text-gray-600'>
                                <tbody>
                                    <tr className='border'>
                                        <td className='py-1 border'>Brand:  </td>
                                        <td className='py-1'>{selectedProduct.brand}</td>
                                    </tr>
                                     <tr className='border'>
                                        <td className='py-1 border'>Material:  </td>
                                        <td className='py-1'>{selectedProduct.material}</td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails
