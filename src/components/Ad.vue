<template>
  <div v-if="ad" class="single-ad-component">
    <div
      v-if="marker === 'regular' || marker === 'all'"
      class="single-ad-component-image"
      :style="{ backgroundImage: 'url(' + ad.img + ')' }"
      :class="ad.img ? '' : 'single-ad-component-image-empty'"
    ></div>
    <h5>{{ ad.title }}</h5>
    <div v-if="marker === 'latest' || marker === 'all'">
      <p class="short-description" v-if="ad.short_description">{{ ad.short_description }}</p>
      <p v-if="ad.long_description && $route.path === '/oglasi/' + ad.id">
        {{ ad.long_description }}
      </p>
      <p v-if="ad.location">{{ ad.location }}</p>
      <p v-if="ad.time && marker === 'all'">
        {{ $moment(ad.time).fromNow() }}
      </p>
    </div>
    <div
      class="single-ad-component-tags"
      v-if="marker === 'latest' || marker === 'all'"
    >
      <div
        class="single-ad-component-tag"
        v-for="tag in ad.tags"
        :key="tag.index"
        :class="'single-ad-component-tag-' + tag.marker"
      >
        {{ tag.tag }}
      </div>
      <p v-if="marker === 'latest'">
        {{ $moment(ad.time).fromNow() }}
      </p>
    </div>
    <div class="single-ad-component-additional-info"
      v-if="$route.path === '/oglasi/' + ad.id">
      <div class="single-ad-component-additional-info-conditions"
        v-if="ad.work_conditions && ad.work_conditions.length > 0">
        <p>Uslovi za rad:</p>
        <ul>
          <li v-for="(condition, index) in ad.work_conditions" :key="index">
            {{ condition }}
          </li>
        </ul>
      </div>

        <div class="single-ad-component-additional-info-traits"
          v-if="ad.employee_traits.length > 0">
        <p>Licne osobine:</p>
        <ul>
          <li v-for="(trait, index) in ad.employee_traits" :key="index">
            {{ trait }}
          </li>
        </ul>
      </div>

        <div class="single-ad-component-additional-info-our-offer" v-if="ad.our_offer.length > 0">
        <p>Sta nudimo:</p>
        <ul>
          <li v-for="(offer, index) in ad.our_offer" :key="index">
            {{ offer }}
          </li>
        </ul>
      </div>
      <div class="single-ad-component-additional-info-expectations"
        v-if="ad.expectations.length > 0">
        <p>Sta ocekujemo:</p>
        <ul>
          <li v-for="(offer, index) in ad.expectations" :key="index">
            {{ offer }}
          </li>
        </ul>
      </div>
    </div>
    <div class="single-ad-component-buttons" v-if="marker === 'all'">
      <button class="button button-gray">Poruke</button>
      <button class="button button-cta-blue">Prijavi se</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ad',
  props: ['ad', 'marker'],
  data: () => ({}),
  mounted() {
    console.log(this.$route.path);
  },
};
</script>
