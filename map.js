// 1) 지도 생성 (id="map" 인 div에 그림)
const map = L.map('map').setView([37.296950, 126.837343], 16);

// 2) 배경 타일 (지도 배경)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// 제1공학관 해동 Open Space
const marker1 = L.marker([37.297598, 126.837419]).addTo(map);
marker1.bindPopup('<b>제1공학관 해동 Open Space</b>');

// 제5공학관 해동열람실
const marker2 = L.marker([37.296646, 126.837345]).addTo(map);
marker2.bindPopup('<b>제5공학관 해동열람실</b>');

// 학술정보관
const marker3 = L.marker([37.296890, 126.835137]).addTo(map);
marker3.bindPopup('<b>학술정보관</b>');

// 글로벌문화통상관
const marker4 = L.marker([37.299497, 126.835136]).addTo(map);
marker4.bindPopup('<b>글로벌문화통상관</b>');

// 컨퍼런스홀
const marker5 = L.marker([37.299193, 126.837069]).addTo(map);
marker5.bindPopup('<b>컨퍼런스홀</b>');

// 학생복지관
const marker6 = L.marker([37.298033, 126.834460]).addTo(map);
marker6.bindPopup('<b>학생복지관</b>');

// 학연산클러스터지원센터
const marker7 = L.marker([37.296627, 126.839054]).addTo(map);
marker7.bindPopup('<b>학연산클러스터지원센터</b>');