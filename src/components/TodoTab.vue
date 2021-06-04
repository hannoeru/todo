<script setup lang="ts">
import { defineProps, defineEmit } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: 'all',
  },
})

const emit = defineEmit(['update:modelValue'])

</script>

<template>
  <div class="tab">
    <button class="tab-item" :class="{'active': modelValue === 'all'}" @click="emit('update:modelValue', 'all')">
      全部
    </button>
    <button class="tab-item" :class="{'active': modelValue === 'await'}" @click="emit('update:modelValue', 'await')">
      待完成
    </button>
    <button class="tab-item" :class="{'active': modelValue === 'done'}" @click="emit('update:modelValue', 'done')">
      已完成
    </button>
  </div>
</template>

<style lang="scss">
@import '../vars.scss';

.tab {
  display: flex;
  > .tab-item {
    flex: 1;
    padding: 1rem 1.5rem;
    color: $gray;
    font-weight: bold;
    background: #FFFFFF;
    border-bottom: 2px solid #EFEFEF;
    transition-property: border-color, color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    &.active {
      color: $black;
      border-bottom: 2px solid $black;
    }
  }
}
</style>
