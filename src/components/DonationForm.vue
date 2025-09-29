<template>

  <h3>Donation Form</h3>
<form class="donation-form" @submit.prevent="submitForm">
  <div>
    <label for='name'>Name:</label>
    <input id="name" v-model="name" type="text" placeholder="Your Name" required />
  </div>

  <div>
      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" placeholder="you@example.com" required />
    </div>

    <div>
      <label for="amount">Donation Amount ($):</label>
      <input id="amount" v-model.number="amount" type="number" placeholder="50" min="1" required />
    </div>

 <button type="submit">Donate Now</button>
</form>
</template>

<script setup>
import { ref} from 'vue';

const name = ref('')
const email = ref('')
const amount = ref(null)

const emit = defineEmits(['submit-donation'])

// Method to handle form submission

function submitForm() {
  emit('submit-donation', {
    name: name.value,
    email: email.value,
    amount: amount.value
  })
}
</script>

<style scoped>

.donation-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  background: #f1f1f1;
  border-radius: 8px;
}

.donation-form label {
  font-weight: bold;
}

.donation-form input {
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>