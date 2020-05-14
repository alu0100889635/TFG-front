<template id="log-container">
     <div class="log-container">
        <!-- <header-logo></header-logo> -->
        <login-form></login-form>


    </div>
</template>

<script>
//import HeaderLogo from "../components/HeaderLogo";
import Login from "../components/Login";
export default {
    name: "LoginContainer",
    template: "#log-container",
    components: {
      /* 'header-logo': HeaderLogo, */
      'login-form': Login
    }
}
</script>

<style>
.log-container {
  width: 400px;
  height: 40vh;
  margin: 200px auto;
  border: 1px solid #3332;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
  padding: 30px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
}
.login-form {
  margin-top: 30px;
}
</style>