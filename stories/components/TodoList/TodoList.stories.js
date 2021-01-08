import TodoList from "./TodoList.vue";

export default {
  title: "Example/TodoList",
  component: TodoList,
};

export const ExampleTodo = () => ({
  components: { TodoList },
  template: '<TodoList />',
});
