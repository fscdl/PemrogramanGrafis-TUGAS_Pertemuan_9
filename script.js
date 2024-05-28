document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen kanvas
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Mengatur kecepatan rotasi
    let rotationSpeed = 0.1; // Meningkatkan kecepatan rotasi

    // Sudut rotasi awal
    let rotationAngle1 = 0;
    let rotationAngle2 = 0;

    // Fungsi untuk menggambar kotak
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Membersihkan kanvas

        // Mengatur posisi pusat kotak
        let x = canvas.width / 2; // Posisi horizontal untuk kedua kotak
        let y = canvas.height / 2; // Posisi vertikal untuk kedua kotak

        ctx.save(); // Menyimpan kondisi kanvas sekarang

        // Memutar kotak pertama
        ctx.translate(x - 100, y); // Menggeser titik koordinat untuk kotak pertama ke kiri
        ctx.rotate(rotationAngle1);
        ctx.fillStyle = 'blue';
        ctx.fillRect(-50, -50, 100, 100); // Menggambar kotak pertama

        // Memutar kotak kedua
        ctx.restore(); // Mengembalikan kondisi kanvas sebelumnya
        ctx.save(); // Menyimpan kondisi kanvas sekarang
        ctx.translate(x + 100, y); // Menggeser titik koordinat untuk kotak kedua ke kanan
        ctx.rotate(rotationAngle2);
        ctx.fillStyle = 'red';
        ctx.fillRect(-50, -50, 100, 100); // Menggambar kotak kedua

        ctx.restore(); // Mengembalikan kondisi kanvas sebelumnya
        
        // Meningkatkan sudut rotasi untuk animasi berputar
        rotationAngle1 += rotationSpeed;
        rotationAngle2 -= rotationSpeed; // Rotasi berlawanan untuk kotak kedua

        requestAnimationFrame(draw); // Mengulangi animasi
    }

    draw(); // Memulai animasi
});
