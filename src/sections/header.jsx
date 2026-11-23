import React from 'react';
import '../styles/header.css'
import { ShoppingBag, HeartHandshake } from 'lucide-react';
import icon from "../assets/logicon.png";
export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#" className="logo">
          <div className="logo-icon">
            <img src={icon} width={50} height={50}></img>
          </div>
          <span className="logo-title">JOGURT</span>
        </a>
        <button className="cart-toggle-btn" onClick={onOpenCart}>
          <ShoppingBag size={20} />
          <span>My Order</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </nav>
    </header>
  );
}