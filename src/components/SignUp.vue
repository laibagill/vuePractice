<template>
   <h2> Signup Page </h2>
   <form>
    <h2>{{ email }}</h2> <h3>{{ password }}</h3>
    <input type="text" placeholder="email" :value="email"  v-on:input="updateEmail" ref="input"/>
    <input type="password"  placeholder="password" :value="password" v-on:input="updatePassword"/>
    <button v-on:click.prevent="addData">SignUp</button>
   </form>
</template>
<script>

import {  mapState,mapMutations } from "vuex";

export default{
    name: 'SignUp',
    computed:{
        ...mapState([
            'email',
            'password',
            'items'
        ])
    },
    mounted(){
     this.$refs.input.focus()
    //  this.$refs.input.$el.classList.add('testClass')
    },
    methods:{
        ...mapMutations([
            // 'updateEmail',
            // 'updatePassword',
            'addData'
        ]),
        updateEmail(e){
            this.$store.commit('updateEmail',e.target.value)
        },
        updatePassword(e){
            this.$store.commit('updatePassword', e.target.value)
        },
        // addData(){
        //     this.$store.commit('addData');
        // }
    }

}
</script>
<style>
.testClass{
    color:red;
}
</style>