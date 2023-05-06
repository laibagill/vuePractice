<template>
    <h2>Login</h2>
    <form>
        <label>Enter Usernamme</label>
        <input placeholder="Enter User" v-model="input.user" />

        <label>Enter Password</label>
        <input placeholder="Enter Password" v-model="input.pass" />
        <button type="submit" v-on:click.prevent="login()"> Login</button>
    </form>
</template>
<script>
import { mapState } from "vuex";

export default {

    name: 'LoginPage',
    data() {
        return {
            input: {
                user: "",
                pass: ""
            }
        }
    },
    computed: {
        ...mapState([
            'count',
            'employee'
        ])
    },
    methods: {
        login() {
            console.log("here");
            if (this.input.user != "" && this.input.pass != "") {
                this.employee.forEach(element => {
                    if (element.name == this.input.user && element.pass == this.input.pass) {
                        console.log("it mtched");
                        this.$router.push({ name: 'HomePage' })
                        this.$store.commit('loggedIn');
                        return true;
                    }
                });
            }
        }
    }
}
</script>