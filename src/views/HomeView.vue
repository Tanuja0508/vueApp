<template>
  <div class="home">
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/Login.vue'

export default {
  name: 'HomeView',
  components: {
    LoginForm
  }
}
</script>
