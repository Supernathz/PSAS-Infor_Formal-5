const points = document.querySelectorAll('.point');
const title = document.getElementById('title');
const desc = document.getElementById('desc');

const titles = {
    1: "Pendirian PT Monyet Terbang",
    2: "Layanan & Armada",
    3: "Peluncuran Rute Wisata",
    4: "Optimalisasi Jaringan & Teknologi",
};

const descs = {
    1: "PT. Monyet Terbang didirikan pada 1 Januari 2025 oleh tim yang ingin menghadirkan pelayaran cepat dan efisien di wilayah tengah Indonesia. Ide ini muncul karena kurangnya konektivitas laut yang praktis dan nyaman antara Jawa Tengah, Kalimantan, Sulawesi, NTB, dan Bali. Dari sinilah konsep layanan “Monkey-Fast” mulai dibentuk sebagai dasar operasional perusahaan.",
    2: "Maret 2025 menjadi momen penting ketika PT. Monyet Terbang membuka kantor operasional baru di Semarang, Balikpapan, dan Makassar. Kantor ini berfungsi mengatur proses bongkar-muat dan meningkatkan kecepatan layanan logistik perusahaan. Pada bulan ini, PT. Monyet Terbang juga meluncurkan layanan MonkeyCargo Express untuk pengiriman cepat antar-pulau. Selain itu, seluruh armada—tiga kapal penumpang-barang dan satu kapal logistik—resmi siap beroperasi penuh.",
    3: "Pada September 2025, PT. Monyet Terbang meluncurkan rute wisata musiman The Flying Line yang menghubungkan Semarang dengan Lembar dan Benoa. Rute ini dibuat untuk mempermudah perjalanan wisatawan tanpa perlu transit panjang. Peluncuran ini juga bekerja sama dengan komunitas budaya lokal untuk menghadirkan hiburan di atas kapal.",
    4: "Pada Oktober 2025, PT. Monyet Terbang mulai mengimplementasikan sistem pelacakan kargo real-time untuk memastikan layanan logistik yang lebih transparan. Teknologi ini membuat pelanggan dapat memantau posisi barang tanpa perlu birokrasi panjang. Langkah ini dilakukan untuk mendukung visi perusahaan sebagai pelayaran yang cepat, informatif, dan bebas drama logistik.",
};

points.forEach(point => {
    point.addEventListener("click", () => {
        const step = point.dataset.step;

        points.forEach(p => p.classList.remove("active"));
        point.classList.add("active");

        title.classList.add("fade");
        setTimeout(() => {
            title.textContent = titles[step];
        }, 250);
        setTimeout(() => {
            title.classList.remove("fade");
        }, 500);

        desc.classList.add("fade");
        setTimeout(() => {
            desc.textContent = descs[step];
        }, 250);
        setTimeout(() => {
            desc.classList.remove("fade");
        }, 500);
    });
});
