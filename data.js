/* ============================================================
   하우스디어반 상가 데이터 (v3 — 1F/2F 안내판 사진 기준)
   - 각 동(building)은 격자(cols×rows). 가운데 세로 복도(aisle)가
     있고 가게들이 좌/우 열로 늘어선 구조.
   - aisle: 복도가 차지하는 열 번호 (aisleFrom: 복도 시작 행)
   - marks: 화장실(wc)·계단(st)·승강기(ev) 칸 [{c,r,t}]
   - 업체 blocks: { b:'F', r:[열, 행, 열칸수, 행칸수] }
   - verified:false 는 사진 판독이 불확실한 상호 — ✏️ 편집 모드에서
     수정 후 data.js로 내보내면 됩니다.
   ============================================================ */

const FLOORS = [
  {
    id: '1F', label: '1층', w: 800, h: 1150,
    roads: {
      ring: { x: 28, y: 34, w: 744, h: 1086 },
      v: { x: 362, y: 40, w: 60, h: 1074 },
      h: [ { x: 40, y: 342, w: 720, h: 56 }, { x: 40, y: 747, w: 720, h: 56 } ],
    },
    deco: [
      { x: 400, y: 24,   s: 17, text: '↑ 코아루' },
      { x: 400, y: 1144, s: 17, text: '↓ MBC 방송국' },
      { x: 140, y: 378,  s: 14, text: '← 너티차일드' },
      { x: 660, y: 378,  s: 14, text: '스마트시티 →' },
      { x: 140, y: 783,  s: 14, text: '← 리버뷰 오피스텔' },
      { x: 660, y: 783,  s: 14, text: '스마트시티 →' },
      { x: 98,  y: 845,  s: 14, text: '◀ 주차장', c: '#C84B3B' },
      { x: 560, y: 952,  s: 14, text: '▶ 주차장', c: '#C84B3B' },
      { x: 392, y: 580,  s: 22, text: '🌳' },
      { x: 392, y: 940,  s: 22, text: '🌼' },
      { x: 392, y: 200,  s: 22, text: '🌲' },
    ],
    buildings: [
      { id: 'F', x:  50, y:  60, cols: 5, rows: 5, cw: 60, ch: 54, labelSide: 'left',
        aisle: 2, marks: [ {c:4, r:3, t:'wc'} ],
        fill: '#CFEAC8', stroke: '#7FB873', chip: '#9CD18E' },
      { id: 'A', x: 432, y:  60, cols: 5, rows: 5, cw: 60, ch: 54, labelSide: 'right',
        aisle: 2, aisleFrom: 1, marks: [],
        fill: '#FFE3BD', stroke: '#E8A85C', chip: '#F6C26B' },
      { id: 'E', x:  50, y: 410, cols: 5, rows: 6, cw: 60, ch: 54, labelSide: 'left',
        aisle: 2, marks: [ {c:2, r:0, t:'st'} ],
        fill: '#FAEFB4', stroke: '#CDB54E', chip: '#E8D26E' },
      { id: 'B', x: 432, y: 410, cols: 5, rows: 5, cw: 60, ch: 54, labelSide: 'right',
        aisle: 2, marks: [ {c:1, r:1, t:'wc'} ],
        fill: '#E2D9F8', stroke: '#9C8AD6', chip: '#BCA9EC' },
      { id: 'D', x:  50, y: 815, cols: 5, rows: 5, cw: 60, ch: 54, labelSide: 'left',
        aisle: 2, marks: [ {c:4, r:1, t:'wc'} ],
        fill: '#C8DEF6', stroke: '#7AA3D4', chip: '#9DC2E8' },
      { id: 'C', x: 432, y: 815, cols: 5, rows: 5, cw: 60, ch: 54, labelSide: 'right',
        aisle: 2, marks: [ {c:3, r:3, t:'wc'} ],
        fill: '#FBD0D8', stroke: '#DE8294', chip: '#F0A3B2' },
    ],
  },
  {
    id: '2F', label: '2층', w: 800, h: 1330,
    roads: {
      ring: { x: 28, y: 34, w: 744, h: 1266 },
      v: { x: 362, y: 40, w: 60, h: 1254 },
      h: [],
    },
    deco: [
      { x: 392, y: 350,  s: 15, text: '⬇ 중앙입구', c: '#C84B3B' },
      { x: 392, y: 620,  s: 14, text: '연결통로' },
      { x: 392, y: 1000, s: 14, text: '연결통로' },
      { x: 392, y: 180,  s: 22, text: '☁️' },
    ],
    buildings: [
      { id: 'H', x:  50, y:  60,  cols: 5, rows: 4, cw: 60, ch: 54, labelSide: 'left',
        aisle: 2, marks: [ {c:4, r:3, t:'wc'} ],
        fill: '#D9F0DC', stroke: '#74B585', chip: '#96CCA3' },
      { id: 'A', x: 432, y:  60,  cols: 5, rows: 5, cw: 60, ch: 54, labelSide: 'right',
        aisle: 2, marks: [ {c:3, r:3, t:'wc'} ],
        fill: '#FFE3BD', stroke: '#E8A85C', chip: '#F6C26B' },
      { id: 'G', x:  50, y: 330,  cols: 4, rows: 6, cw: 72, ch: 54, labelSide: 'left',
        fill: '#FCE8AE', stroke: '#D9A93F', chip: '#EBC868' },
      { id: 'B', x: 432, y: 385,  cols: 5, rows: 6, cw: 60, ch: 54, labelSide: 'right',
        aisle: 2, marks: [ {c:0, r:4, t:'wc'} ],
        fill: '#E2D9F8', stroke: '#9C8AD6', chip: '#BCA9EC' },
      { id: 'F', x:  50, y: 690,  cols: 3, rows: 2, cw: 72, ch: 54, labelSide: 'right',
        fill: '#FCE8AE', stroke: '#D9A93F', chip: '#EBC868' },
      { id: 'C', x: 432, y: 760,  cols: 3, rows: 4, cw: 80, ch: 54, labelSide: 'left',
        fill: '#FBD0D8', stroke: '#DE8294', chip: '#F0A3B2' },
      { id: 'E', x:  50, y: 850,  cols: 4, rows: 4, cw: 72, ch: 54, labelSide: 'left',
        fill: '#F6D9C4', stroke: '#D08C5B', chip: '#E5AC7E' },
      { id: 'D', x: 432, y: 1020, cols: 5, rows: 6, cw: 60, ch: 46, labelSide: 'right',
        aisle: 2, marks: [],
        fill: '#C8DEF6', stroke: '#7AA3D4', chip: '#9DC2E8' },
    ],
  },
];

const TENANTS = [
  /* ================== 1층 ================== */
  /* ---- F동 (복도 왼쪽: 메가커피~곱창 / 오른쪽: BBQ~게다) ---- */
  { id:'1f-mega',     floor:'1F', name:'메가커피',          cat:'카페',   verified:true,  blocks:[{b:'F', r:[0,0,2,1]}] },
  { id:'1f-bebe',     floor:'1F', name:'베베꼬',            cat:'식당',   verified:false, blocks:[{b:'F', r:[0,1,2,1]}] },
  { id:'1f-surin',    floor:'1F', name:'수린',              cat:'식당',   verified:false, blocks:[{b:'F', r:[0,2,2,1]}] },
  { id:'1f-cu',       floor:'1F', name:'CU 편의점',         cat:'편의점', verified:true,  blocks:[{b:'F', r:[0,3,2,1]}] },
  { id:'1f-gop',      floor:'1F', name:'군자대한곱창',      cat:'식당',   verified:true,  blocks:[{b:'F', r:[0,4,2,1]}] },
  { id:'1f-bbq',      floor:'1F', name:'BBQ 치킨',          cat:'식당',   verified:true,  blocks:[{b:'F', r:[3,0,2,1]}] },
  { id:'1f-jinro',    floor:'1F', name:'진로상회',          cat:'술집',   verified:true,  blocks:[{b:'F', r:[3,1,2,2]}] },
  { id:'1f-anda',     floor:'1F', name:'안다',              cat:'기타',   verified:false, blocks:[{b:'F', r:[3,3,1,1]}] },
  { id:'1f-geda',     floor:'1F', name:'게다',              cat:'식당',   verified:false, blocks:[{b:'F', r:[3,4,2,1]}] },

  /* ---- A동 (윗줄 작은 가게들 / 복도 왼쪽: 고래오뎅~노이 / 오른쪽: 고기명작) ---- */
  { id:'1f-flower',   floor:'1F', name:'달님은 참 예쁜 꽃', cat:'상점',   verified:false, blocks:[{b:'A', r:[0,0,1,1]}] },
  { id:'1f-ssang',    floor:'1F', name:'SSANG',             cat:'기타',   verified:false, blocks:[{b:'A', r:[1,0,1,1]}] },
  { id:'1f-gabi',     floor:'1F', name:'가비원',            cat:'카페',   verified:false, blocks:[{b:'A', r:[2,0,1,1]}] },
  { id:'1f-bonjuk',   floor:'1F', name:'본죽',              cat:'식당',   verified:true,  blocks:[{b:'A', r:[3,0,1,1]}] },
  { id:'1f-gimcheon', floor:'1F', name:'김천부동산',        cat:'사무실', verified:true,  blocks:[{b:'A', r:[4,0,1,1]}] },
  { id:'1f-gorae',    floor:'1F', name:'고래오뎅',          cat:'술집',   verified:true,  blocks:[{b:'A', r:[0,1,2,2]}] },
  { id:'1f-gobi',     floor:'1F', name:'곱이곱다',          cat:'식당',   verified:true,  blocks:[{b:'A', r:[0,3,2,1]}] },
  { id:'1f-noi',      floor:'1F', name:'노이',              cat:'카페',   verified:false, blocks:[{b:'A', r:[0,4,2,1]}] },
  { id:'1f-myeongjak',floor:'1F', name:'고기명작',          cat:'식당',   verified:true,  blocks:[{b:'A', r:[3,1,2,4]}] },

  /* ---- E동 (왼쪽: 매머드~이마트 / 오른쪽: 밀리언볼트~브알라) ---- */
  { id:'1f-mammoth',  floor:'1F', name:'매머드커피',        cat:'카페',   verified:false, blocks:[{b:'E', r:[0,0,2,1]}] },
  { id:'1f-ossi',     floor:'1F', name:'오씨칼국수',        cat:'식당',   verified:true,  blocks:[{b:'E', r:[0,1,2,1]}] },
  { id:'1f-urban',    floor:'1F', name:'어반부동산',        cat:'사무실', verified:true,  blocks:[{b:'E', r:[0,2,2,1]}] },
  { id:'1f-lbrown',   floor:'1F', name:'엘브라운 헤어살롱', cat:'뷰티',   verified:true,  blocks:[{b:'E', r:[0,3,2,1]}] },
  { id:'1f-chilbaek', floor:'1F', name:'칠백순대',          cat:'식당',   verified:true,  blocks:[{b:'E', r:[0,4,2,1]}] },
  { id:'1f-emart',    floor:'1F', name:'이마트 편의점',     cat:'편의점', verified:true,  blocks:[{b:'E', r:[0,5,2,1]}] },
  { id:'1f-million',  floor:'1F', name:'밀리언볼트',        cat:'기타',   verified:false, blocks:[{b:'E', r:[3,0,2,1]}] },
  { id:'1f-e-x1',     floor:'1F', name:'미확인',            cat:'미확인', verified:false, blocks:[{b:'E', r:[3,1,2,1]}] },
  { id:'1f-leggiero', floor:'1F', name:'레지에로',          cat:'식당',   verified:false, blocks:[{b:'E', r:[3,2,2,1]}] },
  { id:'1f-yakiniku', floor:'1F', name:'야끼니꾸',          cat:'식당',   verified:true,  blocks:[{b:'E', r:[3,3,2,1]}] },
  { id:'1f-voila',    floor:'1F', name:'브알라카페',        cat:'카페',   verified:true,  blocks:[{b:'E', r:[3,4,2,2]}] },

  /* ---- B동 (왼쪽: 심스바베큐·콩카페·명월관 / 오른쪽: 초밥~김형제) ---- */
  { id:'1f-sims',     floor:'1F', name:'심스바베큐',        cat:'식당',   verified:true,  blocks:[{b:'B', r:[0,0,2,1]}] },
  { id:'1f-cong',     floor:'1F', name:'콩카페',            cat:'카페',   verified:true,  blocks:[{b:'B', r:[0,1,1,1]}] },
  { id:'1f-myeongwol',floor:'1F', name:'명월관',            cat:'식당',   verified:true,  blocks:[{b:'B', r:[0,2,2,3]}] },
  { id:'1f-mumo',     floor:'1F', name:'무모한초밥',        cat:'식당',   verified:false, blocks:[{b:'B', r:[3,0,2,1]}] },
  { id:'1f-kuaqua',   floor:'1F', name:'Ku 아쿠아',         cat:'기타',   verified:false, blocks:[{b:'B', r:[3,1,2,1]}] },
  { id:'1f-seol',     floor:'1F', name:'설(유키)일식',      cat:'식당',   verified:true,  blocks:[{b:'B', r:[3,2,2,1]}] },
  { id:'1f-kimbros',  floor:'1F', name:'김형제 고기의 철학', cat:'식당',  verified:true,  blocks:[{b:'B', r:[3,3,2,2]}] },

  /* ---- D동 (왼쪽: 랑골로·대보건설·더리치 / 오른쪽: 마마콘~별통별) ---- */
  { id:'1f-langolo',  floor:'1F', name:'랑골로 (L\'ANGOLO)', cat:'식당',  verified:true,  blocks:[{b:'D', r:[0,0,2,1]}] },
  { id:'1f-daebo',    floor:'1F', name:'대보건설 시행사사무실', cat:'사무실', verified:true, blocks:[{b:'D', r:[0,2,2,1]}] },
  { id:'1f-therich',  floor:'1F', name:'더리치부동산',      cat:'사무실', verified:true,  blocks:[{b:'D', r:[0,4,2,1]}] },
  { id:'1f-mamacon',  floor:'1F', name:'마마콘 아마레',     cat:'카페',   verified:false, blocks:[{b:'D', r:[3,0,2,1]}] },
  { id:'1f-ukua',     floor:'1F', name:'우쿠아',            cat:'카페',   verified:false, blocks:[{b:'D', r:[3,1,1,1]}] },
  { id:'1f-jogijong', floor:'1F', name:'조기종의 향미각',   cat:'식당',   verified:true,  blocks:[{b:'D', r:[3,2,2,1]}] },
  { id:'1f-byeoltong',floor:'1F', name:'별통별 전시관',     cat:'기타',   verified:true,  blocks:[{b:'D', r:[3,4,2,1]}] },

  /* ---- C동 (왼쪽: 에스프레소바~카리코 / 오른쪽: 와우~어센티드) ---- */
  { id:'1f-espresso', floor:'1F', name:'에스프레소바',      cat:'카페',   verified:false, blocks:[{b:'C', r:[0,0,2,1]}] },
  { id:'1f-soho',     floor:'1F', name:'105소호',           cat:'기타',   verified:false, blocks:[{b:'C', r:[0,2,1,1]}] },
  { id:'1f-kariko',   floor:'1F', name:'카리코',            cat:'기타',   verified:false, blocks:[{b:'C', r:[0,3,1,1]}] },
  { id:'1f-c-x1',     floor:'1F', name:'미확인',            cat:'미확인', verified:false, blocks:[{b:'C', r:[0,4,1,1]}] },
  { id:'1f-wow',      floor:'1F', name:'와우 아이스크림',   cat:'디저트', verified:true,  blocks:[{b:'C', r:[3,0,2,1]}] },
  { id:'1f-mylab',    floor:'1F', name:'마이램9',           cat:'기타',   verified:false, blocks:[{b:'C', r:[3,1,2,1]}] },
  { id:'1f-ascented', floor:'1F', name:'어센티드',          cat:'상점',   verified:false, blocks:[{b:'C', r:[3,4,2,1]}] },

  /* ================== 2층 ================== */
  /* ---- H동 ---- */
  { id:'2f-jjang',    floor:'2F', name:'짱이맛 감자탕',     cat:'식당',   verified:false, blocks:[{b:'H', r:[0,0,2,1]}] },
  { id:'2f-daro',     floor:'2F', name:'다로갈비',          cat:'식당',   verified:true,  blocks:[{b:'H', r:[0,1,2,2]}] },
  { id:'2f-geost',    floor:'2F', name:'지오스트',          cat:'기타',   verified:false, blocks:[{b:'H', r:[0,3,2,1]}] },
  { id:'2f-goban',    floor:'2F', name:'고반식당',          cat:'식당',   verified:true,  blocks:[{b:'H', r:[3,0,2,1]}] },
  { id:'2f-owner',    floor:'2F', name:'오너커피 (Owners Coffee)', cat:'카페', verified:true, blocks:[{b:'H', r:[3,1,2,2]}] },

  /* ---- A동 ---- */
  { id:'2f-bronx',    floor:'2F', name:'브롱스 (Bronx)',    cat:'술집',   verified:false, blocks:[{b:'A', r:[0,0,2,1]}] },
  { id:'2f-a-x1',     floor:'2F', name:'미확인',            cat:'미확인', verified:false, blocks:[{b:'A', r:[0,1,2,2]}] },
  { id:'2f-shabu',    floor:'2F', name:'오늘도 샤브',       cat:'식당',   verified:true,  blocks:[{b:'A', r:[0,3,2,1]}] },
  { id:'2f-about',    floor:'2F', name:'어바웃타임',        cat:'카페',   verified:false, blocks:[{b:'A', r:[3,0,2,1]}] },
  { id:'2f-obong',    floor:'2F', name:'오봉집',            cat:'식당',   verified:true,  blocks:[{b:'A', r:[3,1,2,1]}] },
  { id:'2f-yuseong',  floor:'2F', name:'유성불백',          cat:'식당',   verified:true,  blocks:[{b:'A', r:[3,2,2,1]}] },

  /* ---- G동 + F동 : 너티차일드 키즈카페 ---- */
  { id:'2f-naughty',  floor:'2F', name:'너티차일드 키즈카페', cat:'키즈', verified:true,
    blocks:[{b:'G', r:[0,0,4,6]}, {b:'F', r:[0,0,3,2]}] },

  /* ---- B동 ---- */
  { id:'2f-mara',     floor:'2F', name:'마라공방',          cat:'식당',   verified:true,  blocks:[{b:'B', r:[0,0,2,1]}] },
  { id:'2f-daecheong',floor:'2F', name:'대청일존 오징어찌개', cat:'식당', verified:false, blocks:[{b:'B', r:[0,1,2,1]}] },
  { id:'2f-forest',   floor:'2F', name:'포레스트 오늘,숲',  cat:'카페',   verified:false, blocks:[{b:'B', r:[0,2,2,1]}] },
  { id:'2f-osdang',   floor:'2F', name:'오스당',            cat:'기타',   verified:false, blocks:[{b:'B', r:[3,0,2,1]}] },
  { id:'2f-kimchi',   floor:'2F', name:'오늘도 김치찌개',   cat:'식당',   verified:true,  blocks:[{b:'B', r:[3,1,2,1]}] },
  { id:'2f-daol',     floor:'2F', name:'다올 에스테틱',     cat:'뷰티',   verified:true,  blocks:[{b:'B', r:[3,2,2,1]}] },
  { id:'2f-touching', floor:'2F', name:'터칭힐 1:1 PT',     cat:'운동',   verified:false, blocks:[{b:'B', r:[3,3,2,1]}] },
  { id:'2f-pilates',  floor:'2F', name:'주 필라테스',       cat:'운동',   verified:false, blocks:[{b:'B', r:[3,4,2,1]}] },
  { id:'2f-geumseong',floor:'2F', name:'금성삼계탕',        cat:'식당',   verified:true,  blocks:[{b:'B', r:[3,5,2,1]}] },

  /* ---- C동 ---- */
  { id:'2f-friends',  floor:'2F', name:'프렌즈 스크린골프', cat:'운동',   verified:true,  blocks:[{b:'C', r:[0,0,3,3]}] },
  { id:'2f-seoseo',   floor:'2F', name:'서서족발',          cat:'식당',   verified:true,  blocks:[{b:'C', r:[0,3,3,1]}] },

  /* ---- E동 ---- */
  { id:'2f-dielk',    floor:'2F', name:'디엘크 골프라운지', cat:'운동',   verified:true,
    blocks:[{b:'E', r:[0,0,2,2]}, {b:'E', r:[2,1,2,3]}] },
  { id:'2f-e-x1',     floor:'2F', name:'미확인',            cat:'미확인', verified:false, blocks:[{b:'E', r:[2,0,2,1]}] },
  { id:'2f-bastet',   floor:'2F', name:'바스텟 고양이병원', cat:'기타',   verified:true,  blocks:[{b:'E', r:[0,2,2,2]}] },

  /* ---- D동 (왼쪽: 네일~건설 / 오른쪽: 만리장성 / 하단: 편백연가) ---- */
  { id:'2f-amang',    floor:'2F', name:'아망네일',          cat:'뷰티',   verified:false, blocks:[{b:'D', r:[0,0,1,1]}] },
  { id:'2f-d-x1',     floor:'2F', name:'미확인',            cat:'미확인', verified:false, blocks:[{b:'D', r:[1,0,1,1]}] },
  { id:'2f-dessert',  floor:'2F', name:'디저트마음',        cat:'디저트', verified:false, blocks:[{b:'D', r:[0,1,2,1]}] },
  { id:'2f-woohwa',   floor:'2F', name:'우화뷰티',          cat:'뷰티',   verified:false, blocks:[{b:'D', r:[0,2,2,1]}] },
  { id:'2f-hk',       floor:'2F', name:'HK종합건설',        cat:'사무실', verified:false, blocks:[{b:'D', r:[0,3,2,1]}] },
  { id:'2f-manri',    floor:'2F', name:'만리장성',          cat:'식당',   verified:true,  blocks:[{b:'D', r:[3,0,2,4]}] },
  { id:'2f-pyeonbaek',floor:'2F', name:'편백연가',          cat:'식당',   verified:true,  blocks:[{b:'D', r:[0,4,5,2]}] },
];

const CATEGORIES = ['전체','식당','카페','술집','디저트','편의점','상점','뷰티','운동','키즈','사무실','기타'];

const CAT_EMOJI = {
  '식당':'🍚', '카페':'☕', '술집':'🍺', '디저트':'🍰', '편의점':'🏪',
  '상점':'🎁', '뷰티':'💈', '운동':'⛳', '키즈':'🧸', '사무실':'🏢',
  '기타':'✨', '미확인':'❓',
};
