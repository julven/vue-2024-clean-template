<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/list">List</router-link></li>
        <li><router-link to="/account">Account</router-link></li>

        
    </ul>
</template>

<script>
  

    export default {

        name: "NavbarComponent",
        props: [],
        components: {

        },
        setup () {

            return {
            
                
            }
        }
    }
</script>

