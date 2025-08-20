# 📊 React SaaS Dashboard

<div align="center">
  <img src="public/vite.svg" width="120" height="120" alt="Dashboard Icon">
  <br>
  <strong>Dashboard React Modern dengan TypeScript & TailwindCSS</strong>
  <br>
  <em>Dibuat dengan ❤️ oleh CodingGeh</em>
</div>

## 🎬 Demo

<div align="center">
  <a href="https://coding-geh.github.io/sample-dashboard">
    <img src="https://img.shields.io/badge/Live%20Demo-Lihat%20Sekarang-brightgreen?style=for-the-badge&logo=react" alt="Live Demo">
  </a>
</div>

<div align="center">
  <a href="https://github.com/Coding-Geh/sample-dashboard/stargazers">
    <img src="https://img.shields.io/github/stars/Coding-Geh/sample-dashboard?style=for-the-badge&logo=github" alt="GitHub Stars">
  </a>
  <a href="https://github.com/Coding-Geh/sample-dashboard/network">
    <img src="https://img.shields.io/github/forks/Coding-Geh/sample-dashboard?style=for-the-badge&logo=github" alt="GitHub Forks">
  </a>
</div>

<div align="center">
  <a href="#tentang">Tentang</a> •
  <a href="#fitur">Fitur</a> •
  <a href="#screenshot">Screenshot</a> •
  <a href="#teknologi">Teknologi</a> •
  <a href="#memulai">Memulai</a> •
  <a href="#deployment">Deployment</a>
</div>

---

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-green?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Vite-5.4.10-orange?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</div>

## 🎯 Tujuan Proyek & Perjalanan Belajar

Proyek **React SaaS Dashboard** ini dibangun bukan hanya sebagai portofolio, tetapi sebagai tantangan untuk menaklukkan hambatan teknis tertentu:

* **Tujuan Utama:** Membangun dashboard SaaS yang komprehensif dengan pola React modern, lengkap dengan desain responsif dan grafik interaktif.
* **Tantangan Teknis:** Mengimplementasikan manajemen state yang kompleks dengan Redux Toolkit, membuat komponen yang dapat digunakan kembali, dan mengoptimalkan performa dengan Vite.
* **Yang Kami Pelajari:** Pola pengembangan React modern, integrasi Redux Toolkit, dan desain responsif dengan TailwindCSS.

## 📋 Tentang

Ini adalah **PROYEK DEMONSTRASI** yang dibuat oleh [CodingGeh](https://github.com/Coding-Geh) untuk menampilkan:

- Keterampilan pengembangan React dengan TypeScript
- Prinsip desain UI/UX modern
- Manajemen state dengan Redux Toolkit
- Pola desain responsif
- Arsitektur berbasis komponen
- Optimasi performa

## ✨ Fitur

- 🎨 **UI/UX Modern** - Desain bersih dengan TailwindCSS
- 📊 **Dashboard Interaktif** - Statistik real-time dan grafik
- 👥 **Manajemen Pengguna** - Operasi CRUD pengguna lengkap
- 📈 **Analitik** - Analitik dan pelaporan detail
- 💳 **Sistem Tagihan** - Manajemen langganan dan pembayaran
- 📋 **Laporan** - Sistem pelaporan komprehensif
- ⚙️ **Pengaturan** - Konfigurasi pengguna dan sistem
- 🌙 **Mode Gelap** - Toggle antara tema terang dan gelap
- 📱 **Desain Responsif** - Berfungsi di semua perangkat
- ⚡ **Performa Cepat** - Dibangun dengan Vite untuk kecepatan optimal

## 📸 Screenshot

<div align="center">
  <table>
    <tr>
      <td><img src="screenshots/dashboard.png" width="300" alt="Dashboard"></td>
      <td><img src="screenshots/users.png" width="300" alt="Users"></td>
      <td><img src="screenshots/analytics.png" width="300" alt="Analytics"></td>
    </tr>
  </table>
</div>

## 🛠️ Teknologi

### Frontend
- **Framework**: React 18.3.1
- **Bahasa**: TypeScript 5.2.2
- **Manajemen State**: Redux Toolkit, React Redux
- **Framework UI**: TailwindCSS 3.4.17
- **Routing**: React Router DOM
- **Grafik**: Recharts
- **Ikon**: Lucide React

### Alat Build
- **Build Tool**: Vite 5.4.10
- **Package Manager**: npm
- **Kualitas Kode**: ESLint, TypeScript
- **Version Control**: Git

## 🏗️ Arsitektur

```
src/
├── components/          # Komponen yang dapat digunakan kembali
│   ├── Dashboard/      # Komponen khusus dashboard
│   │   ├── Chart.tsx   # Komponen grafik
│   │   └── StatsCard.tsx # Kartu statistik
│   └── Layout/         # Komponen layout
│       └── Sidebar.tsx # Sidebar navigasi
├── pages/              # Komponen halaman
│   ├── Dashboard.tsx   # Dashboard utama
│   ├── Users.tsx       # Manajemen pengguna
│   ├── Analytics.tsx   # Halaman analitik
│   ├── Billing.tsx     # Manajemen tagihan
│   ├── Reports.tsx     # Halaman laporan
│   └── Settings.tsx    # Halaman pengaturan
├── store/              # Redux store
│   ├── index.ts        # Konfigurasi store
│   └── slices/         # Redux slices
│       ├── authSlice.ts
│       └── dashboardSlice.ts
└── assets/             # Aset statis
```

**Arsitektur Komponen:**
- **Pages**: Komponen rute utama
- **Components**: Komponen UI yang dapat digunakan kembali
- **Store**: Manajemen state global
- **Assets**: File dan gambar statis

## 🚀 Memulai

### Prasyarat
- Node.js 18+ 
- npm atau yarn
- Git

### Instalasi
```bash
# Clone repository
git clone https://github.com/Coding-Geh/sample-dashboard.git

# Masuk ke direktori proyek
cd sample-dashboard

# Install dependensi
npm install

# Jalankan server development
npm run dev
```

### Build untuk Produksi
```bash
# Build proyek
npm run build

# Preview build produksi
npm run preview
```

## 📥 Live Demo & Coba Sekarang!

<div align="center">
  <h3>🚀 Siap mencoba dashboard?</h3>
  <p>Kunjungi live demo dan jelajahi semua fitur!</p>
</div>

### 🌐 Live Demo
<div align="center">
  <a href="https://coding-geh.github.io/sample-dashboard">
    <img src="https://img.shields.io/badge/Live%20Demo-Lihat%20Sekarang-25D366?style=for-the-badge&logo=react&logoColor=white" alt="Live Demo">
  </a>
</div>

### ⭐ Dukung Proyek Ini
<div align="center">
  <p>Jika Anda menyukai proyek ini dan apa yang kami lakukan, mohon berikan ⭐ bintang di GitHub!</p>
  <a href="https://github.com/Coding-Geh/sample-dashboard/stargazers">
    <img src="https://img.shields.io/github/stars/Coding-Geh/sample-dashboard?style=for-the-badge&logo=github" alt="GitHub Stars">
  </a>
  <a href="https://github.com/Coding-Geh/sample-dashboard/network">
    <img src="https://img.shields.io/github/forks/Coding-Geh/sample-dashboard?style=for-the-badge&logo=github" alt="GitHub Forks">
  </a>
</div>

## 👥 Tentang CodingGeh

**CodingGeh** adalah duo developer yang dinamis dengan fokus pada pembuatan aplikasi berkualitas tinggi menggunakan teknologi modern dan praktik terbaik. Kami percaya dalam membangun solusi yang tidak hanya fungsional, tetapi juga elegan dan mudah digunakan.

### Keahlian Kami
- **Pengembangan Frontend**: React, Vue.js, Angular
- **Pengembangan Backend**: Django, Laravel, Go, Node.js, Rust
- **Pengembangan Mobile**: Flutter, React Native
- **Desain UI/UX**: Material Design, Sistem Desain Kustom
- **DevOps**: CI/CD, Docker, Cloud Deployment

### Hubungi Kami
<div align="center">
  <a href="https://github.com/Coding-Geh">
    <img src="https://img.shields.io/badge/GitHub-CodingGeh-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://codinggeh.dev">
    <img src="https://img.shields.io/badge/Portfolio-CodingGeh-FF6B6B?style=for-the-badge&logo=portfolio" alt="Portfolio">
  </a>
  <a href="mailto:hello@codinggeh.dev">
    <img src="https://img.shields.io/badge/Email-hello@codinggeh.dev-blue?style=for-the-badge&logo=gmail" alt="Email">
  </a>
</div>

### 💼 Mencari Developer?
<div align="center">
  <p>Terkesan dengan arsitektur dan kualitas kode di proyek ini? Kami bisa membawa level keahlian yang sama untuk proyek Anda.</p>
  <p><strong>Kami siap untuk proyek freelance dan kesempatan kerja full-time!</strong></p>
  <a href="mailto:hello@codinggeh.dev">
    <img src="https://img.shields.io/badge/Hire%20Us-Mari%20Bicara-green?style=for-the-badge&logo=telegram" alt="Hire Us">
  </a>
</div>

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detailnya.

---

<div align="center">
  <strong>Dibuat dengan ❤️ oleh CodingGeh</strong>
  <br>
  <em>Membangun masa depan, satu aplikasi pada satu waktu</em>
</div>
