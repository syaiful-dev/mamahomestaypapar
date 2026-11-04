# Mama Homestay Papar - Landing Page (DUMMY)

Halaman contoh untuk homestay di Papar, Sabah. Bahasa lalai ialah Bahasa
Melayu, dengan butang untuk menukar kepada English (dan sebaliknya). Pilihan
bahasa disimpan dalam pelayar dan dikongsi antara kedua-dua halaman.

Tempahan dihantar sebagai permintaan ke WhatsApp. Tiada bayaran dalam talian.

## Fail

| Fail         | Fungsi                                                                 |
|--------------|------------------------------------------------------------------------|
| `index.html` | Halaman utama                                                          |
| `rules.html` | Halaman asing: Peraturan Homestay dan Terma Diskaun (dua tab)          |
| `i18n.js`    | SEMUA teks Bahasa Melayu dan English (ubah ayat di sini)               |
| `script.js`  | Tetapan `CONFIG` (WhatsApp, emel, pakej), borang tempahan, pengiraan   |
| `styles.css` | Rupa dan warna (palet di bahagian atas fail)                           |

## Lihat di komputer

Klik dua kali `index.html`.

## Apa yang sudah ada dan apa yang masih contoh

Maklumat daripada tuan rumah:
- Dua pakej: **Full House RM350** dan **Additional Ruang Tamu RM750**.
- Senarai tempat menarik: Benoni Commercial Centre (BCC), Kimanis Petroleum
  Training Centre, Pantai Manis, Pekan Papar, Pekan Benoni, Lebuhraya Pan Borneo.

Masih CONTOH (perlu disahkan sebelum disiarkan):
- Nombor WhatsApp dan emel (`script.js` > `CONFIG`).
- Ciri setiap pakej, bilangan tetamu maksimum (tambah `capacity` bila disahkan),
  dan sama ada harga ialah setiap malam.
- Jarak ke setiap tempat menarik (perlukan lokasi tepat homestay).
- Semua kandungan `rules.html` (peraturan dan terma diskaun) serta soalan lazim.
- Gambar (galeri dan hero), ulasan tetamu, pin peta.

## Cara menukar teks

- **Ayat / terjemahan**: cari kunci dalam `i18n.js` dan ubah nilai `ms` dan `en`.
- **Pakej dan harga**: `script.js` > `CONFIG.rooms` (nama ada versi `ms` dan `en`).
- **Peraturan dan terma diskaun**: `i18n.js` > `rulesList` dan `discountList`
  (setiap item ada tajuk `t` dan huraian `d`). Tambah atau buang item dalam
  KEDUA-DUA bahasa dengan bilangan yang sama.
- **Jarak**: dalam `index.html`, ganti ` - jarak akan disahkan` (kunci `distTbc`)
  untuk setiap tempat dengan jarak sebenar, contohnya `- 12 km`.
- **Buang bar notis contoh**: padam blok `dummy-bar` di bahagian atas `index.html`
  dan `rules.html`.

## Gambar

Letak gambar dalam folder `assets/`, kemudian ganti setiap
`<figure class="ph ...">` dalam `index.html` dengan
`<figure><img src="assets/nama.jpg" alt="..."></figure>`.

## Siarkan secara percuma (apabila siap)

- **GitHub Pages**: push ke repo awam, kemudian Settings > Pages > branch `main` / root.
- **Netlify**: seret folder laman ke app.netlify.com (Deploy manually).
