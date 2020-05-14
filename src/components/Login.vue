<template id="login-form">
      <div class="login-form">
        <h1>Inicia Sesión</h1>
        <b-alert v-model="showAlert" variant="danger" dismissible>Nombre de usuario o contraseña incorrecto</b-alert>
        <div class="form">
          <form action="" method="post">
              <label class="separation" for="user">Nombre usuario * :</label>
              <input type="text" v-model="login.nickname" class="form-control" id="user" required="true" />
              <label class="separation" for="usrpasswd">Contraseña * :</label>
              <input type="password" v-model="login.password" class="form-control" id="usrpasswd" required="true" />
            <br>
              <b-button id="boton" v-on:click="checkLogin()">Iniciar sesión</b-button>
        </form>
        </div>
     </div>
</template>

    <script>
        export default {
            name: "Login",
            template: "#login-form",
            components: {
                
            },
            data() {
              return {
                login: {
                  nickname: "",
                  password: "",
                },
                showAlert: false,
                textoI: "Inicia Sesión"
              };
            },
            methods: {
              showRedAlert(){
                this.showAlert=true;
              },
              async getAnswers(){
                await this.$store.dispatch("getResponses");
                const respuestas = this.$store.getters.getAnswers;
                const subjectId = { ...respuestas }.subject_id;
                await this.$store.dispatch("getSubject", subjectId);
            },
            toPhonecall(){
                this.$router.push({path:'/phonecall'});
            },
              async checkLogin() {
                  if(this.login.nickname == "alu0100"){
                    await this.getAnswers();
                    this.toPhonecall();
                  }
                  else{
                    this.showRedAlert();
                  }
              }
            }
        }
    </script>
    <style>
.login-form {
  width: 400px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 17px;
}

.form {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
}


  .form-control {
  width: 285px;
  height: 20px;
  border-radius: 5px;
  background-color: #fffa;
  margin-top: 10px;
  border: none;
}

#boton {
        width: 200px;
        background: #4cece3;
        color: black;
        border-color: transparent;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
}

.separation {
  margin-top: 10px;
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                