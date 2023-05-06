<template>
    <h2>Home</h2>
    <h4>Counter: {{ count }}</h4>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
    <div v-if="loggedIn">
        <h3>Data</h3>
        <ul v-for="item in employee" :key="item" class="listStyle">
            <li>{{ item.name }}</li>
            <li>{{ item.pass }}</li>
            <button v-on:click="removeElement(item)">remove</button>
        </ul>
    </div>
    <div v-else>
        <h3>Please Loggin To Retrieve Data</h3>
    </div>

    <div>
    <TestingComp msg="Hellow" />
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import TestingComp from "./TestingComp.vue";

export default ({
    name: "HomePage",
    components: {
        TestingComp
    },
    computed: {
        ...mapState([
            "count",
            "employee",
            "loggedIn"
        ]),
        ...mapGetters([])
    },
    watch: {
        count(newcount, oldcount) {
            console.log("new: ", newcount, "old: ", oldcount);
        }
    },
    updated() {
        console.log("DOM is being updated");
    },
    methods: {
        ...mapMutations([
            "removeElement"
        ]),
        ...mapActions([
            "increment",
            "decrement",
        ]),
        // removeElement: function (item) {
        //     this.$store.commit('removeElement', item);
        //     console.log("this is", item);
        // }
    },
})
</script>
<style>
.listStyle li {
    display: inline-block;
    margin: 0 10px;
}
</style>