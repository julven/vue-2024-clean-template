<template>
    <h1>List</h1>
    Search 
    <input type="text" v-model="search"/>
    <button v-if="search != ''" @click="resetSearch()">x</button>
    <button @click="find()">find</button>
    <button @click="addPerson()">add</button>
    <table>
        <thead>
            <tr>
                
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="x in list" :key="x.id" >
                
                <td>{{x.fname  }}</td>
                <td>{{x.lname  }}</td>
                <td>{{ x.id }}</td>
                <td>
                    <router-link :to="`/list/view/${x.id}`">View</router-link>
                </td>
            </tr>
        </tbody>
    </table>
    
</template>

<script>
    import { useStore } from "vuex"
    import { onMounted, ref } from "vue"
    import { useRouter, useRoute } from "vue-router"
    



    export default {

        name: "ListPage",
        props: [],
        components: {

        },
        setup () {

            let store = useStore()
            let router = useRouter();
            let route = useRoute();
            let search = ref("")
            let list = ref([])

            onMounted ( () => {
                console.log(route.params.search)
                if(route.params.search) {
                    search.value = route.params.search
                    find()
                }
                else resetSearch();
            })

            let addPerson = () => {
                
                router.push({path: "/list/add"})
            }

            let find = () => {
                console.log(search.value)
                if(search.value != "") {
                    list.value = [...store.state.list.list.filter(x => x.fname.includes(search.value) || x.lname.includes(search.value) ) ];
                    router.push("/list/"+search.value)
                }
                
                else resetSearch()
            } 

            let resetSearch = () => {
                search.value = ""
                list.value = [...store.state.list.list]
                router.push("/list")
            }

            return {
               list,
               addPerson,
               search,
               find,
               resetSearch

            }
        }
    }
</script>

