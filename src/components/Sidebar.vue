<template>
    <div class="sidebar" :class="!sidebar ? 'sidebar-hide' : ''">
        <div class="side-toolbar">
            <div class="side-user">
                <div class="user-info">
                    <div class="symbol">
                        <img src="@/assets/images/300-1.jpg" alt="">
                    </div>
                    <div class="side-user-info-box">
                        <div class="side-user-info">
                            <a>Paul Melone</a>
                            <span>Python Dev</span>
                            <div>
                                <span></span> online
                            </div>
                        </div>
                    </div>
                </div>
                <div class="setting-user" @click="toggleSetProfile" >
                    <img src="../assets/icons/settings-svgrepo-com.svg" alt="">
                </div>
            </div>
            <div class="side-search">
                <form action="">
                    <div class="input-box">
                        <img src="../assets/icons/search-svgrepo-com.svg" alt="">
                        <input placeholder="Quick Search" type="text" src="" alt="">
                    </div>
                </form>
            </div>
        </div>
        <div v-if="sidebar" class="side-menu">
            <div class="menu-content">
                <span>Pages</span>
            </div>
            <div class="lists-content">
                <RouterLink   class="list-page" :to="{ name: 'home' }">
                    <img src="../assets/icons/home-2-svgrepo-com.svg" alt="">
                    Home
                </RouterLink>
                <RouterLink class="list-page" :to="{ name: 'dashboard' }">
                    <img src="../assets/icons/sign-in-svgrepo-com.svg" alt="">
                    Dashboard
                </RouterLink>
                <RouterLink class="list-page" :to="{ name: 'login' }">
                    <img src="../assets/icons/sign-in-svgrepo-com.svg" alt="">
                    Login
                </RouterLink>
            </div>
        </div>
        <div class="side-footer">
            <div class="link-docs">
                <span>Docs & Components</span>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profileSetting: true
        }
    },
    props: {
        sidebar: {
            type: Boolean,
            required: true
        },
    },
    methods:{
        toggleSetProfile(){
            this.profileSetting = !this.profileSetting;
            this.$emit('profileMenu', this.profileSetting);
        }
    }
}
</script>
<style>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1E1E2D;
    padding: 0;

    position: fixed;
    top: 74px;
    left: 0;
    bottom: 0;
    z-index: 101;
    overflow: hidden;
    width: 265px;
    transition: left 0.3s ease;
}

.sidebar-hide {
    left: -265px;
    transition: left 0.3s ease;
}

.side-user {
    border-top: 1px solid #2D2D43;
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.side-user .user-info {
    display: flex;
    justify-content: center;
}

.side-search {
    border-top: 1px solid #2D2D43;
    border-bottom: 1px solid #2D2D43;
    padding: 20px 25px;
}

.symbol {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    border-radius: 0.475rem;
}

.symbol>img {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    display: inline-block;
    border-radius: 0.475rem;
}

.side-user {
    position: relative;
}

.side-user-info-box {
    display: flex;
}

.side-user-info {
    display: flex;
    flex-direction: column;
    flex: 1 auto;
    min-width: 0;
    margin-left: 1.25rem;
    margin-right: 0.5rem
}

.side-user-info a {
    color: #ffffff;
    font-size: 17px;
    font-weight: 600
}

.side-user-info span {
    font-weight: 500;
    line-height: 15px;
    font-size: 0.85rem;
    color: #7e8299;
}

.side-user-info>div {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: #50cd89;
}

.side-user-info>div span {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #50cd89;
    margin-right: 0.25rem
}

.setting-user {
    display: flex;
    justify-content: center;
    padding-top: 4px;
}
.setting-user:hover{
    cursor: pointer;
}

.setting-user img {
    width: 23px;
}

.side-search .input-box {
    background-color: #2C2C41;
    border-color: #2C2C41;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 0.475rem;
}

.side-search .input-box input {
    border: none;
    background-color: transparent;
    color: #878aa0;
    outline: none;
    font-size: 0.95rem;
    padding: 0.775rem 0.7rem;
    font-weight: 500;
    line-height: 1.5;
    width: 100%;
    height: 40px;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.side-search .input-box input::placeholder {
    color: #878aa0;
}

.side-search .input-box img {
    width: 17px;
    filter: brightness(6);
    margin-left: 1rem
}

.side-menu {
    height: 100%;
    --scrollbar-space: 0.4rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    padding-right: 0.8rem;
    padding-left: 0.8rem
}

.side-menu .menu-content {
    padding: 10.4px 10px;
}

.side-menu .menu-content span {
    color: #a1a5b7;
    text-transform: uppercase;
    font-size: 0.95rem;
    font-weight: 600
}

.side-menu .lists-content {
    padding: 0 10px;
}

.side-menu .lists-content .list-page {
    list-style: none;
    font-size: 13px !important;
    font-weight: 400;
    font-family: Inter, Helvetica, "sans-serif";
    color: #B6B9C8;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 0.475rem;
    display: flex;
    align-items: center;
    text-decoration: none;
}

.side-menu .lists-content .list-page img {
    width: 15px;
    margin-right: 8px;
}

.side-footer {
    padding: 20px 15px;
}

.side-footer .link-docs {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #B5B5C3;
    background-color: rgba(63, 66, 84, 0.35);
    padding: 11px 20px;
}

.side-footer .link-docs span {
    color: #B5B5C3;
}
.lists-content a.router-link-exact-active {
    transition: color 0.2s ease;
    background-color: #009ef7;
    color: #ffffff !important;
 }
</style>