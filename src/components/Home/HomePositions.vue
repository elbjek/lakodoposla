<template>
  <div class="home-positions-card"
  v-bind:class="'home-positions-card-' + borderColor">
      <p>{{title}}</p>
      <p>{{description}}</p>
      <router-link to="/about">Pogledaj sve ></router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePositions',

  data: () => ({
  }),
  props: ['title', 'description', 'borderColor'],
};
</script>
