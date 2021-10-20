<template>
<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">{{ buttonTitle }}</b-button>
  </b-card>
    <div>
        <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            title="Image Overlay"
            sub-title="Subtitle"
        >
            <b-card-text>
            {{buttonTitle}}
            </b-card-text>
        </b-card>
    </div>
</div>


  
</template>

<script>
export default {
  name: "buttonComponent",
  props: {
    buttonTitle: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    sendEvent() {
      this.$emit("marcoEvent", "Ciao");
    },
  },
};
</script>

<style scoped>
</style>