<template>
  <div>
    <v-card class="mb-3" outlined v-if="items.length">
      <v-list class="text-left pa-0" flat>
        <v-list-item-group>
          <template v-for="(item, index) in items">
            <v-divider v-if="index" :key="index"></v-divider>
            <v-list-item class="pr-1" :key="item.text" @click="toggleItem(index)">
              <v-list-item-action class="mr-1">
                <i class="fa fa-check success--text" v-if="item.completed"></i>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  :class="{ 'text-done': item.completed }"
                  :title="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <i class="fa fa-trash-alt red--text text--darken-3"
                  style="cursor:pointer"
                  @click="removeItem(index)"></i>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getItem(index) {
      return this.items[index];
    },
    removeItem(index) {
      const item = this.getItem(index);
      this.items.splice(index, 1);

      window.sessionStorage.removeItem(item.text);
    },
    toggleItem(index) {
      const item = this.getItem(index);
      item.completed = !item.completed;

      window.sessionStorage.setItem(item.text, JSON.stringify(item));
    },
  },
  created() {
    if (window.sessionStorage.length) {
      for (let i = 0; i < window.sessionStorage.length; i++) {
        const key = window.sessionStorage.key(i);
        this.items.push(JSON.parse(window.sessionStorage.getItem(key)));
      }
    }
  },
};
</script>

<style scoped>
.text-done {
  text-decoration: line-through;
  color: gray;
}
</style>
