'use client';

import { motion } from 'framer-motion';

export default function Calendar() {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  // Simplified static calendar for Dec 2026
  // Dec 1st 2026 is Tuesday
  const dates = [];
  for (let i = 1; i <= 31; i++) dates.push(i);
  const emptyBefore = 2; // Tue

  const targetDate = new Date(2026, 11, 6); // 2026년 12월 6일 (월은 0부터 시작)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = targetDate.getTime() - today.getTime();
  const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <section style={{ backgroundColor: 'var(--secondary-bg)', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '30px' }}>2026. 12. 06</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '40px' }}>일요일 오전 11시 00분</p>

        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {days.map(d => <div key={d} style={{ color: d === '일' ? '#d9534f' : 'inherit' }}>{d}</div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '15px 0' }}>
            {Array.from({ length: emptyBefore }).map((_, i) => <div key={`empty-${i}`} />)}
            {dates.map(d => (
              <div 
                key={d} 
                style={{ 
                  fontSize: '0.9rem',
                  position: 'relative',
                  color: (emptyBefore + d - 1) % 7 === 0 ? '#d9534f' : '#333',
                  fontWeight: d === 6 ? 'bold' : 'normal'
                }}
              >
                {d === 6 && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '30px', 
                    height: '30px', 
                    backgroundColor: 'var(--warm-beige)', 
                    borderRadius: '50%', 
                    zIndex: -1 
                  }} />
                )}
                {d}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '50px', fontSize: '0.9rem', color: 'var(--foreground)' }}>
          태식 ❤️ 유림의 결혼식이 <strong>{remainingDays}일</strong> 남았습니다.
        </div>
      </motion.div>
    </section>
  );
}
