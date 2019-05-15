<template>
<div class="">
  <h1>{{ title }}</h1>
  <customers-list-component :_customers="people"></customers-list-component>
</div>
</template>

<script lang="ts">
import { Component,  Prop,  Vue } from 'vue-property-decorator';
import CustomersListComponent from './customers-list/CustomersListComponent.vue';

import { ICustomer } from '../shared/interfaces';

@Component({
  components: {
    CustomersListComponent,
  },
})
export default class CustomersComponent extends Vue {
  private title: string;
  private people: ICustomer[];


  constructor() {
    super();
    this.title = 'Customers';
    this.people = [
            { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
            { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
            { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
        ];

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h1{
//   text-align: center;
// }
</style>
