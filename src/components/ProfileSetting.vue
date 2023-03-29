<template >
    <div class="setting-profile">
        <div class="menu-item">
            <div class="symbol">
                <img src="../assets/images/300-1.jpg" alt="">
            </div>
            <div class="side-user-info">
                <a>Paul Melone</a>
                <span>Python Dev</span>
            </div>
        </div>
        <div class="list-item">
            <RouterLink class="" :to="{ name: 'home' }">My profile</RouterLink>
            <RouterLink class="" :to="{ name: 'home' }">My projects</RouterLink>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.setting-profile {
    z-index: 107;
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
    transform: translate3d(211.5px, 119.5px, 0px);
    border-radius: 0.475rem;
    will-change: transform;
    animation: menu-sub-dropdown-animation-fade-in 0.3s ease 1, menu-sub-dropdown-animation-move-up 0.3s ease 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 275px;
    background: #fff;
    top: 10px;
    box-shadow: 0px 0px 30px 0px rgb(34 60 80 / 20%);
}

.menu-item {
    display: flex;
    align-items: center;
    padding:  0.75rem 0.65rem 1rem 0.65rem;
    border-bottom: 1px solid #f4f4f4;
    margin-bottom: 0.35rem;
}
.menu-item .side-user-info a{
    color: #000;
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
.list-item{
    display: flex;
    flex-direction: column;
    padding-right: 1.25rem;
    padding-left: 1.25rem
}
.list-item a{
    text-decoration: none;
    color: #3f4254;
    padding: 0.65rem 1rem;
}
</style>