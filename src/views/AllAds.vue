<template>
 <div class="all-ads-page">
    <div class="container">
      <div class="row">
        <aside class="col-sm-4">
          <Subscription/>
          <CvGenerator/>
        </aside>
        <section class="col-sm-8 all-ads-page-data">
          <div class="row">
            <div class="col-sm-4" v-for="advert in adverts" :key="advert.id">
              <Ad :ad="advert" :marker="'all'"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Ad from '../components/Ad.vue';
import Subscription from '../components/Subscription.vue';
import CvGenerator from '../components/CvGenerator.vue';

export default {
  name: 'AllAds',
  components: {
    Subscription, CvGenerator, Ad,
  },
  mounted() {
    this.$store.dispatch('getAdverts');
  },
  computed: {
    adverts() {
      return this.$store.state.adverts;
    },
  },
};
</script>
