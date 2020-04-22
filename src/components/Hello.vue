<template>
    <div class="hello">
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        props: {
            msg: String
        },
        watch:{
            myInput:function () {
                console.log(this.msg)
            }
        }
    }
</script>

<style scoped>

</style>