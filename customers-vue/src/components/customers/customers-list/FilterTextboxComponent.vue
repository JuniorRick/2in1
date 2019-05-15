<template>
    <div class="">
      Filter: <input type="text" class="form-control"  v-model="filter" @input="filtering">
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FilterTextboxComponent extends Vue {
  private filter: string = '';

  filtering() {
      this.$emit('filtering', this.filter);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
