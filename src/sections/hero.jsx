import React, { useEffect, useRef } from 'react';
import '../styles/hero.css';
import { ExternalLink, ArrowRight } from 'lucide-react';
import msc from '../assets/christmast.mp3';

export default function HeroSection({ formUrl }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 1. Try playing immediately (works if the user already interacted with the domain)
    audio.play().catch(() => {
      // 2. If blocked by browser policy, start playing on the user's first click/tap
      const handleFirstInteraction = () => {
        audio.play();
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      };

      window.addEventListener('click', handleFirstInteraction);
      window.addEventListener('touchstart', handleFirstInteraction);
    });
  }, []);

  return (
    <section className="hero">
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