<template>
<div class="">
  <filter-textbox-component @filtering="filter"></filter-textbox-component>

  <br>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>Order Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer of filteredCustomers">
        <td>
          <a href="#">{{ customer.name | uppercase }}</a>
        </td>
        <td>{{ customer.city}}</td>
        <td>{{ customer.orderTotal | currency(currencyCode) }}</td>
      </tr>
      <tr v-if="filteredCustomers && filteredCustomers.length">
        <td colspan="2">&nbsp;</td>
        <td>
          {{ customersOrderTotal | currency(currencyCode) }}
        </td>
      </tr>
      <tr v-if="!filteredCustomers || !filteredCustomers.length">
        <td>No customers found</td>
      </tr>
    </tbody>
  </table>
  Number of Customers: {{ filteredCustomers.length }}
</div>
</template>

<script lang="ts">
import { Component,  Prop,  Vue } from 'vue-property-decorator';
import FilterTextboxComponent from './FilterTextboxComponent.vue';

import { ICustomer } from '../../shared/interfaces';

@Component({
  components: {
    FilterTextboxComponent,
  },
  filters: {
    uppercase(name: string) {
      return name.toUpperCase();
    },
    currency(value: string, code: string) {
      let symbol = '';
      if(code = 'USD') {
        symbol = '$'
      }
      return symbol + value;
    }
  }
})
export default class CustomersListComponent extends Vue {
  private filteredCustomers: ICustomer[] = [];
  private customersOrderTotal: number = 0;
  private currencyCode: string = 'USD';

  @Prop({ default: [] }) private _customers: ICustomer[];

  constructor() {
    super();
  }

  public get customers(): ICustomer[] {
    return this._customers;
  }


  public set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  public mounted() {
      this.filteredCustomers = this._customers;
      this.calculateOrders();
  }

  public calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
    this.customersOrderTotal = Math.round(this.customersOrderTotal * 100) / 100;
  }

  filter(data: string) {
      if (data) {
          this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
              return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                     cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                     cust.orderTotal.toString().indexOf(data) > -1;
          });
      } else {
          this.filteredCustomers = this.customers;
      }
      this.calculateOrders();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h1{
//   text-align: center;
// }
</style>
