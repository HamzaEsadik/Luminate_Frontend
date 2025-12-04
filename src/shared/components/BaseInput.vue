<!--
  BaseInput Component
  Reusable input component with validation
-->
<template>
  <div class="w-full">
    <label v-if="label" :for="inputId" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>

    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :class="inputClasses"
      @input="handleInput"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />

    <p v-if="error" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>

    <p v-if="hint && !error" class="mt-1 text-sm text-gray-500">
      {{ hint }}
    </p>
  </div>
</template>

<script>
let idCounter = 0

export default {
  name: 'BaseInput',

  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) =>
        [
          'text',
          'email',
          'password',
          'number',
          'tel',
          'url',
          'search',
          'date',
          'time',
          'datetime-local',
          'month',
          'week',
        ].includes(value),
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue', 'input', 'blur', 'focus'],

  data() {
    return {
      inputId: `input-${++idCounter}`,
    }
  },

  computed: {
    inputClasses() {
      const baseClasses =
        'w-full px-4 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1'

      let stateClasses = 'border-gray-300 focus:border-primary focus:ring-primary'

      if (this.error) {
        stateClasses = 'border-red-500 focus:border-red-500 focus:ring-red-500'
      }

      if (this.disabled) {
        stateClasses += ' bg-gray-100 cursor-not-allowed opacity-60'
      }

      if (this.readonly) {
        stateClasses += ' bg-gray-50'
      }

      return `${baseClasses} ${stateClasses}`
    },
  },

  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value)
      this.$emit('input', event)
    },
  },
}
</script>
