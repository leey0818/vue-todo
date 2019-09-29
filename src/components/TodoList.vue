<template>
  <div>
    <v-item-group class="text-left py-3" style="z-index:1">
      <transition-group name="rotate" tag="div" @before-leave="beforeLeave" appear>
        <v-item v-for="(item, index) in items" :key="`item-${item.id}`">
          <v-card class="mb-3">
            <v-list-item class="pr-1" @click="toggleItem(index)">
              <v-list-item-action class="mr-1">
                <i class="fa fa-check success--text" v-if="item.completed"></i>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  :title="item.text"
                  :class="{ 'text-done': item.completed }"
                ></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <i
                  class="fa fa-trash-alt red--text text--darken-3"
                  style="cursor: pointer"
                  @click.stop="removeItem(index)"
                ></i>
              </v-list-item-action>
            </v-list-item>
          </v-card>
        </v-item>
      </transition-group>
    </v-item-group>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.todoItems;
    },
  },
  methods: {
    removeItem(index) {
      this.$store.commit('removeItem', index);
    },
    toggleItem(index) {
      this.$store.commit('toggleItem', index);
    },
    beforeLeave(el) {
      el.style.width = `${el.offsetWidth}px`;
    },
  },
};
</script>

<style scoped>
.text-done {
  text-decoration: line-through;
  color: gray;
}

.rotate-enter-active,
.rotate-leave-active,
.rotate-move {
  transition: all .6s;
}
.rotate-leave-active {
  position: absolute;
}
.rotate-enter, .rotate-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
