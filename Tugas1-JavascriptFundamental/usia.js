// Baris 1: Import library untuk bisa menerima input dari keyboard
const prompt = require("prompt-sync")();

// Baris 3-12: Fungsi penentu kategori usia
function tentukanKategori(usia) {
  if (usia < 0) {
    // Jika usia minus
    return "Tidak Valid";
  } else if (usia <= 12) {
    // Cek kelompok anak
    return "Anak-anak";
  } else if (usia <= 17) {
    // Cek kelompok remaja
    return "Remaja";
  } else if (usia <= 59) {
    // Cek kelompok dewasa
    return "Dewasa";
  } else {
    // Jika semua kondisi di atas tidak terpenuhi
    return "Lansia";
  }
}

// Baris 15-18: Variabel penyimpan jumlah orang
let hitungAnak = 0; // Counter untuk anak
let hitungRemaja = 0; // Counter untuk remaja
let hitungDewasa = 0; // Counter untuk dewasa
let hitungLansia = 0; // Counter untuk lansia

// Baris 21: Flag untuk kontrol perulangan
let lanjut = true;

// Baris 24-44: Loop utama program
while (lanjut) {
  // Minta input usia
  let input = prompt("Masukkan usia (ketik 'selesai' untuk berhenti): ");

  // Cek jika user ingin berhenti
  if (input === "selesai") {
    lanjut = false; // Menghentikan loop
  } else {
    // Ubah input ke angka
    let usia = Number(input);

    // Validasi input
    if (isNaN(usia)) {
      // Jika bukan angka
      console.log("Input salah! Masukkan angka");
    } else {
      // Panggil fungsi penentu kategori
      let kategori = tentukanKategori(usia);

      // Update counter sesuai kategori
      switch (kategori) {
        case "Anak-anak":
          hitungAnak++;
          break;
        case "Remaja":
          hitungRemaja++;
          break;
        case "Dewasa":
          hitungDewasa++;
          break;
        case "Lansia":
          hitungLansia++;
          break;
        default:
          console.log("Usia tidak valid!");
      }
    }
  }
}

// Baris 47-51: Tampilkan hasil akhir
console.log("\n==== Hasil Klasifikasi ====");
console.log(`Anak-anak: ${hitungAnak} orang`);
console.log(`Remaja: ${hitungRemaja} orang`);
console.log(`Dewasa: ${hitungDewasa} orang`);
console.log(`Lansia: ${hitungLansia} orang`);
console.log("===========================");
// Baris 53: Akhir program
