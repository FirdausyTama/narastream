document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  Swal.fire({
    title: 'Login successful!',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'index.html'; // Redirect to index.html after showing the alert
    }
  });
});

    // Perbaikan: Gunakan id yang sesuai untuk mendapatkan formulir
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Tangkap data yang dimasukkan oleh pengguna
      const email = form.querySelector('input[type="text"][placeholder="Email"]').value;
      const username = form.querySelector('input[type="text"][placeholder="Username"]').value;
      const password = form.querySelector('input[type="password"][placeholder="Password"]').value;

      // Buat pesan notifikasi dengan data yang ditangkap
      const message = `Registrasi berhasil!\n\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}`;

      // Tampilkan notifikasi menggunakan SweetAlert2
      Swal.fire({
        title: 'Registrasi Berhasil!',
        icon: 'success',
        text: message,
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'login.html'; // Redirect to index.html after showing the alert
        }
      });
    });

    function showPopup() {
      // Memunculkan pesan pop-up menggunakan window.alert
      window.alert("Anda harus login terlebih dahulu dan klik oke.");
  }
  