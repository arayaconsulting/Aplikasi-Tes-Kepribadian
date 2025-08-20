// Data Pertanyaan (Sesuai dengan file Anda)
const quizQuestions = [
    {
        question: "1. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "ADVENTUROUS - orang yang suka tantangan, hal-hal baru, hal-hal yang memerlukan keberanian dan tekad untuk menguasainya", type: "Choleric" },
            { text: "ADAPTABLE - mudah menyesuaikan diri dan merasa nyaman dalam setiap situasi", type: "Phlegmatic" },
            { text: "ANIMATED - penuh gairah hidup dan suka mengkomunikasikan pikiran dan perasaannya dengan gerakan tangan, lengan dan mimik wajah", type: "Sanguine" },
            { text: "ANALYTICAL - suka meneliti / menganalisis bagian-bagian dari apa saja untuk meyakinkan diri apakah hubungan antara satu hal dengan lainnya itu logis dan patut", type: "Melancholic" }
        ]
    },
    {
        question: "2. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "PERSISTENT - menyelesaikan pekerjaan / proyeknya sampai tuntas, sebelum memulai hal baru", type: "Melancholic" },
            { text: "PLAYFUL - ceria, suka bercanda", type: "Sanguine" },
            { text: "PERSUASIVE - meyakinkan, lebih memakai logika dan fakta daripada dengan memakai daya tarik pribadi atau kuasanya", type: "Choleric" },
            { text: "PEACEFUL - suasana hati damai dan tidak terpengaruh kejadian disekitarnya, bahkan menghindar dari tantangan", type: "Phlegmatic" }
        ]
    },
    {
        question: "3. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "SUBMISSIVE - mudah menerima pandangan atau keinginan orang lain dan hampir tidak mempunyai keinginan untuk menyatakan pendapatnya sendiri", type: "Phlegmatic" },
            { text: "SELF SACRIFICING - bersedia (tanpa pamrih) mengorbankan kepentingan diri demi kebutuhan orang lain", type: "Melancholic" },
            { text: "SOCIABLE - lebih melihat kebersamaan dengan orang lain sebagai kesempatan untuk tampil cerdas, menarik dan menyenangkan daripada sebagai kesempatan untuk mendapatkan tantangan baru", type: "Sanguine" },
            { text: "STRONG-WILLED - berkemauan keras, bertekad untuk mencapai apa yang dikehendaki", type: "Choleric" }
        ]
    },
    {
        question: "4. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "CONSIDERATE - mempunyai perhatian dan tanggap terhadap kebutuhan dan perasaan orang lain", type: "Phlegmatic" },
            { text: "CONTROLLED - mempunyai emosi-emosi tetapi dapat mengendalikannya, jarang memperlihatkan emosinya", type: "Melancholic" },
            { text: "COMPETITIVE - menganggap setiap situasi / kejadian sebagai suatu kontes/ lomba dan selalu ingin memenangkannya", type: "Choleric" },
            { text: "CONVINCING - meyakinkan orang lain melalui daya tarik / kharisma kepribadiannya", type: "Sanguine" }
        ]
    },
    {
        question: "5. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "REFRESHING - menyegarkan dan merangsang orang-orang lain untuk merasa senang", type: "Sanguine" },
            { text: "RESPECTFUL - memperlakukan orang lain dengan sopan, hormat dan penghargaan", type: "Phlegmatic" },
            { text: "RESERVED - mengendalikan / menahan diri dalam mengekspresikan gairahnya", type: "Melancholic" },
            { text: "RESOURCEFUL - dapat bertindak cepat dan efektif dalam hampir setiap keadaan", type: "Choleric" }
        ]
    },
    {
        question: "6. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "SATISFIED - mudah menerima keadaan atau situasi apapun, mudah puas", type: "Phlegmatic" },
            { text: "SENSITIVE - mempunyai kepedulian mendalam terhadap orang lain dan kejadian", type: "Melancholic" },
            { text: "SELF-RELIANT - mandiri, tidak tergantung, mengandalkan kemampuan, pendapat dan akal budi sendiri secara total", type: "Choleric" },
            { text: "SPIRITED - penuh gairah dan kegembiraan yang menggelora", type: "Sanguine" }
        ]
    },
    {
        question: "7. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "PLANNER - lebih memilih / suka membuat rencana terperinci untuk keberhasilan suatu proyek atau tujuan", type: "Melancholic" },
            { text: "PATIENT - sabar, tak terpengaruh akan penundaan, perubahaan, tetap tenang dan toleran menerima keadaan", type: "Phlegmatic" },
            { text: "POSITIVE - positif, yakin pada diri sendiri bahwa segala akan beres bila dirinya yang melakukan", type: "Choleric" },
            { text: "PROMOTER - mendorong / memaksa orang lain untuk ikut bergabung atau mencurahkan diri melalui daya tarik kepribadiannya", type: "Sanguine" }
        ]
    },
    {
        question: "8. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "SURE - yakin, hampir tidak pernah ragu / goyah", type: "Choleric" },
            { text: "SPONTANEOUS - spontan -- lebih menyukai hidup yang impulsif", type: "Sanguine" },
            { text: "SCHEDULED - membuat segala sesuatu dan hidup sesuai rencana harian dan tidak suka adanya interupsi dalam rencananya", type: "Melancholic" },
            { text: "SHY - pendiam / pemalu, tidak mudah larut dalam percakapan", type: "Phlegmatic" }
        ]
    },
    {
        question: "9. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "ORDERLY - mengatur segalanya secara metodis dan sistematis", type: "Melancholic" },
            { text: "OBLIGING - mudah menampung, menerima apa saja, mudah melakukan hal-hal atas saran orang lain", type: "Phlegmatic" },
            { text: "OUTSPOKEN - berbicara terus terang tanpa tedeng aling-aling", type: "Choleric" },
            { text: "OPTIMISTIC - ceria, meyakinkan diri sendiri dan orang lain bahwa semua akan beres", type: "Sanguine" }
        ]
    },
    {
        question: "10. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "FRIENDLY - ramah, lebih suka menanggapi daripada memulai percakapan", type: "Phlegmatic" },
            { text: "FAITHFUL - dapat diandalkan secara konsisten, teguh, loyal (setia) dan kadang pengabdiannya tanpa alasan", type: "Melancholic" },
            { text: "FUNNY - rasa humornya bagai percikan kembang api yang membuat cerita apa saja jadi peristiwa penuh kegembiraan / tawa", type: "Sanguine" },
            { text: "FORCEFUL - kepribadian yang berwibawa / kuat, yang menyebabkan orang lain ragu untuk melawan", type: "Choleric" }
        ]
    },
    {
        question: "11. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "DARING - bersedia mengambil resiko, berani dan tidak punya rasa takut", type: "Choleric" },
            { text: "DELIGHTFUL - membuat orang senang berada bersamanya, menyenangkan sebagai teman", type: "Sanguine" },
            { text: "DIPLOMATIC - bila berhubungan dengan orang, dia diplomatis (berusaha tidak menyinggung / menyerang), peka dan sabar", type: "Phlegmatic" },
            { text: "DETAILED - terperinci -- melakukan segala sesuatu menurut urutan dan kronologis (mengingat kejadian secara berurutan)", type: "Melancholic" }
        ]
    },
    {
        question: "12. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "CHEERFUL - selalu bersemangat, riang dan membuat orang lain berbahagia", type: "Sanguine" },
            { text: "CONSISTENT - memiliki keseimbangan emosional, dapat memberi tanggapan sesuai harapan orang", type: "Phlegmatic" },
            { text: "CULTURED - mempunyai minat yang melibatkan hal-hal yang berbudaya, intelek / berkelas seperti theater, simphony, ballet", type: "Melancholic" },
            { text: "CONFIDENT - percaya diri, yakin akan kemampuan diri", type: "Choleric" }
        ]
    },
    {
        question: "13. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "IDEALISTIC - menggambarkan semuanya dalam kesempatan dan punya kebutuhan untuk mencapai tingkat kesempurnaan", type: "Melancholic" },
            { text: "INDEPENDENT - mandiri, berdikari, percaya diri dan tampak tidak begitu butuh bantuan orang lain", type: "Choleric" },
            { text: "INOFFENSIVE - tak pernah mengatakan dan menyebabkan hal-hal yang tidak menyenangkan atau menimbulkan pertengkaran", type: "Phlegmatic" },
            { text: "INSPIRING - memberi inspirasi kepada orang-orang untuk bekerja, bergabung / terlibat dan membuat keseluruhannya menyenangkan", type: "Sanguine" }
        ]
    },
    {
        question: "14. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "DEMONTRATIVE - mengungkapkan diri secara terbuka, terutama mengenai perasaan sayang", type: "Sanguine" },
            { text: "DECISIVE - punya kemampuan untuk membuat penilaian. Keputusan dan kesimpulan dengan cepat dan tuntas", type: "Choleric" },
            { text: "DRY HUMOR - punya rasa humor kering -- kemampuan memunculkan kalimat-kalimat singkat menggigit dan biasa bersifat sarkastis", type: "Melancholic" },
            { text: "DEEP - mendalam dan introspektif dalam cara berpikir, tidak suka hal-hal yang dangkal", type: "Phlegmatic" }
        ]
    },
    {
        question: "15. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "MEDIATOR - selalu berada di posisi penengah, membantu orang-orang yang bertikai agar konflik bisa dihindari / diselesaikan", type: "Phlegmatic" },
            { text: "MUSICAL - punya penghargaan tinggi terhadap musik, punya komitmen terhadap musik, menganggap musik sebagai bentuk seni", type: "Melancholic" },
            { text: "MOVER - terdorong oleh kebutuhan untuk menjadi orang yang produktif, sebagai pemimpin yang diikuti orang-orang, tidak bisa santai / diam", type: "Choleric" },
            { text: "MIXES EASILY - suka pesta, tidak sabar untuk bertemu dengan semua hadirin dan tidak pernah menganggap orang lain sebagai orang asing", type: "Sanguine" }
        ]
    },
    {
        question: "16. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "THOUGHTFUL - penuh perhatian, tenggang rasa, ingat kejadian-kejadian istimewa", type: "Melancholic" },
            { text: "TENACIOUS - memegang teguh, dengan keras kepala dan tak mau menyerah, sebelum tujuan tercapai", type: "Choleric" },
            { text: "TALKER - tak henti bicara, biasanya bercerita tentang hal-hal lucu dan menghibur", type: "Sanguine" },
            { text: "TOLERANT - mudah menerima jalan pikiran dan cara orang lain tanpa ada keinginan untuk tidak setuju atau mengubahnya", type: "Phlegmatic" }
        ]
    },
    {
        question: "17. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "LISTENER - selalu bersedia mendengarkan apa yang dikatakan orang lain", type: "Phlegmatic" },
            { text: "LOYAL - setia kepada orang, gagasan atau pekerjaan, kadang melampaui pemikiran wajar", type: "Melancholic" },
            { text: "LEADER - pemimpin alami yang punya dorongan memimpin / bertanggung jawab", type: "Choleric" },
            { text: "LIVELY - penuh gairah hidup, semangat dan cekatan", type: "Sanguine" }
        ]
    },
    {
        question: "18. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "CONTENTED - mudah puas dengan apa yang dimiliki -- jarang iri hati", type: "Phlegmatic" },
            { text: "CHIEF - memegang tampuk pimpinan dan mengharapkan orang mengikutinya", type: "Choleric" },
            { text: "CHARTMAKER - mengatur kehidupan, tugas dan penyelesaian masalah dengan membuat daftar, formulir, atau grafik", type: "Melancholic" },
            { text: "CUTE - bermutu, cerdik / cerdas, menarik, jadi pusat perhatian", type: "Sanguine" }
        ]
    },
    {
        question: "19. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "PERFECTIONIST - memberi standar tinggi pada diri sendiri dan seringkali pada orang lain juga, menginginkan semuanya pada urutan semestinya", type: "Melancholic" },
            { text: "PLEASANT - mudah dan menyenangkan untuk diajak bicara / bergaul", type: "Phlegmatic" },
            { text: "PRODUCTIVE - harus selalu bekerja mencapai sesuatu, sering merasa sulit istirahat", type: "Choleric" },
            { text: "POPULAR - sumber hidup yang membuat sebuah pesta jadi menyenangkan", type: "Sanguine" }
        ]
    },
    {
        question: "20. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "BOUNCY - kepribadian yang ibarat bola sangat tidak bisa diam, melambung dan memantul dengan semangat besar", type: "Sanguine" },
            { text: "BOLD - tidak kenal takut, tak gentar, berani menanggung segala resiko", type: "Choleric" },
            { text: "BEHAVED - selalu (secara konsisten) membawa diri baik-baik dalam batas-batas yang dapat diterima kebanyakan orang", type: "Melancholic" },
            { text: "BALANCED - stabil ibarat berada di tengah-tengah timbangan, kepribadian yang tidak terbawa tinggi rendahnya gelombang kehidupan", type: "Phlegmatic" }
        ]
    },
    {
        question: "21. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "BLANK - orang yang sangat jarang menunjukkan ekspresi wajah atau emosi", type: "Phlegmatic" },
            { text: "BASHFUL - menghindar dari perhatian orang karena merasa malu", type: "Melancholic" },
            { text: "BRASSY - suka pamer, gemerlapan, menyatakan diri dengan kuat, menarik perhatian, suara keras", type: "Sanguine" },
            { text: "BOSSY - sering memerintah, mendominasi, kadang secara keterlaluan dalam relasi antar orang dewasa", type: "Choleric" }
        ]
    },
    {
        question: "22. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "UNDISCIPLINED - bersifat kurang disiplin / teratur sehingga hal tersebut mempengaruhi hampir semua aspek hidupnya", type: "Sanguine" },
            { text: "UNSYMPATHETIC - kurang peka dan sulit mengenali problem atau perasaan terlukanya orang lain", type: "Choleric" },
            { text: "UNENTHUSIASTIC - cenderung tidak bergairah, sering merasa hal itu bagaimanapun tidak akan membuahkan hasil", type: "Phlegmatic" },
            { text: "UNFORGIVING - punya kesulitan untuk mengampuni atau melupakan suatu luka batin", type: "Melancholic" }
        ]
    },
    {
        question: "23. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "RETICENT - tidak ingin terlibat terutama bila itu menyangkut hal yang rumit / sulit", type: "Phlegmatic" },
            { text: "RESENTFUL - sering memendam perasaan negatif", type: "Melancholic" },
            { text: "RESISTANT - berjuang melawan cara lain selain caranya sendiri", type: "Choleric" },
            { text: "REPETITIOUS - menceritakan kembali kisah / kejadian untuk menghibur orang", type: "Sanguine" }
        ]
    },
    {
        question: "24. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "FUSSY - bersikeras mengenai hal yang tidak penting dan menuntut perhatian besar untuk hal detil yang tidak berarti", type: "Melancholic" },
            { text: "FEARFUL - merasa tidak aman / kurang percaya diri", type: "Phlegmatic" },
            { text: "FORGETFUL - punya daya ingat yang lemah, biasanya dikarenakan kurang disiplin dan cuek", type: "Sanguine" },
            { text: "FRANK - terus terang, tidak segan mengatakan apa yang dipikir atau dirasa", type: "Choleric" }
        ]
    },
    {
        question: "25. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "IMPATIENT - tidak sabaran, susah menanggung kekesalan atau menunggu", type: "Choleric" },
            { text: "INSECURE - merasa tidak aman / kurang percaya diri", type: "Melancholic" },
            { text: "INDECISIVE - sulit membuat keputusan", type: "Phlegmatic" },
            { text: "INTERRUPTS - lebih suka bicara daripada mendengarkan, suka menyela pembicaraan orang", type: "Sanguine" }
        ]
    },
    {
        question: "26. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "UNPOPULAR - orang yang kesungguhan dan tuntutannya akan kesempurnaan, dapat membuatnya dijauhi orang", type: "Melancholic" },
            { text: "UNINVOLVED - tidak mau terlibat, tidak punya keinginan mendengar tentang atau menjadi tertarik pada keterlibatan dalam organisasi atau hidup orang lain", type: "Phlegmatic" },
            { text: "UNPREDICTABLE - tidak bisa diduga / diandalkan. Sesaat bisa bergairah, saat lain tiba-tiba sedih", type: "Sanguine" },
            { text: "UNAFFECTIONATE - sulit menyatakan kasih sayang secara terbuka, baik fisik ataupun lisan", type: "Choleric" }
        ]
    },
    {
        question: "27. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "HEADSTRONG - bersikeras mencapai sesuatu dengan caranya sendiri", type: "Choleric" },
            { text: "HAPHAZARD - tidak punya cara yang konsisten untuk melakukan banyak hal", type: "Sanguine" },
            { text: "HARD TO PLEASE - sulit disenangkan -- punya standar tinggi sekali sehingga membuat orang lain sulit memuaskannya", type: "Melancholic" },
            { text: "HESITANT - sulit bergairah dan sulit terlibat", type: "Phlegmatic" }
        ]
    },
    {
        question: "28. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "PLAIN - tidak menonjol sama sekali, biasa saja dan hampir tidak menunjukkan emosi", type: "Phlegmatic" },
            { text: "PESSIMISTIC - pesimis, sementara mengharapkan yang terbaik, biasanya lebih dulu melihat sisi buruk dari sebuah situasi", type: "Melancholic" },
            { text: "PROUD - punya harga diri tinggi, melihat dirinya sebagai selalu benar", type: "Choleric" },
            { text: "PERMISSIVE - membiarkan orang lain melakukan apa yang disukainya agar ia dapat diterima", type: "Sanguine" }
        ]
    },
    {
        question: "29. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "ANGERED EASILY - mudah marah, punya perangai seperti anak-anak yang suka ngambek atau marah meledak-ledak", type: "Sanguine" },
            { text: "AIMLESS - tidak punya tujuan / inisiatif", type: "Phlegmatic" },
            { text: "ARGUMENTATIVE - merangsang argumen/ perdebatan karena merasa dirinya benar", type: "Choleric" },
            { text: "ALIENATED - merasa terkucilkan dari orang lain, seringkali karena merasa tidak aman atau takut orang tidak menyukainya", type: "Melancholic" }
        ]
    },
    {
        question: "30. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "NAIVE - punya perspektif sederhana / polos seperti anak-anak", type: "Sanguine" },
            { text: "NEGATIVE ATTITUDE - punya sikap yang jarang positif dan sering hanya melihat sisi buruk dari setiap situasi", type: "Melancholic" },
            { text: "NERVY - penuh keyakinan dan keberanian dalam pengertian negatif", type: "Choleric" },
            { text: "NONCHALANT - menganggap remeh, masa bodoh, cuek", type: "Phlegmatic" }
        ]
    },
    {
        question: "31. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "WORRIER - selalu merasa risau, tidak tenteram, resah atau takut", type: "Melancholic" },
            { text: "WITDRAWN - menarik diri -- perlu waktu untuk menyendiri atau mengasingkan diri", type: "Phlegmatic" },
            { text: "WORKAHOLIC - penentu tujuan secara agresif dan harus selalu produktif", type: "Choleric" },
            { text: "WANTS CREDIT - berkembang bila ada penghargaan atau persetujuan orang lain", type: "Sanguine" }
        ]
    },
    {
        question: "32. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "TOO SENSITIVE - introspeksi berlebihan terhadap diri dan mudah tersinggung", type: "Melancholic" },
            { text: "TACTLESS - kurang pertimbangan dalam mengungkapkan diri, terkadang menyakiti hati", type: "Choleric" },
            { text: "TIMID - menciut, menghindar dari persoalan rumit, takut konflik", type: "Phlegmatic" },
            { text: "TALKACTIVE - pembicara yang memukau / menyenangkan tapi menemui kesulitan untuk mendengarkan", type: "Sanguine" }
        ]
    },
    {
        question: "33. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "DOUBTFUL - terpengaruh oleh ketidakpastian dan kurang percaya bahwa sesuatu bisa berhasil", type: "Phlegmatic" },
            { text: "DISORGANIZED - tidak punya kemampuan mengatur hidupnya", type: "Sanguine" },
            { text: "DOMINEERING - dengan paksa mengambil peran menguasai keadaan dan atau orang lain", type: "Choleric" },
            { text: "DEPRESSED - hampir selalu merasa tertekan", type: "Melancholic" }
        ]
    },
    {
        question: "34. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "INCONSISTENT - bersikap tidak tentu, berlawanan dengan tindakan, emosi tidak logis", type: "Sanguine" },
            { text: "INTROVERT - tertutup, pemikiran dan perhatian tertuju ke dalam dirinya sendiri", type: "Melancholic" },
            { text: "INTOLERANT - tidak dapat menerima sikap atau sudut pandang orang lain", type: "Choleric" },
            { text: "INDIFFERENT - menganggap kebanyakan hal tidak penting", type: "Phlegmatic" }
        ]
    },
    {
        question: "35. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "MESSY - berantakan, hidup dalam keadaan berantakan", type: "Sanguine" },
            { text: "MOODY - suasana hati tidak bisa membumbung tinggi tapi mudah merosot sampai tingkat terendah", type: "Melancholic" },
            { text: "MUMBLES - bicara tidak jelas, tidak berusaha bicara dengan jelas", type: "Phlegmatic" },
            { text: "MANIPULATIVE - mempengaruhi atau mengusahakan dengan licik agar hal-hal dilakukan demi keuntungannya", type: "Choleric" }
        ]
    },
    {
        question: "36. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "SLOW - lamban, tidak suka berpikir / bertindak cepat karena itu merepotkan", type: "Phlegmatic" },
            { text: "STUBBORN - keras kepala -- bertekad memaksakan kehendak", type: "Choleric" },
            { text: "SHOW-OFFS - punya kebutuhan untuk tampil, jadi pusat perhatian, ingin dilihat menonjol", type: "Sanguine" },
            { text: "SKEPTICAL - tidak mudah percaya, mempertanyakan alasan / motivasi dibalik perkataan / tindakan", type: "Melancholic" }
        ]
    },
    {
        question: "37. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "LONER - butuh banyak waktu untuk sendiri, cenderung menghindar dari orang lain", type: "Melancholic" },
            { text: "LORD OVER - tidak ragu menyatakan bahwa dirinya benar dan berkuasa", type: "Choleric" },
            { text: "LAZY - menilai pekerjaan dari berapa banyak energi yang diperlukan", type: "Phlegmatic" },
            { text: "LOUD - keras suara dan tawanya melebihi suara dan tawa orang lain di tempat yang sama", type: "Sanguine" }
        ]
    },
    {
        question: "38. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "SLUGGISH - ibarat siput, lamban dan perlu dorongan agar bergerak / termotivasi", type: "Phlegmatic" },
            { text: "SUSPICIOUS - cenderung mencurigai, tidak percaya ide dan atau orang lain", type: "Melancholic" },
            { text: "SHORT TEMPERED - mudah marah karena tidak sabar", type: "Choleric" },
            { text: "SCATTERBRAINED - tidak punya kemampuan untuk konsentrasi atau suka berubah- ubah", type: "Sanguine" }
        ]
    },
    {
        question: "39. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "REVENGEFUL - secara sadar atau tidak, menyimpan dendam dan menghukum orang yang menyakitinya", type: "Melancholic" },
            { text: "RESTLESS - selalu menyukai aktivitas baru sebab bosan melakukan hal yang sama terus", type: "Sanguine" },
            { text: "RELUCTANT - tidak suka bila diharuskan terlibat", type: "Phlegmatic" },
            { text: "RASH - bertindak tergesa-gesa tanpa pikir panjang / matang", type: "Choleric" }
        ]
    },
    {
        question: "40. Dari empat pernyataan berikut, pilih SATU yang PALING mewakili diri Anda:",
        options: [
            { text: "COMPROMISING - mudah kompromi, mengendurkan pendirian walau ia dalam posisi benar guna menghindari konflik", type: "Phlegmatic" },
            { text: "CRITICAL - selalu mengevaluasi dan menilai, sering dengan pikiran atau ungkapan negatif", type: "Melancholic" },
            { text: "CRAFTY - selalu menemukan jalan untuk mencapai keinginannya dengan menghalalkan segala cara", type: "Choleric" },
            { text: "CHANGEABLE - hanya mampu berkonsentrasi sejenak, perlu banyak perubahan dan variasi agar tidak bosan", type: "Sanguine" }
        ]
    }
];

// Peta (Mapping) untuk nama lengkap Personality Plus
const personalityNames = {
    "Sanguine": "Populer Sanguine",
    "Choleric": "Kuat Choleric",
    "Melancholic": "Sempurna Melancholic",
    "Phlegmatic": "Damai Phlegmatic"
};

// Data Deskripsi Hasil
const personalityDescriptions = {
    "Sanguine": {
        title: "Populer Sanguine",
        description: "Anda adalah pribadi yang ceria, optimis, dan karismatik. Anda suka bersosialisasi dan memiliki energi yang menular. Anda sering menjadi 'pesta itu sendiri' dan mudah beradaptasi dengan lingkungan baru. Kekuatan: Sangat baik dalam berkomunikasi dan membangun hubungan, memiliki rasa humor yang tinggi. Kelemahan: Cenderung impulsif, mudah bosan, dan terkadang tidak terorganisir."
    },
    "Choleric": {
        title: "Kuat Choleric",
        description: "Anda adalah pemimpin yang lahir alami. Anda memiliki tekad yang kuat, suka tantangan, dan tidak takut mengambil risiko. Anda sangat terfokus pada tujuan dan hasil. Kekuatan: Memiliki kemampuan kepemimpinan yang luar biasa, produktif, dan efisien. Kelemahan: Cenderung dominan, mudah tidak sabar, dan sulit menunjukkan emosi atau kehangatan."
    },
    "Melancholic": {
        title: "Sempurna Melancholic",
        description: "Anda adalah pemikir yang mendalam, analitis, dan perfeksionis. Anda sangat menghargai detail, keteraturan, dan ketepatan. Anda memiliki standar yang tinggi untuk diri sendiri dan orang lain. Kekuatan: Sangat terorganisir dan teliti, mampu menemukan masalah yang terlewatkan orang lain. Kelemahan: Cenderung sensitif, bisa terlalu kritis, dan mudah merasa cemas."
    },
    "Phlegmatic": {
        title: "Damai Phlegmatic",
        description: "Anda adalah pribadi yang tenang, sabar, dan santai. Anda suka menjaga harmoni dan menghindari konflik. Anda adalah pendengar yang baik dan sering menjadi penengah dalam grup. Kekuatan: Sangat sabar dan mudah diajak bekerja sama, memiliki kemampuan diplomatik yang baik. Kelemahan: Kurang memiliki dorongan atau motivasi diri, cenderung pasif, dan sulit mengambil keputusan."
    }
};

// Variabel Kontrol
let currentQuestionIndex = 0;
let userAnswers = {}; // Menyimpan jawaban pengguna
let scores = {
    "Sanguine": 0,
    "Choleric": 0,
    "Melancholic": 0,
    "Phlegmatic": 0
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
    userAnswers = {};
    scores = { "Sanguine": 0, "Choleric": 0, "Melancholic": 0, "Phlegmatic": 0 };
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
    
    const selectedButton = Array.from(buttons).find(btn => btn.textContent.includes(type));
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function calculateAndShowResult() {
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
