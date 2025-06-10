import React from 'react'
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
    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>

                <div className='flex flex-col md:flex-row'>
                    {/* left thrumbnails */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (

                            <img key={index} src={image.url} alt={image.altText || `Thumbanail${index}`}
                                className='w-20 h-20 object-cover rounded-lg cursor-pointer border' />
                        ))}

                    </div>
                    {/* main image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={selectedProduct.images[0]?.url} alt="Main Product"
                                className='w-full h-auto object-cover rounded-lg' />

                        </div>

                    </div>
                    {/* mobile thumbnail */}
                    <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>

                        {selectedProduct.images.map((image, index) => (

                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbanail${index}`}
                                className='w-20 h-20 object-cover rounded-lg cursor-pointer border' />
                        ))};

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
                                    className='w-8 h-8 rounded-full border'
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
                                    <button key={size} className='py-2 px-4 rounded border'>
                                        {size}
                                    </button>
                                ))}

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails
