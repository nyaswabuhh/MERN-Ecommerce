import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollections from '../components/Products/GenderCollections'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollections from '../components/Products/FeaturedCollections'
import FeaturesSection from '../components/Products/FeaturesSection'

const placeholderProducts=[
  {
        _id: 1,
        name:"Product 1",
        price: 1500,
        images:[{url: "https://picsum.photos/300/300?random=13"}],

    },
      {
        _id: 2,
        name:"Product 2",
        price: 1000,
        images:[{url: "https://picsum.photos/300/300?random=14"}],

    },
      {
        _id: 3,
        name:"Product 3",
        price: 1500,
        images:[{url: "https://picsum.photos/300/300?random=23"}],

    },
      {
        _id: 4,
        name:"Product 4",
        price: 2300,
        images:[{url: "https://picsum.photos/300/300?random=15"}],

    },
    {
        _id: 5,
        name:"Product 5",
        price: 2000,
        images:[{url: "https://picsum.photos/300/300?random=16"}],

    },
      {
        _id: 6,
        name:"Product 6",
        price: 3000,
        images:[{url: "https://picsum.photos/300/300?random=19"}],

    },
      {
        _id: 7,
        name:"Product 7",
        price: 1500,
        images:[{url: "https://picsum.photos/300/300?random=21"}],

    },
      {
        _id: 8,
        name:"Product 8",
        price: 5500,
        images:[{url: "https://picsum.photos/300/300?random=25"}],

    },

]

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollections />
      <NewArrivals />
      {/* Best Sellers */}
      <h2 className='text-2xl text-center font-bold mb-4'>
        Best Seller</h2>
      <ProductDetails />

      <div className='container mx-auto'>
        <h2 className='text-center text-3xl mt4 font-bold'>
            Top Wears For Women
        </h2>
        <ProductGrid products={placeholderProducts} />

        <FeaturedCollections />

        <FeaturesSection />

      </div>
    </div>
  )
}

export default Home
