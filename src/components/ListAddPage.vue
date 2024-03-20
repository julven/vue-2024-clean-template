<template>
    <h1>Add Person</h1>
    <FormComponent />
    <button @click="addPerson()">Add</button> 
    <button @click="router.go(-1)">Back</button> 
</template>

<script>
    import FormComponent from "./FormComponent.vue"
    import { useRouter } from "vue-router"
    import { useStore} from "vuex"
    import { reusable } from "./reusables.js"

    export default {

        

        name: "ListAddPage",
        props: [],
        components: {
            FormComponent
        },
        setup () {

            let router = useRouter()
            let store = useStore()

            let addPerson = () => {

                let {fieldCheck} = reusable

                let check = {...store.state.person}
                delete check.id

                let valid = fieldCheck(check)

                if(valid) {
                    store.dispatch("list/action", {action: "addToList", payload: store.state.person})
                    router.go(-1)
                    alert("person added")
                    return
                }

                alert("all fields must not be empty")
            }

            return {
                router,
                FormComponent,
                addPerson

            }
        }
    }
</script>

