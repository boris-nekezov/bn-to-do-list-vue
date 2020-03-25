<template>
  <button
    v-if="modifier && !size"
    :class="`btn btn-${modifier}`">
    <slot></slot>
  </button>
  <button
    v-else-if="modifier && size"
    :class="`btn btn-${modifier} btn-${size}`">
    <slot></slot>
  </button>
  <button
    v-else-if="!modifier && size"
    :class="`btn btn-${size}`">
    <slot></slot>
  </button>
  <button
    v-else
    :class="`btn`">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'AppButton',
    props: {
      modifier: {
        type: String,
        required: false
      },
      size: {
        type: String,
        required: false
      },
    }
  }
</script>