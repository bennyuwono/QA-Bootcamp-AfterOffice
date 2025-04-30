// Baris 1: Import library input
const prompt = require("prompt-sync")();

// Baris 3-17: Fungsi operasi matematika
function penjumlahan(a, b) {
  return a + b;
} // Fungsi tambah
function pengurangan(a, b) {
  return a - b;
} // Fungsi kurang
function perkalian(a, b) {
  return a * b;
} // Fungsi kali
function pembagian(a, b) {
  return a / b;
} // Fungsi bagi

// Baris 20-23: Tampilkan menu
console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");

// Baris 26: Minta input pilihan
let pilihan = prompt("Masukkan nomor operasi (1-4): ");

// Baris 29: Konversi ke angka bulat
pilihan = parseInt(pilihan);

// Baris 32-33: Minta input angka
let angka1 = parseFloat(prompt("Masukkan angka pertama: ")); // Angka bisa desimal
let angka2 = parseFloat(prompt("Masukkan angka kedua: "));

// Baris 36-52: Proses operasi
let hasil;
let namaOperasi;

switch (pilihan) {
  case 1:
    hasil = penjumlahan(angka1, angka2);
    namaOperasi = "Penjumlahan";
    break;
  case 2:
    hasil = pengurangan(angka1, angka2);
    namaOperasi = "Pengurangan";
    break;
  case 3:
    hasil = perkalian(angka1, angka2);
    namaOperasi = "Perkalian";
    break;
  case 4:
    hasil = pembagian(angka1, angka2);
    namaOperasi = "Pembagian";
    break;
  default: // Jika input tidak sesuai
    console.log("Pilihan tidak valid!");
    process.exit(); // Keluar program
}

// Baris 55-60: Tampilkan hasil
console.log(`
=== Hasil Perhitungan ===
Operasi: ${namaOperasi}
Angka 1: ${angka1}
Angka 2: ${angka2}
Hasil: ${hasil.toFixed(2)}  // Menampilkan 2 angka desimal
`);
// Baris 63: Akhiri program
console.log("Terima kasih telah menggunakan kalkulator ini!");
