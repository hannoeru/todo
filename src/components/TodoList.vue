<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { ListItem } from '../types'
import { updateIsDone, deleteItem } from '../store'
import Checkbox from './Checkbox.vue'

defineProps({
  list: {
    type: Array as PropType<ListItem[]>,
    required: true,
  },
})

</script>

<template>
  <transition-group name="list" class="list" tag="div">
    <div v-for="item in list" :key="item.title" class="list-item" :class="{'is-done': item.isDone}">
      <Checkbox :value="item.isDone" @update="updateIsDone($event, item)" />
      <span>{{ item.title }}</span>
      <button @click="deleteItem(item)">
      </button>
    </div>
  </transition-group>
</template>

<style lang="scss">
@import '../vars.scss';

.list {
  padding: 8px;
  & .list-item {
    display: flex;
    align-items: center;
    &.is-done {
      > span {
        text-decoration-line: line-through;
        text-decoration-color: $black;
        color: $black;
        opacity: 30%;
      }
    }
    > span {
      flex: 1;
      text-align: start;
      padding: 16px 0;
    }
    > button {
      width:24px;
      height:24px;
      position: relative;
      background: transparent;
      margin: 0 12px;
      cursor: pointer;
      border-radius: 4px;
      &:before, &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 0.1rem;
        background-color: $black;
        left: 0;
        transform-origin: 50% 0%;
      }
      &:before{
        transform: rotate(45deg) translateY(-50%);
      }
      &:after{
        transform: rotate(-45deg) translateY(-50%);
      }
      &:focus {
        box-shadow: 0 0 0 1pt $primary;
      }
    }
  }
  > :not([hidden]) ~ :not([hidden]) {
    > span {
      border-top: 1px solid #EFEFEF;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-to {
  opacity: 0;
}
</style>
