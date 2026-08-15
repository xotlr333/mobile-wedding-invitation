'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{ padding: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        style={{ width: '100%', height: '75%', position: 'relative' }}
      >
        <Image
          src="/image/MYL_0434.jpg"
          alt="Wedding Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '45%',
          background: 'linear-gradient(to bottom, rgba(251,247,242,0), rgba(251,247,242,1))',
          pointerEvents: 'none',
        }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 1.2, ease: "easeOut" }}
        style={{ height: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--background)', width: '100%', padding: '20px 0' }}
      >
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '10px', letterSpacing: '0.12em', color: 'var(--foreground)' }}>공태식 ♥ 민유림</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.08em' }}>2026.12.06 (일) 오전  11:00</p>
        <p style={{ color: 'var(--highlight)', fontSize: '0.78rem', marginTop: '10px', letterSpacing: '0.04em' }}>라시따시어터</p>
      </motion.div>
    </section>
  );
}
