<template>
  <div class="home container">
    <div class="home-hero">
      <h1>Pogledaj preko 1000+ poslova!</h1>
      <p>Tvoj posao iz snova te ceka.</p>
      <Search/>
    </div>
    <div class="home-positions row">
        <div v-for="el in positions" :key="el.index" class="col-sm-12 col-lg-4">
          <HomePositions :title="el.title"
            :description="el.description"
            :borderColor="el.marker"/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePositions from '../components/Home/HomePositions.vue';
import Search from '../components/Home/Search.vue';

export default {
  name: 'Home',
  components: {
    HomePositions, Search,
  },
  data: () => ({
    positions: [
      {
        title: 'Full-Time Pozicije',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'orange',
      },
      {
        title: 'Part-Time Pozicije',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'green',
      },
      {
        title: 'Rad od kuce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat.',
        marker: 'blue',
      },
    ],
  }),
};
</script>
