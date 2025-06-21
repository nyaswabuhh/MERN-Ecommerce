import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https//picsum.photos.150?random=1",
      },
      {
        url: "https//picsum.photos.150?random=1",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semiboldmb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* description */}
        <div className="mb-6">
          <label className="block font-semiboldmb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          ></textarea>
        </div>
        {/* price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            value={productData.price}
            name="value"
            onChange={handleChange}
            className="w-full border border-gray-300  rounded-md mb-2"
          />
        </div>
        {/* count in stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count in Stock</label>
          <input
            type="number"
            value={productData.countInStock}
            name="price"
            onChange={handleChange}
            className="w-full border border-gray-300  rounded-md mb-2"
          />
        </div>
        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            value={productData.sku}
            name="sku"
            onChange={handleChange}
            className="w-full border border-gray-300  rounded-md mb-2"
          />
        </div>
        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma -separated)
          </label>
          <input
            type="text"
            value={productData.sizes.join(", ")}
            name="sizes"
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300  rounded-md mb-2"
          />
        </div>
        {/* colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma -separated)
          </label>
          <input
            type="text"
            value={productData.colors.join(", ")}
            name="colors"
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300  rounded-md mb-2"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
