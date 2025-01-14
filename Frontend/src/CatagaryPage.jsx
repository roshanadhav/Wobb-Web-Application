import  { useEffect, useState } from 'react';
import {  FaTimes } from "react-icons/fa";
import axios from 'axios';
import "./CatagaryPage.css"; // Add a CSS file for styling
const calculateProgress = (remaining, total) => (remaining / total) * 100;
const BrandCard = ({ brand, openModal }) => {
  return (
    <div className="brand-card" onClick={() => openModal(brand)}>
      <img src={brand.image} alt={brand.brandName} />
      <h3>{brand.brandName}</h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${calculateProgress(brand.remaining, brand.total)}%` }}
        ></div>
      </div>
    </div>
  );
};
const CategorySection = ({ category, openModal }) => {
  return (
    <div className="category-section">
      <h2>{category.categoryName}</h2>
      <div className="cards-container">
        {category.cards.map((brand) => (
          <BrandCard key={brand._id} brand={brand} openModal={openModal} />
        ))}
      </div>
    </div>
  );
};
const BrandPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    // Fetching data from the backend
    axios.get('http://localhost:8080/api/brands') // Replace with your actual backend route
      .then((response) => {
        setCategories(response.data); // Assuming response.data contains the array of categories
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const openModal = (brand) => {
    setModalData(brand);
  };

  const closeModal = () => {
    setModalData(null);
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter the categories based on the selected filter
  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.categoryName === selectedCategory)
    : categories;

  return (
    <div className="brand-page">
      {/* Filter Bar */}
      <div className="filter-bar">
        <input type="text" placeholder="Search brands..." />
        <select onChange={handleFilterChange} value={selectedCategory}>
          <option value="">All Categories</option>
          <option value="Top Brands">Top Brands</option>
          <option value="Beauty and Cosmetics">Beauty and Cosmetics</option>
          <option value="Health and Diet">Health and Diet</option>
          <option value="Clothing and Accessories">Clothing and Accessories</option>
          <option value="Gyming and Fitness">Gyming and Fitness</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredCategories.map((category) => (
          <CategorySection key={category._id} category={category} openModal={openModal} />
        ))
      )}

      {/* Modal */}
      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}><FaTimes className='close-btn'/></button>
            <img src={modalData.image} alt={modalData.brandName} />
            <h3>{modalData.brandName}</h3>
            <p>{modalData.details}</p>
            <button className="apply-btn">Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default BrandPage;
