# Website MBC Laboratory

Website Profile **MBC Laboratory** yang dibangun menggunakan [Next.js] dengan teknologi modern untuk menampilkan informasi laboratorium, bidang keahlian, dan kontak.

## 🚀 Teknologi yang Digunakan

- **Next.js 15** - React framework untuk production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Service untuk mengirim email dari frontend
- **Google Maps** - Integrasi peta lokasi
- **Vercel** - Platform deployment

## 📁 Struktur Proyek

```
mbc-website/
├── app/                     # App Router (Next.js 13+)
│   ├── layout.tsx          # Layout utama aplikasi
│   ├── page.tsx            # Halaman beranda (homepage)
│   ├── contact/            # Halaman kontak
│   │   └── page.tsx
│   ├── division/           # Halaman bidang keahlian
│   │   └── page.tsx
│   └── profile/            # Halaman profil
│       └── page.tsx
├── components/             # Komponen React yang dapat digunakan ulang
│   ├── ui/
│   │   └── Card.tsx       # Komponen kartu
│   ├── Navbar.tsx         # Navigasi atas
│   └── Footer.tsx         # Footer
├── public/                 # File statis
│   └── images/            # Gambar dan aset
├── styles/                # File CSS
├── next.config.ts         # Konfigurasi Next.js
├── tailwind.config.js     # Konfigurasi Tailwind CSS
├── package.json           # Dependencies dan scripts
└── README.md             # Dokumentasi proyek
```

## 🛠 Instalasi Lokal

### Prasyarat

- **Node.js** versi 18.0 atau lebih baru
- **npm**, **yarn**, **pnpm**, atau **bun**

### Langkah Instalasi

1. **Clone repository:**

```bash
git clone https://github.com/dhitera/mbc-techTest.git
cd mbc-website
```

2. **Install dependencies:**

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Jalankan development server:**

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. **Buka browser:**
   Akses [http://localhost:3000](http://localhost:3000) untuk melihat website.

### Scripts yang Tersedia

```bash
npm run dev          # Menjalankan development server
npm run build        # Build aplikasi untuk production
npm run start        # Menjalankan production server
npm run lint         # Menjalankan ESLint untuk code quality
```

## 🌐 Deployment ke Vercel

### Deployment Otomatis via GitHub

1. **Push ke GitHub:**

```bash
git add .
git commit -m "Deploy MBC Laboratory website"
git push origin main
```

2. **Deploy ke Vercel:**

   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan akun GitHub
   - Klik "New Project"
   - Import repository `mbc-techTest`
   - Vercel akan otomatis mendeteksi Next.js

3. **Konfigurasi Environment Variables:**
   Di Vercel Dashboard → Settings → Environment Variables, tambahkan:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_hnw19s9
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_e1p0ums
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xJRRZA4CWFXt-EBwn
```

### Deployment Manual via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Konfigurasi Backend

### EmailJS Setup

Website ini menggunakan EmailJS untuk mengirim email dari form kontak:

1. **Buat akun di [EmailJS](https://www.emailjs.com/)**
2. **Setup Email Service:**
   - Pilih provider email (Gmail/Outlook)
   - Ikuti panduan konfigurasi
3. **Buat Email Template:**
   - Gunakan variabel: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. **Dapatkan kredensial:**
   - Service ID
   - Template ID
   - Public Key

### Google Maps Integration

Form kontak terintegrasi dengan Google Maps untuk menampilkan lokasi:

- **Alamat:** Jl. Telekomunikasi No.1, Sukapura, Dayeuhkolot, Bandung, Jawa Barat 40267
- Maps URL sudah dikonfigurasi dalam komponen contact page

## 🔒 Konfigurasi SSL

### SSL di Vercel (Otomatis)

Vercel menyediakan SSL certificate secara otomatis:

- ✅ **HTTPS** aktif secara default
- ✅ **Automatic renewal** certificate
- ✅ **Custom domain** support dengan SSL

### SSL untuk Custom Domain

1. **Tambah custom domain di Vercel:**

   - Dashboard → Settings → Domains
   - Masukkan domain Anda

2. **Konfigurasi DNS:**

   - Arahkan domain ke Vercel servers
   - SSL certificate akan otomatis di-generate

3. **Force HTTPS redirect:**
   - Otomatis aktif di Vercel
   - Semua HTTP traffic diarahkan ke HTTPS

## 📱 Fitur Website

### 🏠 Homepage

- **Jumbotron** dengan gradient background
- **Visi & Misi** dalam bentuk kartu glassmorphism
- **Bidang Keahlian** dengan 4 area: Cyber Security, Big Data, Game Tech, GIS

### 📞 Halaman Kontak

- **Form kontak** terintegrasi EmailJS
- **Google Maps** menampilkan lokasi laboratorium

### 👤 Halaman Profil Developer

- **Informasi lengkap:** Nama, Jurusan, NIM, Email, Bidang Keahlian

### 🎯 Halaman Division

- **Detail bidang keahlian** dengan deskripsi lengkap
- **Komponen kartu** yang konsisten dan responsive

### 🧭 Navigasi

- **Navbar global** dengan dark mode support
- **Footer konsisten** di semua halaman
- **Responsive design** untuk mobile dan desktop

## 🎨 Design System

- **Color Scheme:** Blue to Purple gradient
- **Glass Effect:** Semi-transparent dengan backdrop blur
- **Typography:** Modern dengan hierarchy yang jelas
- **Responsive:** Mobile-first approach

## 🚨 Troubleshooting

### Build Errors

```bash
# Check dan fix TypeScript errors
npm run lint

# Clear cache
rm -rf .next
npm run build
```

### EmailJS Issues

- Verifikasi Service ID, Template ID, dan Public Key
- Check EmailJS dashboard untuk error logs

## 📝 Lisensi

Project ini dibuat untuk Technical Test MBC Laboratory - Telkom University.

---

**Website URL:** [mbc-website.vercel.app](https://mbc-tech-test-2ndqwy9ln-dhiteras-projects.vercel.app/)  
**Repository:** [github.com/dhitera/mbc-techTest](https://github.com/dhitera/mbc-techTest)
