const channels = [
    { name: "Al Jazeera English (১০০% চলবে)", category: "Bangla", logo: "AJ Live", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "TRT World News (১০০% চলবে)", category: "Sports", logo: "TRT Live", url: "https://trtworld.daastreaming.com/live.m3u8" },
    { name: "NASA TV Space (১০০% চলবে)", category: "Indian", logo: "NASA", url: "https://ntvlive-lh.akamaihd.net/i/NASA_1@301454/master.m3u8" },
    { name: "Football World Cup 2026 [Server 1]", category: "Sports", logo: "⚽ WC1", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "T Sports Live [Server 1]", category: "Sports", logo: "T Sp1", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "Gazi TV (GTV Live)", category: "Sports", logo: "GTV", url: "https://bdiptv.stream:8081/gtv/index.m3u8" },
    { name: "Star Jalsha [Server 1]", category: "Indian", logo: "Jalsha 1", url: "https://bdiptv.stream:8081/starjalsha/index.m3u8" },
    { name: "Zee Bangla [Server 1]", category: "Indian", logo: "Zee B 1", url: "https://bdiptv.stream:8081/zeebangla/index.m3u8" },
    { name: "Sony Aath (সনি আট)", category: "Indian", logo: "Sony 8", url: "https://bdiptv.stream:8081/sonyaath/index.m3u8" }
];

const video = document.getElementById('video');
const container = document.getElementById('channelContainer');

function displayChannels(filter) {
    if (!container) return;
    container.innerHTML = "";
    
    channels.forEach(channel => {
        if (filter === 'All' || channel.category === filter) {
            const card = document.createElement('div');
            card.className = 'channel-card';
            card.addEventListener('click', function() {
                playM3U8(channel.url);
            });

            card.innerHTML = `
                <div class="channel-logo">${channel.logo}</div>
                <div class="channel-info">
                    <h5>${channel.name}</h5>
                    <p>${channel.category}</p>
                </div>
            `;
            container.appendChild(card);
        }
    });
}

function filterCategory(categoryName) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    displayChannels(categoryName);
}

function playM3U8(url) {
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play().catch(error => console.log("Blocked:", error));
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', () => video.play());
    } else {
        alert("HLS Playback Error!");
    }
}

document.addEventListener("DOMContentLoaded", () => displayChannels('All'));
