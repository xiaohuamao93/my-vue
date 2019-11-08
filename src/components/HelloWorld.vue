<template>
  <div class="hello">
    <div class="test">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App 33'
    };
  },
  created () {
    this.axios.get('http://118.190.107.204:3000/users')
      .then(res => {
        this.mesg = res.data;
      })
      .catch(err => {
        console.log('--err', err);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test {
  width: 7.5rem;
  height: 3rem;
  /*background: red;*/
}
</style>
