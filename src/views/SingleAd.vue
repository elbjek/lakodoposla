<template>
  <div class="about">
    <h1 v-if="advert" style="text-align:center">{{advert.title}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SingleAd',
  components: {
  },
  mounted() {
    this.$store.dispatch('getAdvert', this.$route.params.id);
  },
  computed: {
    advert() {
      return this.$store.state.advert;
    },
  },
};
</script>
