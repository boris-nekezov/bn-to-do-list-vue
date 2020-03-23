<template>
  <i :class="['app-icon', 'fa', `fa-${icon}`]" aria-hidden="true"></i>
</template>

<script>
export default {
  name: "AppIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
$iconFontRegular: 20px;

.icon {
  font-size: $iconFontRegular;
}
</style>
