// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Siapa Namamu?");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Tamu";
    }

    // Display the welcome message in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = `Selamat Datang, ${userResponse}! 
    di Nasi Kuning Luwuk Dince Website.`;
}

/**
 * Fungsi Validasi Formulir sesuai Instruksi Mini Project (Poin 5)
 * Mengambil data personal: Name, Email, Phone Number, dan Message
 */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //Ambil Nilai Input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    //Validasi JavaScript
    if (!name || !email || !phone || !message) {
        alert("Semua kolom harus diisi!");
        return;
    }

    const resultOutput = document.getElementById('resultOutput');
    const placeholder = document.getElementById('placeholderText');
    const displayValues = document.getElementById('displayValues');

    placeholder.classList.add('hidden'); // Sembunyikan placeholder
    resultOutput.classList.remove('hidden'); // Munculkan kotak hasil

    displayValues.innerHTML = `
        <p class="border-b pb-1"><strong>Nama:</strong> ${name}</p>
        <p class="border-b pb-1"><strong>Email:</strong> ${email}</p>
        <p class="border-b pb-1"><strong>No Telepon:</strong> ${phone}</p>
        <p class="border-b pb-1 italic">" ${message} "</p>
    `;

    alert("Terima kasih, pesan Anda telah dikirim!");
});