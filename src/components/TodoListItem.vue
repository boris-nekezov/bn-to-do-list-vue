<template>
  <div>
    <h2>{{ task.title }}</h2>
    <h3>{{ task.completed }}</h3>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: ["task"],
  methods: {
    logTask() {
      console.log(this.task);
    }
  }
};
</script>

<style lang="scss"></style>
