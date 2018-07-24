<template>
<div class="userinfo">
    <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif">
    </div>
    <div class="userInfomation" v-else>
        <section>
            <img :src="userData.avatar_url" >
            <span>{{userData.loginname}}</span>
            <p>
                {{userData.score}}积分
            </p>
            <p>注册时间:{{userData.create_at | timeFormatter}}</p>
        </section>
        <div class="replies">
            <p>回复的主题</p>
            <ul>
                <li v-for="item in userData.recent_replies">
                    <router-link :to="{name:'Article',params:{id:item.id,name:userData.loginname}}">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="topics">
            <p>创建的主题</p>
            <ul>
                <li v-for="item in userData.recent_topics">
                    <router-link :to="{name:'Article',params:{id:item.id,name:userData.loginname}}">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'userinfo',
    data(){
        return{
            isLoading:false,
            userData:{}
        }
    },
    beforeMount() {
        this.isLoading = true
        this.getData()
    },
    methods: {
        getData() {
            this.$axios
                .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                .then(res => {
                    this.isLoading = false
                    this.userData = res.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>
<style scoped>
.userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
}
.userInfomation section {
    padding: 12px;
}
.userInfomation img {
    width: 30px;
}
.userInfomation li {
    list-style: none;
}
.userInfomation .replies,
.userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #dddddd solid;
}
.userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
}
.userInfomation > div > ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
}
.userInfomation > div > ul > li > a {
    color: #094e99;
    text-decoration: none;
}
</style>

