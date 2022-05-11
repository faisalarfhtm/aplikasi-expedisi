# aplikasi-expedisi

Aplikasi Sederhana Untuk Pencatatan Barang dan Cek Harga Expedisi
Aplikasi Menggunakan Reactjs + Java Spring Boot + H2 Database

Prerequisites
-Basic familiarity with HTML & CSS
-Basic knowledge of JavaScript and programming
-Spring Boot Basics
-ReactJS basics
-Node.js and npm installed globally

Tools yang digunakan 
Server Side :
- Spring Boot 
- SpringData JPA 
- Maven 3.2 +
- JDK 1.8
- Embedded Tomcat 8.5+
- H2 Database

Client Side :
- ReactJs
- Modern JavaScript (ES6)
- NodeJS and NPM
- VS Code IDE
- Intellij IDEA
- Create React App CLI
- Bootstrap 4.5 and Axios HTTP Library


==================================== Cara Menjalankan Code========================================
-FRONT END-
1. Clone / Download Front End (Folder aplikasi-expedisi)
2. Download Asset pada link https://drive.google.com/file/d/1Nk7eFc2gQFMtRr4tFjdOpZJXoTRO4SNH/view?usp=sharing
3. Copy Paste Asset yang telah di download pada folder aplikasi-expedisi\public
4. Buka Project Pada Visual Studio Code Atau IDE lainnya
5. Jalankan Terminal dan arahkan Ke Folder aplikasi-expedisi
6. Jalahkan Printah npm install
7. Setelah sukses, Jalankan npm start
8. Kemudian biasanya Aplikasi akan berjalan pada http://localhost:3000/

-BACK END-
1. Clone / Download Front End (Folder aplikasi-crud-expedisi)
2. Buka Project Pada Intellij IDEA Code Atau IDE lainnya
3. Run Project Pada IDE
4. Setelah Berjalan biasanya pada http://localhost:8080

CREATE TABLE databarang ( id INT NOT NULL, namabarang VARCHAR(50) NOT NULL, jumlah int NOT NULL, tanggalpencatatan DATE );
