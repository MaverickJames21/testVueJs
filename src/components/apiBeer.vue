<template>
<div>
  <div>
      <h1>Beer</h1>
      <div><b-card
    :title="beerTitle"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{description}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card></div>
  </div>
</div>


  
</template>

<script>
export default {
  name: "apiBeer",
  props: {
    beerTitle: {
      type: String,
      required: true,
      default: "",
    },
  },
  
  description: {
      type: String,
      default: "",
      required: true,
  },

  img: {
      type: String,
      default:"",
      required: true,
  },
};
</script>

<style scoped>
</style>