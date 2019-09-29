import Vue from 'vue';
import Vuex from 'vuex';
import storage from '../utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    getLastItemId(state) {
      return state.todoItems.map(item => item.id).reduce((acc, cur) => Math.max(acc, cur), -1);
    },
  },
  mutations: {
    addItem(state, item) {
      state.todoItems.push(item);
      storage.put(item.text, item);
    },
    removeItem(state, index) {
      const item = state.todoItems.splice(index, 1);

      if (item.length) {
        storage.remove(item[0].text);
      }
    },
    toggleItem(state, index) {
      const item = state.todoItems[index];
      item.completed = !item.completed;
      storage.put(item.text, item);
    },
    clearAll(state) {
      state.todoItems = [];
      storage.clear();
    },
  },
  actions: {
    addItem({ commit, getters }, text) {
      const item = {
        id: getters.getLastItemId + 1,
        completed: false,
        text,
      };

      commit('addItem', item);
    },
  },
});
