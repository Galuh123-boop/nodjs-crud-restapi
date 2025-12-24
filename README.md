CRUD REST API Nama : Galuh Gunawan NIM : 24090081 Kelas : 3C

DESKRIPSI PROJECT Project nodejs-crud-restapi adalah aplikasi backend yang dikembangkan menggunakan Node.js dan Express.js untuk menyediakan layanan REST API dalam pengelolaan data Categories dan Products. Aplikasi ini menerapkan konsep CRUD (Create, Read, Update, Delete) serta menggunakan format JSON sebagai standar komunikasi data antara client dan server. Struktur project dibuat terpisah antara konfigurasi database, controller, routes, dan file server utama, sehingga memudahkan proses

Struktur folder: config Digunakan untuk menyimpan pengaturan serta koneksi ke database. -controllers Berisi logika utama aplikasi dalam mengelola data: -categoriesController.js untuk manajemen data kategori -productController.js untuk manajemen data produk -userController.js untuk manajemen data pengguna -routes Berfungsi untuk mendefinisikan endpoint API dan menghubungkan request dengan controller: -categoriesRoutes.js -productRoutes.js -usersRoutes.js -node_modules Menyimpan seluruh dependency yang dibutuhkan aplikasi. -.env Digunakan untuk menyimpan konfigurasi environment seperti port aplikasi dan pengaturan database. -package.json dan package-lock.json Berisi informasi project, daftar dependency, serta script untuk menjalankan aplikasi.

server.js Merupakan file utama untuk menjalankan server Express dan mengatur seluruh routing API.

TEKNOLOGI DIGUNAKAN -Node.js -Express.js -MYSQL -dotenv -nodemon

Endpoint API Categories POST/categories GET/categories GET/categories/:id PUT/categories/:id DELETE/categories/:id

Products POST/products GET/categories GET/products/:id PUT/products/:id PUT/products/:id DELETE/products/:id

Testing Pengujian dilakukan menggunakan Postman dengan menguji fitur create, read (list dan detail), update, dan delete. Seluruh endpoint berjalan dengan baik dan hasil pengujian dibuktikan melalui screenshot.

Penutup Berdasarkan hasil pengujian, dapat disimpulkan bahwa project REST API berhasil dibuat dan dijalankan sesuai dengan ketentuan tugas.
