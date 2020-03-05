<template>
  <div>
    <TodoListItem v-for="task in tasks" :key="task['.key']" :task="task" :remove="remove" />
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
    },
    remove: {
      type: Function
    }
  },
  components: {
    TodoListItem
  }
};
</script>

<style lang="scss"></style>
