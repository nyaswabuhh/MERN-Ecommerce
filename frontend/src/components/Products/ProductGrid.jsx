import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product, index)=>(
            <Link key={index} to={`/product/${product._id}`} className='block'>
                <div className='bg-white rounded-lg p-4'>
                    <div className='h-96 w-full mb-4'>
                       <img 
                       src={product.images[0].url} 
                       alt={product.name}
                       className='w-full h-full rounded-lg object-cover' />  
                    </div>
                    <h3 className='text-sm mb-2'>{product.name}</h3>
                    <p className='tracking-tighter text-sm font-medium text-gray-500'>
                        Ksh {product.price.toLocaleString()}</p>
                </div>
            </Link>
        ))}
      
    </div>
  )
}

export default ProductGrid
