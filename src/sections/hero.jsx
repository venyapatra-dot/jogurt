import React from 'react';
import '../styles/hero.css'
import { ExternalLink, ArrowRight } from 'lucide-react';
import msc from '../assets/christmast.mp3';

export default function HeroSection({ formUrl }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">MR JOE'S FAVORITE YOGURT</p>
        <h1 className="hero-title">A Legendary Taste in Every Spoonful!</h1>
        <p className="hero-description">
          Inspired by Jörmungandr, the mighty World Serpent from Norse mythology, JOGURTMAN brings legendary flavor to delicious, creamy yogurt.
        </p>
        <div className="hero-actions">
          <audio controls autoPlay loop>
            <source src={msc} type="audio/mp3"></source>
          </audio>
          <a href="#menu" className="explore" >
            Explore Menu <ArrowRight size={18} />
          </a>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="direct">
            Direct Order Form <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}