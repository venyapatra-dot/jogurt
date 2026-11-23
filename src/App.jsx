import { useState } from 'react'
import Header from './sections/header'
import './App.css'
import HeroSection from './sections/hero'
import MenuSection from './sections/menuCard'
import HowToOrderSection from './sections/howtoorder'
import QualityStandards from './sections/qualityStandard'
import OrderDrawer from './sections/orderDrawer'
import Footer from './sections/footer'


function App() {
const YOGURT_PRODUCTS = [
  {
    id: 1,
    title: "MANGJO",
    description: "A sweet and refreshing mango-flavored yogurt with a delicious tropical taste.",
    price: 20000,
    calories: 180,
    size: "120g cup",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLks5lSjoAivsoODQYSF1HPp42SqwSAhrpzsE11EY8w&s=10"
  },
  {
    id: 2,
    title: "JOGURT",
    description: "Classic, creamy, and smooth yogurt with a simple yet satisfying original taste.",
    price: 20000,
    calories: 160,
    size: "120g cup",
    image: "https://www.feastingathome.com/wp-content/uploads/2023/08/homemade-yogurt-2.jpg"
  },
  {
    id: 3,
    title: "JOBERRY",
    description: "A delightful blend of creamy yogurt and sweet strawberry flavor.",
    price: 20000,
    calories: 170,
    size: "120g cup",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_Q5SUx5GmU4tDMaHK6Xvj6SYkXnRHShs8CwdxEFaRQ&s=10"
  },
  {
    id: 4,
    title: "JOCHI",
    description: "A refreshing yogurt with a sweet, fragrant lychee flavor.",
    price: 20000,
    calories: 210,
    size: "120g cup",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2a7y0t3BC2zJIQjV37YpjwUsh0AJkO37fCkUp6fOFOg&s=10"
  },
];

const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://form.svhrt.com/6af50517a9ba5f7a43575e7e";

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)}/>
      <HeroSection
      formUrl={GOOGLE_FORM_URL}/>
      <MenuSection
        products={YOGURT_PRODUCTS}
        onAddToCart={handleAddToCart}/>
      <HowToOrderSection 
        formUrl={GOOGLE_FORM_URL}/>
      <QualityStandards 
         formUrl={GOOGLE_FORM_URL}/>
      <OrderDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        total={totalCartAmount}
        formUrl={GOOGLE_FORM_URL}/>
      <Footer />
    </>
  )
}

export default App
