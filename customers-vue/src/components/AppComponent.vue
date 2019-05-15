<template>
  <div>
    <customers-component />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CustomersComponent from './customers/CustomersComponent.vue';

@Component({
  components: {
    CustomersComponent,
  },
})
export default class AppComponent extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1{
    text-align: center;
  }
</style>
