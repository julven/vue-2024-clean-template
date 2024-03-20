<template>
    <table>
        <tbody>
            <tr>
                <td>First Name</td>
                <td><input :value="person.fname" @input="updateField('fname', $event.target.value)"/></td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td><input  :value="person.lname" @input="updateField('lname', $event.target.value)"/></td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>
                    <input type="radio" name="gender" value="male" :checked="person.gender == 'male'" @change="updateField('gender', $event.target.value)"/> Male
                    <input type="radio" name="gender" value="female" :checked="person.gender == 'female'" @change="updateField('gender', $event.target.value)"/> Female
                </td>
            </tr>
            <tr>
                <td>Birthday</td>
                <td><input type="date" :value="person.bday" @input="updateField('bday', $event.target.value)"/></td>
            </tr>
        </tbody>
    </table>

</template>

<script>

    import { useStore } from "vuex"
    import { onMounted } from "vue"




    export default {

        name: "FormComponent",
        props: [],
        components: {

        },
        setup () {

            let store = useStore();
          


            onMounted( () => {
                
               
            })

            let updateField = (field, value) => {
                // console.log(field, value)
                store.dispatch("person/action", {action: "updatePerson", payload:{field, value}})
            }

            return {
                person: store.state.person,
                updateField,
                
            }
        }
    }
</script>

