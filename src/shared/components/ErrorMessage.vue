<!--
  ErrorMessage Component
  Displays error messages with consistent styling
-->
<template>
  <div v-if="message" :class="alertClasses" role="alert">
    <div class="flex items-start gap-3">
      <!-- Icon -->
      <svg
        v-if="showIcon"
        class="w-5 h-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <!-- Message -->
      <div class="flex-1">
        <p class="font-medium">{{ title }}</p>
        <p v-if="message !== title" class="text-sm mt-1">{{ message }}</p>
      </div>

      <!-- Close button -->
      <button
        v-if="dismissible"
        @click="$emit('dismiss')"
        class="flex-shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Close"
      >
        <svg
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',

  props: {
    message: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Error',
    },
    type: {
      type: String,
      default: 'error',
      validator: (value) => ['error', 'warning', 'info', 'success'].includes(value),
    },
    dismissible: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['dismiss'],

  computed: {
    alertClasses() {
      const baseClasses = 'p-4 rounded-lg'

      const typeClasses = {
        error: 'bg-red-50 text-red-800 border border-red-200',
        warning: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
        info: 'bg-blue-50 text-blue-800 border border-blue-200',
        success: 'bg-green-50 text-green-800 border border-green-200',
      }

      return `${baseClasses} ${typeClasses[this.type]}`
    },
  },
}
</script>
