// Form Donasi biasa
document.getElementById("donationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    alert("Terima kasih, " + name + "! Donasi sebesar Rp" + amount + " telah dicatat.");
});


// Fitur Donasi via WhatsApp
function donateWA() {

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    // NOMOR WA ADMIN —> ganti dengan nomor Yayasan
    let admin = "6285171696927";

    let message =
        "Assalamualaikum, saya ingin berdonasi wakaf.%0A%0A" +
        "Nama: " + name + "%0A" +
        "Jumlah Donasi: Rp " + amount + "%0A%0A" +
        "Mohon konfirmasi lebih lanjut.";

    let url = "https://wa.me/" + admin + "?text=" + message;

    window.open(url, "_blank");
}
