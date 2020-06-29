
<template>
  <v-layout
    class="page-content"
    :row="row"
    :column="column"
    :reverse="reverse"
    :justify-center="justifyCenter"
    :justify-start="justifyStart"
    :justify-end="justifyEnd"
    :justify-space-around="justifySpaceAround"
    :justify-space-between="justifySpaceBetween"
    :align-baseline="alignBaseline"
    :align-center="alignCenter"
    :align-start="alignStart"
    :align-end="alignEnd">
    <slot />
  </v-layout>
</template>

<script>
export default {
  name: 'Page',
  props: {
    row: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    justifyCenter: {
      type: Boolean,
      default: false
    },
    justifyStart: {
      type: Boolean,
      default: false
    },
    justifyEnd: {
      type: Boolean,
      default: false
    },
    justifySpaceAround: {
      type: Boolean,
      default: false
    },
    justifySpaceBetween: {
      type: Boolean,
      default: false
    },
    alignBaseline: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    alignStart: {
      type: Boolean,
      default: false
    },
    alignEnd: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  watch: {
  },
  data: () => ({
  }),
  methods: {
  }
};
</script>

<style scoped>
.page-content {
  height: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 24px 12px;
}

@media (max-width: 1264px) {
  .page-content {
    max-width: 800px;
  }
}

@media (max-width: 960px) {
  .page-content {
    max-width: 600px;
  }
}

@media (max-width: 600px) {
  .page-content {
    max-width: 500px;
  }
}
</style>
