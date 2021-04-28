<template>
  <div class="home">
    <div class="container">
      <header class="home-hero">
        <h1>Pogledaj preko 1000+ poslova!</h1>
        <p>Tvoj posao iz snova te ceka.</p>
        <Search />
      </header>
      <section
       class="home-positions row">
        <div v-for="el in positions" :key="el.index" class="col-sm-12 col-lg-4">
          <HomePositions
            :title="el.title"
            :short_description="el.short_description"
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
            v-for="ad in adverts.slice(0,8)"
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
          v-for="ad in adverts.slice(0,4)" :key="ad.id" class="col-sm-12">
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
  }),
  mounted() {
    this.$store.dispatch('getAdverts');
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getPositions');
  },
  computed: {
    adverts() {
      return this.$store.state.adverts;
    },
    categories() {
      return this.$store.state.categories;
    },
    positions() {
      return this.$store.state.positions;
    },
  },
};
</script>
