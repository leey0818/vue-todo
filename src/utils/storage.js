export default {
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
