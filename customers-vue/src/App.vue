<template>
  <div id="app" class="container">
    <AppComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppComponent from './components/AppComponent.vue';


@Component({
  components: {
    AppComponent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {

}
</style>
