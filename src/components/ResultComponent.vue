<template>
    <div class="result">
      <h2>Your Score: {{ score }} / 10</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultComponent',
    props: {
      score: {
        type: Number,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .result {
    text-align: center;
  }
  </style>
  