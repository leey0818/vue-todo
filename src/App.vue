<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-card class="mx-auto mt-12 text-center pa-3" width="500" outlined>
          <todo-header></todo-header>
          <todo-input @addItem="addOneItem"></todo-input>
          <todo-list
            :items="todoItems"
            @removeItem="removeOneItem"
            @toggleItem="toggleOneItem"
          ></todo-list>
          <todo-footer @clearAll="clearAllItems"></todo-footer>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem(text) {
      const item = { text, completed: false };
      this.todoItems.push(item);

      window.sessionStorage.setItem(text, JSON.stringify(item));
    },
    removeOneItem(index) {
      const item = this.todoItems[index];
      this.todoItems.splice(index, 1);

      window.sessionStorage.removeItem(item.text);
    },
    toggleOneItem(index) {
      const item = this.todoItems[index];
      item.completed = !item.completed;

      window.sessionStorage.setItem(item.text, JSON.stringify(item));
    },
    clearAllItems() {
      this.todoItems.splice(0, this.todoItems.length);

      window.sessionStorage.clear();
    },
  },

  created() {
    if (window.sessionStorage.length) {
      for (let i = 0; i < window.sessionStorage.length; i++) {
        const key = window.sessionStorage.key(i);
        let item;

        try {
          item = JSON.parse(window.sessionStorage.getItem(key));
        } catch (e) {
          item = null;
        }

        if (item) this.todoItems.push(item);
      }
    }
  },
};
</script>
