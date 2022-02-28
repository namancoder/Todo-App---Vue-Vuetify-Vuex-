import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake UP",
        done: false,
      },
      {
        id: 2,
        title: "Get Oranges",
        done: false,
      },
      {
        id: 3,
        title: "Eat Oranges",
        done: false,
      },
    ],
  },
  getters: {},
  mutations: {
    addTask(state, newTaskTitle) {
      console.log("add task");
      let newTask = { id: Date.now(), title: newTaskTitle, done: false };
      if (newTaskTitle !== "") state.tasks.push(newTask);

    },
    doneTask(state,id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state,id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  modules: {},
});
