'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/MYL_1996.jpg',
  '/MYL_0524.jpg',
  '/MYL_0583.jpg',
  '/MYL_0672.jpg',
  '/MYL_0792.jpg',
  '/MYL_1633.jpg',
  '/MYL_1765_1.jpg',
  '/MYL_1776.jpg',
  '/MYL_1949.jpg',
  '/MYL_2044.jpg',
  '/MYL_2062.jpg',
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? '60%' : '-60%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? '-60%' : '60%', opacity: 0 }),
};

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const displayImages = showAll ? images : images.slice(0, 9);

  const goNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex(i => (i === null ? 0 : (i + 1) % images.length));
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex(i => (i === null ? 0 : (i - 1 + images.length) % images.length));
  }, []);

  const close = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, goNext, goPrev, close]);

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
            transition={{ duration: 1.0, delay: (index % 9) * 0.07, ease: 'easeOut' }}
            whileHover={{ opacity: 0.85 }}
            onClick={() => { setDirection(0); setSelectedIndex(index); }}
            style={{ position: 'relative', aspectRatio: '1/1', cursor: 'pointer', backgroundColor: 'var(--warm-beige)' }}
          >
            <Image src={src} alt={`Gallery ${index}`} fill style={{ objectFit: 'cover' }} />
          </motion.div>
        ))}
      </div>

      {!showAll && images.length > 9 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              padding: '12px 40px',
              backgroundColor: 'var(--accent-color)',
              color: '#FBF7F2',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.95rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.04em',
              transition: 'opacity 0.3s',
            }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >
            더보기
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchStartX === null) return;
              const delta = touchStartX - e.changedTouches[0].clientX;
              if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
              setTouchStartX(null);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.92)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* 닫기 */}
            <button
              onClick={e => { e.stopPropagation(); close(); }}
              style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', zIndex: 10 }}
            >
              <X size={28} />
            </button>

            {/* 카운터 */}
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              zIndex: 10,
            }}>
              {selectedIndex + 1} / {images.length}
            </div>

            {/* 이미지 영역 */}
            <div
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', width: '100%', height: '75%', overflow: 'hidden' }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Image
                    src={images[selectedIndex]}
                    alt={`Gallery ${selectedIndex + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 이전/다음 버튼 */}
            <div
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex',
                gap: '32px',
                marginTop: '24px',
                zIndex: 10,
              }}
            >
              <button
                onClick={goPrev}
                style={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goNext}
                style={{
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
