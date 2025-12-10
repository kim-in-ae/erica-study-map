const map = L.map('map').setView([37.296950, 126.837343], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19,
    attribution:'&copy;OpenStreetMap contributors'
}).addTo(map);
fetch('locations.json')
.then(response => response.json())
.then(data => {
    data.forEach(item=>{
        const marker = L.marker([item.lat, item.lng]).addTo(map);
        marker.bindPopup(`<b>${item.name}</b><br>${item.desc}<br>${item.type}
</i>`
 );
    });
})
.catch(error => console.error('Json 로드 에러:', error));