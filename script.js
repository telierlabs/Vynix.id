// Movie data (Data dummy untuk film)
const movies = {
    // 💥 FILM BARU DI BAGIAN UTAMA (HERO BANNER) 💥
    'Anak Ajaib': {
        title: 'Anak Ajaib', year: '2025', duration: '1h 45m', genre: 'Fantasy, Adventure, Sci-Fi', rating: '8.8',
        description: 'Seorang anak muda dengan bakat luar biasa harus memilih antara kehidupan normal dan takdir untuk menyelamatkan dunia dari ancaman yang tak terlihat. Streaming eksklusif dengan teknologi AI VYNIX.',
        banner: 'https://placehold.co/1920x1080/4CAF50/FFFFFF?text=ANAK+AJAIB+VYNIX+AI'
    },
    // ------------------------------------------------
    'The Dark Knight': {
        title: 'The Dark Knight', year: '2008', duration: '2h 32m', genre: 'Action, Crime, Drama', rating: '9.0',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        banner: 'https://placehold.co/1920x1080/000000/FFFFFF?text=The+Dark+Knight'
    },
    'Inception': {
        title: 'Inception', year: '2010', duration: '2h 28m', genre: 'Action, Sci-Fi, Thriller', rating: '8.8',
        description: 'Seorang pencuri yang mencuri rahasia perusahaan melalui penggunaan teknologi berbagi mimpi diberi tugas terbalik untuk menanamkan ide ke dalam pikiran seorang C.E.O.',
        banner: 'https://placehold.co/1920x1080/222222/FFFFFF?text=Inception'
    },
    'Interstellar': {
        title: 'Interstellar', year: '2014', duration: '2h 49m', genre: 'Adventure, Drama, Sci-Fi', rating: '8.6',
        description: 'Sebuah tim penjelajah melakukan perjalanan melalui lubang cacing di ruang angkasa dalam upaya untuk memastikan kelangsungan hidup umat manusia.',
        banner: 'https://placehold.co/1920x1080/333333/FFFFFF?text=Interstellar'
    },
    'Parasite': {
        title: 'Parasite', year: '2019', duration: '2h 12m', genre: 'Comedy, Drama, Thriller', rating: '8.5',
        description: 'Ketamakan dan diskriminasi kelas mengancam hubungan simbiosis yang baru terbentuk antara keluarga Park yang kaya dan klan Kim yang miskin.',
        banner: 'https://placehold.co/1920x1080/444444/FFFFFF?text=Parasite'
    },
    'Stranger Things': {
        title: 'Stranger Things', year: '2016-2022', duration: 'Season 4', genre: 'Drama, Fantasy, Horror', rating: '8.7',
        description: 'Ketika seorang anak laki-laki menghilang, ibunya, seorang kepala polisi dan teman-temannya harus menghadapi kekuatan supernatural yang menakutkan untuk mendapatkannya kembali.',
        banner: 'https://placehold.co/1920x1080/555555/FFFFFF?text=Stranger+Things'
    },
    'The Last of Us': {
        title: 'The Last of Us', year: '2023', duration: 'Season 1', genre: 'Action, Adventure, Drama', rating: '8.8',
        description: 'Setelah pandemi global menghancurkan peradaban, seorang penyintas yang tangguh mengambil alih seorang gadis berusia 14 tahun yang mungkin menjadi harapan terakhir umat manusia.',
        banner: 'https://placehold.co/1920x1080/666666/FFFFFF?text=The+Last+of+Us'
    },
    'Succession': {
        title: 'Succession', year: '2018-2023', duration: 'Season 4', genre: 'Comedy, Drama', rating: '8.9',
        description: 'Keluarga Roy dikenal karena mengontrol perusahaan media dan hiburan terbesar di dunia. Namun, dunia mereka berubah ketika ayah mereka mundur dari perusahaan.',
        banner: 'https://placehold.co/1920x1080/777777/FFFFFF?text=Succession'
    },
    'The Bear': {
        title: 'The Bear', year: '2022-2023', duration: 'Season 2', genre: 'Comedy, Drama', rating: '8.6',
        description: 'Seorang koki muda dari dunia fine dining kembali ke Chicago untuk menjalankan toko sandwich keluarganya.',
        banner: 'https://placehold.co/1920x1080/888888/FFFFFF?text=The+Bear'
    },
    'Pulp Fiction': {
        title: 'Pulp Fiction', year: '1994', duration: '2h 34m', genre: 'Crime, Drama', rating: '8.9',
        description: 'Kehidupan dua pembunuh bayaran mafia, seorang petinju, seorang gangster dan istrinya, dan sepasang bandit restoran saling terkait dalam empat kisah kekerasan dan penebusan.',
        banner: 'https://placehold.co/1920x1080/999999/FFFFFF?text=Pulp+Fiction'
    },
    'The Shawshank Redemption': {
        title: 'The Shawshank Redemption', year: '1994', duration: '2h 22m', genre: 'Drama', rating: '9.3',
        description: 'Dua pria yang dipenjara menjalin ikatan selama beberapa tahun, menemukan penghiburan dan penebusan akhir melalui tindakan kesopanan umum.',
        banner: 'https://placehold.co/1920x1080/eeeeee/000000?text=Shawshank+Redemption'
    },
    'House of the Dragon': {
        title: 'House of the Dragon', year: '2022', duration: 'Season 1', genre: 'Action, Adventure, Drama', rating: '8.5',
        description: 'Kisah House Targaryen yang diatur 200 tahun sebelum peristiwa Game of Thrones.',
        banner: 'https://placehold.co/1920x1080/ffffff/000000?text=House+of+the+Dragon'
    },
    'Quantum Genesis': {
        title: 'Quantum Genesis', year: '2025', duration: '1h 50m', genre: 'Sci-Fi, Thriller', rating: '8.7',
        description: 'Sebuah eksplorasi mendalam tentang awal mula kecerdasan buatan dan dampaknya pada realitas manusia.',
        banner: 'https://placehold.co/1920x1080/333333/FFFFFF?text=Quantum+Genesis'
    },
    'The Matrix Reloaded': {
        title: 'The Matrix Reloaded', year: '2003', duration: '2h 18m', genre: 'Action, Sci-Fi', rating: '7.2',
        description: 'Neo dan para pemberontak berlomba untuk menyelamatkan Zion dari serangan ribuan Mesin.',
        banner: 'https://placehold.co/1920x1080/111111/FFFFFF?text=The+Matrix+Reloaded'
    }
};

// Global State
let currentPage = 'home-page';
const backStack = [];
let currentMovie = null; 
let isPlaying = false; 

let user = {
    isLoggedIn: false, 
    name: 'Tamu VYNIX',
    email: 'login untuk personalisasi',
    picture: 'https://placehold.co/100x100/333333/FFFFFF?text=A'
};

// --- Peta Navigasi untuk Teks Sidebar (DIHILANGKAN: movies-page, series-page) ---
const navMap = {
    'home-page': 'Beranda',
    'mylist-page': 'Daftar Saya',
    'profile-page': 'Profil',
    'subscription-page': 'Langganan',
    'movie-detail': 'Detail Film', // Tambahkan untuk konsistensi back button text
    'video-page': 'Video Player' // Tambahkan untuk konsistensi back button text
};

// -------------------------------------------------------------------------
// 🚀 FUNGSI UTILITY & NAVIGASI 🚀
// -------------------------------------------------------------------------

/**
 * Membuka atau menutup sidebar menu.
 */
function toggleSidebar() {
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
        
        // Update nama dan gambar profil di sidebar saat dibuka
        if (sidebar.classList.contains('open')) {
            const profileName = document.getElementById('sidebar-profile-name');
            const profileImg = document.getElementById('sidebar-profile-img');

            if (profileName) profileName.textContent = user.name;
            if (profileImg) profileImg.src = user.picture;
        }
    }
}


function hideAllPages() {
    document.querySelectorAll('.page-content').forEach(page => {
        // PERBAIKAN: Gunakan style.display = 'none' untuk semua
        page.style.display = 'none';
    });
    
    // Pastikan header dan footer kembali terlihat (kecuali saat di video player)
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');
    if (header) header.classList.remove('hidden');
    if (footer) footer.classList.remove('hidden');

    // Tutup sidebar jika terbuka
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && overlay && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    }
}

/**
 * Fungsi navigasi pusat untuk berpindah antar halaman.
 * @param {string} pageId ID dari elemen halaman (e.g., 'home-page', 'movie-detail').
 * @param {string} [navName] Nama untuk navigasi aktif sidebar.
 * @param {boolean} [isBack=false] Menandakan apakah ini navigasi 'kembali'.
 */
function navigateTo(pageId, navName = null, isBack = false) {
    // ⚠️ Mencegah rekursi tak terbatas jika mencoba navigasi ke halaman yang sama DARI non-back
    if (currentPage === pageId && !isBack) {
        return; 
    }
    
    // Kelola Back Stack
    if (!isBack) {
         // Hanya push ke stack jika halaman saat ini BUKAN 'video-page'
         // dan BUKAN halaman yang sama dengan yang akan dituju.
         if (currentPage !== 'video-page' && currentPage !== pageId) { 
            backStack.push(currentPage);
         }
    }
    
    // Perbarui currentPage SEBELUM menyembunyikan
    currentPage = pageId; 

    hideAllPages();
    
    const pageElement = document.getElementById(pageId);
    if (!pageElement) {
        console.error(`Elemen halaman dengan ID '${pageId}' tidak ditemukan. Menghentikan navigasi.`);
        currentPage = backStack.pop() || 'home-page'; // Coba kembali ke halaman sebelumnya
        return;
    }
    
    // Tampilkan halaman
    // PERBAIKAN: Gunakan 'flex' untuk halaman yang memerlukan layout flex (profile dan video)
    if (pageId === 'video-page' || pageId === 'profile-page') {
        pageElement.style.display = 'flex';
    } else {
        pageElement.style.display = 'block';
    }
    
    // Video page tidak perlu nav aktif, tetapi update tombol kembali
    if (pageId !== 'video-page') { 
        updateActiveNav(navName || navMap[pageId]);
    } else {
        updateActiveNav(null); // Clear active nav when in video player
    }
    
    updateBackButton();
    
    if (currentPage !== 'video-page') {
        isPlaying = false; // Pastikan status player reset
    }
    
    window.scrollTo(0, 0); 
}

function showHomePage() {
    // Kosongkan backStack saat kembali ke home
    backStack.length = 0; 
    
    // Periksa apakah sudah di home untuk menghindari navigasi yang tidak perlu
    if (currentPage !== 'home-page') {
        navigateTo('home-page', 'Beranda');
    } else {
        // Jika sudah di home, hanya pastikan UI benar
        hideAllPages();
        const homeElement = document.getElementById('home-page');
        if (homeElement) homeElement.style.display = 'block';
        updateActiveNav(navMap['home-page']);
        updateBackButton();
        window.scrollTo(0, 0); 
    }
}

// FUNGSI INI DIHILANGKAN/DISEMPITKAN karena halaman 'movies' dan 'series' dihapus
function showPage(page) {
    const pageMap = {
        // 'movies': ['movies-page', 'Film'], // Dihapus
        // 'series': ['series-page', 'Serial'], // Dihapus
        'mylist': ['mylist-page', 'Daftar Saya'],
        'subscription': ['subscription-page', 'Langganan']
    };
    
    const [pageId, navName] = pageMap[page] || [];

    if (pageId) {
        navigateTo(pageId, navName);
    } else {
        showHomePage(); 
    }
}

function updateActiveNav(activePageName) {
    // Perbarui tautan aktif di sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-nav-target') === activePageName) {
            link.classList.add('active');
        }
    });
}

function goBack() {
    // Jika di Home atau stack kosong, kembali ke home secara eksplisit (untuk reset)
    if (currentPage === 'home-page' && backStack.length === 0) {
        return; 
    }

    // Jika di Video Player, kembali ke halaman sebelumnya di stack (biasanya Detail Film)
    if (currentPage === 'video-page') {
        // Menggunakan goBack di Video Player harus tetap menggunakan backStack
        // Namun, jika backStack kosong setelah pop, kembali ke home
        const previousPageId = backStack.pop() || 'home-page'; 
        navigateTo(previousPageId, navMap[previousPageId], true);
        return; 
    }

    const previousPageId = backStack.pop();
    
    // Jika previousPageId ada, navigasi kembali, jika tidak, kembali ke home
    if (previousPageId) {
        // NavName tidak perlu diset jika kembali, cukup pakai ID lama
        navigateTo(previousPageId, navMap[previousPageId], true); 
    } else {
        showHomePage(); 
    }
}

/**
 * Memperbarui status tombol kembali.
 */
function updateBackButton() {
    const backButton = document.getElementById('back-button');
    if (backButton) { 
        // Tombol Kembali ditampilkan jika BUKAN di halaman Home
        // dan stack tidak kosong ATAU berada di Video Player
        if (currentPage !== 'home-page' && (backStack.length > 0 || currentPage === 'video-page')) { 
            backButton.classList.add('show');
        } else {
            backButton.classList.remove('show');
        }
    }
}


// -------------------------------------------------------------------------
// 👤 Halaman Profil dan Login/Daftar
// -------------------------------------------------------------------------

function openUserProfile() {
    navigateTo('profile-page', 'Profil'); 
    updateProfileDisplay();
}

function setProfileDummyStats() {
    const watchHoursEl = document.getElementById('watch-hours');
    const totalListsEl = document.getElementById('total-lists');
    const favGenreEl = document.getElementById('fav-genre');

    if (watchHoursEl) watchHoursEl.textContent = (Math.random() * 50 + 10).toFixed(0);
    if (totalListsEl) totalListsEl.textContent = (Math.random() * 10 + 2).toFixed(0);
    if (favGenreEl) favGenreEl.textContent = ['Sci-Fi', 'Aksi', 'Drama'][Math.floor(Math.random() * 3)];
}

// Menangani respons kredensial dari Google (diperlukan oleh GIS)
function handleCredentialResponse(response) {
    if (response.credential) {
        // Proses token dan ekstrak data pengguna (seperti di kode Anda)
        const token = response.credential;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const userData = JSON.parse(jsonPayload);

        user.isLoggedIn = true;
        user.name = userData.name || 'Pengguna Google';
        user.email = userData.email || 'email-google@vynix.com';
        user.picture = userData.picture || 'https://placehold.co/100x100/4285F4/FFFFFF?text=G';
        
        setProfileDummyStats();

        alert(`Login Berhasil dengan Google! Selamat datang, ${user.name}.`);
        updateProfileDisplay();
        // Langsung navigasi ke profil setelah login (opsional)
        navigateTo('profile-page', 'Profil'); 
    }
}

function logoutUser() {
    user.isLoggedIn = false;
    user.name = 'Tamu VYNIX';
    user.email = 'login untuk personalisasi';
    user.picture = 'https://placehold.co/100x100/333333/FFFFFF?text=A';

    alert('Anda telah Keluar.');
    updateProfileDisplay();
    showHomePage(); 
}

function showRegisterForm() {
    // Fungsi ini disederhanakan karena HTML hanya memiliki satu form otentikasi
    alert('Halaman Daftar (Register) sedang disimulasikan sebagai form login yang sama. Silakan gunakan tombol Login atau Google untuk mencoba fitur.');
}

function updateProfileDisplay() {
    const authContainer = document.getElementById('auth-container');
    const profileInfo = document.getElementById('user-profile-info');
    
    if (!authContainer || !profileInfo) return; 

    if (user.isLoggedIn) {
        authContainer.style.display = 'none';
        // PERBAIKAN: Pastikan menggunakan 'flex' sesuai CSS/HTML
        profileInfo.style.display = 'flex'; 
        
        // Update konten profil utama
        const profileNameEl = document.getElementById('profile-name');
        const profileEmailEl = document.getElementById('profile-email');
        const profileImgEl = document.getElementById('profile-img');

        if (profileNameEl) profileNameEl.textContent = user.name;
        if (profileEmailEl) profileEmailEl.textContent = user.email;
        if (profileImgEl) profileImgEl.src = user.picture;

        // Pastikan tab My List aktif saat pertama kali masuk ke profil
        const firstTab = document.querySelector('.profile-tabs .tab-btn:first-child');
        if (firstTab) {
            // Panggil fungsi switchProfileTab dengan tombol dan ID konten
            switchProfileTab(firstTab, 'mylist');
        }

    } else {
        authContainer.style.display = 'block';
        profileInfo.style.display = 'none';
    }
}

// Fungsi untuk mengganti tab di halaman profil
function switchProfileTab(clickedButton, tabId) {
    document.querySelectorAll('.profile-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.profile-content-area .tab-content').forEach(content => {
        content.style.display = 'none';
    });

    if (clickedButton) clickedButton.classList.add('active');

    const content = document.getElementById(tabId + '-content');
    if (content) {
        // PERBAIKAN: Gunakan 'grid' untuk list-grid
        content.style.display = 'grid'; 
    }
}


// -------------------------------------------------------------------------
// 🎬 Halaman Detail Film
// -------------------------------------------------------------------------

function showMovieDetail(movieTitle) {
    const movie = movies[movieTitle];
    if (!movie) return;

    navigateTo('movie-detail', 'Detail Film');
    
    currentMovie = movie;
    
    // Set data film
    document.getElementById('movie-title-large').textContent = movie.title;
    document.getElementById('movie-year').textContent = movie.year;
    document.getElementById('movie-duration').textContent = movie.duration;
    document.getElementById('movie-genre').textContent = movie.genre;
    document.getElementById('movie-rating').textContent = movie.rating;
    document.getElementById('movie-description').textContent = movie.description;
    
    const moviePosterLarge = document.getElementById('movie-poster-large');
    if (moviePosterLarge) {
        // Simulasi setting background poster besar (gunakan text dummy)
        moviePosterLarge.textContent = movie.title; 
    }
}

// Comments (for Movie Detail Page)
function addComment() {
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();
    
    if (comment) {
        const commentList = document.getElementById('comment-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <div class="comment-header"><span>Anda</span><span>Baru saja</span></div>
            <div class="comment-content">${comment}</div>
        `;
        if (commentList) commentList.prepend(newComment); 
        if (commentInput) commentInput.value = '';
    }
}


// -------------------------------------------------------------------------
// ▶️ Halaman Video Player
// -------------------------------------------------------------------------

function updateVideoControls(isPlay) {
    const videoPlayer = document.getElementById('video-player-display');
    const mainPlayIcon = document.getElementById('main-play-icon');
    const centerPlayIcon = document.getElementById('center-play-icon');

    if (isPlay) {
        isPlaying = true;
        if (videoPlayer) videoPlayer.classList.remove('paused');
        if (mainPlayIcon) mainPlayIcon.className = 'fas fa-pause';
        if (centerPlayIcon) centerPlayIcon.className = 'fas fa-pause';
    } else {
        isPlaying = false;
        if (videoPlayer) videoPlayer.classList.add('paused');
        if (mainPlayIcon) mainPlayIcon.className = 'fas fa-play';
        if (centerPlayIcon) centerPlayIcon.className = 'fas fa-play';
    }
}

function togglePlayPause() {
    updateVideoControls(!isPlaying); 
}

function toggleMute() {
    const volumeIcon = document.getElementById('volume-icon');
    const volumeSlider = document.getElementById('volume-slider');

    if (!volumeIcon || !volumeSlider) return;

    if (volumeIcon.classList.contains('fa-volume-up')) {
        volumeIcon.className = 'fas fa-volume-mute';
        volumeSlider.value = 0;
    } else {
        volumeIcon.className = 'fas fa-volume-up';
        volumeSlider.value = 50; 
    }
}

function openVideoPlayer(movieTitle) {
    const movie = movies[movieTitle];
    if (!movie) return;

    // Navigasi ke video player.
    // NavName diabaikan karena header disembunyikan
    navigateTo('video-page'); 

    currentMovie = movie;
    
    // Set data video
    const titleEl = document.getElementById('playing-video-title');
    const synopsisEl = document.getElementById('video-synopsis-text');
    const viewsEl = document.getElementById('video-views');
    const dateEl = document.getElementById('video-date');
    const currentVideoNameEl = document.getElementById('current-video-name');
    const timeDisplayEl = document.getElementById('time-display');

    if (titleEl) titleEl.textContent = movie.title;
    if (synopsisEl) synopsisEl.textContent = movie.description;
    if (viewsEl) viewsEl.textContent = `${(Math.random() * 10).toFixed(1)}M Tampilan`;
    if (dateEl) dateEl.textContent = `Dirilis ${movie.year}`;
    if (currentVideoNameEl) currentVideoNameEl.textContent = movie.title;
    if (timeDisplayEl) timeDisplayEl.textContent = `00:00 / ${movie.duration}`;


    const sidebar = document.getElementById('video-recommendations-sidebar');
    if (sidebar) {
        sidebar.innerHTML = '<h3 class="sidebar-title">Film Lanjutan</h3>';

        // Filter dan tampilkan rekomendasi
        Object.values(movies).slice(0, 8).forEach(recMovie => { 
            if (recMovie.title !== movieTitle) {
                const recItem = document.createElement('div');
                recItem.className = 'recommendation-item';
                // Pastikan fungsi openVideoPlayer dipanggil untuk navigasi antar video
                recItem.onclick = () => openVideoPlayer(recMovie.title); 
                
                recItem.innerHTML = `
                    <div class="rec-poster">${recMovie.title}</div>
                    <div class="rec-info">
                        <p class="rec-title">${recMovie.title}</p>
                        <p class="rec-meta">${recMovie.rating} · ${recMovie.genre.split(',')[0]}</p>
                    </div>
                `;
                sidebar.appendChild(recItem);
            }
        });
    }

    // Sembunyikan header dan footer
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header) header.classList.add('hidden');
    if (footer) footer.classList.add('hidden');
    
    updateVideoControls(true); // Mulai dalam posisi 'bermain'
}

function addVideoComment() {
    const commentInput = document.getElementById('video-comment-input');
    // PERBAIKAN: gunakan ID yang benar untuk input komentar video
    const comment = commentInput.value.trim();
    
    if (comment) {
        const commentList = document.getElementById('video-comment-list');
        // PERBAIKAN: gunakan ID yang benar untuk list komentar video
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <div class="comment-header"><span>Anda</span><span>Baru saja</span></div>
            <div class="comment-content">${comment}</div>
        `;
        if (commentList) commentList.prepend(newComment); 
        if (commentInput) commentInput.value = '';
    }
}

// -------------------------------------------------------------------------
// 🤖 AI Assistant Functions
// -------------------------------------------------------------------------
// (Fungsi AI tidak memerlukan perubahan, tetap kompatibel)

function openAIAssistant() {
    const modal = document.getElementById('ai-modal');
    if (modal) modal.style.display = 'block';
}

function closeAIAssistant() {
    const modal = document.getElementById('ai-modal');
    if (modal) modal.style.display = 'none';
}

function sendAIQuestion() {
    const aiInput = document.getElementById('ai-input');
    const question = aiInput.value.trim();
    
    if (question) {
        const aiChat = document.getElementById('ai-chat');
        
        const userMessage = document.createElement('div');
        userMessage.className = 'ai-message ai-user-message';
        userMessage.textContent = question;
        if (aiChat) aiChat.appendChild(userMessage);
        
        if (aiChat) aiChat.scrollTop = aiChat.scrollHeight;
        
        // Simulasi Jawaban AI
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'ai-message ai-bot-message';
            
            const lowerQuestion = question.toLowerCase();
            
            if (lowerQuestion.includes('rekomendasi') || lowerQuestion.includes('recommend')) {
                botMessage.textContent = 'Berdasarkan riwayat tontonan Anda, saya merekomendasikan "The Dark Knight" dan "Inception". Keduanya memiliki rating tinggi dan genre yang Anda sukai!';
            } else if (lowerQuestion.includes('rating') || lowerQuestion.includes('skor')) {
                botMessage.textContent = '"The Shawshank Redemption" memiliki rating tertinggi di platform kami dengan skor 9.3/10. Ini adalah film drama terbaik sepanjang masa!';
            } else if (lowerQuestion.includes('langganan') || lowerQuestion.includes('premium')) {
                botMessage.textContent = 'Paket Premium memberikan kualitas Ultra HD (4K) dan bebas iklan di hingga 4 perangkat! Ingin saya arahkan ke halaman langganan?';
            } else {
                botMessage.textContent = 'Terima kasih atas pertanyaan Anda! Saya adalah asisten AI dummy. Dalam versi nyata, saya akan memberikan informasi yang lebih akurat tentang film dan rekomendasi.';
            }
            
            if (aiChat) aiChat.appendChild(botMessage);
            if (aiChat) aiChat.scrollTop = aiChat.scrollHeight; 
        }, 1000);
        
        if (aiInput) aiInput.value = '';
    }
}

function handleAIKeyPress(event) {
    if (event.key === 'Enter') {
        sendAIQuestion();
    }
}

// -------------------------------------------------------------------------
// ❓ FAQ Functions
// -------------------------------------------------------------------------
// (Fungsi FAQ tidak memerlukan perubahan, tetap kompatibel)

function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    const questionButton = document.querySelector(`.faq-question[onclick="toggleAnswer(${id})"]`);

    // Tutup semua jawaban kecuali yang sedang diklik
    document.querySelectorAll('.faq-answer').forEach(a => {
        const otherId = a.id.split('-')[1];
        const otherBtn = document.querySelector(`.faq-question[onclick="toggleAnswer(${otherId})"]`);
        
        if (otherId != id && a.classList.contains('open')) {
            a.classList.remove('open');
            if(otherBtn) otherBtn.classList.remove('active');
        }
    });

    // Buka/tutup jawaban yang diklik
    if(answer && questionButton) {
        answer.classList.toggle('open');
        questionButton.classList.toggle('active');
    }
}

// -------------------------------------------------------------------------
// ⚙️ Fungsi Lain (Dummy)
// -------------------------------------------------------------------------
function startSubscription(planName) {
    console.log(`Simulasi Langganan: Pengguna memilih ${planName}`);
    alert(`Anda memilih ${planName}. Fitur ini adalah dummy. Di versi nyata, Anda akan diarahkan ke halaman pembayaran.`);
}

function openSearch() {
    console.log('Fungsi Pencarian: Saat ini dummy.');
    alert('Fungsi Pencarian belum diimplementasikan. Silakan gunakan Beranda.');
}


// =========================================================================
// 🧩 INISIALISASI UTAMA DAN EVENT LISTENER
// =========================================================================

// Initialize (Jalankan saat dokumen selesai dimuat)
document.addEventListener('DOMContentLoaded', () => {
    
    // **1. Tangani form login dummy**
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = e.target.querySelector('input[type="email"]').value;
            user.isLoggedIn = true;
            user.name = 'Pengguna VYNIX';
            user.email = email;
            user.picture = 'https://placehold.co/100x100/333333/FFFFFF?text=V';
            
            setProfileDummyStats();
            
            alert(`Login Berhasil! Selamat datang, ${user.name}.`);
            updateProfileDisplay();
            navigateTo('profile-page', 'Profil'); // Navigasi ke profil setelah login
        });
    }

    // **2. Inisialisasi awal**
    showHomePage(); 
    updateProfileDisplay();
});
