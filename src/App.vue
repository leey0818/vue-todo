<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-card class="mx-auto mt-12 text-center pa-3" width="500" outlined>
          <todo-header></todo-header>
          <todo-input></todo-input>
          <todo-list></todo-list>
          <todo-footer></todo-footer>
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
      // TODO
    };
  },
};
</script>
