<template>
  <div class="alert alert-success">
    <TodoListItem
      v-for="task in tasks"
      :key="task['.key']"
      :task="task"
      :updateChecked="updateCheckedState"
      :updateTitle="updateTitleState"
      :remove="remove"
    />
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
    },
    updateCheckedState: {
      type: Function
    },
    updateTitleState: {
      type: Function
    }
  },
  components: {
    TodoListItem
  }
};
</script>

<style lang="scss"></style>
