<template>
  <div class="quiz">
    <QuestionComponent
      v-for="(question, index) in questions"
      :key="index"
      :question="question"
      v-model="answers[index]"
    />
    <button @click="submitQuiz" class="submit-button">Submit Quiz</button>
    <ResultComponent v-if="showResults" :score="score" />
  </div>
</template>

<script>
import QuestionComponent from './QuestionComponent.vue';
import ResultComponent from './ResultComponent.vue';

export default {
  name: 'QuizComponent',
  components: {
    QuestionComponent,
    ResultComponent
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          text: 'What is the capital of France?',
          answers: ['Paris', 'London', 'Berlin', 'Madrid'],
          correctAnswer: 'Paris'
        },
        {
          id: 2,
          text: 'What is 2 + 2?',
          answers: ['3', '4', '5', '6'],
          correctAnswer: '4'
        }
      ],
      answers: Array(2).fill(''),
      showResults: false,
      score: 0
    };
  },
  methods: {
    submitQuiz() {
      this.score = this.answers.reduce((score, answer, index) => {
        if (answer === this.questions[index].correctAnswer) {
          score++;
        }
        return score;
      },0);
      this.showResults = true;
    }
  }
};
</script>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #574de8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.question-container {
  margin-bottom: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
