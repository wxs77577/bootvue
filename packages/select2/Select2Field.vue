<template>
  <vue-select v-model="model" :options="newOptions" :onSearch="onSearch" @search:focus="initOptions"></vue-select>
</template>

<script>
import VueSelect from 'vue-select'

export default {
  props: ['value', 'options', 'onSearch', 'initOptions'],
  components: {
    VueSelect
  },
  computed: {
    newOptions(){
      if (!Array.isArray(this.options)) {
        return Object.entries(this.options).map(([value, label]) => ({value, label}))
      }
      return this.options
    },
    model: {
      get(){
        return this.value
      },
      set(val){
        this.$emit('input', val)
      }
    }
  }
}
</script>

