<!--
  BaseModal Component
  Reusable modal/dialog component
-->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="handleBackdropClick"
      >
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/85 transition-opacity"></div>

        <!-- Modal content -->
        <div class="flex min-h-screen items-center justify-center p-4">
          <div
            :class="modalClasses"
            class="relative z-50 w-full bg-secondary-light rounded-xl shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <!-- Close button -->
            <button
              v-if="showClose"
              @click="close"
              class="absolute right-6 top-6 z-30 text-slate-500 hover:text-slate-700 transition-colors"
              aria-label="Close"
            >
              <svg
                class="w-5 h-5 stroke-current stroke-2"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <!-- Title -->
            <div v-if="$slots.title || title" class="px-8 pt-8 pb-4">
              <h2 class="text-2xl font-bold text-gray-900">
                <slot name="title">{{ title }}</slot>
              </h2>
            </div>

            <!-- Content -->
            <div class="px-8 pb-8">
              <slot></slot>
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" class="px-8 pb-8 pt-4 border-t border-gray-200">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'BaseModal',

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['update:modelValue', 'close'],

  computed: {
    modalClasses() {
      const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
      }
      return sizeClasses[this.size]
    },
  },

  methods: {
    close() {
      this.$emit('update:modelValue', false)
      this.$emit('close')
    },

    handleBackdropClick() {
      if (this.closeOnBackdrop) {
        this.close()
      }
    },
  },

  watch: {
    modelValue(newVal) {
      // Prevent body scroll when modal is open
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  },

  beforeUnmount() {
    // Clean up body overflow style
    document.body.style.overflow = ''
  },
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
