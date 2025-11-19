import React, { useState } from 'react';
import { Plane, MapPin, Coffee, Utensils, Camera, Snowflake, ShoppingBag, AlertTriangle, Clock, ChevronRight, Map as MapIcon, ExternalLink, Train, Bus } from 'lucide-react';

const SapporoItinerary = () => {
  const [activeTab, setActiveTab] = useState('day1');

  // Google Maps Route Links (Pre-filled)
  const routeLinks = {
    day1: "https://www.google.com/maps/dir/New+Chitose+Airport/Sapporo+Station/Susukino+Station/Suage%2B/@42.9235875,141.345598,10z",
    day2: "https://www.google.com/maps/dir/Sapporo+Station/Biei+Station/Christmas+Tree/Shirahige+Waterfall/Ninguru+Terrace/Sapporo+Station/@43.3276254,141.9024267,9z",
    day3: "https://www.google.com/maps/dir/Sapporo+Station/Minami-Otaru+Station/Otaru+Music+Box+Museum/Otaru+Canal/Sapporo+Station/@43.1288623,141.0038456,10z",
    day4: "https://www.google.com/maps/dir/Susukino+Station/Baristart+Coffee/Daimaru+Sapporo/New+Chitose+Airport/@42.9265985,141.344456,10z"
  };

  const itinerary = {
    day1: [
      { time: '14:00', icon: Plane, title: '신치토세 공항 도착', desc: '김해공항 출발편 도착 및 입국 수속', type: 'move' },
      { time: '15:00', icon: Train, title: '삿포로역 이동', desc: 'JR 쾌속 에어포트 (약 40분 소요)', type: 'move' },
      { time: '16:30', icon: MapPin, title: '스스키노 체크인', desc: '호텔 체크인 및 짐 풀기', type: 'stay' },
      { time: '17:30', icon: Camera, title: '니카상 & 스스키노 거리', desc: '빙판길 적응 및 인증샷 타임', type: 'spot' },
      { time: '19:00', icon: Utensils, title: '저녁: 스프카레', desc: '스아게+ 또는 가라쿠 (웨이팅 주의)', link: 'https://www.google.com/maps/search/?api=1&query=Suage+Plus+Sapporo', type: 'food' },
      { time: '21:00', icon: Utensils, title: '심야: 이자카야/돈키호테', desc: '간단한 한잔 또는 메가돈키호테 쇼핑', type: 'spot' }
    ],
    day2: [
      { time: '07:50', icon: Clock, title: '비에이 투어 집결', desc: '삿포로역 북광장 등 (투어사별 확인 필)', type: 'important' },
      { time: '10:30', icon: Camera, title: '패치워크 로드', desc: '세븐스타 나무, 켄과 메리의 나무', type: 'spot' },
      { time: '12:30', icon: Utensils, title: '점심: 비에이역', desc: '자유식 (코이루 우동 or 편의점)', type: 'food' },
      { time: '14:00', icon: Snowflake, title: '크리스마스 나무', desc: '겨울 비에이의 하이라이트', type: 'spot' },
      { time: '16:00', icon: Snowflake, title: '흰수염 폭포 & 닝구르', desc: '라이트업 된 요정의 숲 감상', type: 'spot' },
      { time: '20:00', icon: Bus, title: '삿포로 복귀', desc: '투어 하차 (보통 삿포로역)', type: 'move' },
      { time: '20:30', icon: Utensils, title: '저녁: 징기스칸', desc: '다루마 5.5 or 라마이', link: 'https://www.google.com/maps/search/?api=1&query=Genghis+Khan+Daruma+5.5', type: 'food' }
    ],
    day3: [
      { time: '10:00', icon: Train, title: '오타루 이동', desc: 'JR 미나미오타루역 하차 (도보 동선 유리)', type: 'move' },
      { time: '11:00', icon: Camera, title: '오르골당 & 르타오', desc: '본점 한정 디저트 맛보기', link: 'https://www.google.com/maps/search/?api=1&query=Rokkatei+Sapporo+Honten', type: 'spot' },
      { time: '13:00', icon: Utensils, title: '점심: 스시 거리', desc: '마사즈시 또는 인근 스시야', type: 'food' },
      { time: '15:00', icon: Camera, title: '오타루 운하', desc: '창고군 산책 및 기념품', type: 'spot' },
      { time: '18:00', icon: Train, title: '삿포로 복귀', desc: '러쉬아워 피해서 이동', type: 'move' },
      { time: '19:30', icon: Utensils, title: '저녁: 털게 or 카이센동', desc: '니조시장 오이소 등', link: 'https://www.google.com/maps/search/?api=1&query=Ohiso+Nijo+Market', type: 'food' },
      { time: '21:30', icon: Camera, title: 'TV타워 야경', desc: '오도리 공원 산책', type: 'spot' }
    ],
    day4: [
      { time: '10:00', icon: ShoppingBag, title: '마지막 쇼핑', desc: '다이마루(손수건, 명품), 스텔라플레이스', type: 'spot' },
      { time: '12:00', icon: Coffee, title: '바리스타트 커피', desc: '홋카이도 우유 라떼 한잔', link: 'https://www.google.com/maps/search/?api=1&query=Baristart+Coffee+Sapporo', type: 'food' },
      { time: '13:30', icon: Train, title: '공항 이동 (여유있게)', desc: 'JR 기차 (폭설 대비 일찍 출발)', type: 'important' },
      { time: '15:00', icon: ShoppingBag, title: '면세점 & 로이즈', desc: '공항 국내선 청사 쇼핑이 꿀팁', type: 'spot' },
      { time: '17:00', icon: Plane, title: '출국', desc: '부산으로 출발', type: 'move' }
    ]
  };

  const hotspots = [
    { category: 'Soup Curry', name: '스아게+(Suage+)', desc: '호불호 없는 깔끔한 맛', link: 'https://www.google.com/maps/search/?api=1&query=Suage+Plus+Sapporo' },
    { category: 'Soup Curry', name: '가라쿠(Garaku)', desc: '진한 국물, 오픈런 필수', link: 'https://www.google.com/maps/search/?api=1&query=Soup+Curry+Garaku+Sapporo' },
    { category: 'Jingisukan', name: '다루마 5.5', desc: '본점보다 쾌적, 환기 양호', link: 'https://www.google.com/maps/search/?api=1&query=Genghis+Khan+Daruma+5.5' },
    { category: 'Sushi', name: '토리톤 스시 (도요히라점)', desc: '택시 이동 추천, 대기 적음', link: 'https://www.google.com/maps/search/?api=1&query=Toriton+Sushi+Toyohira' },
    { category: 'Cafe', name: '바리스타트 커피', desc: '우유 선택 가능 라떼', link: 'https://www.google.com/maps/search/?api=1&query=Baristart+Coffee+Sapporo' },
  ];

  const tips = [
    { title: '신발이 생명', desc: '방수 부츠 필수. 편의점에서 도시형 아이젠 구매 추천.' },
    { title: '교통 변수', desc: 'JR 연착이 잦음. 귀국일엔 공항에 1시간 더 일찍 가기.' },
    { title: '예약 전쟁', desc: '징기스칸, 게 요리는 예약 필수. 안되면 15~16시 공략.' },
    { title: '비에이 투어', desc: '버스 안은 덥고 밖은 춥습니다. 얇게 여러 겹 입으세요.' },
  ];

  const renderTimeline = (dayData) => (
    <div className="relative border-l-2 border-blue-100 ml-4 space-y-8 pb-8">
      {dayData.map((item, idx) => (
        <div key={idx} className="relative pl-8 group">
          <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm
            ${item.type === 'important' ? 'bg-red-500' : 
              item.type === 'food' ? 'bg-orange-400' : 
              item.type === 'move' ? 'bg-blue-500' : 'bg-slate-400'}`}>
          </div>
          <span className="inline-block px-2 py-0.5 mb-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-full">
            {item.time}
          </span>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mt-1 transition-all hover:shadow-md">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 mb-1">
                <item.icon size={18} className={
                  item.type === 'food' ? 'text-orange-500' : 
                  item.type === 'important' ? 'text-red-500' : 'text-slate-600'
                } />
                <h3 className="font-bold text-slate-800">{item.title}</h3>
              </div>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" 
                   className="text-xs bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-600 px-2 py-1 rounded flex items-center gap-1 transition-colors">
                  <MapIcon size={12} /> 지도
                </a>
              )}
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderMap = () => (
    <div className="animate-fade-in space-y-6">
      {/* Schematic Map Visualization */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center relative overflow-hidden">
        <h2 className="text-lg font-bold text-slate-800 mb-6 self-start flex items-center gap-2">
          <MapIcon className="text-blue-600" /> 전체 동선도
        </h2>
        
        <div className="relative w-full h-64 bg-slate-50 rounded-xl border border-slate-200 p-4">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
             {/* Airport to Sapporo */}
            <line x1="60%" y1="85%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 4" />
             {/* Sapporo to Otaru */}
            <line x1="50%" y1="50%" x2="20%" y2="40%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 4" />
             {/* Sapporo to Biei */}
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 4" />
          </svg>

          {/* Locations */}
          {/* Sapporo (Center) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-100 shadow-lg animate-pulse"></div>
            <span className="text-xs font-bold mt-1 bg-white px-2 py-0.5 rounded-md shadow-sm border">삿포로 (Base)</span>
          </div>

          {/* Otaru (West) */}
          <div className="absolute top-[40%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
             <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
             <span className="text-xs font-medium mt-1 text-slate-600">오타루</span>
             <span className="text-[10px] text-slate-400">← 40분 (JR)</span>
          </div>

          {/* Biei (East) */}
          <div className="absolute top-[20%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
             <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
             <span className="text-xs font-medium mt-1 text-slate-600">비에이/후라노</span>
             <span className="text-[10px] text-slate-400">2.5시간 (버스) →</span>
          </div>

          {/* Airport (South) */}
          <div className="absolute top-[85%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
             <Plane className="text-slate-400 rotate-[-45deg]" size={16} />
             <span className="text-xs font-medium mt-1 text-slate-600">신치토세 공항</span>
             <span className="text-[10px] text-slate-400">40분 (JR) ↓</span>
          </div>
        </div>
      </div>

      {/* Route Action Buttons */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-500 ml-1">일자별 경로 탐색 (Google Maps)</h3>
        
        <a href={routeLinks.day1} target="_blank" rel="noreferrer" className="block">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center hover:border-blue-400 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 font-bold text-xs">Day 1</div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-700 text-sm">공항 → 삿포로 → 스스키노</span>
                <span className="text-xs text-slate-400">도착 및 시내 이동 경로</span>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500" />
          </div>
        </a>

        <a href={routeLinks.day2} target="_blank" rel="noreferrer" className="block">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center hover:border-blue-400 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 font-bold text-xs">Day 2</div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-700 text-sm">비에이 & 후라노 투어</span>
                <span className="text-xs text-slate-400">패치워크 로드 ~ 닝구르 테라스</span>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500" />
          </div>
        </a>

        <a href={routeLinks.day3} target="_blank" rel="noreferrer" className="block">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center hover:border-blue-400 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 font-bold text-xs">Day 3</div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-700 text-sm">오타루 당일치기</span>
                <span className="text-xs text-slate-400">미나미오타루 ~ 운하 ~ 삿포로</span>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500" />
          </div>
        </a>

         <a href={routeLinks.day4} target="_blank" rel="noreferrer" className="block">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center hover:border-blue-400 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 font-bold text-xs">Day 4</div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-700 text-sm">쇼핑 & 공항 복귀</span>
                <span className="text-xs text-slate-400">스스키노 ~ 삿포로역 ~ 공항</span>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-500" />
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen font-sans text-slate-800 pb-20">
      {/* Header */}
      <div className="bg-blue-600 p-6 text-white rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Snowflake size={100} />
        </div>
        <p className="text-blue-100 text-sm font-medium mb-1">2026.01 (3박 4일)</p>
        <h1 className="text-2xl font-bold">삿포로 설국 여행</h1>
        <p className="text-blue-100 text-sm mt-2 opacity-90">부산 출발 • 30대 효율 중심 투어</p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto px-4 py-6 gap-2 no-scrollbar sticky top-0 bg-slate-50 z-10 backdrop-blur-sm bg-opacity-90">
        {['day1', 'day2', 'day3', 'day4', 'map', 'hotspot'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-sm
              ${activeTab === tab 
                ? 'bg-blue-600 text-white shadow-blue-200 scale-105' 
                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'}`}
          >
            {tab === 'hotspot' ? '맛집&꿀팁' : tab === 'map' ? '🗺️ 지도' : tab.replace('day', 'Day ')}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="px-4">
        {activeTab === 'hotspot' ? (
          <div className="space-y-6 animate-fade-in">
            {/* Food Section */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Utensils className="text-orange-500" /> 실패 없는 맛집
              </h2>
              <div className="grid gap-3">
                {hotspots.map((spot, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                    <div>
                      <span className="text-xs font-bold text-orange-500 mb-1 block">{spot.category}</span>
                      <h3 className="font-bold text-slate-800">{spot.name}</h3>
                      <p className="text-xs text-slate-500 mt-1">{spot.desc}</p>
                    </div>
                    <a href={spot.link} target="_blank" rel="noreferrer" className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors">
                      <ChevronRight size={20} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Section */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="text-red-500" /> 전략적 팁 (Insight)
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {tips.map((tip, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-800 text-sm mb-1">{tip.title}</h3>
                    <p className="text-xs text-slate-600">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : activeTab === 'map' ? (
          renderMap()
        ) : (
          <div className="animate-fade-in">
            {renderTimeline(itinerary[activeTab])}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 p-4 text-center text-xs text-slate-400">
        Verbalized Sampling Strategy • Standard Plan A
      </div>
    </div>
  );
};

export default SapporoItinerary;