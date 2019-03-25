<template>
  <select class="form-control" v-model="model">
    <option :value="key" v-for="(item, key) in options" :key="key">{{item}}</option>
  </select>
</template>

<script>
export default {
  props: ['value', 'options'],
  computed: {
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

