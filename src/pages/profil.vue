<template>
    <div>
        <h1>profil</h1>
        <button-component  buttonTitle="Ciao a tutti" @marcoEvent="handleEvent"/>
    </div>

</template>

<script>
    import buttonComponent from '../components/buttonComponent'
    export default {
        name:"Profil",
        components: {
            buttonComponent
        },
        methods: {
            handleEvent (message) {
                console.log("Recu", message)
            }
        }
    }
</script>

<style>

</style>