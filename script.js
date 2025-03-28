function sendMessage(event) {
    event.preventDefault(); // Mencegah reload halaman

    let formData = new FormData(document.getElementById("contactForm"));

    fetch("send-email.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").textContent = data;
        document.getElementById("responseMessage").style.display = "block"; // Tampilkan pesan respons
        document.getElementById("contactForm").reset(); // Reset form setelah terkirim
    })
    .catch(error => {
        document.getElementById("responseMessage").textContent = "Terjadi kesalahan. Coba lagi.";
        document.getElementById("responseMessage").style.color = "red";
    });
}

// Menjalankan animasi ketika section terlihat
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Tambah class show ketika terlihat
            }
        });
    }, { threshold: 0.2 }); // Section mulai muncul ketika 20% terlihat

    sections.forEach(section => {
        observer.observe(section);
    });
});