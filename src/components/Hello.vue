<template>
    <div class="hello">
        <p v-if=seen>IF Seen</p>
        <p v-else-if=seeme>SeeMe</p>
        <p v-else>Else</p>

        <p v-html=rawHtml></p>
        <p v-on:click.alt=toast>点我弹窗</p>

        <ul>
            <li v-for="(item,index) in items" :key="index" @click="toast(tstr(item.msg))">
                {{item.msg}}
            </li>
        </ul>

        <input v-model="amsg" placeholder="edit me">
        <p>Message is {{amsg}}</p>
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
                amsg:'',
            }
        },
        watch:{
            msg(newval, oldval){
                console.log('old' + oldval)
                console.log('new' + newval)
                console.log(this.amsg)
            }
        },
        methods:{
            toast(v){
                alert('hello ' + v)
                this.$emit("dodo", v)
            },
            tstr(v) {
              return v + 'xxxxx.......'
            },
        }
    }
</script>

<style scoped>

</style>