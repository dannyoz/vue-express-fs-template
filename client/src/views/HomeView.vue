<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import Service from "../services/service";

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      info: {},
    };
  },
  created() {
    this.getData(); // NEW - call getEventData() when the instance is created
  },
  methods: {
    async getData() {
      Service.getData().then(
        ((info: unknown) => {
          console.log(info);
          this.$set(this, "info", info);
        }).bind(this)
      );
    },
  },
})
export default class HomeView extends Vue {}
</script>
