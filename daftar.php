<!DOCTYPE html>
<html>
<head>
  <title>Yok Coding</title>
  <link rel="stylesheet" type="text/css" href="daftar.css">
</head>
<body>
  <header class="header">
    <h1 class="logo"><a href="index.php" class="logo1">Yok Coding</a></h1>
  </header>

  <div class="container">
    <h2>Pendaftaran Akun</h2>
    <form onsubmit="return validateForm()">
      <input type="text" id="nama" placeholder="Nama lengkap" required>
      <input type="email" id="email" placeholder="Email" required>
      <input type="password" id="password" placeholder="Password" required>
      <p class="error-message" id="error-message"></p>
      <button type="submit">Daftar</button>
    </form>
  </div>

  <script src="daftar.js"></script>
</body>
</html>