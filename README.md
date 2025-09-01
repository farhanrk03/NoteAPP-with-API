# NoteAPP-with-API
STAMPO-APP Series 

Aplikasi Catatan Web: Stampo NoteApp
Aplikasi ini adalah contoh sederhana dari sebuah aplikasi catatan berbasis web yang dibangun dengan teknologi modern, termasuk Web Component dan asynchronous JavaScript (Fetch API). Aplikasi ini memungkinkan pengguna untuk menambahkan, melihat, mengarsipkan, dan menghapus catatan dengan antarmuka yang bersih dan responsif.

🚀 Fitur Utama
Manajemen Catatan:

Tambah Catatan Baru: Gunakan formulir di bilah samping untuk membuat catatan baru dengan judul dan isi.

Lihat Catatan: Catatan ditampilkan dalam daftar yang terorganisir.

Arsip/Unarsip: Pindahkan catatan ke atau dari arsip untuk mengelola daftar catatan aktif Anda.

Hapus Catatan: Hapus catatan yang tidak lagi diperlukan secara permanen.

Umpan Balik Pengguna:

Indikator Loading: Menampilkan pesan "LOADING....." saat aplikasi sedang memuat data dari API, memberikan umpan balik visual kepada pengguna.

Pesan Kesalahan: Menampilkan pesan yang informatif di konsol peramban jika terjadi kegagalan dalam proses permintaan HTTP (misalnya, gagal koneksi atau respons API yang bermasalah).

Notifikasi Sukses: Menampilkan notifikasi pop-up kecil saat sebuah aksi (seperti menambahkan atau menghapus catatan) berhasil dilakukan.

Teknologi Web Modern:

Menggunakan Web Component (<note-app-bar>, <note-form>, <note-item>) untuk menciptakan elemen-elemen UI yang dapat digunakan kembali dan mandiri.

Menerapkan Fetch API untuk berinteraksi secara asinkron dengan API backend.

🛠️ Teknologi yang Digunakan
HTML5: Struktur dasar halaman web.

CSS3: Styling untuk tampilan yang modern dan responsif.

JavaScript (ES6+): Logika inti aplikasi, termasuk interaksi dengan API.

Web Components: Untuk enkapsulasi dan reusabilitas komponen UI.

Google Fonts: Menggunakan font Inter untuk tipografi.

API: Menggunakan API publik dari https://notes-api.dicoding.dev/v2 sebagai sumber data catatan.

📂 Struktur Proyek
/stampo-noteapp/
├── src/
│   ├── style.css         # Styling utama aplikasi.
│   ├── script.js         # Logika JavaScript dan Web Components.
│   └── favicon.png       # Ikon situs web.
├── noteAPP_Stampo.html   # File HTML utama.
└── README.md             # File ini.
🏃‍♀️ Cara Menjalankan Aplikasi
Unduh Berkas: Unduh semua file proyek ke komputer lokal Anda.

Buka di Peramban: Buka file noteAPP_Stampo.html menggunakan peramban web modern (seperti Chrome, Firefox, atau Edge).

Jalankan dengan Live Server (Opsional): Jika Anda mengalami masalah CORS (Cross-Origin Resource Sharing) saat memuat data dari API, Anda dapat menggunakan ekstensi Live Server di Visual Studio Code atau sejenisnya untuk menjalankan aplikasi pada server lokal.

🤝 Penggunaan
Klik tombol "+ Tambah Catatan" untuk membuka bilah samping.

Isi judul dan isi catatan, lalu klik "Tambah Catatan" untuk menyimpannya.

Klik tombol "ARCHIVES" untuk beralih antara daftar catatan utama dan catatan yang diarsipkan.

Gunakan tombol "Archive", "Unarchive", atau "Hapus" pada setiap catatan untuk mengelola statusnya.

#Requirement
- Install Node_Module with NPM
