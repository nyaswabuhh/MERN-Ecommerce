import React from 'react'
import {RiDeleteBin3Line} from "react-icons/ri"

const CartContents = () => {

    const cartProducts = [
        {
            productId: 1,
            name: "T-Shirt", 
            size: "M",
            colour: "Red",
            quantity: 1,
            price: 1500,
            image: "https://picsum.photos/200?random=1",

        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            colour: "Blue",
            quantity: 1,
            price: 2000,
            image: "https://picsum.photos/200?random=2",

        },
        {
            productId: 3,
            name: "Short",
            size: "XL",
            colour: "Yellow",
            quantity: 1,
            price: 4100,
            image: "https://picsum.photos/200?random=3",

        },
        {
            productId: 4,
            name: "Sweater",
            size: "XXL",
            colour: "Brown",
            quantity: 1,
            price: 3500,
            image: "https://picsum.photos/200?random=4"

        }
    ]
    return (
        <div>
            {cartProducts.map((product, index) => (
                <div
                    key={index}
                    className='flex items-start justify-between py-4 border-b'
                >
                    <div className='flex items-start'>
                        <img src={product.image} alt={product.name}
                            className='w-24 h-24 object-cover mr-4 rounded' />
                        <div>
                            <h3>{product.name}</h3>
                            <p className='text-sm  text-gray-500'>
                                {product.size} | {product.colour}
                            </p>
                            <div>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Ksh{product.price.toLocaleString()}</p>
                        <RiDeleteBin3Line  className='h-6 w-6 mt-2 text-red-600'/>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CartContents
