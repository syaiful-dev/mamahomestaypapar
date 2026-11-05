/* ==========================================================================
   Mama Homestay Papar - terjemahan Bahasa Melayu / English
   --------------------------------------------------------------------------
   Semua teks yang dipaparkan berada di sini. Bahasa lalai ialah Bahasa
   Melayu ("ms"). Pilihan pengguna disimpan dalam pelayar dan dikongsi antara
   halaman. Untuk menukar sesuatu ayat, ubah nilai "ms" dan "en" bagi kunci
   yang sama.

   Nota: nilai yang mengandungi tanda < atau & dipaparkan sebagai HTML. Ia
   ditulis oleh pembangun (bukan input pengguna), jadi selamat.
   ========================================================================== */

(function () {
  const STORAGE_KEY = "mhp_lang";

  const DICT = {
    ms: {
      /* ---------- Umum ---------- */
      skip: "Terus ke kandungan",
      dummyBar: "Halaman contoh. Semua maklumat, harga dan gambar adalah sementara.",
      brandAria: "Mama Homestay Papar - laman utama",
      navHighlights: "Kemudahan",
      navRooms: "Pakej",
      navGallery: "Galeri",
      navLocation: "Lokasi",
      navFaq: "Soalan Lazim",
      navRules: "Peraturan",
      navBook: "Tempah",
      langToggleText: "EN",
      langToggleAria: "Switch to English",

      /* ---------- Tajuk halaman ---------- */
      titleIndex: "Mama Homestay Papar | Penginapan Selesa di Papar, Sabah",
      descIndex: "Mama Homestay Papar: penginapan selesa dan mesra keluarga di Papar, Sabah. Semak ketersediaan dan tempah terus melalui WhatsApp.",
      titleRules: "Peraturan & Terma | Mama Homestay Papar",
      descRules: "Peraturan homestay dan terma diskaun Mama Homestay Papar, Sabah.",

      /* ---------- Hero ---------- */
      heroEyebrow: "Papar, Sabah",
      heroTitle: `Rehat di rumah kedua <span class="accent">anda di Papar.</span>`,
      heroLead: "Penginapan selesa, bersih dan mesra keluarga. Sesuai untuk bercuti, kenduri, atau singgah dalam perjalanan anda.",
      heroBtnCheck: "Semak Ketersediaan",
      heroBtnWa: "WhatsApp Kami",
      heroPoint1: "Bersih &amp; selesa",
      heroPoint2: "Sesuai untuk keluarga",
      heroPoint3: "Parkir luas",

      /* ---------- Kemudahan ---------- */
      highlightsTitle: "Kemudahan untuk keselesaan anda",
      highlightsSub: "Semua yang anda perlukan untuk penginapan yang tenang. (Senarai contoh)",
      feat1Title: "Penghawa dingin",
      feat1Desc: "Penghawa dingin di setiap bilik dan ruang tamu.",
      feat2Title: "Wi-Fi percuma",
      feat2Desc: "Internet untuk kerja, hiburan dan berhubung dengan keluarga.",
      feat3Title: "Dapur boleh guna",
      feat3Desc: "Sediakan hidangan sendiri dengan peralatan asas yang disediakan.",
      feat4Title: "Parkir Luas",
      feat4Desc: "Ruang letak kenderaan yang luas di halaman rumah.",
      feat5Title: "Mesra keluarga",
      feat5Desc: "Ruang luas untuk keluarga besar dan rombongan kecil.",
      feat6Title: "Lokasi strategik",
      feat6Desc: "Dekat dengan kedai makan dan tempat menarik di sekitar Papar.",

      /* ---------- Pakej ---------- */
      roomsTitle: "Pilihan pakej &amp; harga",
      roomsSub: "Pilih pakej yang sesuai dengan keperluan anda.",
      roomsNoscript: "Sila aktifkan JavaScript untuk melihat senarai pakej, atau hubungi kami melalui WhatsApp.",
      perNight: "malam",
      pkgBtn: "Semak {name}",
      roomPlaceholder: "Pilih pakej",
      capacityText: "Muat sehingga {n} tetamu",

      /* ---------- Galeri ---------- */
      galleryTitle: "Galeri",
      gallerySub: "Gambar sebenar akan dimasukkan di sini. (Kotak di bawah ialah tempat letak gambar.)",
      ph1: "Ruang tamu",
      ph2: "Bilik tidur",
      ph3: "Dapur",
      ph4: "Bilik air",
      ph5: "Halaman &amp; parkir",
      ph6: "Pemandangan sekitar",

      /* ---------- Lokasi ---------- */
      locationTitle: "Lokasi",
      locationSub: "Mama Homestay Papar - cari \"Mama Homestay Papar\" di Google Maps untuk arah tuju.",
      nearbyTitle: "Tempat menarik berdekatan",
      nearbyNote: "Jarak di bawah ialah anggaran. Akan dikemas kini dengan jarak tepat.",
      kimanisName: "Kimanis Petroleum Training Centre",
      pekanPapar: "Pekan Papar",
      pekanBenoni: "Pekan Benoni",
      panBorneo: "Lebuhraya Pan Borneo",
      distBcc: " - lebih kurang 1 km",
      distBenoni: " - lebih kurang 1 km",
      distManis: " - lebih kurang 5 km",
      distPapar: " - lebih kurang 6 km",
      distKimanis: " - lebih kurang 20 km",
      distPanBorneo: " - akses mudah berdekatan",

      /* ---------- Borang tempahan ---------- */
      bookTitle: "Semak ketersediaan &amp; tempah",
      bookSub: "Isi butiran penginapan anda. WhatsApp akan terbuka dengan permintaan anda sedia dihantar. Tempahan disahkan selepas kami membalas.",
      lblCheckin: "Daftar masuk",
      lblCheckout: "Daftar keluar",
      lblRoom: "Pilihan pakej",
      lblGuests: "Bilangan tetamu",
      lblName: "Nama penuh",
      lblPhone: "No. telefon",
      phonePlaceholder: "cth: 0123456789",
      lblNotes: `Nota <span class="optional">(pilihan)</span>`,
      notesPlaceholder: "cth: datang bersama kanak-kanak, perlukan katil tambahan",
      bookSubmit: "Hantar permintaan melalui WhatsApp",
      bookHint: "Harga ialah anggaran. Jumlah akhir disahkan oleh tuan rumah.",
      estimate: "Anggaran: {n} malam x {price} = {total}",

      errCheckinMissing: "Sila pilih tarikh daftar masuk.",
      errCheckinPast: "Tarikh daftar masuk tidak boleh lepas.",
      errCheckoutMissing: "Sila pilih tarikh daftar keluar.",
      errCheckoutOrder: "Daftar keluar mesti selepas daftar masuk.",
      errRoom: "Sila pilih pakej.",
      errGuests: "Sila masukkan bilangan tetamu.",
      errName: "Sila masukkan nama penuh anda.",
      errPhone: "Sila masukkan no. telefon yang sah.",

      /* ---------- Mesej WhatsApp ---------- */
      waIntro: "Salam, saya ingin menyemak ketersediaan di Mama Homestay Papar.",
      waPackage: "Pakej",
      waCheckin: "Daftar masuk",
      waCheckout: "Daftar keluar",
      waNights: "Bilangan malam",
      waGuests: "Bilangan tetamu",
      waEstimate: "Anggaran harga",
      waName: "Nama",
      waPhone: "No. telefon",
      waNotes: "Nota",
      dateLocale: "ms-MY",

      /* ---------- Soalan lazim ---------- */
      faqTitle: "Soalan lazim",
      faqQ1: "Pukul berapa waktu daftar masuk dan keluar?",
      faqA1: "Daftar masuk dari 2:00 petang dan daftar keluar sebelum 12:00 tengah hari. (Waktu contoh, akan dikemas kini.)",
      faqQ2: "Adakah perlu bayar deposit?",
      faqA2: "Deposit tempahan mungkin diperlukan untuk mengesahkan tarikh anda. Butiran akan dimaklumkan melalui WhatsApp. (Contoh)",
      faqQ3: "Bolehkah bawa lebih ramai tetamu daripada yang dinyatakan?",
      faqA3: "Sila maklumkan bilangan tetamu sebenar semasa menempah. Caj tambahan mungkin dikenakan. (Contoh)",
      faqQ4: "Adakah ada tempat letak kenderaan?",
      faqA4: "Ada. Ruang parkir yang luas disediakan di halaman rumah.",
      faqQ5: "Boleh bawa haiwan peliharaan?",
      faqA5: "Sila tanya terlebih dahulu melalui WhatsApp. (Contoh, dasar sebenar akan dikemas kini.)",
      faqQ6: "Bagaimana cara bayaran?",
      faqA6: "Selepas tarikh disahkan, kami akan kongsi butiran bayaran melalui WhatsApp.",
      faqQ7: "Di mana saya boleh baca peraturan penuh dan terma diskaun?",
      faqA7: `Sila lihat halaman <a href="rules.html">Peraturan &amp; Terma</a> untuk senarai penuh.`,

      /* ---------- Footer ---------- */
      footerTagline: "Penginapan selesa dan mesra keluarga di Papar, Sabah.",
      footerContact: "Hubungi kami",
      footerWaLabel: "WhatsApp",
      footerEmailLabel: "Emel",
      footerLinks: "Pautan pantas",
      footerLinkRooms: "Pakej &amp; harga",
      footerLinkLocation: "Lokasi",
      footerLinkBook: "Tempah",
      footerLinkRules: "Peraturan &amp; Terma Diskaun",
      footerDummy: "Halaman contoh.",
      fabAria: "Hubungi kami melalui WhatsApp",

      /* ---------- Halaman peraturan ---------- */
      rulesBack: "Kembali ke laman utama",
      rulesPageTitle: "Peraturan &amp; Terma",
      rulesPageSub: "Sila baca peraturan homestay dan terma diskaun sebelum menempah.",
      tabRules: "Peraturan Homestay",
      tabDiscount: "Terma Diskaun",
      tabsAria: "Pilih bahagian",
      rulesIntro: "Terima kasih kerana memilih Mama Homestay sebagai tempat istirahat anda. Bagi menjamin keselesaan sepanjang anda menginap, sila patuhi peraturan berikut:",
      rulesList: [
        { t: "Waktu daftar", d: "Daftar masuk selepas jam 2:00 petang dan daftar keluar sebelum jam 12:00 tengah hari." },
        { t: "Had tetamu", d: "Bilangan penginap yang dibenarkan adalah maksimum 12 orang termasuk kanak-kanak. Caj RM10 per kepala jika melebihi 12 orang." },
        { t: "Penjagaan kemudahan", d: "Gunakan semua kemudahan dengan cermat. Sekiranya terdapat kerosakan semasa menginap, maklumkan kepada pihak pengurusan dengan segera. Kos kerosakan ditanggung oleh penginap." },
        { t: "Larangan bau", d: "Penginap tidak dibenarkan membawa durian atau sebarang makanan yang berbau kurang menyenangkan ke dalam rumah penginapan." },
        { t: "Haiwan peliharaan", d: "Binatang peliharaan tidak dibenarkan dibawa masuk ke dalam rumah penginapan." },
        { t: "Polisi halal", d: "Peralatan memasak, pinggan mangkuk dan set barbeku hanya untuk kegunaan halal sahaja, dan hanya makanan halal dibenarkan dibawa masuk." },
        { t: "Jimat tenaga", d: "Tutup semua suis lampu, pemanas air, pili air dan perkakas elektrik apabila tidak digunakan dan sebelum meninggalkan rumah penginapan." },
        { t: "Kebersihan", d: "Pastikan rumah penginapan sentiasa kemas dan bersih." },
        { t: "Susunan perabot", d: "Kembalikan semua kelengkapan, perabot dan bahan bacaan ke tempat asal selepas digunakan dan sebelum meninggalkan rumah." },
        { t: "Keselamatan", d: "Keselamatan barangan peribadi adalah tanggungjawab penginap sepenuhnya." },
        { t: "Ketenteraman awam", d: "Elakkan bising di sekitar rumah penginapan, khususnya selepas 10:00 malam (hari biasa) dan 11:59 malam (hujung minggu)." },
        { t: "Larangan merokok", d: "Mama Homestay adalah premis bebas asap rokok. Merokok hanya dibenarkan di luar rumah, dan puntung rokok hendaklah dibuang ke dalam tong sampah." },
        { t: "Minuman beralkohol", d: "Minuman beralkohol tidak dibenarkan di dalam rumah penginapan. Sekiranya ingin membawa minuman keras, maklumkan kepada pihak pengurusan; kebenaran hanya diberikan di luar rumah penginapan sahaja." },
      ],
      halalStripTitle: "Makanan &amp; Minuman Halal Sahaja",
      halalStripDesc: "Premis Mama Homestay Papar hanya membenarkan makanan dan minuman halal dibawa masuk.",
      halalStripLink: "Baca polisi halal",
      tabHalal: "Polisi Halal",
      halalHeading: "Makanan &amp; Minuman Halal Sahaja",
      halalLead: "Premis Mama Homestay Papar hanya membenarkan makanan dan minuman halal.",
      halalWarn: "Tindakan tegas akan diambil jika membawa masuk makanan dan minuman bukan halal.",
      halalList: [
        { t: "Makanan &amp; minuman", d: "Hanya makanan dan minuman halal dibenarkan dibawa masuk ke dalam premis." },
        { t: "Peralatan", d: "Peralatan memasak, pinggan mangkuk dan set barbeku hanya untuk kegunaan halal sahaja." },
        { t: "Tiada alkohol", d: "Minuman beralkohol tidak dibenarkan di dalam rumah penginapan." },
      ],
      tabEmergency: "Talian Kecemasan",
      emergencyIntro: "Tekan mana-mana nombor di bawah untuk terus menghubunginya.",
      emergencyOwnerTitle: "Pemilik Homestay",
      ownerName: "Syaiful",
      ownerName2: "Nina",
      ownerName3: "Emergency",
      emergencyServicesTitle: "Perkhidmatan Kecemasan (Papar)",
      svcPolice: "Balai Polis Papar",
      svcHospital: "Hospital Papar",
      svcFire: "Balai Bomba Papar",
      svc999: "Talian Kecemasan Kebangsaan",
      footerLinkEmergency: "Talian Kecemasan",
      discountIntro: "Diskaun (jika ditawarkan) tertakluk kepada terma berikut.",
      discountNote: "Peratusan dan syarat diskaun sebenar akan dimasukkan selepas disahkan oleh tuan rumah. Kandungan di bawah ialah contoh.",
      discountList: [
        { t: "Kelayakan", d: "Diskaun hanya terpakai untuk tempahan yang dibuat terus melalui laman ini atau WhatsApp rasmi homestay." },
        { t: "Tidak boleh digabungkan", d: "Hanya satu diskaun boleh digunakan bagi setiap tempahan. Diskaun tidak boleh digabungkan dengan promosi lain." },
        { t: "Tarikh &amp; ketersediaan", d: "Diskaun tertakluk kepada ketersediaan dan mungkin tidak terpakai pada musim perayaan, cuti sekolah dan hujung minggu panjang." },
        { t: "Penginapan berbilang malam", d: "Diskaun untuk penginapan beberapa malam (jika ditawarkan) dikira mengikut bilangan malam yang disahkan. [Kadar diskaun akan dikemas kini]" },
        { t: "Pengesahan", d: "Diskaun perlu dimaklumkan semasa menempah dan disahkan oleh tuan rumah sebelum bayaran dibuat. Diskaun tidak boleh dituntut selepas bayaran selesai." },
        { t: "Tiada nilai tunai", d: "Diskaun tidak boleh ditukar kepada wang tunai atau dipindahkan kepada orang lain." },
        { t: "Hak tuan rumah", d: "Tuan rumah berhak meminda atau menamatkan tawaran diskaun pada bila-bila masa tanpa notis. Tempahan yang telah disahkan tidak terjejas." },
      ],
      rulesCtaText: "Ada soalan tentang peraturan atau diskaun?",
      rulesCtaBtn: "Tanya melalui WhatsApp",
      waRulesAsk: "Salam, saya ada soalan tentang peraturan dan diskaun di Mama Homestay Papar.",
    },

    en: {
      /* ---------- General ---------- */
      skip: "Skip to content",
      dummyBar: "Sample page. All information, prices and photos are temporary.",
      brandAria: "Mama Homestay Papar - home",
      navHighlights: "Amenities",
      navRooms: "Packages",
      navGallery: "Gallery",
      navLocation: "Location",
      navFaq: "FAQ",
      navRules: "Rules",
      navBook: "Book",
      langToggleText: "BM",
      langToggleAria: "Tukar ke Bahasa Melayu",

      /* ---------- Page titles ---------- */
      titleIndex: "Mama Homestay Papar | Comfortable Stay in Papar, Sabah",
      descIndex: "Mama Homestay Papar: a comfortable, family-friendly stay in Papar, Sabah. Check availability and book directly on WhatsApp.",
      titleRules: "Rules & Terms | Mama Homestay Papar",
      descRules: "House rules and discount terms for Mama Homestay Papar, Sabah.",

      /* ---------- Hero ---------- */
      heroEyebrow: "Papar, Sabah",
      heroTitle: `Relax in your second home <span class="accent">in Papar.</span>`,
      heroLead: "A comfortable, clean and family-friendly stay. Ideal for a getaway, a family gathering, or a stop along your journey.",
      heroBtnCheck: "Check Availability",
      heroBtnWa: "Chat on WhatsApp",
      heroPoint1: "Clean &amp; comfortable",
      heroPoint2: "Family friendly",
      heroPoint3: "Spacious parking",

      /* ---------- Amenities ---------- */
      highlightsTitle: "Amenities for your comfort",
      highlightsSub: "Everything you need for a restful stay. (Sample list)",
      feat1Title: "Air conditioning",
      feat1Desc: "Air conditioning in every bedroom and living room.",
      feat2Title: "Free Wi-Fi",
      feat2Desc: "Internet for work, entertainment and keeping in touch with family.",
      feat3Title: "Usable kitchen",
      feat3Desc: "Prepare your own meals with the basic equipment provided.",
      feat4Title: "Spacious parking",
      feat4Desc: "Ample parking space at the house compound.",
      feat5Title: "Family friendly",
      feat5Desc: "Spacious for large families and small groups.",
      feat6Title: "Strategic location",
      feat6Desc: "Close to eateries and attractions around Papar.",

      /* ---------- Packages ---------- */
      roomsTitle: "Packages &amp; prices",
      roomsSub: "Choose the package that suits your needs.",
      roomsNoscript: "Please enable JavaScript to see the packages, or contact us on WhatsApp.",
      perNight: "night",
      pkgBtn: "Check {name}",
      roomPlaceholder: "Select a package",
      capacityText: "Fits up to {n} guests",

      /* ---------- Gallery ---------- */
      galleryTitle: "Gallery",
      gallerySub: "Real photos will be added here. (The boxes below are placeholders.)",
      ph1: "Living room",
      ph2: "Bedroom",
      ph3: "Kitchen",
      ph4: "Bathroom",
      ph5: "Compound &amp; parking",
      ph6: "Surroundings",

      /* ---------- Location ---------- */
      locationTitle: "Location",
      locationSub: "Mama Homestay Papar - search \"Mama Homestay Papar\" on Google Maps for directions.",
      nearbyTitle: "Nearby attractions",
      nearbyNote: "Distances below are approximate. They will be updated with exact distances.",
      kimanisName: "Kimanis Petroleum Training Centre",
      pekanPapar: "Papar Town",
      pekanBenoni: "Benoni Town",
      panBorneo: "Pan Borneo Highway",
      distBcc: " - about 1 km",
      distBenoni: " - about 1 km",
      distManis: " - about 5 km",
      distPapar: " - about 6 km",
      distKimanis: " - about 20 km",
      distPanBorneo: " - easy access nearby",

      /* ---------- Booking form ---------- */
      bookTitle: "Check availability &amp; book",
      bookSub: "Fill in your stay details. WhatsApp will open with your request ready to send. Your booking is confirmed once we reply.",
      lblCheckin: "Check-in",
      lblCheckout: "Check-out",
      lblRoom: "Package",
      lblGuests: "Number of guests",
      lblName: "Full name",
      lblPhone: "Phone number",
      phonePlaceholder: "e.g. 0123456789",
      lblNotes: `Notes <span class="optional">(optional)</span>`,
      notesPlaceholder: "e.g. travelling with children, need an extra bed",
      bookSubmit: "Send request via WhatsApp",
      bookHint: "The price is an estimate. The final amount is confirmed by the host.",
      estimate: "Estimate: {n} night(s) x {price} = {total}",

      errCheckinMissing: "Please choose a check-in date.",
      errCheckinPast: "Check-in date cannot be in the past.",
      errCheckoutMissing: "Please choose a check-out date.",
      errCheckoutOrder: "Check-out must be after check-in.",
      errRoom: "Please choose a package.",
      errGuests: "Please enter the number of guests.",
      errName: "Please enter your full name.",
      errPhone: "Please enter a valid phone number.",

      /* ---------- WhatsApp message ---------- */
      waIntro: "Hi, I would like to check availability at Mama Homestay Papar.",
      waPackage: "Package",
      waCheckin: "Check-in",
      waCheckout: "Check-out",
      waNights: "Number of nights",
      waGuests: "Number of guests",
      waEstimate: "Estimated price",
      waName: "Name",
      waPhone: "Phone",
      waNotes: "Notes",
      dateLocale: "en-GB",

      /* ---------- FAQ ---------- */
      faqTitle: "Frequently asked questions",
      faqQ1: "What are the check-in and check-out times?",
      faqA1: "Check-in from 2:00 pm and check-out before 12:00 noon. (Sample times, to be updated.)",
      faqQ2: "Is a deposit required?",
      faqA2: "A booking deposit may be required to confirm your dates. Details will be shared on WhatsApp. (Sample)",
      faqQ3: "Can I bring more guests than stated?",
      faqA3: "Please tell us the actual number of guests when booking. Extra charges may apply. (Sample)",
      faqQ4: "Is there parking?",
      faqA4: "Yes. Ample parking space is available at the house compound.",
      faqQ5: "Are pets allowed?",
      faqA5: "Please ask us first on WhatsApp. (Sample, the actual policy will be updated.)",
      faqQ6: "How do I pay?",
      faqA6: "Once your dates are confirmed, we will share the payment details on WhatsApp.",
      faqQ7: "Where can I read the full rules and discount terms?",
      faqA7: `Please see the <a href="rules.html">Rules &amp; Terms</a> page for the full list.`,

      /* ---------- Footer ---------- */
      footerTagline: "A comfortable, family-friendly stay in Papar, Sabah.",
      footerContact: "Contact us",
      footerWaLabel: "WhatsApp",
      footerEmailLabel: "Email",
      footerLinks: "Quick links",
      footerLinkRooms: "Packages &amp; prices",
      footerLinkLocation: "Location",
      footerLinkBook: "Book",
      footerLinkRules: "Rules &amp; Discount Terms",
      footerDummy: "Sample page.",
      fabAria: "Contact us on WhatsApp",

      /* ---------- Rules page ---------- */
      rulesBack: "Back to home",
      rulesPageTitle: "Rules &amp; Terms",
      rulesPageSub: "Please read the house rules and discount terms before booking.",
      tabRules: "House Rules",
      tabDiscount: "Discount Terms",
      tabsAria: "Choose a section",
      rulesIntro: "Thank you for choosing Mama Homestay as your place to rest. To ensure your comfort throughout your stay, please observe the following rules:",
      rulesList: [
        { t: "Check-in &amp; check-out", d: "Check-in after 2:00 pm and check-out before 12:00 noon." },
        { t: "Guest limit", d: "The maximum number of guests allowed is 12, including children. A charge of RM10 per person applies for more than 12 guests." },
        { t: "Care of facilities", d: "Please use all facilities with care. Report any damage to the management immediately; the cost of damage is borne by the guest." },
        { t: "No strong odours", d: "Guests may not bring durian or any food with an unpleasant odour into the house." },
        { t: "Pets", d: "Pets are not allowed inside the house." },
        { t: "Halal policy", d: "Cooking equipment, crockery and the barbecue set are for halal use only, and only halal food may be brought in." },
        { t: "Save energy", d: "Turn off all lights, water heaters, taps and electrical appliances when not in use and before leaving the house." },
        { t: "Cleanliness", d: "Please keep the house neat and clean at all times." },
        { t: "Furniture arrangement", d: "Please return all equipment, furniture and reading materials to their original place after use and before leaving." },
        { t: "Security", d: "The security of personal belongings is entirely the guest's responsibility." },
        { t: "Public peace", d: "Please avoid noise around the house, especially after 10:00 pm (weekdays) and 11:59 pm (weekends)." },
        { t: "No smoking", d: "Mama Homestay is a smoke-free premises. Smoking is only allowed outside the house, and cigarette butts must be thrown into the bin." },
        { t: "Alcoholic drinks", d: "Alcoholic drinks are not allowed inside the house. If you wish to bring alcohol, please inform the management; permission is granted outside the house only." },
      ],
      halalStripTitle: "Halal Food &amp; Drinks Only",
      halalStripDesc: "Mama Homestay Papar premises only allow halal food and drinks to be brought in.",
      halalStripLink: "Read the halal policy",
      tabHalal: "Halal Policy",
      halalHeading: "Halal Food &amp; Drinks Only",
      halalLead: "Mama Homestay Papar premises only allow halal food and drinks.",
      halalWarn: "Strict action will be taken if non-halal food or drinks are brought in.",
      halalList: [
        { t: "Food &amp; drinks", d: "Only halal food and drinks may be brought into the premises." },
        { t: "Equipment", d: "Cooking equipment, crockery and the barbecue set are for halal use only." },
        { t: "No alcohol", d: "Alcoholic drinks are not allowed inside the house." },
      ],
      tabEmergency: "Emergency Contacts",
      emergencyIntro: "Tap any number below to call it directly.",
      emergencyOwnerTitle: "Homestay Owner",
      ownerName: "Syaiful",
      ownerName2: "Nina",
      ownerName3: "Emergency",
      emergencyServicesTitle: "Emergency Services (Papar)",
      svcPolice: "Papar Police Station",
      svcHospital: "Papar Hospital",
      svcFire: "Papar Fire Station",
      svc999: "National Emergency Line",
      footerLinkEmergency: "Emergency Contacts",
      discountIntro: "Discounts (if offered) are subject to the following terms.",
      discountNote: "The actual discount rates and conditions will be added once confirmed by the host. The content below is a sample.",
      discountList: [
        { t: "Eligibility", d: "Discounts only apply to bookings made directly through this website or the homestay's official WhatsApp." },
        { t: "Cannot be combined", d: "Only one discount can be used per booking. Discounts cannot be combined with other promotions." },
        { t: "Dates &amp; availability", d: "Discounts are subject to availability and may not apply during festive seasons, school holidays and long weekends." },
        { t: "Multi-night stays", d: "Discounts for multi-night stays (if offered) are calculated based on the confirmed number of nights. [Discount rate to be updated]" },
        { t: "Confirmation", d: "Discounts must be mentioned when booking and confirmed by the host before payment. They cannot be claimed after payment is made." },
        { t: "No cash value", d: "Discounts cannot be exchanged for cash or transferred to another person." },
        { t: "Host's rights", d: "The host may amend or end a discount offer at any time without notice. Bookings already confirmed are not affected." },
      ],
      rulesCtaText: "Have a question about the rules or discounts?",
      rulesCtaBtn: "Ask on WhatsApp",
      waRulesAsk: "Hi, I have a question about the rules and discounts at Mama Homestay Papar.",
    },
  };

  let current = "ms";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ms" || saved === "en") current = saved;
  } catch (e) { /* localStorage tidak tersedia - guna lalai */ }

  function t(key, vars) {
    let value = (DICT[current] && DICT[current][key]);
    if (value === undefined) value = DICT.ms[key];
    if (value === undefined) return key;
    if (typeof value === "string" && vars) {
      Object.keys(vars).forEach((k) => { value = value.split("{" + k + "}").join(vars[k]); });
    }
    return value;
  }

  function setContent(el, value) {
    if (typeof value !== "string") return;
    if (/[<&]/.test(value)) el.innerHTML = value; // nilai dipercayai (ditulis pembangun)
    else el.textContent = value;
  }

  function renderList(el, items) {
    el.textContent = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      const title = document.createElement("strong");
      setContent(title, item.t);
      const desc = document.createElement("span");
      setContent(desc, item.d);
      li.append(title, desc);
      el.appendChild(li);
    });
  }

  function apply() {
    document.documentElement.lang = current;

    document.querySelectorAll("[data-i18n]").forEach((el) => setContent(el, t(el.dataset.i18n)));
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder)));
    document.querySelectorAll("[data-i18n-list]").forEach((el) => renderList(el, t(el.dataset.i18nList)));

    // Tajuk & meta penerangan mengikut halaman
    const page = document.body.dataset.page || "index";
    const titleKey = page === "rules" ? "titleRules" : "titleIndex";
    const descKey = page === "rules" ? "descRules" : "descIndex";
    document.title = t(titleKey);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(descKey));

    // Butang tukar bahasa menunjukkan bahasa LAIN
    document.querySelectorAll("#lang-toggle").forEach((btn) => {
      btn.textContent = t("langToggleText");
      btn.setAttribute("aria-label", t("langToggleAria"));
    });

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  function setLang(lang) {
    if (lang !== "ms" && lang !== "en") return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* abaikan */ }
    apply();
  }

  window.I18N = {
    t,
    get lang() { return current; },
    setLang,
    toggle() { setLang(current === "ms" ? "en" : "ms"); },
    apply,
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#lang-toggle").forEach((btn) => {
      btn.addEventListener("click", () => window.I18N.toggle());
    });
    apply();
  });
})();
