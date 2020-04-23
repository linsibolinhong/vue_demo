<template>
    <div class="hello">
        <p v-if="seen">{{msg}}</p>
        <p v-html='rawHtml'></p>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        props: {
            msg: String,
            rawHtml:{
                type:String,
                default:'<span style="color:red">This is Red</span>'
            },
        },
        data(){
            return {
                seen:false,
            }
        },
        watch:{
            msg(newval, oldval){
                console.log('old' + oldval)
                console.log('new' + newval)
            }
        },
        method:{
            click(){
                console.log(this.$data)
            }
        }
    }
</script>

<style scoped>

</style>