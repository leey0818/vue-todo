<template>
  <div>
    <v-item-group class="text-left py-3">
      <v-item v-for="(item, index) in items" :key="`item-${index}`">
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
    </v-item-group>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  methods: {
    removeItem(index) {
      this.$emit('removeItem', index);
    },
    toggleItem(index) {
      this.$emit('toggleItem', index);
    },
  },
};
</script>

<style scoped>
.text-done {
  text-decoration: line-through;
  color: gray;
}
</style>
