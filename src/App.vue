<template>
    <div id="app">
        <el-row class="navigation-bar">
            <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="1"><br></el-col>
            <el-col class="navigation-bar-logo" :xl="9" :lg="9" :md="9" :sm="9" :xs="11">
                <router-link to='/home'>LOGO</router-link>
            </el-col>
            <el-col :xl="9" :lg="9" :md="9" :sm="9" :xs="11">
                <el-row class="navigation-bar-tag hidden-xs-only">
                    <div>
                        <span class="dropdown-menu-title" @mouseover="dropdownMenuShow" @mouseout="dropdownMenuHide">音乐<i class="el-icon-arrow-down el-icon--right"></i></span>
                        <ul class="dropdown-menu" @mouseover="dropdownMenuShow" @mouseout="dropdownMenuHide" v-show="dropdownActive">
                            <li>钢琴原创</li>
                            <li>钢琴原创</li>
                            <li>钢琴原创</li>
                        </ul>
                    </div>
                    <div><router-link to='/e'>网络服务</router-link></div>
                </el-row>
                <el-row class="navigation-button hidden-sm-and-up">
                    <i class="el-icon-menu" @click.stop="sideNavigationShow"></i>
                </el-row>
            </el-col>
            <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="1"><br></el-col>
        </el-row>
        <el-row class="message-bar">
            <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="1"><br></el-col>
            <el-col class="message-bar-item1" :xl="9" :lg="9" :md="9" :sm="9" :xs="11">我是消息条</el-col>
            <el-col class="message-bar-item2" :xl="9" :lg="9" :md="9" :sm="9" :xs="11">我是分享条</el-col>
            <el-col :xl="3" :lg="3" :md="3" :sm="3" :xs="1"><br></el-col>
        </el-row>
        <el-row style="margin-top:108px;"><router-view/></el-row>
        <el-row class="footer">
            footer
        </el-row>

        <!-- side navigation -->
        <transition name="slide-fade">
            <div class="side-navigation-div" v-show="showSide" @click="sideNavigationHide">
                <ul class="side-navigation" @click.stop="sideNavigationShow">
                    <li><router-link to='/e'>网络服务</router-link></li>
                    <div>
                        <div class="side-submenu-title" @click.stop="sideSubmenuToggle(2)">音乐</div>
                        <transition name="sub-slide-fade">
                            <div v-show="subMusic">
                                <li>钢琴原创</li>
                                <li>钢琴原创</li>
                            </div>
                        </transition>
                    </div>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            dropdownActive: 0,
            showSide: 0,

            subMusic: 0
        }
    },
    methods: {
        dropdownMenuShow () {
            this.dropdownActive = 1;
        },
        dropdownMenuHide () {
            this.dropdownActive = 0;
        },
        sideNavigationShow () {
            this.showSide = 1;
        },
        sideNavigationHide () {
            this.showSide = 0;
        },
        sideSubmenuToggle (num) {
            if (num == 2) {
                this.subMusic = !this.subMusic;
            }
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: -8px;
}

a {
    text-decoration: none;
    color: #fff;
}
ul, ol, li {
    margin: 0;
    padding: 0;
    list-style: none;
}
li:hover {
    color: #A1A63D;
    background: #000000;
}
.router-link-active {
    color: #A1A63D;
}

.navigation-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #171717;
    color: #fff;
    height: 50px;
    width: 100%;
    line-height: 50px;
    border-bottom: 1px double #fff;
}
.navigation-bar-logo {
    text-align: left;
}
.navigation-bar-tag {
    display: flex;
    flex-direction: row-reverse;
}
.navigation-bar-tag > div {
    flex: 1;
    text-align: right;
    position: relative;
}
.dropdown-menu-title {
    cursor: pointer;
    display: inline-block;
    height: 100%
}
.dropdown-menu {
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 100;
    background-color: #171717;
    text-decoration: none;
    opacity: 0.8;
    cursor: pointer;
    -webkit-box-shadow: #171717 -10px 5px 5px 5px;
    -moz-box-shadow: #171717 -10px 5px 5px 5px;
    box-shadow: #171717 -10px 5px 5px 5px;
}
.navigation-button {
    text-align: right;
    font-size: 30px
}

.message-bar {
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 5;
    background-color: #000000;
    color: #F9C73D;
    height: 50px;
    width: 100%;
    line-height: 50px;
}
.message-bar-item1 {
    text-align: left;
}
.message-bar-item2 {
    text-align: right;
}

.footer {
    background-color: #171717;
    color: #fff;
    height: 100px;
    line-height: 100px;
}

.side-navigation-div {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
}
.side-navigation {
    position: absolute;
    width: 30%;
    top: 0;
    left: 0;
    background-color: #333333;
    color: #ffffff;
    padding-top: 50px;
    text-align: left;
    opacity: 0.9;
}
.side-navigation li, .side-submenu-title {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
}

.slide-fade-enter-active {
    transition: all .5s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0.5;
}
.sub-slide-fade-enter-active {
    transition: all .5s ease;
}
.sub-slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.sub-slide-fade-enter, .sub-slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0.5;
}
</style>
