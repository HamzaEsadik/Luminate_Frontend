<!--
  LoginView - User authentication page
  Refactored with composables and shared components
-->
<template>
  <div class="h-16 w-full flex flex-col justify-center">
    <h1 class="logo mx-10 cursor-pointer">Luminate</h1>
  </div>

  <div class="h-full flex flex-col items-center py-24">
    <section class="h-fit w-full px-4 md:px-0 md:w-[500px] flex flex-col">
      <h1>Login to your account</h1>
      <h5 class="mb-8 text-sm md:text-md">
        Don't have an account?
        <router-link to="/register" class="text-blue-700 cursor-pointer hover:underline">
          register
        </router-link>
      </h5>

      <ErrorMessage v-if="error" :message="error" type="error" @dismiss="error = null" />

      <form @submit.prevent="handleLogin">
        <BaseInput
          v-model="credentials.email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
          :disabled="loading"
        />

        <BaseInput
          v-model="credentials.password"
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
          Login
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
  name: 'LoginView',

  components: {
    BaseInput,
    BaseButton,
    ErrorMessage,
  },

  setup() {
    const { login, loading, error } = useAuth()

    const credentials = ref({
      email: '',
      password: '',
    })

    const handleLogin = async () => {
      try {
        await login(credentials.value)
      } catch (err) {
        // Error is handled in the composable
        console.error('Login failed:', err)
      }
    }

    return {
      credentials,
      loading,
      error,
      handleLogin,
    }
  },
}
</script>
