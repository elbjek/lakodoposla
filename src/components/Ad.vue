<template>
  <div v-if="ad" class="single-ad-component">
    <!-- {{formatedTime}} -->

    <div
    v-if="marker === 'regular'"
      class="single-ad-component-image"
      :style="{ backgroundImage: 'url(' + ad.img + ')' }"
      :class="ad.img ? '' : 'single-ad-component-image-empty'"
    >
    </div>
    <h5>{{ ad.title }}</h5>
    <div v-if="marker === 'latest' || marker === 'all'">
      <p v-if="ad.description">{{ ad.description }}</p>
      <p v-if="ad.location">{{ ad.location }}</p>
      <p v-if="ad.time && marker === 'regular'">
          {{$moment(ad.time).fromNow()}}
      </p>
    </div>
    <div class="single-ad-component-tags" v-if="marker === 'latest' || marker === 'all'">
      <div
        class="single-ad-component-tag"
        v-for="tag in ad.tags"
        :key="tag.index"
        :class="'single-ad-component-tag-' + tag.marker"
      >
        {{ tag.tag }}
      </div>
        <p v-if="marker === 'latest'">
            {{$moment(ad.time).fromNow()}}
        </p>
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
};
</script>
