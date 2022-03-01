<template lang="pug">
  v-main.px-10(fluid)
    v-progress-linear(
      :active="loading",
      indeterminate,
      color="white",
      absolute,
      top
    )        
    v-row.pb-10.pt-10.align-self-start(align="center")
      v-col.py-0.text-left
        v-card.elevation-24.mb-5
          v-container.px-10
            v-row
              v-col.display-1.font-weight-light
                .section__title General information
            v-row
              v-col(cols="5")
                v-text-field(
                  v-model="instance.name",
                  label="Name"
                )
            v-row
              v-col(cols="2")
                v-text-field(
                  v-model="instance.price",
                  label="Price",
                  numeric,
                  type="number",
                  min="0"
                )
              v-col(cols="2")
                v-text-field(
                  v-model="instance.stock",
                  label="Stock",
                  numeric,
                  type="number",
                  min="0"
                )
            v-row.pa-10
              v-col.py-0(cols="11")
                v-btn.mr-3.float-right.white--text(color="green" @click="save" ) Save
                v-btn.mr-3.float-right.white--text(color="red" @click="redirectToIndex" ) Cancel
          
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      instance: {},
      loading: false
    }
  },
  computed: {
    id () {
      return this.$route.params.item;
    }
  },
  methods: {
    save() {
      var allItems = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
      allItems = [...allItems, this.instance];
      localStorage.setItem('products', JSON.stringify(allItems));
      console.log(this.instance);
      this.redirectToIndex();
    },
    load() {
      if(this.id) {
        var allItems = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
        this.instance = allItems.find(x => x.id == this.id);
      }
      else {
        this.instance = {...this.instance, id: uuidv4()}
      }
    },
    redirectToIndex() {
      this.$router.push({
        name: 'product.index'
      })
    }
  },
  created() {
    this.load();
  }
}
</script>