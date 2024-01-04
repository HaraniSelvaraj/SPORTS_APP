import React, { useState, useEffect } from 'react';
import './Shop.css';

const Shop = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--xp', xp);
      document.documentElement.style.setProperty('--y', y);
      document.documentElement.style.setProperty('--yp', yp);
      setStatus({ x, y, xp, yp });
    };

    document.body.addEventListener('pointermove', syncPointer);

    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'row' }}>
      <article data-glow>
      <img
          src="path/to/your/image1.jpg"
          alt="EQUIPMENTS"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span data-glow />
        <button data-glow>
          <span>Glow Up</span>
        </button>
      </article>
      <article data-glow>
      <img
          src="path/to/your/image1.jpg"
          alt="ACCESSORIES"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span data-glow />
        <button data-glow>
          <span>Glow Up</span>
        </button>
      </article>
      <article data-glow>
      <img
          src="path/to/your/image1.jpg"
          alt="CARTS"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span data-glow />
        <button data-glow>
          <span>Glow Up</span>
        </button>
      </article>
    </main>
  );
};

export default Shop;