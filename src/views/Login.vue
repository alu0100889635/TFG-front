<template>
    <div class="login">
        <b-button v-on:click="toPhonecall()">Click here</b-button>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  methods: {
      async getAnswers(){
        await this.$store.dispatch("getResponses");
        const respuestas = this.$store.getters.getAnswers;
        const subjectId = { ...respuestas }.subject_id;
        await this.$store.dispatch("getSubject", subjectId);
      },
      toPhonecall(){
          this.$router.push({path:'/phonecall'});
      }
  },
  async mounted(){
      await this.getAnswers();
  }
}
</script>

<style>
    .phonecall {
        margin: 100px auto;
        width: 1200px;
    }
</style>