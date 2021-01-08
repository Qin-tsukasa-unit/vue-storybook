<template>
  <div>
    <h1 class="todo-Title">ToDoリスト</h1>
    <form @submit.prevent="addTodo()" class="todo-Form">
      <label>タスクを入力</label>
      <input
        v-model="newTodo"
        name="newTodo"
        autocomplete="off"
        class="todo-Input"
      >
      <button>追加</button>
    </form>
    <ul class="todo-Items">
      <li class="todo-Item" v-for="(todo, index) in todos" :key="index">
        <span
          :class="{ 'is-done': todo.done }"
          @click="doneTodo(todo)"
        >
        {{ todo.content }}
        </span>
        <button @click="removeTodo(index)">削除</button>
      </li>
    </ul>
    <p v-if="todos.length === 0">タスクリストがありません。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      defaultData: [{
        done: false,
        content: 'タスク１'
      }],
      todos: {}
    };
  },
  mounted() {
    this.todos = this.defaultData;
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
        this.todos = this.defaultData;
      }
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodo) {
        this.todos.push({
          done: false,
          content: this.newTodo
        });
        this.newTodo = '';
      }
      this.saveData();
    },
    doneTodo: function (todo) {
      todo.done = !todo.done
      this.saveData();
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1);
      this.saveData();
    },
    saveData: function () {
      const storageData = JSON.stringify(this.todos);
      localStorage.setItem('todos', storageData);
    }
  }
};
</script>

<style scoped>
.todo-Title {
  margin: 0 0 10px 0;
  padding: 0;
}

.todo-Form {
  display: flex;
  padding: 10px 0;
  gap: 10px;
  border-bottom: 2px solid #ccc;
}

.todo-Input {
  flex: 1;
}

.todo-Items {
  margin-top: 10px;
  padding: 0;
}

.todo-Item {
  display: flex;
  align-items: center;
  margin-bottom: 0;
  border-bottom: 1px solid #ccc;
}

.todo-Item span {
  flex: 1;
  padding: 10px;
}

.todo-Item .is-done {
  color: #ccc;
}

.todo-Item .is-done::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 10px;
  margin-right: 2px;
  border-bottom: 2px solid #076903;
  border-right: 2px solid #076903;
  transform: rotate(45deg);
}
</style>
