<template>
  <div id="app">
    <headerRODJAK />
    <router-view></router-view>
    
    
    
<!--
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <maverick-vue />
    <testimg-vue />

    <div v-for="(city, index) in cities" v-bind:key="index">
      {{ city }}
    </div>

    <div v-for="(object, index) in listOfObjects" v-bind:key="index">
      {{ object.title }}: {{ object.author }}
    </div>

!-->
  </div>
</template>

<script>
/*
import HelloWorld from "./components/HelloWorld.vue";
import maverickVue from "./maverick.vue";
import testimgVue from "./testimg.vue";
*/
import headerRODJAK  from "./components/headerRODJAK.vue"

export default {
  name: "App",
  components: {
    /*
    HelloWorld,
    maverickVue,
    testimgVue,
    */
   headerRODJAK
  },
  /*
  data() {
    return {
      cities: ["Geneva", "Lausanne", "Morges"],
      condition: false,
      listOfObjects: [
        {
          title: "How to do lists in Vue",
          author: "Jane Doe",
          publishedAt: "2016-04-10",
        },
        {
          title: "How to do lists in Vue",
          author: "Jane Doe",
          publishedAt: "2016-04-10",
        },
        {
          title: "How to do lists in Vue",
          author: "Jane Doe",
          publishedAt: "2016-04-10",
        },
      ],
    };
  },
  */
};
</script>

<style>

</style>
