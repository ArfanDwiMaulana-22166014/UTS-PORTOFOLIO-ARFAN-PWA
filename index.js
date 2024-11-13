// Import Express dan path
const express = require('express');
const path = require('path');

// Inisialisasi aplikasi Express
const app = express();

// Tentukan port server
const PORT = 8080;

// Middleware untuk menyajikan file statis di folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Sajikan file HTML di root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Jalankan server di port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
