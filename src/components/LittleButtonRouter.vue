<template>
  <div class="littleButtonRouter">
      <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'LittleButtonRouter',
  props: {
      msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .littleButtonRouter {
    background: white;
    width: 170px;
    height: 45px;
    border: 1px solid grey;
    border-left-color: white;/* 
    margin: auto 502px;
    display:flex;
    justify-content: center;  */
    }
</style>
