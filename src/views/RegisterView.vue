<!--
  RegisterView - User registration page
  Refactored with composables and shared components
-->
<template>
  <div class="h-16 w-full flex flex-col justify-center">
    <h1 class="logo mx-10 cursor-pointer">Luminate</h1>
  </div>

  <div class="h-full flex flex-col items-center py-24">
    <section class="h-fit w-full px-4 md:px-0 md:w-[500px] flex flex-col">
      <h1>Create your account</h1>
      <h5 class="mb-8 text-sm md:text-md">
        Already have an account?
        <router-link to="/login" class="text-blue-700 cursor-pointer hover:underline">
          Login
        </router-link>
      </h5>

      <ErrorMessage v-if="error" :message="error" type="error" @dismiss="error = null" />

      <form @submit.prevent="handleRegister">
        <BaseInput
          v-model="userData.first_name"
          type="text"
          label="First Name"
          placeholder="Enter your first name"
          required
          :disabled="loading"
        />

        <BaseInput
          v-model="userData.last_name"
          type="text"
          label="Last Name"
          placeholder="Enter your last name"
          required
          :disabled="loading"
          class="mt-4"
        />

        <div class="mt-4">
          <label for="role" class="block text-sm font-medium text-gray-700 mb-2">
            Role
          </label>
          <select
            id="role"
            v-model="userData.is_manager"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            :disabled="loading"
          >
            <option :value="true">Manager</option>
            <option :value="false">Employee</option>
          </select>
        </div>

        <BaseInput
          v-if="userData.is_manager"
          v-model="userData.name"
          type="text"
          label="Company Name"
          placeholder="Enter your company name"
          :required="userData.is_manager"
          :disabled="loading"
          class="mt-4"
        />

        <BaseInput
          v-model="userData.email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
          :disabled="loading"
          class="mt-4"
        />

        <BaseInput
          v-model="userData.password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
          :disabled="loading"
          class="mt-4"
        />

        <BaseButton
          type="submit"
          variant="primary"
          size="lg"
          :loading="loading"
          :disabled="loading"
          class="mt-5 w-full"
        >
          Register
        </BaseButton>
      </form>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import BaseInput from '@/shared/components/BaseInput.vue'
import BaseButton from '@/shared/components/BaseButton.vue'
import ErrorMessage from '@/shared/components/ErrorMessage.vue'

export default {
  name: 'RegisterView',

  components: {
    BaseInput,
    BaseButton,
    ErrorMessage,
  },

  setup() {
    const { register, loading, error } = useAuth()

    const userData = ref({
      first_name: '',
      last_name: '',
      is_manager: false,
      name: '',
      email: '',
      password: '',
    })

    const handleRegister = async () => {
      try {
        await register(userData.value)
      } catch (err) {
        // Error is handled in the composable
        console.error('Registration failed:', err)
      }
    }

    return {
      userData,
      loading,
      error,
      handleRegister,
    }
  },
}
</script>
