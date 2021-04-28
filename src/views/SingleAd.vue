<template>
  <div class="single-ad-page">
    <div class="container">
      <div class="row">
        <aside class="col-sm-4">
          <Subscription/>
          <CvGenerator/>
        </aside>
        <section class="col-sm-8 single-ad-page-data">
          <Ad :ad="advert" :marker="'all'"/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Subscription from '../components/Subscription.vue';
import CvGenerator from '../components/CvGenerator.vue';
import Ad from '../components/Ad.vue';

export default {
  name: 'SingleAd',
  components: {
    Subscription, CvGenerator, Ad,
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
