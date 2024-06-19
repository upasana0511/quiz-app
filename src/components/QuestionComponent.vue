<template>
  <div class="question">
    <h2>{{ question.text }}</h2>
    <ul class="answer-list">
      <li v-for="(answer, index) in question.answers" :key="index">
        <label>
          <input type="radio" :value="answer" v-model="selectedAnswer" />
          <span>{{ getLetter(index) }}. {{ answer }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuestionComponent',
  props: {
    question: {
      type: Object,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedAnswer: this.modelValue
    };
  },
  watch: {
    selectedAnswer(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  },
  methods: {
    getLetter(index) {
      return String.fromCharCode(97 + index); // 'a' + index
    }
  }
};
</script>

<style scoped>
.question {
  margin-bottom: 20px;
}

.answer-list {
  list-style: none;
  padding: 0;
}

.answer-list li {
  margin-bottom: 10px;
}

label {
  cursor: pointer;
}

input[type="radio"] {
  margin-right: 10px;
}
</style>
