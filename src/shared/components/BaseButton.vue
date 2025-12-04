<!--
  BaseButton Component
  Reusable button component with consistent styling
-->
<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="inline-block mr-2">
      <svg
        class="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger', 'ghost'].includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click'],

  computed: {
    buttonClasses() {
      const baseClasses =
        'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

      const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      }

      const variantClasses = {
        primary:
          'bg-gradient-to-r from-primary to-primary-light text-white hover:opacity-90 focus:ring-primary disabled:opacity-50',
        secondary:
          'bg-secondary-light text-gray-800 hover:bg-secondary-dark hover:text-white focus:ring-secondary-dark disabled:opacity-50',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:opacity-50',
        ghost:
          'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300 disabled:opacity-50',
      }

      const disabledClass = this.disabled || this.loading ? 'cursor-not-allowed' : 'cursor-pointer'

      return `${baseClasses} ${sizeClasses[this.size]} ${
        variantClasses[this.variant]
      } ${disabledClass}`
    },
  },
}
</script>
