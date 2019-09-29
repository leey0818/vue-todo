<template>
  <div>
    <v-btn color="red darken-3" outlined @click="clearAll">
      <i class="fa fa-trash-alt mr-1"></i> Clear All
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['clearAll']),
  },
};
</script>

<style>

</style>
