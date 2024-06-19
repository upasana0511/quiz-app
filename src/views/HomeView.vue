<template>
  <div class="home">
    <div class="background-image"></div> <!-- Add a background image -->
    <div class="content">
      <h1 class="title">Welcome to the Quiz App</h1>
      <router-link to="/quiz">
        <button class="start-quiz-button">Start Quiz</button>
      </router-link>
      <footer class="footer">Created by Upasana Bhatt</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/bg.jpg'); /* Replace with the path to your background image */
  background-size: cover;
  background-position: center;
  filter: brightness(0.5); /* Add a semi-transparent overlay */
}

.content {
  position: relative;
  z-index: 1; /* Ensure content appears above the background image */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.title {
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
}

.start-quiz-button {
  margin-top: 40px;
  padding: 15px 30px;
  font-size: 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-quiz-button:hover {
  background-color: #0056b3;
}

.footer {
  margin-top: 20px;
  font-size: 18px;
  color: #fff;
  text-align: center;
}
</style>
