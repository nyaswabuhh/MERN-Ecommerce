import React, { useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import GenderCollections from "../components/Products/GenderCollections";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollections from "../components/Products/FeaturedCollections";
import FeaturesSection from "../components/Products/FeaturesSection";
import { fetchProductsByFilters } from "../../src/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    //fetch products by collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    //fetch best seller product

    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        console.log("Bestseller response:", response.data);
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);
  return (
    <div>
      <Hero />
      <GenderCollections />
      <NewArrivals />
      {/* Best Sellers */}
      <h2 className="text-2xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading bestseller product...</p>
      )}

      <div className="container mx-auto">
        <h2 className="text-center text-3xl mt4 font-bold">
          Top Wears For Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />

        <FeaturedCollections />

        <FeaturesSection />
      </div>
    </div>
  );
};

export default Home;
