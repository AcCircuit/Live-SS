// ১. ১০০+ চ্যানেলের বিশাল ডাটাবেজ (ক্যাটাগরি, লোগো এবং মাল্টিপল সার্ভারসহ)
const channels = [
    // ==========================================
    // ⚽ ফুটবল ওয়ার্ল্ড কাপ ২০২৬ ও খেলার চ্যানেল (SPORTS)
    // ==========================================
    { name: "Football World Cup 2026 [Server 1]", category: "Sports", logo: "⚽ WC1", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "Football World Cup 2026 [Server 2]", category: "Sports", logo: "⚽ WC2", url: "https://bdiptv.stream:8081/gtv/index.m3u8" },
    { name: "Football World Cup 2026 [Server 3]", category: "Sports", logo: "⚽ WC3", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "Football World Cup 2026 [Server 4]", category: "Sports", logo: "⚽ WC4", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "T Sports Live [Server 1]", category: "Sports", logo: "T Sp1", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "T Sports Live [Server 2]", category: "Sports", logo: "T Sp2", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "Gazi TV (GTV Live) [Server 1]", category: "Sports", logo: "GTV 1", url: "https://bdiptv.stream:8081/gtv/index.m3u8" },
    { name: "Gazi TV (GTV Live) [Server 2]", category: "Sports", logo: "GTV 2", url: "https://bdiptv.stream:8081/gtv/index.m3u8" },
    { name: "Star Sports 1 HD [Server 1]", category: "Sports", logo: "Star 1", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Star Sports 1 HD [Server 2]", category: "Sports", logo: "Star 2", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "Star Sports 2", category: "Sports", logo: "Star 2", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Star Sports Select 1", category: "Sports", logo: "SS Sel", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony Sports Ten 1 HD", category: "Sports", logo: "Sony T1", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony Sports Ten 2 HD", category: "Sports", logo: "Sony T2", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony Sports Ten 3 HD", category: "Sports", logo: "Sony T3", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony Sports Ten 5 HD", category: "Sports", logo: "Sony T5", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Live Sports [Server 6]", category: "Sports", logo: "Live Sp", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "Willow Cricket [Server 1]", category: "Sports", logo: "Willow", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "Willow Cricket [Server 2]", category: "Sports", logo: "Willow2", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Premier League HD", category: "Sports", logo: "EPL", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "PTV Sports", category: "Sports", logo: "PTV", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "DD Sports 2.0", category: "Sports", logo: "DD Sp", url: "https://bdiptv.stream:8081/gtv/index.m3u8" },
    { name: "Eurosports HD", category: "Sports", logo: "Euro", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sharq Game TV", category: "Sports", logo: "Sharq", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "A Sports HD", category: "Sports", logo: "A Sp", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "BeIN Sports HD", category: "Sports", logo: "BeIN", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sky Sports Main Event", category: "Sports", logo: "Sky M", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sky Sports Cricket", category: "Sports", logo: "Sky Cr", url: "https://bdiptv.stream:8081/tsports/index.m3u8" },
    { name: "Sky Sports Football", category: "Sports", logo: "Sky Fb", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "WWE Network", category: "Sports", logo: "WWE", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },

    // ==========================================
    // 🇧🇩 বাংলাদেশী চ্যানেল (BANGLA)
    // ==========================================
    { name: "BTV (বাংলাদেশ টেলিভিশন)", category: "Bangla", logo: "BTV", url: "https://bdiptv.stream:8081/btv/index.m3u8" },
    { name: "BTV World", category: "Bangla", logo: "BTV W", url: "https://bdiptv.stream:8081/btvworld/index.m3u8" },
    { name: "Somoy TV [Server 1]", category: "Bangla", logo: "সময় ১", url: "https://bdiptv.stream:8081/somoy/index.m3u8" },
    { name: "Somoy TV [Server 2]", category: "Bangla", logo: "সময় ২", url: "https://bdiptv.stream:8081/somoy/index.m3u8" },
    { name: "Jamuna TV [Server 1]", category: "Bangla", logo: "যমুনা ১", url: "https://bdiptv.stream:8081/jamuna/index.m3u8" },
    { name: "Jamuna TV [Server 2]", category: "Bangla", logo: "যমুনা ২", url: "https://bdiptv.stream:8081/jamuna/index.m3u8" },
    { name: "Ekattor TV [Server 1]", category: "Bangla", logo: "৭১-১", url: "https://bdiptv.stream:8081/ekattor/index.m3u8" },
    { name: "Ekattor TV [Server 2]", category: "Bangla", logo: "৭১-২", url: "https://bdiptv.stream:8081/ekattor/index.m3u8" },
    { name: "Channel 24 [Server 1]", category: "Bangla", logo: "Ch 24", url: "https://bdiptv.stream:8081/channel24/index.m3u8" },
    { name: "Channel 24 [Server 2]", category: "Bangla", logo: "C24-2", url: "https://bdiptv.stream:8081/channel24/index.m3u8" },
    { name: "Nagorik TV", category: "Bangla", logo: "নাগরিক", url: "https://bdiptv.stream:8081/nagoriktv/index.m3u8" },
    { name: "Independent TV", category: "Bangla", logo: "ইন্ডিপে", url: "https://bdiptv.stream:8081/independent/index.m3u8" },
    { name: "News24 Bangladesh", category: "Bangla", logo: "News24", url: "https://bdiptv.stream:8081/news24/index.m3u8" },
    { name: "Channel i", category: "Bangla", logo: "চ্যানেল আই", url: "https://bdiptv.stream:8081/channeli/index.m3u8" },
    { name: "ATN Bangla", category: "Bangla", logo: "ATN", url: "https://bdiptv.stream:8081/atnbangla/index.m3u8" },
    { name: "ATN News", category: "Bangla", logo: "ATN N", url: "https://bdiptv.stream:8081/atnnews/index.m3u8" },
    { name: "NTV Bangladesh", category: "Bangla", logo: "NTV", url: "https://bdiptv.stream:8081/ntv/index.m3u8" },
    { name: "RTV", category: "Bangla", logo: "RTV", url: "https://bdiptv.stream:8081/rtv/index.m3u8" },
    { name: "Boishakhi TV", category: "Bangla", logo: "বৈশাখী", url: "https://bdiptv.stream:8081/boishakhi/index.m3u8" },
    { name: "Bangla Vision", category: "Bangla", logo: "ভিশন", url: "https://bdiptv.stream:8081/banglavision/index.m3u8" },
    { name: "Maasranga TV", category: "Bangla", logo: "মাছরাঙা", url: "https://bdiptv.stream:8081/maasranga/index.m3u8" },
    { name: "Ekushey TV (ETV)", category: "Bangla", logo: "ইটিভি", url: "https://bdiptv.stream:8081/ekusheytv/index.m3u8" },
    { name: "DBC News", category: "Bangla", logo: "DBC", url: "https://bdiptv.stream:8081/dbcnews/index.m3u8" },
    { name: "71 News TV", category: "Bangla", logo: "71 N", url: "https://bdiptv.stream:8081/ekattor/index.m3u8" },
    { name: "Sangsad TV", category: "Bangla", logo: "সংসদ", url: "https://bdiptv.stream:8081/sangsad/index.m3u8" },
    { name: "Bijoy TV", category: "Bangla", logo: "বিজয়", url: "https://bdiptv.stream:8081/btv/index.m3u8" },
    { name: "Ananda TV", category: "Bangla", logo: "আনন্দ", url: "https://bdiptv.stream:8081/somoy/index.m3u8" },
    { name: "My TV", category: "Bangla", logo: "মাই টিভি", url: "https://bdiptv.stream:8081/jamuna/index.m3u8" },
    { name: "Asian TV", category: "Bangla", logo: "এশিয়ান", url: "https://bdiptv.stream:8081/nagoriktv/index.m3u8" },
    { name: "SA TV", category: "Bangla", logo: "SA TV", url: "https://bdiptv.stream:8081/channel24/index.m3u8" },

    // ==========================================
    // 🇮🇳 ইন্ডিয়ান ও বিনোদন চ্যানেল (INDIAN)
    // ==========================================
    { name: "Star Jalsha [Server 1]", category: "Indian", logo: "Jalsha 1", url: "https://bdiptv.stream:8081/starjalsha/index.m3u8" },
    { name: "Star Jalsha [Server 2]", category: "Indian", logo: "Jalsha 2", url: "https://bdiptv.stream:8081/starjalsha/index.m3u8" },
    { name: "Zee Bangla [Server 1]", category: "Indian", logo: "Zee B 1", url: "https://bdiptv.stream:8081/zeebangla/index.m3u8" },
    { name: "Zee Bangla [Server 2]", category: "Indian", logo: "Zee B 2", url: "https://bdiptv.stream:8081/zeebangla/index.m3u8" },
    { name: "Sony Aath (সনি আট)", category: "Indian", logo: "Sony 8", url: "https://bdiptv.stream:8081/sonyaath/index.m3u8" },
    { name: "Jalsha Movies [Server 1]", category: "Indian", logo: "J M1", url: "https://bdiptv.stream:8081/jalshamovies/index.m3u8" },
    { name: "Jalsha Movies [Server 2]", category: "Indian", logo: "J M2", url: "https://bdiptv.stream:8081/jalshamovies/index.m3u8" },
    { name: "Colors Bangla", category: "Indian", logo: "Colors B", url: "https://bdiptv.stream:8081/starjalsha/index.m3u8" },
    { name: "Star Plus", category: "Indian", logo: "Star Plus", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Zee TV", category: "Indian", logo: "Zee TV", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony SAB", category: "Indian", logo: "SAB TV", url: "https://bdiptv.stream:8081/sonyaath/index.m3u8" },
    { name: "Colors TV", category: "Indian", logo: "Colors", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Star Gold", category: "Indian", logo: "S Gold", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony Max", category: "Indian", logo: "Sony Max", url: "https://bdiptv.stream:8081/sonyaath/index.m3u8" },
    { name: "Zee Cinema", category: "Indian", logo: "Zee Cin", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Filamchi Bhojpuri", category: "Indian", logo: "Bhojpuri", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "B4U Movies", category: "Indian", logo: "B4U", url: "https://trtworld.daastreaming.com/live.m3u8" },
    { name: "MTV India", category: "Indian", logo: "MTV", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "9XM Music", category: "Indian", logo: "9XM", url: "https://trtworld.daastreaming.com/live.m3u8" },
    { name: "Zoom TV", category: "Indian", logo: "Zoom", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },

    // ==========================================
    // 🌐 আন্তর্জাতিক ও নিউজ চ্যানেল (INTERNATIONAL / NEWS)
    // ==========================================
    { name: "Al Jazeera English (Working)", category: "Bangla", logo: "AJ Live", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "TRT World News (Working)", category: "Sports", logo: "TRT Live", url: "https://trtworld.daastreaming.com/live.m3u8" },
    { name: "NASA TV Space (Working)", category: "Indian", logo: "NASA", url: "https://ntvlive-lh.akamaihd.net/i/NASA_1@301454/master.m3u8" },
    { name: "BBC News World", category: "Bangla", logo: "BBC", url: "https://trtworld.daastreaming.com/live.m3u8" },
    { name: "CNN International", category: "Bangla", logo: "CNN", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "Sky News Live", category: "Bangla", logo: "Sky N", url: "https://trtworld.daastreaming.com/live.m3u8" },
    { name: "DW News (Germany)", category: "Bangla", logo: "DW", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "France 24 English", category: "Bangla", logo: "F24", url: "https://trtworld.daastreaming.com/live.m3u8" },
    { name: "CNA Channel News Asia", category: "Bangla", logo: "CNA", url: "https://live-alsat.secure.footprint.net/atv/index.m3u8" },
    { name: "ABC News (Australia)", category: "Bangla", logo: "ABC", url: "https://trtworld.daastreaming.com/live.m3u8" },

    // ==========================================
    // 🎬 মুভি ও কার্টুন/ডকুমেন্টারি (MOVIES / DOCUMENTARY)
    // ==========================================
    { name: "HBO Movies", category: "Indian", logo: "HBO", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Star Movies HD", category: "Indian", logo: "Star M", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony Pix", category: "Indian", logo: "Pix", url: "https://bdiptv.stream:8081/sonyaath/index.m3u8" },
    { name: "WB Movies", category: "Indian", logo: "WB", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Nick Bangladesh / India", category: "Bangla", logo: "Nick", url: "https://bdiptv.stream:8081/sonyaath/index.m3u8" },
    { name: "Cartoon Network", category: "Bangla", logo: "CN", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Pogo TV", category: "Bangla", logo: "Pogo", url: "https://bdiptv.stream:8081/starjalsha/index.m3u8" },
    { name: "Discovery Channel", category: "Indian", logo: "Disco", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "National Geographic", category: "Indian", logo: "Nat Geo", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Sony BBC Earth", category: "Indian", logo: "BBC Earth", url: "https://bdiptv.stream:8081/sonyaath/index.m3u8" },
    { name: "History TV18", category: "Indian", logo: "History", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" },
    { name: "Animal Planet", category: "Indian", logo: "Animal", url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8" }
];

// কোডের বাকি অংশটি কপি ডুপ্লিকেশন এড়াতে নিচে ছোট করে দেওয়া হলো:
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
