<template>
  <div>
    <v-text-field
      type="text"
      append-icon="fa-plus"
      class="mb-3"
      v-model="newItem"
      @click:append="addTodo"
      @keypress.enter="addTodo"
      outlined
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      items: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newItem) {
        const itemObj = { text: this.newItem, completed: false };
        window.sessionStorage.setItem(this.newItem, JSON.stringify(itemObj));
        this.clearInput();
      }
    },
    clearInput() {
      this.newItem = '';
    },
  },
};
</script>

<style>

</style>
