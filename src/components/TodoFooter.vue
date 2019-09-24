<template>
  <div>
    <v-btn color="red darken-3" outlined @click="clearAll">
      <i class="fa fa-trash-alt mr-1"></i> Clear All
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      window.sessionStorage.clear();
    },
  },
};
</script>

<style>

</style>
