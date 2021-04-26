<template>
  <div class="search-bar col-sm-12 col-lg-8">
        <div class="form-group">
        <input type="search" class="form-control search-bar-input" id="searchData"
         aria-describedby="searchData" placeholder="Pretrazi oglase">
        </div>
    <button class="button-search button-search-blue" type="search">Pretrazi</button>
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
