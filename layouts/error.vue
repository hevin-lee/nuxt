<template>
  <div class="error">
    <div class="error-content">
      <h1 class="error-code">{{ error.statusCode }}</h1>
      <div class="error-wrapper-message">
        <h2 class="error-message">{{ error.message }}</h2>
      </div>
      <p>
        <nuxt-link class="error-link" to="/">Back to the home page</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error']
  }
</script>

<style scoped>
  .error {
    position: relative;
    min-height: 10em;
    width: 100%;
    overflow: hidden;
    text-align: center;
    padding: 2em 0;
    .error-content {
      .error-code {
        font-size: 9rem;
      }
    }
  }
</style>
