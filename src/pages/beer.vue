<template>
    <div>
        <h1>beer</h1>
        <div>
            
    <!-- Butto that trigger the events that get the beer list-->
            <b-btn @click="getBeers()">Get Beers </b-btn></div>
            <!-- Loop over beers -->
            <div v-for="(beer, index) in beers" :key="index">
                      <!-- Dependency Injection of single beer inside the card component -->
      <apiBeer
        :beerTitle="beer.name"
        :description="beer.description"
        :img="beer.image_url"
      />
    </div>
    </div>

</template>

<script>
    import apiBeer from "../components/apiBeer.vue"
    const axios = require("axios");// import axios to use API
    export default {
  name: "beer",
  components: { 
      apiBeer
  },
    data() {
    return {
      beers: [],
    };
  },
  methods: {
    handleEvent(message) {
      console.log("Recu", message);
    },
    async getBeers() {
      
      // Get the answer from the server (Punk Api) and stock it in result
      const result = await axios.get("https://api.punkapi.com/v2/beers");
      
      // Stock the result in dynamic variable that connect HTML and JS
      this.beers = result.data;
    },
  },
};
</script>

 
<style>

</style>