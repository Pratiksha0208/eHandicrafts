import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/Dashboard.css';

// Sample handmade products
const allProducts = [
  {
    id: 1,
    name: 'Handwoven Macrame Wall Hanging',
    category: 'Home Decor',
    price: 1299,
    originalPrice: 1999,
    discount: '35% off',
    rating: 4.8,
    reviews: 214,
    image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=300&auto=format',
  },
  {
    id: 2,
    name: 'Terracotta Coffee Mug (Set of 2)',
    category: 'Kitchenware',
    price: 899,
    originalPrice: 1199,
    discount: '25% off',
    rating: 4.6,
    reviews: 157,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=300&auto=format',
  },
  {
    id: 3,
    name: 'Beaded Dreamcatcher',
    category: 'Home Decor',
    price: 649,
    originalPrice: 899,
    discount: '28% off',
    rating: 4.9,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1604881991720-f91ada269799?q=80&w=300&auto=format',
  }
];

const categories = ['All', 'Home Decor', 'Kitchenware', 'Fashion'];

const ProductStore = () => {
  const navigate = useNavigate(); // 🔥 navigation added

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart logic
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="store-container">

      {/* Header */}
      <header className="store-header">
        <div className="header-left">
          <i className="fas fa-store-alt store-logo"></i>
          <span className="brand-name">e-HandiCrafts</span>
        </div>

        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search for handmade treasures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 🔥 UPDATED HEADER RIGHT */}
        <div className="header-right">

          {localStorage.getItem("role") === "seller" && (
      <button onClick={() => navigate("/seller")}>
        Seller Dashboard
  </button>
    )}
          {/* Orders Button */}
          <button className="nav-btn" onClick={() => navigate("/orders")}>
            <i className="fas fa-box"></i> Orders
          </button>

          {/* Cart Button */}
          <button className="cart-btn" onClick={() => setCartOpen(!cartOpen)}>
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </header>

      {/* Category Filter */}
      <div className="category-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="main-layout">
        <section className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="discount-tag">{product.discount}</span>
              </div>

              <div className="product-info">
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>

                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Cart Sidebar */}
        <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
          <div className="cart-header">
            <h3>Cart ({cartCount})</h3>
            <button onClick={() => setCartOpen(false)}>X</button>
          </div>

          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>₹{item.price} x {item.quantity}</p>
            </div>
          ))}

          <h3>Total: ₹{cartTotal}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductStore;