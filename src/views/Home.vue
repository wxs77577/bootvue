<template>
  <div class="p-4">
    <v-button>返回</v-button>
    <v-button variant="primary">登录</v-button>

    <v-table v-bind="table"></v-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      table: {
        fields: {
          _id: { label: "ID" },
          title: { label: "标题" },
          cover: {
            label: "图片",
            template: '<img src="{{item.cover}}" height="100">'
          },
          _actions: {
            label: "操作",
            buttons: {
              view: { label: "查看", variant: "success", size: 'sm' },
              edit: { label: "编辑", variant: "primary", size: 'sm', to: '/edit/{{item._id}}' },
              delete: { label: "删除", variant: "danger", size: 'sm' }
            }
          }
        },
        items: []
      }
    };
  },
  methods: {
    async fetch() {
      const { data: items } = await this.$http.get("courses");
      this.table.items = items.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
