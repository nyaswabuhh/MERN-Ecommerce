import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';


const NewArrivals = () => {
  const scrollRef=useRef(null);
  const [isDragging, setIsDragging]=useState(false);
  const [startX, setStartX]=useState(0);
  const [scrollLeft, setScrollLeft]= useState(false);
  const [canscrollLeft, setCanScrollLeft]= useState(false);
  const[canscrollRight, setCanScrollRight]= useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jumper",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/300/300?random=1",
          altText: "stylish"
        }
      ]
    },
    {
      _id: "2",
      name: "V Neck Tshirt",
      price: 1500,
      images: [
        {
          url: "https://picsum.photos/300/300?random=2",
          altText: "vneck"
        }
      ]
    },
    {
      _id: "3",
      name: "Jacket",
      price: 3300,
      images: [
        {
          url: "https://picsum.photos/300/300?random=3",
          altText: "stylish jacket"
        }
      ]
    },
    {
      _id: "4",
      name: "Polo Tshirt",
      price: 3100,
      images: [
        {
          url: "https://picsum.photos/300/300?random=4",
          altText: "polo"
        }
      ]
    },
    {
      _id: "5",
      name: "Trouser",
      price: 3600,
      images: [
        {
          url: "https://picsum.photos/300/300?random=5",
          altText: "stylish trouser"
        }
      ]
    },
    {
      _id: "6",
      name: "Summer Jeans",
      price: 2400,
      images: [
        {
          url: "https://picsum.photos/300/300?random=6",
          altText: "stylish jeans"
        }
      ]
    },
    {
      _id: "7",
      name: "Khaki Pants",
      price: 1900,
      images: [
        {
          url: "https://picsum.photos/300/300?random=7",
          altText: "Khaki"
        }
      ]
    },
    {
      _id: "8",
      name: "Blouse",
      price: 1700,
      images: [
        {
          url: "https://picsum.photos/300/300?random=8",
          altText: "Blouse"
        }
      ]
    }
  ];
  const handleMouseDown =(e)=>{
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)

  };

  const handleMouseMove = (e) =>{
      if(!isDragging) return;
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = x -startX;
      scrollRef.current.scrollLeft=scrollLeft-walk;
    

  };

  const handleMouseUpOrLeave = ()=>{
    setIsDragging(false)


  };

  const scroll = (direction)=>{
    const scrollAmount=direction==="left" ? -300 : 300;
    scrollRef.current.scrollBy({left: scrollAmount, behaviour:"smooth"});

  }
 //update scroll buttons

  const updateScrollButtons=()=>{
    const container=scrollRef.current;

    if(container){
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);

    }


    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft,
  })
  }

  useEffect(()=>{
    const container=scrollRef.current;
    if(container){
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return ()=> container.removeEventListener("scroll",updateScrollButtons);
    }
  }, []);

  
  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className='container mx-auto text-center mb-10 relative'>
        <h2 className='text-xl font-bold mb-4'>Explore New Arrivals</h2>
        <p className='text-lg text-gray-600 mb-8'>Discover the latest and exclusive styles tailored just for you to keep you wardrobe fresh & stylish</p>
        {/* scroll buttons */}
        <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
          <button onClick={()=>scroll("left")}
          disabled={!canscrollLeft}
          className={`p-2 rounded border${canscrollLeft ? ' bg-white text-black': 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            <FiChevronLeft className='text-2xl' />
          </button>
          <button 
          onClick={()=>scroll("right")}
          disabled={!canscrollRight}
          className={`p-2 rounded border${canscrollRight ? ' bg-white text-black': 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            <FiChevronRight className='text-2xl' />
          </button> 
        </div>
        </div>
        {/* scrollable content */}
        <div ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
          {newArrivals.map((product) => (
            <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
              <img src={product.images[0]?.url} 
              alt={product.images[0]?.altText || product.name}
              draggable="false" 
              className='w-full h-[300px] object-cover rounded-lg'/>
              <div className='absolute bottom-0 left-0 right-0 bg-gray-500/30 backdrop-blur-md text-white 
              p-4 rounded-b-lg'>
                <Link to={`/product/${product._id}`} className='block' >
                <h4 className='font-medium'>{product.name}</h4>
                <p className='mt-1'>Ksh{product.price.toLocaleString()}</p>
                
                </Link>


              </div>
            </div>
          ))}

        </div>
      


    </section>
  )
}

export default NewArrivals
