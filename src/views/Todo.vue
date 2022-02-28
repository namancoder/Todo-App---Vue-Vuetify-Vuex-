<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <div class="pa-10" v-else>No Tasks</div>
  </div>
</template>

<script>
export default {
  name: "Todo",

  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
  },
};
</script>
