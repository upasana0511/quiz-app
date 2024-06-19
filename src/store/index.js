import { createStore } from 'vuex';

export default createStore({
  state: {
    // Define your state here
    // For example:
    quizQuestions: [
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
    userAnswers: Array(2).fill(''), // Array to store user's answers
    showResults: false,
    score: 0
  },
  mutations: {
    // Define your mutations here
    // For example:
    setUserAnswer(state, payload) {
      state.userAnswers[payload.questionIndex] = payload.answer;
    },
    setShowResults(state, value) {
      state.showResults = value;
    },
    setScore(state, value) {
      state.score = value;
    }
  },
  actions: {
    // Define your actions here
    // For example:
    submitQuiz({ state, commit }) {
      let score = state.userAnswers.reduce((score, answer, index) => {
        if (answer === state.quizQuestions[index].correctAnswer) {
          score++;
        }
        return score;
      }, 0);
      commit('setScore', score);
      commit('setShowResults', true);
    }
  },
  getters: {
    // Define your getters here
    // For example:
    getQuestionById: (state) => (id) => {
      return state.quizQuestions.find(question => question.id === id);
    }
  }
});
