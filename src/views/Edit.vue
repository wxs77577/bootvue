<template>
  <div class="edit">
    <h1>Edit {{$route.params.id}}</h1>
    <v-form :fields="fields" v-model="model"></v-form>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      model: {
        title: "12341234"
      },
      fields: {
        category: {
          label: "分类",
          type: "select2",
          cols: 3,
          options: {
            1: "HTML",
            2: "CSS"
          },
          initOptions: async () => {
            const { data } = await this.$http.get(
              `categories/b?query={"with":"children.children"}`
            );
            const ret = _.flatMapDeep(data.children, v => v.children);
            this.fields.category.options = ret.map(v => ({
              label: v.name,
              value: v._id
            }));
          },
          // onSearch: (search, loading) => {
          //   loading(true);

          //   _.debounce(async () => {
          //     this.fields.category.search(search);
          //     loading(false);
          //   }, 350)();
          // }
        },
        title: {
          label: "标题",
          cols: 6
        },

        description: {
          label: "描述",
          type: "textarea",
          class: "w-50"
        },
        body: {
          label: "详情",
          type: "html",
          cols: 6
        }
      }
    };
  },
  methods: {}
};
</script>
