<template>
    <div class="login-content">
        <div>
            <div class="login-info">
                <div>
                    <a><img src="" alt=""></a>
                    <h2>Branding tools designed for your business</h2>
                </div>
            </div>
            <Login />
        </div>
    </div>
</template>
<script>
import {Login} from '@/components'
export default {
    components:{
        Login
    },
}
</script>
<style>
.login-content {
    text-align: center;
    background-color: blueviolet;
}

.login-content>div {
    display: flex;
    flex-direction: row;
}

.login-content .login-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding-right: 2.5rem;
    padding-left: 2.5rem
}

.login-content .login-info div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}

.login-content .login-info div h2 {
    color: #fff;
    font-weight: 400
}


</style>