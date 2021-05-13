<template>
 <div class="all-ads-page">
    <div class="container">
      <div class="row">
        <aside class="col-sm-3">
          <Subscription/>
          <CvGenerator/>
          <Filters/>
        </aside>
        <section class="col-sm-9 all-ads-page-data">
          <div class="row">
            <Loading v-if="loading"/>
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
import Loading from '../components/global/Loader.vue';
import Filters from '../components/Filters.vue';

export default {
  name: 'AllAds',
  components: {
    Subscription, CvGenerator, Ad, Loading, Filters,
  },
  mounted() {
    this.$store.dispatch('getAdverts');
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    adverts() {
      return this.$store.state.adverts;
    },
  },
};
</script>
