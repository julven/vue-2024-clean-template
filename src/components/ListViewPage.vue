<template>
    <h1>List Person</h1>

    <table>
        <tbody>
            <tr>
                <td>First Name: </td>
                <td>{{ person.fname }}</td>
            </tr>
            <tr>
                <td>Last Name: </td>
                <td>{{ person.lname }}</td>
            </tr>
            <tr>
                <td>Gender: </td>
                <td>{{ person.gender }}</td>
            </tr>
            <tr>
                <td>Birthday: </td>
                <td>{{ person.bday }}</td>
            </tr>
            <tr>
                <td>ID:</td>
                <td>{{ person.id }}</td>
            </tr>
        </tbody>
    </table>
    <router-link :to="`/list/edit/${person.id}`">Edit</router-link> <br/>
    <a href="#/" @click.prevent="router.go(-1)">Back</a>
 </template>
 <script>
    import { useStore } from "vuex"
    import { ref, onMounted } from "vue"
    import { useRoute, useRouter } from "vue-router";
 
     export default {
         name: "ListPerson",
         props: [],
         components: {
 
         },
         setup () {
 
            let store = useStore();
            let person = ref({});
            let route = useRoute();
            let router = useRouter();

            onMounted( () => {
                console.log(route.params)
                getPerson(route.params.id)
            })

            let getPerson = (id) => {

                
                let thePerson = store.state.list.list.filter( x => x.id == id );
                if(thePerson.length != 0) {
                    person.value = {...thePerson[0]};
                    console.log(person.value)
                    return;
                }
                
                router.replace({path: "/list"})
                // console.log(thePerson.length)
            }
 
             return {
                person,
                router
             }
         }
     }
 </script>