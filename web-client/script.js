const courses = [
    { kode: 'IF101', nama: 'Pemrograman Dasar', sks: 3 },
    { kode: 'IF102', nama: 'Struktur Data', sks: 3 },
    { kode: 'IF103', nama: 'Algoritma', sks: 3 },
    { kode: 'IF104', nama: 'Basis Data', sks: 3 },
    { kode: 'IF105', nama: 'Jaringan Komputer', sks: 3 }
  ];
  
  function displayCourses() {
    const tableBody = document.querySelector("#courseTable tbody");
  
    courses.forEach(course => {
      const row = document.createElement("tr");
  
      const kodeCell = document.createElement("td");
      kodeCell.textContent = course.kode;
      row.appendChild(kodeCell);
  
      const namaCell = document.createElement("td");
      namaCell.textContent = course.nama;
      row.appendChild(namaCell);
  
      const sksCell = document.createElement("td");
      sksCell.textContent = course.sks;
      row.appendChild(sksCell);
  
      tableBody.appendChild(row);
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayCourses);
  