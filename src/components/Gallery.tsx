'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  '/gallery1.JPG',
  '/gallery2.JPG',
  '/gallery3.JPG',
  '/gallery4.JPG',
  '/gallery5.JPG',
  '/gallery6.JPG',
  '/gallery7.JPG',
  '/gallery8.JPG',
  '/gallery9.JPG',
  '/gallery10.JPG',
  '/gallery11.JPG',
  '/gallery12.JPG',
  '/gallery13.JPG',
  '/gallery14.JPG',
  '/gallery15.JPG',
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayImages = showAll ? images : images.slice(0, 9);

  return (
    <section>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent-color)' }}>GALLERY</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginBottom: '30px' }}>
        {displayImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ opacity: 0.8 }}
            onClick={() => setSelectedImg(src)}
            style={{ position: 'relative', aspectRatio: '1/1', cursor: 'pointer', backgroundColor: '#f0f0f0' }}
          >
            <Image 
              src={src} 
              alt={`Gallery ${index}`} 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </motion.div>
        ))}
      </div>

      {!showAll && images.length > 9 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              padding: '12px 40px',
              backgroundColor: '#1a1f2c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            더보기
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.9)', 
              zIndex: 1000, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              padding: '20px'
            }}
          >
            <button 
              onClick={() => setSelectedImg(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: 'white' }}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{ position: 'relative', width: '100%', height: '80%' }}
            >
              <Image 
                src={selectedImg} 
                alt="Enlarged" 
                fill 
                style={{ objectFit: 'contain' }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
