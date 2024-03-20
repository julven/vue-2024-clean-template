<template>
    <h1>Account Login</h1>
    <p>Click the button to login</p>
    <button @click="login()">Login</button>
</template>

<script>
    import { useStore } from "vuex"
    // import { useRouter } from "vue-router"
    import { onMounted } from "vue"

    export default {

        name: "AccountLoginPage",
        props: [],
        components: {

        },
        setup () {  

            onMounted( () => {
                console.log(window.history.state)
            })

            let store = useStore();
            // let router = useRouter();

            let login =  () => {
                 store.dispatch("account/action", {action: "setLogged", payload: true})
                // router.push({path: window.history.state.back.includes("login") ? "/" : window.history.state.back})
                
            }

            return {

                login
            }
        }
    }
</script>

