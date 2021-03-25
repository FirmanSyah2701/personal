<template>
  <div class="portofolio">
    <div id="my-portfolio">
      <div class="container">
        <h3 style="margin-bottom:20px;">My Portfolio</h3>
        <div class="row">
          <div v-for="item in items" :key="item.id" class="col-sm-4">
            <div class="card">
              <img :src="require(`../assets/${item.image}`)" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text text-justify">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Sistem Integrasi Posyandu",
          image: "sinpos.png",
          description: "Sebuah aplikasi berbasis website dan mobile yang dikembangkan untuk memudahkan Dinas Kesehatan Kabupaten Indramayu dalam pencatatan, pendataan dan pencarian data kesehatan. Aplikasi ini menggunakan laravel untuk web dan server nya dan flutter untuk mobile nya"
        },
        {
          id: 1,
          title: "Nusa Shop",
          image: "nusa_shop.png",
          description: "Sebuah aplikasi e-commerce kosmetik berbasis websiste. Aplikasi ini menggunakan API rajaongkir untuk mengambil data provinsi dan kota/kabupaten berserta menghitung ongkos kirim, dan menggunakan laravel untuk pembuatan web nya"
        },
        {
          id: 2,
          title: "Sistem Informasi Pelayanan Pusksesmas Plumbon",
          image: "sipp.png",
          description: "Sebuah aplikasi informasi pelayanan puskesmas berbasis websiste. Aplikasi ini memiliki fitur utama yaitu pemesanan antrian dan konsultasi dokter. Aplikasi ini menggunakan laravel untuk pembuatan web nya"
        }
      ]
    }
  }
}
</script>