async function fetchCourses() {
  try {
    // Mengambil data mata kuliah dari API backend
    const response = await fetch('http://localhost:3000/server/matakuliah');
    if (!response.ok) throw new Error('Oopss, terjadi kesalahan jaringan!');
    const courses = await response.json();

    // Menampilkan data mata kuliah di tabel
    const tableBody = document.querySelector('#courseTable tbody');
    courses.forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${course.kode}</td>
        <td>${course.nama}</td>
        <td>${course.jumlah_sks}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}

// Panggil fungsi untuk memuat data saat halaman siap
fetchCourses();
