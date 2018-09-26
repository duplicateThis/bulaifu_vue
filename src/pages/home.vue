<template>
    <div id="home">
        <el-row class="carousel">
            <el-col :span="24">
                <el-carousel class="hidden-xs-only" :interval="3000" type="card" height="300px" width="100%">
                    <el-carousel-item v-for="(item, index) in carouselImg" :key="index">
                        <img class="carousel-img1" :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
                <el-carousel class="hidden-sm-and-up" :interval="3000" height="300px" width="100%">
                    <el-carousel-item v-for="(item, index) in carouselImg" :key="index">
                        <img class="carousel-img2" :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <el-row class="content">
            <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="0"><br></el-col>
            <el-col :xl="18" :lg="18" :md="18" :sm="18" :xs="24">
                <div class="content-item">
                    <el-row class="content-item-1">
                        <el-col>网络服务</el-col>
                    </el-row>
                    <div class="content-item-2">
                        <el-col :xl="4" :lg="6" :md="8" :sm="12" :xs="24" v-for="(item, index) in carouselImg" :key="index">
                            <div class="content-item-2-div" ref="contentItemImgDiv">
                                <img ref="contentItemImg" :src="item" alt="">
                            </div>
                        </el-col>
                    </div>
                </div>
                <div class="content-item">
                    <el-row class="content-item-1">
                        <el-col>网络服务</el-col>
                    </el-row>
                    <div class="content-item-2">
                        <el-col :xl="4" :lg="6" :md="8" :sm="12" :xs="24" v-for="(item, index) in carouselImg" :key="index">
                            <div class="content-item-2-div" ref="contentItemImgDiv">
                                <img ref="contentItemImg" :src="item" alt="">
                            </div>
                        </el-col>
                    </div>
                </div>

            </el-col>
            <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="0"><br></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            carouselImg: [
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90',
                'https://note.youdao.com/yws/api/personal/file/WEBe0c5b667a5f08b1467dfefed274b62f4?method=download&shareKey=b5ac9aea46783f12cdac0a6f977eaa90'
            ]
        }
    },
    methods: {

    },
    mounted () {
        for (var i in this.$refs.contentItemImg) {
            this.$refs.contentItemImg[i].style.width = this.$refs.contentItemImgDiv[0].offsetWidth - 10 + 'px';
        }
    }
}
</script>

<style scoped>
.carousel {
    background-color: #333333;
}
.carousel-img1 {
    height: 300px;
}
.carousel-img2 {
    width: 100%;
}
.content {
    margin-top: 20px;
    margin-bottom: 20px;
}
.content-item {
    overflow: hidden;
    margin-bottom: 40px;
}
.content-item-1 {
    height: 50px;
    line-height: 50px;
    text-align: left;
    font-size: 22px;
    border-bottom: 3px solid #E7E7E7;
}
.content-item-2 {
    margin-top: 15px;
    text-align: left;
}
.content-item-2-div {
    cursor: pointer;
}
</style>
