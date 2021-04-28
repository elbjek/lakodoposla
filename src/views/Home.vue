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
          <router-link
            :to="'/oglasi/'+ad.id"
            v-for="ad in hotAds.slice(0,8)"
            :key="ad.id" class="col-sm-6 col-md-6 col-lg-3"
            >
            <Ad  :ad="ad" marker='regular'/>
          </router-link>
        </div>
      </div>
    </section>
    <section class="home-new-ads">
      <div class="container">
        <h3 class="heading-main">Najnoviji oglasi</h3>
        <div class="home-new-ads-all row">
          <router-link
          :to="'/oglasi/'+ad.id"
          v-for="ad in newAds.slice(0,4)" :key="ad.id" class="col-sm-12">
            <Ad :ad="ad" marker='latest'/>
          </router-link>
          <router-link to='/oglasi' class="link-all">Izlistaj sve poslove</router-link>
        </div>
      </div>
    </section>
    <section class="home-categories">
      <div class="container">
        <h4 class="heading-main">Pogledajte poslove po zelji</h4>
        <div class="home-categories-all row">
          <div v-for="category in categories" :key="category.id"
            :class="
            category.list.length > 5 ? 'col-sm-12 col-lg-6' : 'col-sm-12 col-md-4 col-lg-2'">
            <h5>{{category.title}}</h5>
            <ul>
              <li v-for="item in category.list" :key="item.index">
                <router-link to="/oglasi">{{item}}</router-link>
              </li>
            </ul>
          </div>
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
        id: 1,
        title: 'Full-Time Pozicije',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'orange',
      },
      {
        id: 2,
        title: 'Part-Time Pozicije',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'green',
      },
      {
        id: 3,
        title: 'Rad od kuce',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'blue',
      },
    ],
    hotAds: [
      {
        id: 1,
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        id: 2,
        title: 'Operater u kladionici',
        img: '',
      },
      {
        id: 3,
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        id: 4,
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        id: 5,
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        id: 6,
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        id: 7,
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
      {
        id: 8,
        title: 'Operater u kladionici',
        img: 'https://www.akcijeikatalozi.rs/media/prodavac/Aman.jpg',
      },
    ],
    newAds: [
      {
        id: 1,
        title: 'Operater u kladionici',
        description: 'Stomatološka sestra - tehničar/asistent',
        location: 'Beograd',
        tags: [
          { id: 1, tag: 'Full Time', marker: 'blue' },
          { id: 2, tag: 'Junior', marker: 'orange' },
          { id: 3, tag: 'Remote', marker: 'green' },
        ],
        time: new Date(),
      },
      {
        id: 2,
        title: 'Operater u kladionici',
        description: 'Stomatološka sestra - tehničar/asistent',
        location: 'Beograd',
        tags: [
          { id: 3, tag: 'Remote', marker: 'green' },
        ],
        time: new Date(),
      },
      {
        id: 3,
        title: 'Operater u kladionici',
        description: 'Stomatološka sestra - tehničar/asistent',
        location: 'Beograd',
        tags: [
          { id: 1, tag: 'Full Time', marker: 'blue' },
          { id: 2, tag: 'Junior', marker: 'orange' },
        ],
        time: new Date(),
      },
    ],
    categories: [
      {
        id: 1,
        title: 'Po popularnosti',
        list: [
          'Administracija, Knjigovodstvo', 'Advertising, Marketing, PR',
          'Prevodjenje, jezici, knjizevnost', 'Elektronika, Elektrotehnika', 'Telekomunikacije',
          'Ljudski resursi', 'Menadzment i upravljanje', 'Izdavacke kuce, Mediji', 'Stamparske usluge',
          'Trgovina na veliko', 'Turizam, Ugostiteljstvo', 'Zanatske usluge',
          'Tekstilna industrija', 'Saobracaj, Transport', 'Skladista i Magacini', 'Knjizevnost',
          'Roba siroke potrosnje', 'Ekonomija', 'Drzavne institucije',
        ],
      },
      {
        id: 2,
        title: 'Senioritet',
        list: [
          'Bez iskustva', 'Junior', 'Medior', 'Senior', 'Studenti',
        ],
      },
      {
        title: 'Po tipu',
        list: [
          'Poslodavac', 'Agencija za zaposljavanje', 'Puno radno vreme', 'Pola radnog vremena', 'Praksa',
        ],
      },
      {
        id: 3,
        title: 'Po regiji',
        list: [
          'Severena Srbija', 'Centralna Srbija', 'Juzna Srbija',
        ],
      },
    ],
  }),
};
</script>
