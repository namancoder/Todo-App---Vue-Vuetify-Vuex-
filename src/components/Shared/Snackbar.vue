<template>
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
         @click="$store.commit('dismissSnackbar')"
        color="pink"
        text
        v-bind="attrs"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: "✌️✌️✌️✌️✌️✌️✌️",
    };
  },
};
</script>

<style></style>
