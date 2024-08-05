import React, { useState } from 'react';
import uploadArea from './Assets/upload_cloud_icon.svg'; // Update the file extension if it's different

const AddProduct = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [image, setImage] = useState(null);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    setProductDetails({ ...productDetails, image: e.target.files[0] });
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch(`${apiUrl}/upload`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch(`${apiUrl}/addproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json().then((data) => {
        data.success ? alert("Product Added ") : alert("Failed");
      }));
    }
  };

  return (
    <div className="add-product p-8 m-0 rounded-lg bg-white max-w-[800px] mx-auto box-border mt-0">
      <div className="addproduct-itemfield mb-4">
        <p className="text-gray-600 font-bold text-lg mb-2">Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
          className="border border-gray-300 p-2 rounded w-full h-12 text-gray-600 font-poppins text-base box-border"
        />
      </div>

      <div className="addproduct-price mb-4 flex gap-10">
        <div className="w-full">
          <p className="text-gray-600 font-bold mb-2">Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Enter old price"
            className="border border-gray-300 p-2 rounded w-full h-12 text-gray-600 font-poppins text-base box-border"
          />
        </div>
        <div className="w-full">
          <p className="text-gray-600 font-bold mb-2">Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Enter offer price"
            className="border border-gray-300 p-2 rounded w-full h-12 text-gray-600 font-poppins text-base box-border"
          />
        </div>
      </div>

      <div className="addproduct-category mb-4">
        <p className="text-gray-600 font-bold mb-2">Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector border border-gray-300 p-2 rounded w-full h-12 text-gray-600 font-poppins text-base"
        >
          <option value="">Select a category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="addproduct-itemfield mb-4">
        <label htmlFor="file-input" className="block cursor-pointer">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            alt="Thumbnail"
            className="addproduct-thumbnail-img max-w-[200px] max-h-[200px] object-contain mx-auto rounded-lg"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          className="hidden"
        />
      </div>

      <button
        onClick={Add_Product}
        className="addproduct-btn bg-blue-600 text-white p-3 rounded w-full h-12 mt-5 text-lg font-bold"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
