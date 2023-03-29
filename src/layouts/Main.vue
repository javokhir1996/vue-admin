<template>
    <div class="main" :class="sidebar ? '': 'active'">
        <Navbar @currentItem = "currentItem"/>
        <Sidebar @profileMenu = "profileMenu" :sidebar="sidebar"/>
        <ProfileSetting v-if="!settingBox"/>
        <RouterView />
    </div>
</template>
<script>
  import {Sidebar, Navbar, ProfileSetting} from '@/components'
  import {RouterView} from 'vue-router'
export default {
    name: 'Main',
    components: {Sidebar, Navbar, ProfileSetting},

    data() {
        return {
            sidebar: Boolean,
            settingBox: Boolean
        }
    },
    methods: {
        currentItem(item){
            this.sidebar = item
        },
        profileMenu(item){
            this.settingBox = item
        }
    },
}
</script>
<style>
    .main{
        padding-left: 265px;
        padding-top: 77px;
        transition: padding-left 0.3s ease;
    }
    .main.active{
        padding-left: 0;
        transition: padding-left 0.3s ease;
        padding-top: 77px;
    }
</style>