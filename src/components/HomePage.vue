<template>
   <h1>Home</h1>
   <table>
        <tbody>
            <tr>
                <td>Account name</td>
                <td>: {{ account.fname+" "+account.lname }}</td>
                <td><router-link to="/account">view</router-link></td>
            </tr>
            <tr>
                <td>Male total</td>
                <td>: {{  list.male }}</td>
                
            </tr>
            <tr>
                <td>Female total</td>
                <td>: {{ list.female }}</td>
                
            </tr>
            <tr>
                <td>List total</td>
                <td>: {{ list.total }} <router-link to="/list">view</router-link></td>
                
            </tr>
        </tbody>
   </table>
</template>
<script>
    import {useStore} from "vuex"
    import { computed} from "vue"

    export default {
        name: "HomePage",
        props: [],
        components: {

        },
        setup () {

            let store = useStore();

            return {
                account: store.state.account,
                list: computed(() => {
                    let list = store.state.list.list
                    let male = list.filter(x => x.gender == "male").length
                    let female = list.filter(x => x.gender == "female").length
                    let total = list.length

                    return {male, female, total}
                })
            }
        }
    }
</script>