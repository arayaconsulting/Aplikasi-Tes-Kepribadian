// Data Pertanyaan (Sesuai dengan file Anda)
const quizQuestions = [
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku tegas dan suka memimpin", type: "Koleris" },
            { text: "Aku ceria dan mudah berteman", type: "Sanguinis" },
            { text: "Aku santai dan mudah setuju", type: "Plegmatis" },
            { text: "Aku rapi dan suka ketelitian", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka tantangan dan target", type: "Koleris" },
            { text: "Aku senang jadi pusat perhatian", type: "Sanguinis" },
            { text: "Aku suka suasana damai dan tanpa konflik", type: "Plegmatis" },
            { text: "Aku suka menganalisis dan memperhatikan detail", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku bisa mengambil keputusan cepat", type: "Koleris" },
            { text: "Aku mudah bergaul dan suka humor", type: "Sanguinis" },
            { text: "Aku sabar dan tidak suka terburu-buru", type: "Plegmatis" },
            { text: "Aku suka bekerja sendiri dan terorganisir", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka memimpin kelompok", type: "Koleris" },
            { text: "Aku spontan dan suka petualangan", type: "Sanguinis" },
            { text: "Aku pendengar yang baik dan tidak suka ribut", type: "Plegmatis" },
            { text: "Aku perfeksionis dan ingin semuanya tepat", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku bisa mengarahkan orang lain", type: "Koleris" },
            { text: "Aku penuh semangat dan mudah antusias", type: "Sanguinis" },
            { text: "Aku setia dan bisa diandalkan", type: "Plegmatis" },
            { text: "Aku sering menganalisis sebelum bertindak", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku cepat bertindak dan tidak suka menunda", type: "Koleris" },
            { text: "Aku mudah akrab dengan siapa saja", type: "Sanguinis" },
            { text: "Aku lebih suka mendengarkan daripada bicara", type: "Plegmatis" },
            { text: "Aku lebih suka bekerja tenang tanpa gangguan", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka menyelesaikan masalah dengan tegas", type: "Koleris" },
            { text: "Aku sering jadi pusat perhatian karena cerita lucu", type: "Sanguinis" },
            { text: "Aku tidak suka konflik dan lebih memilih diam", type: "Plegmatis" },
            { text: "Aku tidak tenang jika sesuatu tidak sesuai rencana", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku sering memimpin dan memberi arahan", type: "Koleris" },
            { text: "Aku impulsif dan suka berbicara spontan", type: "Sanguinis" },
            { text: "Aku cenderung menghindar dari keramaian", type: "Plegmatis" },
            { text: "Aku selalu memeriksa ulang semua pekerjaan", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka memberi arahan kepada orang lain", type: "Koleris" },
            { text: "Aku mudah tertawa dan suka membuat suasana jadi seru", type: "Sanguinis" },
            { text: "Aku sering diminta jadi penengah saat ada masalah", type: "Plegmatis" },
            { text: "Aku cenderung memikirkan banyak hal sebelum bertindak", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku senang menyelesaikan banyak hal dalam waktu singkat", type: "Koleris" },
            { text: "Aku sering menceritakan kisah yang lucu", type: "Sanguinis" },
            { text: "Aku sabar dan jarang menuntut orang lain", type: "Plegmatis" },
            { text: "Aku perfeksionis dan detail kecil pun sangat penting bagiku", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku berani ambil keputusan meski belum semua data lengkap", type: "Koleris" },
            { text: "Aku sering bicara sebelum berpikir", type: "Sanguinis" },
            { text: "Aku menghindari konflik agar semua tetap nyaman", type: "Plegmatis" },
            { text: "Aku butuh waktu tenang sebelum memutuskan sesuatu", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka jadi pengambil keputusan utama", type: "Koleris" },
            { text: "Aku bisa membuat orang tertawa bahkan saat situasi tegang", type: "Sanguinis" },
            { text: "Aku sering mengalah untuk menjaga keharmonisan", type: "Plegmatis" },
            { text: "Aku lebih nyaman bekerja sendiri daripada dalam kelompok besar", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku ingin hasil cepat dan tidak suka basa-basi", type: "Koleris" },
            { text: "Aku sering cerita panjang meski belum tentu penting", type: "Sanguinis" },
            { text: "Aku lebih suka jadi pendukung daripada pemimpin", type: "Plegmatis" },
            { text: "Aku suka merapikan hal kecil seperti meja kerja dan catatan", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka menetapkan target yang tinggi", type: "Koleris" },
            { text: "Aku sering dianggap ramai dan terlalu ekspresif", type: "Sanguinis" },
            { text: "Aku bisa menunggu dengan sabar tanpa banyak komentar", type: "Plegmatis" },
            { text: "Aku punya standar tinggi dan ingin semuanya sempurna", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku tidak keberatan memimpin tim", type: "Koleris" },
            { text: "Aku merasa bahagia saat dikelilingi banyak teman", type: "Sanguinis" },
            { text: "Aku menghindari konfrontasi langsung", type: "Plegmatis" },
            { text: "Aku mencatat semua rencana dalam daftar harian", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku senang saat bisa menyelesaikan banyak hal sekaligus", type: "Koleris" },
            { text: "Aku bisa ngobrol dengan siapa pun tanpa canggung", type: "Sanguinis" },
            { text: "Aku tidak suka terburu-buru", type: "Plegmatis" },
            { text: "Aku sering menyimpan perasaan sendiri tanpa berbagi", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku ingin mengontrol hasil akhir sesuai caraku", type: "Koleris" },
            { text: "Aku senang menjadi pusat perhatian di acara kumpul", type: "Sanguinis" },
            { text: "Aku lebih senang jika orang lain yang mengambil keputusan", type: "Plegmatis" },
            { text: "Aku menganalisis semua hal sebelum bertindak", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku tidak takut berdebat untuk mempertahankan pendapat", type: "Koleris" },
            { text: "Aku sering bicara tanpa sadar mendominasi pembicaraan", type: "Sanguinis" },
            { text: "Aku bisa menjadi jembatan dalam tim yang bertengkar", type: "Plegmatis" },
            { text: "Aku mudah khawatir jika sesuatu tidak sempurna", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka mengejar prestasi", type: "Koleris" },
            { text: "Aku sering jadi sumber cerita lucu", type: "Sanguinis" },
            { text: "Aku menghindari drama dan tetap tenang", type: "Plegmatis" },
            { text: "Aku memperhatikan detail kecil yang dilewatkan orang lain", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku fokus pada solusi dan hasil", type: "Koleris" },
            { text: "Aku senang membuat orang terhibur", type: "Sanguinis" },
            { text: "Aku lebih nyaman bekerja di balik layar", type: "Plegmatis" },
            { text: "Aku mudah merasa bersalah kalau hasil tidak sesuai harapan", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka membetulkan orang yang menurutku salah", type: "Koleris" },
            { text: "Aku lebih suka cerita daripada mendengarkan", type: "Sanguinis" },
            { text: "Aku sulit bilang 'tidak' meskipun tidak setuju", type: "Plegmatis" },
            { text: "Aku membuat daftar belanja bahkan untuk hal kecil", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku merasa lebih unggul saat memberi perintah", type: "Koleris" },
            { text: "Aku suka berkumpul tanpa tujuan jelas", type: "Sanguinis" },
            { text: "Aku lebih nyaman jadi pengikut", type: "Plegmatis" },
            { text: "Aku menyukai keheningan dan keteraturan", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku lebih fokus pada tugas daripada emosi", type: "Koleris" },
            { text: "Aku mudah berubah arah saat melihat hal menarik", type: "Sanguinis" },
            { text: "Aku tidak masalah jika harus menunggu", type: "Plegmatis" },
            { text: "Aku menyusun rencana bahkan untuk liburan", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku mengatur orang lain agar bekerja sesuai keinginanku", type: "Koleris" },
            { text: "Aku bicara dengan ekspresi dan tangan ikut bergerak", type: "Sanguinis" },
            { text: "Aku pendengar yang baik dan tidak banyak bicara", type: "Plegmatis" },
            { text: "Aku sering merasa cemas jika tidak ada struktur jelas", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku cepat bosan dengan rutinitas", type: "Koleris" },
            { text: "Aku merasa harus membuat semua senang", type: "Sanguinis" },
            { text: "Aku menyukai kestabilan dan ketenangan", type: "Plegmatis" },
            { text: "Aku merasa lelah jika terlalu banyak interaksi sosial", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku memotivasi orang lain untuk berprestasi", type: "Koleris" },
            { text: "Aku punya energi tinggi dan susah diam", type: "Sanguinis" },
            { text: "Aku bisa bekerja baik meski tidak diberi perhatian", type: "Plegmatis" },
            { text: "Aku sangat peduli pada aturan dan prosedur", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku mudah jengkel jika orang lain lambat", type: "Koleris" },
            { text: "Aku suka acara yang ramai dan penuh warna", type: "Sanguinis" },
            { text: "Aku tidak suka jika disuruh pilih pihak", type: "Plegmatis" },
            { text: "Aku merenung sebelum memutuskan sesuatu penting", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku terdorong untuk menjadi yang terbaik", type: "Koleris" },
            { text: "Aku lebih suka obrolan ringan daripada diskusi serius", type: "Sanguinis" },
            { text: "Aku jarang menunjukkan perasaan secara langsung", type: "Plegmatis" },
            { text: "Aku senang mengecek ulang pekerjaan orang lain", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku punya prinsip kuat dan sulit digoyahkan", type: "Koleris" },
            { text: "Aku kadang berbicara tanpa menyadari efeknya", type: "Sanguinis" },
            { text: "Aku menyukai hubungan yang tenang dan tidak menuntut", type: "Plegmatis" },
            { text: "Aku suka mencatat hal-hal kecil yang kupikirkan", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku ingin hasil akhir yang cepat dan sesuai target", type: "Koleris" },
            { text: "Aku suka kejutan dan perubahan suasana", type: "Sanguinis" },
            { text: "Aku sering mengikuti saja tanpa protes", type: "Plegmatis" },
            { text: "Aku menilai sesuatu dari data dan logika", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku suka membuat keputusan tanpa harus didiskusikan", type: "Koleris" },
            { text: "Aku suka menciptakan suasana menyenangkan di mana pun", type: "Sanguinis" },
            { text: "Aku tidak suka perdebatan panjang", type: "Plegmatis" },
            { text: "Aku menyimpan catatan untuk hampir semua hal", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku senang menyusun strategi besar", type: "Koleris" },
            { text: "Aku menyukai cerita dan pengalaman baru", type: "Sanguinis" },
            { text: "Aku cenderung pasif tapi setia", type: "Plegmatis" },
            { text: "Aku lebih percaya pada perencanaan daripada spontanitas", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku ingin dihargai karena hasil kerjaku", type: "Koleris" },
            { text: "Aku suka berbagi cerita tentang diriku", type: "Sanguinis" },
            { text: "Aku menghindari tekanan sebisa mungkin", type: "Plegmatis" },
            { text: "Aku lebih suka diam daripada dikritik", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku sering merasa harus menang", type: "Koleris" },
            { text: "Aku mudah bosan dan mencari hiburan", type: "Sanguinis" },
            { text: "Aku selalu menjaga keharmonisan", type: "Plegmatis" },
            { text: "Aku merasa terganggu jika jadwal berubah tiba-tiba", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku bisa mengatur tim untuk mencapai tujuan", type: "Koleris" },
            { text: "Aku bisa mencairkan suasana dalam kelompok baru", type: "Sanguinis" },
            { text: "Aku sering merasa netral dalam konflik", type: "Plegmatis" },
            { text: "Aku membaca petunjuk dengan sangat teliti", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku berani konfrontasi jika diperlukan", type: "Koleris" },
            { text: "Aku sering melucu tanpa sadar", type: "Sanguinis" },
            { text: "Aku suka dengerin curhatan orang lain", type: "Plegmatis" },
            { text: "Aku merasa harus sempurna agar diterima", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku percaya pada hasil nyata, bukan hanya niat", type: "Koleris" },
            { text: "Aku suka jadi bagian dari pesta atau pertemuan", type: "Sanguinis" },
            { text: "Aku menghindari konflik dengan mengalah", type: "Plegmatis" },
            { text: "Aku terlalu kritis pada diri sendiri", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku terdorong oleh pencapaian", type: "Koleris" },
            { text: "Aku menikmati jadi pusat perhatian", type: "Sanguinis" },
            { text: "Aku lebih suka kerjasama daripada kompetisi", type: "Plegmatis" },
            { text: "Aku sering membuat catatan rapi untuk setiap proyek", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku fokus menyelesaikan tugas daripada ngobrol", type: "Koleris" },
            { text: "Aku mudah teralihkan oleh hal menarik", type: "Sanguinis" },
            { text: "Aku sabar dan tidak menuntut banyak", type: "Plegmatis" },
            { text: "Aku suka menganalisis hal yang orang lain anggap remeh", type: "Melankolis" }
        ]
    },
    {
        question: "Dari empat pernyataan berikut, pilih SATU yang PALING menggambarkan dirimu:",
        options: [
            { text: "Aku memberi semangat tim untuk terus bergerak", type: "Koleris" },
            { text: "Aku dikenal karena gaya bicara yang seru", type: "Sanguinis" },
            { text: "Aku lebih suka mengikuti daripada memimpin", type: "Plegmatis" },
            { text: "Aku menilai sesuatu berdasarkan fakta, bukan perasaan", type: "Melankolis" }
        ]
    }
];

// Data Deskripsi Hasil
const personalityDescriptions = {
    "Sanguinis": {
        title: "Hasil pemetaan kepribadian anda adalah Sanguinis",
        description: "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama mas Ali Mahfud"
    },
    "Koleris": {
        title: "Hasil pemetaan kepribadian anda adalah Koleris",
        description: "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama mas Ali Mahfud"
    },
    "Melankolis": {
        title: "Hasil pemetaan kepribadian anda adalah Melankolis",
        description: "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama mas Ali Mahfud"
    },
    "Plegmatis": {
        title: "Hasil pemetaan kepribadian anda adalah Plegmatis",
        description: "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama mas Ali Mahfud"
    }
};

// Variabel Kontrol
let currentQuestionIndex = 0;
let userAnswers = {}; // Menyimpan jawaban pengguna
let scores = {
    "Sanguinis": 0,
    "Koleris": 0,
    "Melankolis": 0,
    "Plegmatis": 0
};

// Dapatkan Elemen HTML
const introContainer = document.getElementById('intro-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const progressBar = document.getElementById('progress-bar');

// Fungsi Utama
function startQuiz() {
    introContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    userAnswers = {}; // Reset jawaban
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionText.textContent = `(${currentQuestionIndex + 1}/40) ${currentQuestion.question}`;
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('option-button');
            if (userAnswers[currentQuestionIndex] === option.type) {
                button.classList.add('selected'); // Menandai jawaban yang sudah dipilih
            }
            button.addEventListener('click', () => selectAnswer(option.type));
            optionsContainer.appendChild(button);
        });

        // Tampilkan/sembunyikan tombol navigasi
        prevButton.classList.toggle('hidden', currentQuestionIndex === 0);
        nextButton.textContent = currentQuestionIndex === quizQuestions.length - 1 ? 'Selesai' : 'Selanjutnya';
        
        // Perbarui progress bar
        const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

    } else {
        // Ini tidak akan dipanggil karena kita menggunakan tombol "Selesai"
    }
}

function selectAnswer(type) {
    userAnswers[currentQuestionIndex] = type;
    const buttons = optionsContainer.querySelectorAll('.option-button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    const selectedButton = Array.from(buttons).find(btn => btn.textContent === quizQuestions[currentQuestionIndex].options.find(opt => opt.type === type).text);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function calculateAndShowResult() {
    scores = { "Sanguinis": 0, "Koleris": 0, "Melankolis": 0, "Plegmatis": 0 };
    for (const key in userAnswers) {
        if (userAnswers.hasOwnProperty(key)) {
            scores[userAnswers[key]]++;
        }
    }

    let dominantType = '';
    let maxScore = 0;
    for (const type in scores) {
        if (scores.hasOwnProperty(type) && scores[type] > maxScore) {
            maxScore = scores[type];
            dominantType = type;
        }
    }
    
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    const result = personalityDescriptions[dominantType];
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
}

function restartQuiz() {
    resultContainer.classList.add('hidden');
    introContainer.classList.remove('hidden');
}

// Event Listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);
prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});
nextButton.addEventListener('click', () => {
    if (userAnswers[currentQuestionIndex]) {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            calculateAndShowResult();
        }
    } else {
        alert('Mohon pilih satu jawaban sebelum melanjutkan.');
    }
});
