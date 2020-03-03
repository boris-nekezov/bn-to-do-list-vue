<template>
  <div>
    <TodoListItem v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoListItem
  }
};
</script>

<style lang="scss"></style>
