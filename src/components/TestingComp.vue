<template>
    <h1> I m Component </h1>
    <h2>Displaying Prop {{ msg }}</h2>
  
    <ul v-for="item in list" :key="item.id" class="item" >
   <li>{{item.id}}</li>
   <li>{{item.email}}</li>
   <li>{{item.first_name}}</li>
      <img :src="item.avatar"/>

  </ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TestingComp',
    data() {
        return {
            list: [],
        }
    },
    props: {
        msg: String
    },
    async mounted() {

        await axios.get('https://reqres.in/api/users?page=1').then((response) => {
            console.log(response.data.data)
            this.list = response.data.data;
        })

        await axios.post("https://jsonplaceholder.typicode.com/users", {
          name: 'TESTING',
          username: 'TEST',
          email: 'TEST@TEST.COM',
        })
        .then((response) => {
          console.warn("post ",response.data);
        });
    }
}
</script>
<style>
.item{
  display:flex;
 }
 .item img{
  width: 50px;
 }
 .item li{
    display: inline-block;
    width: 196px;
    padding: 3px;
    border: 1px solid black;
 }</style>