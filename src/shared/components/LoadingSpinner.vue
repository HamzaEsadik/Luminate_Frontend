<!--
  LoadingSpinner Component
  Reusable loading indicator
-->
<template>
  <div :class="containerClasses">
    <div :class="spinnerClasses">
      <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
    </div>
    <p v-if="text" :class="textClasses">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',

  props: {
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
    },
    text: {
      type: String,
      default: '',
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'white', 'gray'].includes(value),
    },
  },

  computed: {
    containerClasses() {
      const baseClasses = 'flex flex-col items-center justify-center gap-3'

      if (this.fullScreen) {
        return `${baseClasses} fixed inset-0 bg-white/80 backdrop-blur-sm z-50`
      }

      return baseClasses
    },

    spinnerClasses() {
      const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-10 h-10',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24',
      }

      const colorClasses = {
        primary: 'text-primary',
        white: 'text-white',
        gray: 'text-gray-600',
      }

      return `${sizeClasses[this.size]} ${colorClasses[this.color]}`
    },

    textClasses() {
      const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      }

      return `${sizeClasses[this.size]} text-gray-600 font-medium`
    },
  },
}
</script>
