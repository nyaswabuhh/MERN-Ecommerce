import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar';
import { useRef } from 'react';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    };
    const handleClickOutside = (e) => {
        //close sidebar if clicked outside
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        //add event listener for click
        document.addEventListener('mousedown', handleClickOutside);
        //clean event listener
        document.removeEventListener('mousedown', handleClickOutside);

    });

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [

                {
                    _id: 1,
                    name: "Product 1",
                    price: 1500,
                    images: [{ url: "https://picsum.photos/300/300?random=13" }],

                },
                {
                    _id: 2,
                    name: "Product 2",
                    price: 1000,
                    images: [{ url: "https://picsum.photos/300/300?random=14" }],

                },
                {
                    _id: 3,
                    name: "Product 3",
                    price: 1500,
                    images: [{ url: "https://picsum.photos/300/300?random=23" }],

                },
                {
                    _id: 4,
                    name: "Product 4",
                    price: 2300,
                    images: [{ url: "https://picsum.photos/300/300?random=15" }],

                },
                {
                    _id: 5,
                    name: "Product 5",
                    price: 2000,
                    images: [{ url: "https://picsum.photos/300/300?random=16" }],

                },
                {
                    _id: 6,
                    name: "Product 6",
                    price: 3000,
                    images: [{ url: "https://picsum.photos/300/300?random=19" }],

                },
                {
                    _id: 7,
                    name: "Product 7",
                    price: 1500,
                    images: [{ url: "https://picsum.photos/300/300?random=21" }],

                },
                {
                    _id: 8,
                    name: "Product 8",
                    price: 5500,
                    images: [{ url: "https://picsum.photos/300/300?random=25" }],

                },
            ];
            setProducts(fetchedProducts);

        }, 1000);

    }, [])
    return (
        <div className='flex flex-col lg:flex-row'>
            {/* mobile filter button */}
            <button
                onClick={toggleSidebar}
                className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2' />
                Filters
            </button>
            {/* right side bar */}
            <div ref={sidebarRef}
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform
                duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSidebar />
            </div>
            <div className='flex-grow p-4'> 
                <h2 className='text-2xl uppercase mb-4 '>
                    All Collections
                    </h2>
                {/* sort options */}
                <SortOptions />
                
                {/* products grid */}

                <ProductGrid products={products} />
            </div>

        </div>
    )
}

export default CollectionPage
