<template>
    <div class="hello">
        <p v-if=seen>IF Seen</p>
        <p v-else-if=seeme>SeeMe</p>
        <p v-else>Else</p>

        <p v-html=rawHtml></p>
        <p v-on:click.alt=toast>点我弹窗</p>
        <p v-on="rawHtml">VON</p>

        <ul>
            <li v-for="item in items" v-bind:key="item" @click="toast(tstr(item.msg))">
                {{item.msg}}
            </li>
        </ul>
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
                items:[
                    {msg:'1xdf'},
                    {msg:'2daf'},
                ],
                seen:false,
                seeme:true,
            }
        },
        watch:{
            msg(newval, oldval){
                console.log('old' + oldval)
                console.log('new' + newval)
            }
        },
        methods:{
            toast(v){
                alert(v)
            },
            tstr(v) {
              return v + 'xxxxx.......'
            },
        }
    }
</script>

<style scoped>

</style>