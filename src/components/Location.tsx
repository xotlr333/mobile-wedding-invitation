'use client';

import { MapPin, Navigation, Car, Train } from 'lucide-react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

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
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent-color)' }}>LOCATION</h2>
        <p style={{ marginTop: '12px', fontSize: '1.1rem' }}>{NAME}</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>서울 서초구 매헌로 16 하이브랜드 패션관 1층</p>
      </div>

      {/* Real Kakao Map */}
      <div style={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden', marginBottom: '24px' }}>
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
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '40px' }}>
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
            color: '#333',
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
            color: '#333',
            backgroundColor: 'var(--background)'
          }}
        >
          <Navigation size={18} /> 네이버 지도
        </button>
      </div>

      <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
            <Train size={18} /> 지하철
          </div>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px' }}>신분당선 양재시민의숲역 3번 출구 (도보 10분)</p>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
            <Car size={18} /> 자가용
          </div>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px' }}>내비게이션 &quot;라시따델라모다&quot; 검색</p>
          <p style={{ color: 'var(--text-muted)', paddingLeft: '26px' }}>건물 내 주차장 이용 가능 (무료 주차 2시간)</p>
        </div>
      </div>
    </section>
  );
}
