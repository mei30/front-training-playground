<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar" :style="{ width: `${questionsAnswered / questions.length * 100}%` }"></div>
      <div class="status">{{ questionsAnswered }} out of {{ questions.length }} questions answered</div>
    </div>
    <TransitionGroup name="fade">
      <div v-for="(question, index) in questions" :key="index" class="single-question"
        v-show="questionsAnswered === index">
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div v-for="answer in question.answers" :key="index" class="answer" @click="onAnswerClicked(answer.is_correct)">
            {{ answer.text }}</div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script>
export default {
  props: {
    questions: Array,
    questionsAnswered: Number
  },
  emits: ['question-answered'],
  methods: {
    onAnswerClicked(is_correct) {
      this.$emit('question-answered', is_correct)
    }
  }
}
</script>