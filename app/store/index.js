import Vue from 'vue'
import Vuex from 'vuex'
import request from 'axios'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        logged_in: false,
        current_user: { }
    },
    mutations: {
        setCurrentUser (state, user) {
            state.current_user = user
        }
    },
    actions: {
        nuxtServerInit ({ commit }, {req}) {
            if (req.session.current_user) commit('setCurrentUser', req.session.current_user )
        },
        userLogin( {commit}, {username, password}) {
            request
                .post('/api/login', {username, password})
                .then( res => {
                    commit('setCurrentUser', res.data)

                    return res.data
                })
        },
        userLogout( {commit} ) {
            request
                .post('/api/logout')
                .then( res => {
                    commit('setCurrentUser', {})
                })
        }
    }
})

export default store