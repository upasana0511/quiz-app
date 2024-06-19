<template>
  <div class="quiz">
    <div v-if="!showResults">
      <transition name="fade" mode="out-in">
        <QuestionComponent
          :key="currentQuestion.id"
          :question="currentQuestion"
          v-model="currentAnswer"
        />
      </transition>
      <div class="timer">
        <svg class="progress-ring" width="120" height="120">
          <circle
            class="progress-ring__circle"
            :class="circleColor"
            stroke-width="4"
            fill="transparent"
            r="54"
            cx="60"
            cy="60"
          />
        </svg>
        <div class="time-left">{{ timeLeft }}s</div>
      </div>
      <div class="button-container">
        <button @click="prevQuestion" :disabled="currentQuestionIndex === 0" class="nav-button">Previous</button>
        <button v-if="currentQuestionIndex < questions.length - 1" @click="nextQuestion" class="nav-button">Next</button>
        <button v-if="currentQuestionIndex === questions.length - 1" @click="submitQuiz" class="submit-button">Submit Quiz</button>
      </div>
    </div>
    <div v-if="showResults">
      <ResultComponent :score="score" :totalQuestions="questions.length" />
      <div v-if="incorrectAnswers.length">
        <h3>Questions you answered incorrectly:</h3>
        <ul>
          <li v-for="(question, index) in incorrectAnswers" :key="index">
            {{ question.text }} - Correct Answer: {{ question.correctAnswer }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionComponent from '../components/QuestionComponent.vue';
import ResultComponent from '../components/ResultComponent.vue';

export default {
  name: 'QuizView',
  components: {
    QuestionComponent,
    ResultComponent
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          text: '1. What is the capital of France?',
          answers: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 'Paris'
        },
        {
          id: 2,
          text: '2. What is 2 + 2?',
          answers: ['3', '4', '5', '6'],
          correctAnswer: '4'
        },
        {
          id: 3,
          text: '3. What is the largest planet in our solar system?',
          answers: ['Saturn', 'Neptune', 'Earth', 'Jupiter'],
          correctAnswer: 'Jupiter'
        },
        {
          id: 4,
          text: '4. Who wrote the famous play "Romeo and Juliet"?',
          answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
          correctAnswer: 'William Shakespeare'
        },
        {
          id: 5,
          text: '5. What is the capital of Italy?',
          answers: ['Rome', 'Paris', 'Berlin', 'Madrid'],
          correctAnswer: 'Rome'
        },
        {
          id: 6,
          text: '6. Who painted the Mona Lisa?',
          answers: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
          correctAnswer: 'Leonardo da Vinci'
        },
        {
          id: 7,
          text: '7. What is the chemical symbol for water?',
          answers: ['CO2', 'NaCl', 'H2O', 'O2'],
          correctAnswer: 'H2O'
        },
        {
          id: 8,
          text: '8. Who is the author of "To Kill a Mockingbird"?',
          answers: ['Harper Lee', 'J.K. Rowling', 'George Orwell', 'F. Scott Fitzgerald'],
          correctAnswer: 'Harper Lee'
        },
        {
          id: 9,
          text: '9. What year did the Titanic sink?',
          answers: ['1907', '1921', '1912', '1915'],
          correctAnswer: '1912'
        },
        {
          id: 10,
          text: '10. What is the tallest mountain in the world?',
          answers: ['K2', 'Kangchenjunga', 'Lhotse', 'Mount Everest'],
          correctAnswer: 'Mount Everest'
        }
      ],
      currentQuestionIndex: 0,
      answers: Array(10).fill(''),
      showResults: false,
      score: 0,
      incorrectAnswers: [],
      timeLeft: 10,
      timer: null
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    currentAnswer: {
      get() {
        return this.answers[this.currentQuestionIndex];
      },
      set(value) {
        this.answers[this.currentQuestionIndex] = value;
      }
    },
    circleColor() {
      if (this.timeLeft > 7.5) {
        return 'green';
      } else if (this.timeLeft > 5) {
        return 'yellow';
      } else if (this.timeLeft > 2.5) {
        return 'orange';
      } else {
        return 'red';
      }
    }
  },
  methods: {
    startTimer() {
      this.timeLeft = 10;
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.resetCircleColor();
      this.animateProgress(10);
      this.timer = setInterval(() => {
        this.timeLeft--;
        this.updateCircleColor();
        if (this.timeLeft <= 0) {
          this.nextQuestion();
        }
      }, 1000);
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.startTimer();
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.startTimer();
      } else {
        this.submitQuiz();
      }
    },
    submitQuiz() {
      clearInterval(this.timer);
      this.score = this.answers.reduce((score, answer, index) => {
        if (answer === this.questions[index].correctAnswer) {
          score++;
        } else {
          this.incorrectAnswers.push(this.questions[index]);
        }
        return score;
      }, 0);
      this.showResults = true;
    },
    animateProgress(duration) {
      const circle = this.$el.querySelector('.progress-ring__circle');
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;

      const offset = circumference - (circumference / duration) * this.timeLeft;
      circle.style.transition = `stroke-dashoffset ${duration}s linear`;
      circle.style.strokeDashoffset = offset;
    },
    resetCircleColor() {
      const circle = this.$el.querySelector('.progress-ring__circle');
      circle.style.stroke = 'green';
    },
    updateCircleColor() {
      const circle = this.$el.querySelector('.progress-ring__circle');
      if (this.timeLeft > 7.5) {
        circle.style.stroke = 'green';
      } else if (this.timeLeft > 5) {
        circle.style.stroke = 'yellow';
      } else if (this.timeLeft > 2.5) {
        circle.style.stroke = 'orange';
      } else {
        circle.style.stroke = 'red';
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #0261dd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.nav-button,
.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover,
.submit-button:hover {
  background-color: #0056b3;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.timer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 120px;
  height: 120px;
  margin: 20px auto;
}

.progress-ring__circle {
  transition: stroke-dashoffset 1s linear, stroke 1s linear;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.time-left {
  position: absolute;
  font-size: 18px;
  color: white;
}

.green {
  stroke: green;
}

.yellow {
  stroke: yellow;
}

.orange {
  stroke: orange;
}

.red {
  stroke: red;
}

li {
  list-style: none;
}
</style>
