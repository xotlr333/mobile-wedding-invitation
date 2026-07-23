'use client';

import { Navigation, Car, Train, Bus } from 'lucide-react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Location() {
  const LAT = 37.4628;
  const LNG = 127.0374;
  const NAME = "라시따시어터";

  const handleMapClick = (service: string) => {
    if (service === 'kakao') {
      window.open(`https://map.kakao.com/link/to/${NAME},${LAT},${LNG}`, '_blank');
    } else if (service === 'naver') {
      window.open(`https://map.naver.com/v5/entry/place/1501290445`, '_blank');
    }
  };

  return (
    <section style={{ backgroundColor: 'var(--background)' }}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent-color)' }}>LOCATION</h2>
        <p style={{ marginTop: '12px', fontSize: '1.1rem' }}>{NAME}</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>서울 서초구 매헌로 16 1층</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
        style={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden', marginBottom: '24px' }}
      >
        <Map
          center={{ lat: LAT, lng: LNG }}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          <MapMarker position={{ lat: LAT, lng: LNG }}>
            <div style={{ padding: "5px", color: "#000", fontSize: "12px", textAlign: "center", width: "150px" }}>
              {NAME}
            </div>
          </MapMarker>
        </Map>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '40px' }}
      >
        <button
          onClick={() => handleMapClick('kakao')}
          style={{
            padding: '12px',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            color: 'var(--foreground)',
            backgroundColor: 'var(--background)'
          }}
        >
          <Navigation size={18} /> 카카오맵
        </button>
        <button
          onClick={() => handleMapClick('naver')}
          style={{
            padding: '12px',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            color: 'var(--foreground)',
            backgroundColor: 'var(--background)'
          }}
        >
          <Navigation size={18} /> 네이버 지도
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
        style={{ fontSize: '0.85rem', lineHeight: '1.8' }}
      >
        {/* 지하철 */}
        <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold', color: 'var(--accent-color)' }}>
            <Train size={18} /> 지하철 이용시
          </div>
          <p style={{ color: 'var(--foreground)', paddingLeft: '26px', marginBottom: '6px' }}>
            양재시민의숲역 하차 (신분당선) - 5번 출구
          </p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '4px' }}>
            ★ 셔틀버스 운행 : 5번 출구 / 예식 1시간 전부터 10분 간격으로 운행
          </p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px' }}>
            ■ [마을버스] 5번 출구 - 횡단보도 건너편 서초20번 - [하이브랜드] 하차 → 라시따 A게이트
          </p>
        </div>

        {/* 버스 */}
        <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold', color: 'var(--accent-color)' }}>
            <Bus size={18} /> 버스 이용시
          </div>
          <p style={{ color: 'var(--foreground)', paddingLeft: '26px', marginBottom: '4px' }}>
            하이브랜드 정류장 하차 [22384] → 라시따 A게이트
          </p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '12px' }}>
            ■ [마을버스] 서초08, 서초20
          </p>
          <p style={{ color: 'var(--foreground)', paddingLeft: '26px', marginBottom: '4px' }}>
            양곡도매시장 정류장 하차 [22299] → 라시따 A게이트
          </p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '2px' }}>■ [간선버스] 441</p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '2px' }}>■ [지선버스] 8442</p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '2px' }}>■ [광역버스] 9100, 9200, 9201, 9300</p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '2px' }}>■ [일반버스] 6, 11-3</p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px' }}>■ [직행버스] 1006, 3000, 3003, 3030, 3100, 3101, 6501, G9633</p>
        </div>

        {/* 자가용 */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold', color: 'var(--accent-color)' }}>
            <Car size={18} /> 자가용 이용시
          </div>
          <p style={{ color: 'var(--foreground)', paddingLeft: '26px', marginBottom: '6px' }}>
            네비게이션 &apos;라시따시어터&apos; 또는 &apos;하이브랜드&apos; 입력
          </p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '2px' }}>■ [주소 검색] 서울 매헌로 16</p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px', marginBottom: '6px' }}>■ [주차장] 동시 1,000대 주차 가능</p>
          <div style={{ paddingLeft: '26px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ color: '#2563eb', fontWeight: 500 }}>■ 파랑색 유도선 → 지하3층 주차장</span>
            <span style={{ color: '#db2777', fontWeight: 500 }}>■ 분홍색 유도선 → 타워주차장</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
