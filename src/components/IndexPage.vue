<template>
     <NavbarComponent />
    <router-view></router-view>

</template>
<script>
import  NavbarComponent from "./NavbarComponent.vue"
import { useStore } from "vuex"
import { watch, ref } from "vue"
import { useRouter } from "vue-router"

export default {

    name: "IndexPage",
    props: [],
    components: {
        NavbarComponent
    },  
    setup (){
        let store = useStore()
        let currentRoute = ref(null)
        let router = useRouter()
        let protectedRoutes = ["LIST_EDIT", "LIST_ADD", "ACCOUNT_EDIT", "ACCOUNT"];
        let loginRoute = "ACCOUNT_LOGIN";

        router.beforeEach(( to, from, next) => {

            if(protectedRoutes.includes(to.name) && !store.state.account.logged) {
                next({path: "/account/login"})
                return;
            }
            
            currentRoute.value = to.name
            console.log(currentRoute.value)
            next()
        })

        watch( () => store.state.account.logged, (newVal, oldVal) => {

            let {current, back} = window.history.state
            console.log(newVal, oldVal, currentRoute.value, back, current)

            if(newVal && currentRoute.value == loginRoute) {
                if(back != null) router.replace(back.includes("/account/login") ? "/" : back)
                else router.replace("/")
            }

            if(!newVal) {
                router.replace("/account/login")
            }

        })


        return {
            NavbarComponent
        }
    }


}

</script>