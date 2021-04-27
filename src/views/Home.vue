<template>
  <div class="home">
    <div class="container">
      <header class="home-hero">
        <!-- {{this.$moment.locale('sr')}} -->
        <h1>Pogledaj preko 1000+ poslova!</h1>
        <p>Tvoj posao iz snova te ceka.</p>
        <Search />
      </header>
      <section
       class="home-positions row">
        <div v-for="el in positions" :key="el.index" class="col-sm-12 col-lg-4">
          <HomePositions
            :title="el.title"
            :description="el.description"
            :borderColor="el.marker"
          />
        </div>
      </section
      >
    </div>
    <section class="home-hot-ads">
      <div class="container">
        <h2 class="heading-main">Vruci oglasi</h2>
        <div class="home-hot-ads-all row">
          <div v-for="ad in hotAds.slice(0,8)" :key="ad.index" class="col-sm-12 col-lg-3">
            <Ad  :ad="ad" marker='regular'/>
          </div>
        </div>
      </div>
    </section>
    <section class="home-new-ads">
      <div class="container">
        <h3 class="heading-main">Najnoviji oglasi</h3>
        <div class="home-new-ads-all row">
          <div v-for="ad in newAds.slice(0,4)" :key="ad.id" class="col-sm-12">
            <Ad :ad="ad" marker='latest'/>
          </div>
          <router-link to='/oglasi'>Izlistaj sve poslove</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePositions from '../components/Home/HomePositions.vue';
import Search from '../components/Home/Search.vue';
import Ad from '../components/Ad.vue';

export default {
  name: 'Home',
  components: {
    HomePositions,
    Search,
    Ad,
  },
  data: () => ({
    positions: [
      {
        title: 'Full-Time Pozicije',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'orange',
      },
      {
        title: 'Part-Time Pozicije',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'green',
      },
      {
        title: 'Rad od kuce',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'blue',
      },
    ],
    hotAds: [
      {
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        title: 'Operater u kladionici',
        img: '',
      },
      {
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
    ],
    newAds: [
      {
        title: 'Operater u kladionici',
        description: 'Stomatološka sestra - tehničar/asistent',
        location: 'Beograd',
        tags: [
          { tag: 'Full Time', marker: 'blue' },
          { tag: 'Junior', marker: 'orange' },
          { tag: 'Remote', marker: 'green' },
        ],
        time: new Date(),
      },
      {
        title: 'Operater u kladionici',
        description: 'Stomatološka sestra - tehničar/asistent',
        location: 'Beograd',
        tags: [
          { tag: 'Full Time', marker: 'blue' },
          { tag: 'Junior', marker: 'orange' },
          { tag: 'Remote', marker: 'green' },
        ],
        time: new Date(),
      },
      {
        title: 'Operater u kladionici',
        description: 'Stomatološka sestra - tehničar/asistent',
        location: 'Beograd',
        tags: [
          { tag: 'Full Time', marker: 'blue' },
          { tag: 'Junior', marker: 'orange' },
          { tag: 'Remote', marker: 'green' },
        ],
        time: new Date(),
      },
    ],
  }),
};
</script>
