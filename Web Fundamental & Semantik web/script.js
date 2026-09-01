const formLatihan = document.querySelector('.form-group');

formLatihan.addEventListener('submit', function(event) {
    // Mencegah halaman reload otomatis pas tombol diklik
    event.preventDefault();

    const namaInput = document.getElementById('nama').value;
    alert('Halo ' + namaInput + ', data log kamu berhasil dikirim!');
});