'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Copy, Check } from 'lucide-react';

export default function Account() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const accounts = [
    {
      id: 'groom',
      title: '신랑측 계좌번호',
      list: [
        { bank: '농협', num: '3520859498903', owner: '공태식', role: '신랑' },
      ]
    },
    {
      id: 'bride',
      title: '신부측 계좌번호',
      list: [
        { bank: '농협', num: '17359751026379', owner: '민유림', role: '신부' },
      ]
    }
  ];

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num).then(() => {
      setCopied(num);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent-color)' }}>ACCOUNT</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        {accounts.map((group) => (
          <div key={group.id} style={{ border: '1px solid var(--border-color)', borderRadius: '8px', backgroundColor: 'var(--background)' }}>
            <button
              onClick={() => setOpenSection(openSection === group.id ? null : group.id)}
              style={{ width: '100%', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--foreground)' }}
            >
              <span style={{ fontSize: '1rem', fontWeight: 500 }}>{group.title}</span>
              <ChevronDown
                size={20}
                style={{ transform: openSection === group.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: 'var(--text-muted)' }}
              />
            </button>
            <AnimatePresence>
              {openSection === group.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border-color)' }}>
                    {group.list.map((item, idx) => (
                      <div key={idx} style={{ paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.9rem' }}>
                          <div style={{ fontWeight: 'bold', marginBottom: '4px', color: 'var(--foreground)' }}>
                            {item.owner}
                            <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)', marginLeft: '5px' }}>{item.role}</span>
                          </div>
                          <div style={{ color: 'var(--text-muted)' }}>{item.bank} {item.num}</div>
                        </div>
                        <button
                          onClick={() => handleCopy(item.num)}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: 'var(--secondary-bg)',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: 'var(--foreground)'
                          }}
                        >
                          {copied === item.num ? <Check size={14} color="#B8866A" /> : <Copy size={14} />}
                          복사
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              position: 'fixed',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(58,42,34,0.85)',
              color: '#FBF7F2',
              padding: '12px 24px',
              borderRadius: '24px',
              fontSize: '0.9rem',
              zIndex: 2000
            }}
          >
            계좌번호가 복사되었습니다.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
