import { createStore } from 'vuex'

const randID = () => Math.random().toString(36).substring(7);

const vuexAccount = {
    namespaced: true,
    state: {
        fname: "julven",
        lname: "condor",
        bday: "1990-07-07",
        gender: "male",
        logged: false,
    },
    getters: {
        state: state => {
            return state
        }
    },
    mutations: {
        updateAccount: (state, payload) => {

            Object.keys(state).forEach( x => {
                if( x in payload) {
                    state[x] = payload[x]
                }
                
            })
        },
        setLogged: (state, payload) => {
            state.logged = payload
        }
    },
    actions: {
        action: ({commit}, {action, payload}) => {
            return new Promise( resolve => {
                commit(action, payload)
                resolve()
            })
        }
    }
}

const vuexPerson = {
    namespaced: true,
    state: {
        fname: "",
        lname: "",
        bday: "",
        gender: "",
        id: "",
    },
    getters: {
        state: state => {
            return state;
        }
    },
    mutations: {
        setPerson: (state, payload) => {
          
            Object.keys(state).forEach(x => {
                if(x in state) {
                    // console.log(state[x], payload[x])
                    state[x] = payload[x]
                }
                
            })

        },

        updatePerson: (state, {field, value}) => {

            state [field] = value;
            // console.log({state})
        },
        resetPerson: (state) => {

            Object.keys(state).forEach( x => state[x] = "")
        }
    },
    actions: {
        action: ({commit}, {action, payload}) => {
            return  new Promise (resolve => {
                // console.log(action, payload)
                commit(action, payload)
                resolve();
            })
        }
    }

}

const vuexList = {
    namespaced: true,
    state: {
        list: [
            {fname: "john", lname: "smith", bday: "2000-01-01", gender: "male", id: randID()},
            {fname: "jane", lname: "doe", bday: "2002-02-02", gender: "female", id: randID()},
            {fname: "julven", lname: "condor", bday: "1990-07-07", gender: "male", id: randID()},
        ]
    },
    getters: {
        state: (state) => {

            return state
        }
    },
    mutations: {
        addToList: (state, payload) => {
            payload["id"] = randID();
            state.list = [...state.list, payload]

        },
        updateList: (state, payload) => {

            // console.log(payload)

            state.list.forEach( (x, i) => {
                if(x.id == payload.id) {
                    state.list[i] = payload
                }
            })

        },
        deleteFromList: (state, payload) => {

           state.list = state.list.filter( x => x.id !== payload.id)

        }
    },
    actions: {
        action: ({ commit }, {action, payload}) => {
            return new Promise ( resolve => {
                commit( action, payload );
                setTimeout(() => {
                    resolve()
                }, (1000));
                
            })
        } 
    }
}


const store = createStore({
    modules: {
        list: vuexList,
        person: vuexPerson,
        account: vuexAccount
    }
})

export default store;