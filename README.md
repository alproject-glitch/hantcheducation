# 🎓 HanTech Education Interactive Portal & SQL Lab

Portal pembelajaran interaktif bimbingan belajar SMP unggulan **HanTech Education**. Proyek portofolio ini menggabungkan desain web premium modern (Glassmorphism & Bento Layout) dengan modul pembelajaran interaktif berupa **Simulator Logika Python** dan **Interactive SQL Playground** yang berjalan 100% di sisi klien (*client-side*).

---

## 🌟 Fitur Utama

### 1. Desain Premium Modern (Prestige UI)
* **Estetika Glassmorphism & Bento Grid**: Menggunakan gradien halus, latar belakang buram transparan, bayangan melayang (*floating shadows*), dan grid responsif yang sangat modern.
* **Mikro-Animasi**: Hover efek dinamis dan transisi mulus berbasis CSS modern.
* **Navigasi Aktif Dinamis**: Sorotan menu navigasi otomatis sesuai dengan scroll posisi pengguna.

### 2. Simulator Algoritma Python (`latihan.py`)
* Menyimulasikan pemrosesan algoritma python real-time.
* Siswa dapat memasukkan kumpulan angka acak (misal: `1, 2, 3, 4, 5, 2, 3, 6`), dan mesin JavaScript di latar belakang akan menjalankan fungsi pemfilteran dan pengurutan yang meniru fungsi di `latihan.py` untuk mengembalikan angka unik yang hanya muncul tepat satu kali (hasil: `[1, 4, 5, 6]`).

### 3. Lab SQL Interaktif (Interactive SQL Playground)
* **In-Memory SQL Compiler**: Menggunakan library **AlaSQL** untuk menjalankan SQL kueri penuh di browser tanpa perlu server database eksternal.
* **5 Tingkat Pembelajaran**:
  1. **Level 1 (SELECT)**: Dasar menampilkan semua data dari tabel `siswa`.
  2. **Level 2 (WHERE)**: Menyaring data siswa spesifik kelas 9.
  3. **Level 3 (ORDER BY)**: Mengurutkan nilai matematika tertinggi ke terendah dari tabel `nilai`.
  4. **Level 4 (JOIN)**: Relasi antar-tabel menggunakan `INNER JOIN` berdasarkan ID siswa.
  5. **Level 5 (INSERT INTO)**: Menambahkan baris data siswa baru ke database secara dinamis.
* **Schema Tree Browser**: Menampilkan skema tabel, tipe kolom, dan memiliki tombol pintas **"Lihat Data Live"** yang akan otomatis menulis kueri, menjalankannya, lalu mengarahkan pandangan siswa ke terminal hasil.
* **Modal Perayaan & Konfeti**: Animasi jatuhnya konfeti emoji (`🎉`, `🎓`, `🌟`) ketika siswa berhasil memecahkan kueri dengan benar di setiap level.
* **Reset Database**: Memungkinkan siswa menyetel ulang tabel ke data awal jika terjadi kesalahan kueri.

---

## 🛠️ Teknologi yang Digunakan

* **Struktur & Kerangka**: HTML5 (Struktur semantik)
* **Gaya & Layout**: Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid, Glassmorphism, CSS Keyframe Animations)
* **Logika Interaktif**: JavaScript ES6+ (DOM Manipulation, Live Query Verification, Confetti Engine)
* **Mesin Database**: AlaSQL (Client-side SQL engine via jsDelivr CDN)
* **Tipografi & Ikon**: Google Fonts (Plus Jakarta Sans) & FontAwesome v6 (Ikon modern)

---

## 📂 Struktur Berkas

```text
Les/
├── index.html     # Halaman utama portal interaktif & logika JavaScript
├── styke.css      # Seluruh desain system, animasi, dan layout responsif
├── latihan.py     # Kode sumber Python untuk algoritma pemfilteran angka unik
└── README.md      # Dokumentasi proyek (berkas ini)
```

---

## 🚀 Cara Publikasi di GitHub Pages (Live Page)

Berikut langkah-langkah mudah untuk mempublikasikannya:

1. **Buat Repositori Baru di GitHub**:
   * Masuk ke akun GitHub Anda.
   * Buat repositori baru, misalnya beri nama `hantcheducation`.
   
2. **Unggah Berkas Proyek**:
   * Lakukan inisialisasi Git di folder lokal Anda:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - HanTech Education & SQL Lab"
     ```
   * Hubungkan dan dorong (*push*) berkas ke GitHub:
     ```bash
     git remote add origin https://github.com/alproject-glitch/hantcheducation.git
     git branch -M main
     git push -u origin main
     ```

3. **Aktifkan GitHub Pages**:
   * Pergi ke tab **Settings** di halaman repositori GitHub Anda.
   * Pada menu bagian kiri, klik **Pages**.
   * Di bagian **Build and deployment**, ubah Source menjadi **Deploy from a branch**.
   * Pilih branch **`main`** (atau `master`) dan folder **`/ (root)`**, lalu klik **Save**.
   * Tunggu sekitar 1-2 menit. GitHub akan memberikan tautan live page Anda, misalnya: `https://alproject-glitch.github.io/hantcheducation/`

---

## 📝 Catatan Tambahan Portofolio
* **Tanpa Kendala CORS**: Dengan menggunakan AlaSQL lewat CDN dan logika JavaScript murni, portofolio ini tidak akan mengalami kendala *Cross-Origin Resource Sharing (CORS)* saat diakses secara online maupun dibuka langsung dari folder komputer (`file:///`).
* **SEO Optimized**: Halaman sudah dilengkapi dengan tag meta SEO lengkap (deskripsi, keywords, viewport) untuk memastikan performa pengindeksan yang baik di mesin pencari.
