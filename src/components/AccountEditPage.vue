<template>
    <h1>Account Edit</h1>
    <table>
        <tbody>
            <tr>
                <td>First Name</td>
                <td><input type="text" :value="account.fname" @input="fieldChange('fname', $event.target.value)"/></td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td><input type="text" :value="account.lname" @input="fieldChange('lname', $event.target.value)"/></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>
                    <input type="radio" name="gender" :checked="account.gender == 'male'" @change="fieldChange('gender', 'male')"/> Male
                    <input type="radio" name="gender" :checked="account.gender == 'female'" @change="fieldChange('gender', 'female')"/> Female
                </td>
            </tr>
            <tr>
                <td>Birthday</td>
                <td><input type="date" :value="account.bday" @input="fieldChange('bday', $event.target.value)"/></td>
            </tr>
        </tbody>
    </table>
    <button @click="updateAccount()">Update</button>
    <button @click="router.push('/account')">Back</button>
</template>

<script>
    import { useStore} from "vuex"
    import { ref, onMounted } from "vue"
    import { reusable } from "./reusables.js"
    import { useRouter } from "vue-router"
    

    export default {

        name: "AccountEditPage",
        props: [],
        components: {

        },
        setup () {

            let store = useStore();
            let account = ref({})
            let router = useRouter();

            onMounted(() => {
                account.value = {...store.state.account}
            })


            let fieldChange = (field, value) => {
                account.value[field] = value
            }

            let updateAccount = () => {

                let { fieldCheck } = reusable
                let copy = {...account.value}
                delete copy.logged

                let valid = fieldCheck(copy)
                console.log({copy, valid})

                if(valid) {
                    store.dispatch("account/action", {action: "updateAccount", payload: copy})
                    router.push("/account")
                    alert("account updated")
                    return;
                }

                alert("all fields must not be empty")

            }

            return {
                account,
                fieldChange,
                updateAccount,
                router
                
            }
        }
    }
</script>

