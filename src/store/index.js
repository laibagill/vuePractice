import { createStore } from "vuex";
import router from '../router'

const store = createStore({
    state: {
        count: 0,
        employee: [
            { name: 'test', pass: '23' },
            { name: 'laiba2', pass: '2223' }
        ],
        email: '',
        password: '',
        loggedIn: false
    },
    mutations: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        updateEmail: (state, payload) => {
            state.email = payload
        },
        updatePassword: (state, payload) => {
            state.password = payload
        },
        addData: (state) => {
            state.employee.push({ name: state.email, pass: state.password });
            state.email = ''
            state.password = ''
            router.push('/login')
        },
        removeElement:(state, payload) => {
           state.employee.pop(payload)
        //    state.employee.contains = state.employee.contains.filter(c => c !== payload)
        },
        loggedIn:(state) =>{
            state.loggedIn = true;
        }
    },
    actions: {
        increment: (context) => {
            context.commit('increment')
        },
        decrement: (context) => {
            context.commit('decrement')
        }
    }
});
export default store;