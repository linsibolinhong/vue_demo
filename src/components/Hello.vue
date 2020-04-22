<template>
    <div class="hello">
        <p>{{msg}}</p>
        <p v-html="rawHtml">fff</p>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        props: {
            msg: String,
            rawHtml:String,
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