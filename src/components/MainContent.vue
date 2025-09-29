<template>
  <main>
    <!-- Featured: Whale Conservation Section -->
    <section id="featured">
      <h2>Featured: Whale Conservation</h2>
      <p>
        Learn about our efforts to protect whale populations worldwide and how you can help.
        Our mission is to raise awareness and support for whale conservation through
        education, advocacy, and community involvement.
      </p>
      <div class="featured-content">
        <img
          src="https://media.istockphoto.com/id/1301664341/photo/humpback-whale-mother-and-calf-swimming-in-clear-blue-ocean.jpg?s=2048x2048&w=is&k=20&c=vLK4jDJFVTVelVJNUxo-l00xgnRVNt_eq5ZbnXjz1vY="
          alt="Whale in the ocean"
        />
        <a href="#donate">Help the Whale</a>
     </div>
    </section>

    <!-- About Us Section -->
    <section id="about">
      <h2>About Us</h2>
      <p>
        We are dedicated to preserving whale species and their habitats through education and
        advocacy. Founded in 2001, our organisation has been at the forefront of whale
        conservation, working with global partners to ensure the survival of these majestic
        creatures.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to protect whales and their habitats through comprehensive conservation
        strategies, public education, and policy advocacy. We aim to reduce the impact of human
        activities on whale populations and ensure a future where whales thrive.
      </p>
      <h3>Our Impact</h3>
      <ul>
        <li>Over 500 whales rescued and rehabilitated</li>
        <li>Numerous awareness campaigns reaching millions worldwide</li>
        <li>Active collaboration with international conservation organisations</li>
      </ul>
    </section>

    <!-- Donate Section -->
    <section id="donate">
      <h2>Donate</h2>
      <p>
        Your contribution helps fund important research and conservation projects. Every donation,
        big or small, makes a difference in protecting whale populations and preserving their
        natural habitats.
      </p>
      <h3>How Your Donation Helps</h3>
      <p>Donations support various initiatives, including:</p>
      <ul>
        <li>Whale tracking and research programmes</li>
        <li>Rescue and rehabilitation of stranded whales</li>
        <li>Public education and outreach programmes</li>
        <li>Advocacy for stronger conservation policies</li>
      </ul>

    <DonationForm @submit-donation="handleDonation"/>

    <div v-if="donationSummary" class="donation-summary">
      <h3>Donation Summary</h3>
      <p>Thank you {{ donationSummary.name }}! An email receipt has been sent to you.</p>
        <p><strong>Email:</strong> {{ donationSummary.email }}</p>
        <p><strong>Amount:</strong> ${{ donationSummary.amount }}</p>
        </div>
</section>

    <!-- Dynamic Contact Form Component -->
    <ContactForm />

  </main>
</template>

<script setup>
// Import the ContactForm & DonationForm component
import ContactForm from './ContactForm.vue';
import { ref } from 'vue';
import DonationForm from './DonationForm.vue';

const donationSummary = ref(null)

function handleDonation(formData) {
  donationSummary.value = formData
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  background-color: #f9f9f9;
}

section {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}


p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #555;
}

ul {
  margin-left: 1.2rem;
  list-style-type: disc;
}

li {
  margin-bottom: 0.5rem;
}

#featured img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

a {
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

/* Form inputs */
input {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.donation-summary {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

</style>