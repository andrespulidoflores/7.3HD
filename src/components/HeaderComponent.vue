<template>
  <header>
    <h1>Save the Whales</h1>
    <a href="#donate">Donate Now</a>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between; 
  align-items: center;           
  background-color: #2c3e50;
  padding: 1rem 2rem;
}

/* Title styling */
h1 {
  color: white;
  text-align: center; 
  flex: 1;            
  margin: 0;
}

/* Donate button styling */
a {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
}

a:hover {
  background-color: #45a049;
}
</style>
