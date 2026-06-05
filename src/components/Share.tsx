'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Share() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '공태식 ❤️ 민유림 결혼합니다',
        text: '2026년 12월 6일 일요일 오전 11시, 라시따시어터',
        url: window.location.href,
      });
    } else {
      alert('공유하기 기능을 지원하지 않는 브라우저입니다. 주소를 복사해서 공유해주세요.');
    }
  };

  return (
    <section style={{ backgroundColor: 'var(--background)', paddingBottom: '100px', borderTop: '1px solid var(--border-color)' }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
      >
        <button
          onClick={handleShare}
          style={{
            width: '100%',
            maxWidth: '240px',
            padding: '16px',
            backgroundColor: '#F7E600',
            color: '#3A1D1D',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          <MessageCircle size={20} fill="#3A1D1D" /> 카카오톡 공유하기
        </button>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '40px', letterSpacing: '0.02em' }}>
          Copyright © 2026 공태식 & 민유림. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
