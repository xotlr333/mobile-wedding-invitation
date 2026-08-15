'use client';

import { motion } from 'framer-motion';

const poemLines = [
  '여섯 번의 해가 바뀌는 동안',
  '서로의 곁을 지켜온 두 사람이',
  '지금처럼 서로 아끼고 사랑하며',
  '평생을 함께 걸어가려고 합니다.',
  '',
  '소중한 걸음으로 함께해 주시어',
  '저희의 앞날을 따뜻하게',
  '축복해 주신다면 감사하겠습니다.',
];

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Invitation() {
  return (
    <section style={{ textAlign: 'center', backgroundColor: 'var(--background)', paddingTop: '60px', paddingBottom: '60px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          marginBottom: '48px',
          color: 'var(--accent-color)',
          letterSpacing: '0.08em',
        }}
      >
        초대합니다
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        style={{ lineHeight: '2.4', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '48px' }}
      >
        {poemLines.map((line, i) =>
          line === '' ? (
            <div key={i} style={{ height: '0.8em' }} />
          ) : (
            <motion.p key={i} variants={lineVariant}>
              {line}
            </motion.p>
          )
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, delay: 0.4, ease: 'easeOut' }}
        style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '40px',
          fontSize: '0.95rem',
          color: 'var(--foreground)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ color: 'var(--text-muted)' }}>공경택 · 박찬옥</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>의 아들</span>
          <strong style={{ fontSize: '1.1rem', color: 'var(--highlight)', fontWeight: 600 }}>태식</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: 'var(--text-muted)' }}>민경기 · 홍경아</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>의 딸</span>
          <strong style={{ fontSize: '1.1rem', color: 'var(--highlight)', fontWeight: 600 }}>유림</strong>
        </div>
      </motion.div>
    </section>
  );
}
