import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const items = [];

    if (window.sessionStorage.length) {
      for (let i = 0; i < window.sessionStorage.length; i++) {
        const key = window.sessionStorage.key(i);
        const item = this.get(key);

        if (item) {
          items.push(item);
        }
      }
    }

    return items;
  },
  get(key) {
    let item;

    try {
      item = JSON.parse(window.sessionStorage.getItem(key));
    } catch (e) {
      item = null;
    }

    return item;
  },
  put(key, obj) {
    window.sessionStorage.setItem(key, JSON.stringify(obj));
  },
  remove(key) {
    window.sessionStorage.removeItem(key);
  },
  clear() {
    window.sessionStorage.clear();
  },
};

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
      storage.remove(item.text);
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
