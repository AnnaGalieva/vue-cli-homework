<template>
  <!-- <ProductDetails /> -->
  <!-- <AddCount />
  <AddCount />
  <AddCount /> -->
  <PaymentsDisplay :items="paymentList" :info="infoText" />
  <AddList @addNewPay="addNewPay" />
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';
import AddList from './components/AddList.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';

//import AddCount from './components/AddCount.vue';
//import ProductDetails from './components/ProductDetails.vue';



export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList
  },
  data() {
    return {
      //paymentList: [],
      //infoText: 'new text info'
    };
  },
  methods: {
    // fetchData() {
    //   return [
    //     {
    //       date: '28.03.2020',
    //       category: 'Food',
    //       value: 169,
    //     },
    //     {
    //       date: '24.03.2020',
    //       category: 'Transport',
    //       value: 360,
    //     },
    //     {
    //       date: '24.03.2020',
    //       category: 'Food',
    //       value: 532,
    //     },
    //   ]
    // },
    addNewPay(data) {
      // this.paymentList.push(data)
      this.ADD_PAYMENT(data)
    },
    ...mapMutations(['SET_PAYMENT', 'ADD_PAYMENT'])
  },
  computed: {
    ...mapState(['paymentList']),
    ...mapGetters(['getPayment', 'getFullPayment']),
    ...mapActions(['fetchData'])
  },
  created() {
    //this.paymentList = this.fetchData();
    this.SET_PAYMENT(this.fetchData());
  },
}
</script>

<style lang="scss"></style>
