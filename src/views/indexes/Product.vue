<template lang="pug">
  v-container.px-10(fluid)
    v-progress-linear(
      :active="loading",
      indeterminate,
      color="white",
      absolute,
      top
    )
    v-row
      v-col
        v-btn.mr-3.float-right(
          color="success",
          :to="`/Product/add`"
        ) Create New

    v-row.text-center
      v-col.py-0
        v-card.px-10.py-5.my-5
          v-overlay(absolute, v-if="loading")
          v-data-table(
            :headers="headers",
            :items="items"
          )
            template(v-slot:item.action="{ item }")
              router-link(
                style="text-decoration: none;",
                :to="`/Product/${item.id}/edit`"
              )
                v-icon(small) mdi-pencil
              template
                v-icon(small) mdi-delete
</template>

<script>
export default {
  name: 'product-index',
  data() {
    return {
      loading: false,
      headers: [
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Actions", value: "action"}
      ],
      items: []
    }
  },
  methods: {
    objectToArray(obj) {
      const keys = Object.keys(obj);
      const res = [];
      for(let i = 0; i < keys.length; i++){
        res.push([keys[i], obj[keys[i]]]);
      };
      return res;
    }
  },
  created() {
    // this.items = this.objectToArray(JSON.parse(localStorage.getItem('products'))) || [];
    this.items = JSON.parse(localStorage.getItem('products')) || [];
  }
}
</script>

<style lang="scss" scoped>
  .v-data-table {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
</style>