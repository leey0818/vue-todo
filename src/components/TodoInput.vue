<template>
  <div>
    <v-text-field
      type="text"
      append-icon="fa-plus"
      class="mb-3"
      placeholder="Input your todos."
      autofocus
      outlined
      hide-details
      v-model.trim="newItem"
      @click:append="addTodo"
      @keypress.enter="addTodo"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newItem) {
        this.$emit('addItem', this.newItem);
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
