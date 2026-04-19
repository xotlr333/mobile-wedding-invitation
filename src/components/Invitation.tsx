'use client';

import { motion } from 'framer-motion';

export default function Invitation() {
  return (
    <section style={{ textAlign: 'center', backgroundColor: 'var(--background)', paddingTop: '40px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '40px', color: 'var(--accent-color)' }}>초대합니다</h2>

        <div style={{ lineHeight: '2.2', fontSize: '1rem', color: 'var(--foreground)', marginBottom: '40px' }}>
          <p>6번의 해가 바뀌는 동안</p>
          <p>서로의 곁을 지켜온 두 사람이</p>
          <p>지금처럼 서로 아끼고 사랑하며</p>
          <p>평생을 함께 걸어가려고 합니다.</p>
          <br />
          <p>소중한 걸음으로 함께해 주시어</p>
          <p>저희의 앞날을 따뜻하게</p>
          <p>축복해 주신다면 감사하겠습니다.</p>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '40px', fontSize: '1rem', color: '#444' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span>공경택 · 박찬옥</span>
            <span style={{ fontSize: '0.9rem', color: '#888' }}>의</span>
            <span style={{ fontSize: '0.9rem', color: '#888' }}>아들</span>
            <strong style={{ fontSize: '1.1rem', color: '#111' }}>태식</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
            <span>민경기 · 홍경아</span>
            <span style={{ fontSize: '0.9rem', color: '#888' }}>의</span>
            <span style={{ fontSize: '0.9rem', color: '#888' }}>딸</span>
            <strong style={{ fontSize: '1.1rem', color: '#111' }}>유림</strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
