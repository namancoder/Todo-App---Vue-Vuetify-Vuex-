<template>
  <v-list flat class="pt-0">
    <task-item v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
export default {
  components: {
    "task-item": require("@/components/Todo/Task.vue").default,
  },
};
</script>

<style></style>
