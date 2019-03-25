<template>
  <component :is="tagName" :class="classes" v-bind="$props">
    <slot>{{label}}</slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: { default: "button" },
    label: {  },
    variant: { default: "secondary" },
    size: { default: "md", },
    to: {}
  },
  computed: {
    tagName(){
      if (this.to) {
        return 'router-link'
      }
      return this.tag
    },
    classes() {
      return {
        btn: true,
        [`btn-${this.variant}`]: !!this.variant,
        [`btn-${this.size}`]: true,
      };
    }
  }
};
</script>

