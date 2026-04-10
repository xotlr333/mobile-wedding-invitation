'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{ padding: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ width: '100%', height: '75%', position: 'relative' }}
      >
        <Image
          src="/hero_1.JPG"
          alt="Wedding Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={{ height: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--background)', width: '100%', padding: '20px 0' }}
      >
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '8px', letterSpacing: '0.1em' }}> 공태식 & 민유림 </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>2026. 12. 06. SUN AM 11:00</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '12px' }}>라시따시어터 (양재)</p>
      </motion.div>
    </section>
  );
}
