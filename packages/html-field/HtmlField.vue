<template>
  <textarea type="text" class="form-control" v-model="model"></textarea>
</template>

<script>
export default {
  props: ['value'],
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

