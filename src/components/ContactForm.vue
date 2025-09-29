<template>
  <section id="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to get involved, please reach out to us. We would love to hear from you!</p>

    <form @submit.prevent="handleSubmit">
      <!-- Input fields for name, email, and message -->
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="message" rows="4" required></textarea>

      <!-- Submit button -->
      <button type="submit">Send Message</button>
    </form>

    <!-- Confirmation message -->
    <p v-show="showConfirmation" class="confirmation">
      Thank you, {{ nameSubmitted }}! We have received your message and will get back to you shortly.
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const showConfirmation = ref(false);
const nameSubmitted = ref('');

function handleSubmit() {
  //storing submitted name for confirmation
  nameSubmitted.value = name.value;

  //confirmation message
  showConfirmation.value = true;

  //clear form fields
  name.value = '';
  email.value = '';
  message.value = '';
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

input, textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  background-color: #452ae0ff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: rgba(73, 27, 159, 1);
}

.confirmation {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}

</style>