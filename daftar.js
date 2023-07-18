function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Validasi field yang tidak boleh kosong
    if (nama === "" || email === "" || password === "") {
      errorMessage.textContent = "Semua field harus diisi";
      return false;
    }

    // Validasi panjang password minimal 6 karakter
    if (password.length < 6) {
      errorMessage.textContent = "Password harus memiliki minimal 6 karakter";
      return false;
    }

    // Validasi format email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Email tidak valid";
      return false;
    }

    // Proses pendaftaran akun
    // ...

    return true;
  }