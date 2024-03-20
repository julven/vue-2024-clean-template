<template>
    <h1>Edit Person</h1>
    <FormComponent />
    <button @click="updatePerson()">Update</button>
    <button @click="router.go(-1)">Back</button>

 
</template>

<script>
    import FormComponent from "./FormComponent.vue"
    import { useRouter, useRoute } from "vue-router"
    import { reusable} from "./reusables.js"
    import { useStore} from "vuex"
    import { onMounted, } from "vue"
    
    export default {
        

        name: "ListEditPage",
        props: [],
        components: {
            FormComponent
        },
        setup () {

            let router = useRouter();
            let route = useRoute()
            let store = useStore()

            onMounted(() => {
                let result = store.state.list.list.filter(x => x.id ==route.params.id)
                console.log(result[0])
                if(result.length != 0) {
                    store.dispatch( "person/action", {action: "setPerson", payload: result[0]})
                    console.log(store.state.person)
                    return;
                }

                router.replace({path: "/list"});
            })

            let updatePerson = async () => {

                let {fieldCheck} = reusable;

                let valid = fieldCheck(store.state.person)

                console.log(valid)
                
                if(valid) {
                    await store.dispatch("list/action", {action: "updateList", payload: store.state.person})
                    alert("person updated")
                    router.go(-1);
                    return;
                }

                alert("all fields must not be empty")


            }

            return {
                FormComponent,
                router,
                updatePerson
                
            }
        }
    }
</script>

