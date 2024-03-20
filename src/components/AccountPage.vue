<template>
    <h1>Account</h1>

    <table>
        <tbody>
            <tr>
                <td>First Name</td>
                <td>: {{ account.fname }}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>: {{ account.lname }}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>: {{ account.gender }}</td>
            </tr>
            <tr>
                <td>Birthday</td>
                <td>: {{ account.bday }}</td>
            </tr>
        </tbody>
    </table>
    <button @click="router.push({path: `/account/edit`})">Edit</button>
    <button @click="logout()">Logout</button>
</template>

<script>
    import { useStore } from "vuex"
    import { useRouter } from "vue-router"


    export default {

        name: "AccountPage",
        props: [],
        components: {

        },
        setup () {

            let store = useStore()
            let router = useRouter()

            let logout = () => {
                store.dispatch("account/action", {action: "setLogged", payload: false})
                // router.replace({path: "/account/login"})
            }

            return {
                account: store.state.account,
                router,
                logout
                
            }
        }
    }
</script>

