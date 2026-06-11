// ১. আপনার অ্যাপের জন্য বড় চ্যানেল ডাটাবেজ (খেলার স্পেশাল, ইন্ডিয়ান ও বাংলাদেশী চ্যানেল)
const channels = [
    // === ফুটবল ওয়ার্ল্ড কাপ ২০২৬ স্পেশাল সার্ভার (Football World Cup 2026) ===
    {
        name: "Football World Cup 2026 [Server 1]",
        category: "Sports",
        logo: "⚽ WC1",
        url: "https://bdiptv.stream:8081/tsports/index.m3u8" // সচল লিংকের ব্যাকআপ
    },
    {
        name: "Football World Cup 2026 [Server 2]",
        category: "Sports",
        logo: "⚽ WC2",
        url: "https://bdiptv.stream:8081/gtv/index.m3u8"
    },
    {
        name: "Football World Cup 2026 [Server 3]",
        category: "Sports",
        logo: "⚽ WC3",
        url: "https://live-alsat.secure.footprint.net/atv/index.m3u8"
    },
    {
        name: "Football World Cup 2026 [Server 4]",
        category: "Sports",
        logo: "⚽ WC4",
        url: "https://ntvlive-lh.akamaihd.net/i/NASA_1@301454/master.m3u8"
    },

    // === মেইন খেলার চ্যানেল (Sports Channels) ===
    {
        name: "T Sports [Server 1]",
        category: "Sports",
        logo: "T Sports",
        url: "https://bdiptv.stream:8081/tsports/index.m3u8"
    },
    {
        name: "T Sports [Server 3]",
        category: "Sports",
        logo: "T Sports",
        url: "https://bdiptv.stream:8081/tsports/index.m3u8"
    },
    {
        name: "Gazi TV (GTV Live)",
        category: "Sports",
        logo: "GTV",
        url: "https://bdiptv.stream:8081/gtv/index.m3u8"
    },
    {
        name: "Star Sports 1 HD",
        category: "Sports",
        logo: "Star Sp",
        url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8"
    },
    {
        name: "Sony Sports Ten 2 HD",
        category: "Sports",
        logo: "Sony T2",
        url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8"
    },
    {
        name: "Sony Sports Ten 3 HD",
        category: "Sports",
        logo: "Sony T3",
        url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8"
    },
    {
        name: "Live Sports [Server 6]",
        category: "Sports",
        logo: "Live Sp",
        url: "https://live-alsat.secure.footprint.net/atv/index.m3u8"
    },
    {
        name: "Willow [Server 1]",
        category: "Sports",
        logo: "Willow",
        url: "https://bdiptv.stream:8081/tsports/index.m3u8"
    },
    {
        name: "Premier League",
        category: "Sports",
        logo: "PL Live",
        url: "https://pubads.g.doubleclick.net/ssai/event/E8-F_r9vTrS8vP7m0p3e2w/master.m3u8"
    },

    // === বাংলাদেশী চ্যানেল (Bangla Channels) ===
    {
        name: "BTV (বাংলাদেশ টেলিভিশন)",
        category: "Bangla",
        logo: "BTV",
        url: "https://bdiptv.stream:8081/btv/index.m3u8"
    },
    {
        name: "Somoy TV [Server 1]",
        category: "Bangla",
        logo: "সময় ১",
        url: "https://bdiptv.stream:8081/somoy/index.m3u8"
    },
    {
        name: "Somoy TV [Server 2]",
        category: "Bangla",
        logo: "সময় ২",
        url: "https://bdiptv.stream:8081/somoy/index.m3u8"
    },
    {
        name: "Ekattor TV [Server 1]",
        category: "Bangla",
        logo: "৭১",
        url: "https://bdiptv.stream:8081/ekattor/index.m3u8"
    },
    {
        name: "Channel 24 [Server 1]",
        category: "Bangla",
        logo: "Ch 24",
        url: "https://bdiptv.stream:8081/channel24/index.m3u8"
    },
    {
        name: "Nagorik TV",
        category: "Bangla",
        logo: "নাগরিক",
        url: "https://bdiptv.stream:8081/nagoriktv/index.m3u8"
    },

    // === ইন্ডিয়ান বিনোদন চ্যানেল (Indian Channels) ===
    {
        name: "Star Jalsha (স্টার জলসা)",
        category: "Indian",
        logo: "Jalsha",
        url: "https://bdiptv.stream:8081/starjalsha/index.m3u8"
    },
    {
        name: "Zee Bangla (জি বাংলা)",
        category: "Indian",
        logo: "Zee",
        url: "https://bdiptv.stream:8081/zeebangla/index.m3u8"
    },
    {
        name: "Sony Aath (সনি আট)",
        category: "Indian",
        logo: "Sony Aath",
        url: "https://bdiptv.stream:8081/sonyaath/index.m3u8"
    },
    {
        name: "Jalsha Movies",
        category: "Indian",
        logo: "J Movies",
        url: "https://bdiptv.stream:8081/jalshamovies/index.m3u8"
    }
];

const video = document.getElementById('video');
const container = document.getElementById('channelContainer');

// ২. স্ক্রিনে চ্যানেল লিস্ট রেন্ডার বা দেখানোর ফাংশন
function displayChannels(filter) {
    container.innerHTML = ""; // আগের লিস্ট ক্লিয়ার করা
    
    channels.forEach(channel => {
        if (filter === 'All' || channel.category === filter) {
            // প্রতিটি চ্যানেলের জন্য কার্ড ডিজাইন
            const card = document.createElement('div');
            card.className = 'channel-card';
            card.onclick = () => playM3U8(channel.url);

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

// ৩. ক্যাটাগরি বাটন সিলেক্ট ফিল্টার
function filterCategory(categoryName) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    displayChannels(categoryName);
}

// ৪. M3U8 ভিডিও স্ট্রিমিং প্লেয়ার লজিক
function playM3U8(url) {
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    } else {
        alert("আপনার ব্রাউজারে লাইভ টিভি প্লে করা সম্ভব হচ্ছে না।");
    }
}

// অ্যাপ খোলার সাথে সাথে সব চ্যানেল একবারে দেখাবে
displayChannels('All');
