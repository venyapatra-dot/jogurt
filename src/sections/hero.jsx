import React, { useRef, useState } from 'react';
import '../styles/hero.css';
import { ExternalLink, ArrowRight, Volume2 } from 'lucide-react';
import msc from '../assets/christmast.mp3';

export default function HeroSection({ formUrl }) {
  const audioRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnterSite = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <section className="hero">
      {/* Welcome overlay that unlocks browser audio on click */}
      {!hasEntered && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            color: '#fff',
            gap: '16px',
          }}
        >
          <h2>Welcome to JOGURTMAN</h2>
          <button
            onClick={handleEnterSite}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '8px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Volume2 size={20} /> Enter Site
          </button>
        </div>
      )}

      <div className="hero-content">
        <p className="hero-subtitle">MR JOE'S FAVORITE YOGURT</p>
        <h1 className="hero-title">A Legendary Taste in Every Spoonful!</h1>
        <p className="hero-description">
          Inspired by Jörmungandr, the mighty World Serpent from Norse mythology, JOGURTMAN brings legendary flavor to delicious, creamy yogurt.
        </p>
        <div className="hero-actions">
          <audio ref={audioRef} src={msc} controls loop />
          <a href="#menu" className="explore">
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