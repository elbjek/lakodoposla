<template>
  <div class="single-ad-page">
    <div class="container">
      <div class="row">
        <aside class="col-sm-4">
          <Subscription/>
          <CvGenerator/>
        </aside>
        <section class="col-sm-8 single-ad-page-data">
          <Loading v-if="loading"/>
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
import Loading from '../components/global/Loader.vue';

export default {
  name: 'SingleAd',
  components: {
    Subscription, CvGenerator, Ad, Loading,
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch('getAdvert', this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    advert() {
      return this.$store.state.advert;
    },
  },
};
</script>
