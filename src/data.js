const data = {
  pengalaman: [
    {
      tahun: "2018 - 2020",
      link: "https://sman2mojokerto.sch.id/ekskul/club-tik-clutik/",
      title: "Club TIK (Clutik) di SMAN 2 Mojokerto",
      desc: "Ekstrakurikuler yang menjadi motivasi awal untuk terjun di dunia IT, dengan diajari dasar-dasar pemrograman menggunakan bahasa Pascal serta pengenalan perangkat keras komputer, termasuk proses perakitan dan komponen-komponennya.",
      detil: [
        "Merakit Komputer",
        "Sistem Operasi Komputer",
        "Jaringan Komputer",
        "Dasar Pemrograman",
        "Pascal",
      ],
    },
    {
      tahun: "2022 - 2023",
      link: "https://www.ruangguru.com/program/kampus-merdeka",
      title:
        "Peserta MSIB Batch 4 (Studi Independen Ruangguru - Backend Engineering)",
      desc: "Peserta MSIB Batch 4 yang mengikuti Studi Independen pada mitra Ruangguru. Program yang diambil merupakan Backend Engineering untuk mempelajari struktur data, bagaimana data terhubung, penerapan clean code, dan quiz pemrograman dengan memanfaatkan bahasa Golang.",
      detil: [
        "Arsitektur Pemrograman",
        "Fullstack Web Dev.",
        "REST API",
        "Backend Engineering",
        "Struktur Data",
        "Git",
        "Golang",
        "Tailwind CSS",
      ],
    },
    {
      tahun: "2024 - 2025",
      link: "https://karuniamultifinance.com",
      title:
        "Magang Kontrak – PT Karunia Multifinance (Fullstack Web Developer)",
      desc: "Magang kontrak 10 bulan di PT Karunia Multifinance dengan peran di pengembangan web dan IT support, termasuk pembuatan website company profile, aplikasi rekap SLIK, maintenance website pinjaman karyawan, serta dukungan jaringan dan perangkat IT",
      detil: ["Jaringan Kantor", "Fullstack Web Developer", "IT Support"],
    },
    {
      tahun: "2020 - 2025",
      link: "https://dinamika.ac.id/",
      title: "S1 Sistem Informasi di Universitas Dinamika Surabaya",
      desc: "Lulusan program studi Sistem Informasi yang menggabungkan keahlian di bidang teknologi dan bisnis. Memiliki pengalaman dalam pengembangan aplikasi, analisis sistem, dan pengelolaan data untuk mendukung proses pengambilan keputusan berbasis IT.",
      detil: [
        "Struktur Data",
        "Pemrograman Lanjutan",
        "Pemrograman Android",
        "Pemrograman Web",
        "UI/UX Designer",
        "Jaringan Komputer",
        "Database Administrator",
        "Java",
        "PHP",
        "Phyton",
      ],
    },
  ],
  keterampilan: {
    bahasa: [
      {
        link: "./dist/assets/keterampilan/bahasa/html.png",
        name: "HTML",
      },
      {
        link: "./dist/assets/keterampilan/bahasa/css.png",
        name: "CSS",
      },
      {
        link: "./dist/assets/keterampilan/bahasa/javascript.png",
        name: "js",
      },
      {
        link: "./dist/assets/keterampilan/bahasa/java.png",
        name: "Java",
      },
      {
        link: "./dist/assets/keterampilan/bahasa/php.png",
        name: "PHP",
      },
      {
        link: "./dist/assets/keterampilan/bahasa/golang.png",
        name: "Golang",
      },
    ],
    framework: [
      {
        link: "./dist/assets/keterampilan/framework/bootstrap.png",
        name: "Bootstrap",
      },
      {
        link: "./dist/assets/keterampilan/framework/tailwind.png",
        name: "Tailwind",
      },
      {
        link: "./dist/assets/keterampilan/framework/laravel.png",
        name: "Laravel",
      },
      {
        link: "./dist/assets/keterampilan/framework/nextjs.png",
        name: "Next JS",
      },
      {
        link: "./dist/assets/keterampilan/framework/gingonic.png",
        name: "Gin-gonic",
      },
      {
        link: "./dist/assets/keterampilan/framework/vue.png",
        name: "Vue JS",
      },
      {
        link: "./dist/assets/keterampilan/framework/livewire.png",
        name: "Livewire",
      },
      {
        link: "./dist/assets/keterampilan/framework/alpine.png",
        name: "Alpine JS",
      },
    ],
    database: [
      {
        link: "./dist/assets/keterampilan/database/mysql.png",
        name: "MySQL",
      },
      {
        link: "./dist/assets/keterampilan/database/postgresql.png",
        name: "PostgreSQL",
      },
      {
        link: "./dist/assets/keterampilan/database/oracle.png",
        name: "Oracle",
      },
      {
        link: "./dist/assets/keterampilan/database/firebase.png",
        name: "Firebase",
      },
    ],
    workspace: [
      {
        link: "./dist/assets/keterampilan/workspace/git.png",
        name: "Git",
      },
      {
        link: "./dist/assets/keterampilan/workspace/vscode.png",
        name: "VSCode",
      },
    ],
  },
  proyek: [
    {
      type: "web",
      link: {
        web: "https://nusantaracert.com/",
      },
      title: "Nusantara Cert.",
      desc: "Mengembangkan website <b>nusantaracert.com</b> sebagai platform <i>company profile</i> profesional. Dilengkapi dengan sistem admin khusus untuk <b>manajemen data sertifikat</b> dan fitur <b><i>generate QR Code</i></b> secara otomatis, yang terintegrasi langsung dengan validasi sertifikat secara <i>online</i>.",
      detil: [
        "Landing & Admin Page",
        "Laravel",
        "MySQL",
        "<a href='https://github.com/mebjas/html5-qrcode' target='_blank' class='underline'>html5-qrcode&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
        "<a href='https://github.com/davidshimjs/qrcodejs' target='_blank' class='underline'>QRCode.js&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
      ],
      image: [
        "./dist/assets/proyek/nusantara/1.PNG",
        "./dist/assets/proyek/nusantara/2.PNG",
        "./dist/assets/proyek/nusantara/3.PNG",
      ],
    },
    {
      type: "web",
      link: {
        web: "https://zstowing.com/",
      },
      title: "ZSTowing",
      desc: "Membangun website <b>zstowing.com</b> untuk ZS Towing sebagai profil jasa towing 24 jam di Kalimantan Barat. Website responsif dan <b>dioptimasi <i>SEO</i></b>, muncul di hasil pencarian seperti <i>“towing Ketapang”</i> atau <i>“towing Kalbar”</i> untuk <b>meningkatkan jangkauan pelanggan</b>.",
      detil: [
        "Landing page",
        "Laravel",
        "Tailwind CSS",
        "<a href='https://github.com/biati-digital/glightbox' target='_blank' class='underline'>GlightBox&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
        "<a href='https://github.com/michalsnik/aos' target='_blank' class='underline'>AOS&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
      ],
      image: [
        "./dist/assets/proyek/zstowing/1.PNG",
        "./dist/assets/proyek/zstowing/2.PNG",
        "./dist/assets/proyek/zstowing/3.PNG",
        "./dist/assets/proyek/zstowing/4.PNG",
        "./dist/assets/proyek/zstowing/5.PNG",
      ],
    },
    {
      type: "github",
      link: {
        github: "https://github.com/SweetSya/ReHear-MusicPlayerWebApp",
      },
      title: "ReHear",
      desc: "Proyek personal untuk membangun pemutar musik berbasis web menggunakan <b><i>HTML</i>, <i>CSS</i>, dan <i>JavaScript</i> murni</b>. Dirancang dengan tampilan responsif dan antarmuka sederhana untuk <b>melatih logika interaktif</b> dan <b>desain UI dasar</b>.",
      detil: ["Personal Project", "Plain HTML, CSS, & JS"],
      image: [
        "./dist/assets/proyek/rehear/1.PNG",
        "./dist/assets/proyek/rehear/2.PNG",
        "./dist/assets/proyek/rehear/3.PNG",
        "./dist/assets/proyek/rehear/4.PNG",
        "./dist/assets/proyek/rehear/5.PNG",
        "./dist/assets/proyek/rehear/6.PNG",
      ],
    },
    {
      type: "web",
      link: {
        web: "https://demo-attendance-app.sweetsya.id/",
      },
      title: "Attendance App – Tugas Akhir (Karunia Multifinance)",
      desc: "Aplikasi presensi berbasis web (<i>PWA</i> & <i>SPA</i>) yang dilengkapi fitur <b><i>face recognition</i> (LBPH)</b> dan <b><i>geofencing</i> menggunakan algoritma <i>Haversine</i></b> untuk validasi lokasi. Mendukung <i>web push notification</i> untuk pemberitahuan <i>real-time</i> kepada karyawan.",
      detil: [
        "Tugas Akhir",
        "Laravel",
        "Tailwind CSS",
        "<a href='https://pypi.org/project/opencv-python/' target='_blank' class='underline'>OpenCV&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
        "<a href='https://filamentphp.com/' target='_blank' class='underline'>FilamentPHP&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
        "<a href='https://livewire.laravel.com/' target='_blank' class='underline'>Livewire&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
        "<a href='https://github.com/web-push-libs/web-push-php' target='_blank' class='underline'>Web Push PHP&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
        "<a href='https://leafletjs.com/' target='_blank' class='underline'>LeafletJS&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
      ],
      image: [
        "./dist/assets/proyek/attendance-app/1.png",
        "./dist/assets/proyek/attendance-app/2.png",
        "./dist/assets/proyek/attendance-app/3.png",
        "./dist/assets/proyek/attendance-app/4.png",
        "./dist/assets/proyek/attendance-app/5.png",
      ],
    },
    {
      type: "web",
      link: {
        web: "https://karuniamultifinance.com/",
      },
      title: "Karunia Multifinance",
      desc: "Mengembangkan website <b>karuniamultifinance.com</b> sebagai platform <i>company profile</i> resmi. Website mendukung <b><i>multi-language</i></b> (Bahasa Indonesia & Inggris), serta dilengkapi dengan panel admin untuk <b>mengelola tampilan dan konten website</b> secara dinamis.",
      detil: [
        "Landing & Admin Page",
        "Code Igniter 4",
        "Multi Bahasa",
        "<a href='https://alpinejs.dev/' target='_blank' class='underline'>AlpineJS&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
        "<a href='https://quilljs.com/' target='_blank' class='underline'>QuillJS&nbsp<i class='iconoir-link before:w-4 before:h-4'></i></a>",
      ],
      image: [
        "./dist/assets/proyek/kmf/1.png",
        "./dist/assets/proyek/kmf/2.png",
        "./dist/assets/proyek/kmf/3.png",
        "./dist/assets/proyek/kmf/4.png",
        "./dist/assets/proyek/kmf/5.png",
      ],
    },
  ],
};

export { data };
