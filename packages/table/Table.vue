<template>
  <table :class="classes">
    <thead>
      <tr>
        <th v-for="(field, name) in fields" :key="name">{{field.label || name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item._id">
        <td v-for="(field, name) in fields" :key="name">
          <div v-if="field.template" v-html="template(field.template, {item})"></div>
          <div v-else-if="name === config._actions">
            <v-button
              v-for="(button, btnKey) in field.buttons"
              :key="btnKey"
              v-bind="button"
              :to="template(button.to, {item})"
              class="ml-1"
            ></v-button>
          </div>
          <template v-else>{{item[name]}}</template>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th v-for="(field, name) in fields" :key="name">{{field.label || name}}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import utils from '../../src/components/utils';

export default {
  props: {
    config: {
      type: Object,
      default() {
        return {
          _actions: "_actions"
        };
      }
    },
    fields: { type: Object },
    items: { type: Array }
  },
  components: {},
  computed: {
    classes() {
      return ["table"];
    }
  },
  methods: {
    template: utils.template
  }
};
</script>
