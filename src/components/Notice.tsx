'use client';

import { motion } from 'framer-motion';

const notices = [
  {
    title: '웰컴 드링크',
    body: '로비에 웰컴 드링크가 준비되어 있습니다.\n앞에 있는 휴식 공간에서 편안하게 즐겨주세요.',
  },
  {
    title: '연회장',
    body: '연회장 뷔페는 동일 층에 있으며,\n예식 시간 30분 전부터 이용 가능합니다.',
  },
  {
    title: '포토부스',
    body: '로비에 웨딩 포토부스 이벤트가 준비되어 있습니다.\n신랑·신부에게 남기는 한 장의 추억이 될 수 있도록\n사진도 찍으시고 방명록도 함께 남겨주세요.',
  },
];

export default function Notice() {
  return (
    <section style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent-color)' }}>NOTICE</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
        style={{
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          backgroundColor: 'var(--background)',
          overflow: 'hidden',
        }}
      >
        {notices.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '20px',
              borderBottom: idx < notices.length - 1 ? '1px solid var(--border-color)' : 'none',
            }}
          >
            <p
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--accent-color)',
                marginBottom: '8px',
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                whiteSpace: 'pre-line',
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
