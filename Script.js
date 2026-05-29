const URL_API =
'https://script.google.com/macros/s/AKfycbxs5LMBIEKEYKpCVC2vJne0bWk5N9s0k1Xd_btEWAfEP4KKRAy9tzCwSXqkjo0YrTeV/exec';

async function cekNilai() {

  const nisn =
    document.getElementById('nisn').value;

  const hasil =
    document.getElementById('hasil');

  if(nisn === ''){

    hasil.innerHTML =
      '<p>Masukkan NISN terlebih dahulu</p>';

    return;
  }

  hasil.innerHTML =
    '<p>Sedang mengambil data...</p>';

  try {

    const response =
      await fetch(
        `${URL_API}?nisn=${nisn}`
      );

    const data =
      await response.json();

    if(data.status === 'success') {

      hasil.innerHTML = `
        <div class="data">

          <p>
            <strong>Nama:</strong>
            ${data.nama}
          </p>

          <p>
            <strong>NISN:</strong>
            ${data.nisn}
          </p>

          <p>
            <strong>Matematika:</strong>
            ${data.matematika}
          </p>

          <p>
            <strong>Bahasa Indonesia:</strong>
            ${data.indonesia}
          </p>

          <p>
            <strong>Rata-rata:</strong>
            ${data.rata}
          </p>

          <p>
            <strong>Ranking:</strong>
            ${data.ranking}
          </p>

        </div>
      `;

    } else {

      hasil.innerHTML =
        '<p>NISN tidak ditemukan</p>';
    }

  } catch(error){

    hasil.innerHTML =
      '<p>Terjadi kesalahan server</p>';
  }
}