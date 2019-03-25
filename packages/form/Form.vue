<template>
  <form>
    <div class="row">
      <div class="form-group" v-for="(field, name) in fields" :key="name" :class="getFieldGroupClasses(field)">
        <label for class="control-label">{{field.label}}</label>
        <component
          :is="getTagName(field)"
          :value="value[name]"
          @input="updateValue(name, arguments[0])"
          v-bind="field"
          :class="getFieldClasses(field)"
        ></component>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    value: {},
    fields: {}
  },
  data() {
    return {};
  },
  methods: {
    getFieldClasses(){
      return {
        // [`col-md-${field.innerCols || 12}`]: true
      }
    },
    getFieldGroupClasses(field){
      return {
        [`col-md-${field.cols || field.col || 12}`]: true
      }
    },
    updateValue(name, val) {
      const data = Object.assign({}, this.value, {
        [name]: val
      });
      this.$emit("input", data);
    },
    getTagName(field) {
      return `v-${field.tag || field.type || "text"}-field`;
    }
  }
};
</script>
