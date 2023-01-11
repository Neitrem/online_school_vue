import { createStore } from "vuex";
import axios from 'axios';


export default createStore ({
    state: {
        lessons: [],
        isOpenForm: false
    },
    getters: {
        getById: (state) => (id) => {
            
            return state.lessons.find(e => e.id === parseInt(id));
        },
        getAll(state) {
            return state.lessons;
        }
    },
    mutations: {
        setLessons(state, newData) {
            state.lessons = newData;
        },
        changeVisibility(state) {
			state.isOpenForm = !state.isOpenForm
		}
    },
    actions: {
        getData(context) {
            axios
            .get("/lessons.json")
            .then(response => {
                (context.commit('setLessons', response.data))
            });
          }
    }
})  