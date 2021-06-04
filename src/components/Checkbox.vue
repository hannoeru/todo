<script setup lang="ts">
import { defineEmit, defineProps, ref, watch } from 'vue'

const props = defineProps({
  value: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmit(['update'])
const inputValue = ref<Boolean>(props.value)

watch(inputValue, (v) => {
  emit('update', v)
})

</script>

<template>
  <label class="checkbox">
    <span class="checkbox__input">
      <input v-model="inputValue" type="checkbox" name="checkbox">
      <span class="checkbox__control">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="none" stroke="currentColor" stroke-width="3" d="M1.73 12.91l6.37 6.37L22.79 4.59" />
        </svg>
      </span>
    </span>
  </label>
</template>

<style lang="scss">
@import '../vars.scss';

*,
*:before,
*:after {
  box-sizing: border-box;
}

.checkbox {
  margin: 0 12px;
  font-size: 2rem;
  color: $primary;
  padding-top: 1px;

  &--disabled {
    color: $disabled;
  }
}

.checkbox__control {
  display: inline-grid;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid $black;

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
}

.checkbox__input {
  display: grid;
  grid-template-areas: "checkbox";

  > * {
    grid-area: checkbox;
  }

  input {
    opacity: 0;
    width: 20px;
    height: 20px;
    margin: 0;

    &:checked + .checkbox__control svg {
      transform: scale(1);
    }
    &:checked + .checkbox__control {
      border: none;
    }

    &:disabled + .checkbox__control {
      color: $disabled;
    }
  }
}
</style>
