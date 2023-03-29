<template>
    <div>
        <div class="login-box">
                <form action="">
                    <div class="form-info">
                        <h1>Sign In</h1>
                        <span>Your Social Campaigns</span>
                    </div>
                    <div class="email-login">
                        <Input :type="'email'" :placeholder="'Email'" v-model="email" />
                    </div>
                    <Input :type="'password'" :placeholder="'Password'" v-model="password"/>
                    <div class="forgot-pass">
                        <RouterLink class="" :to="{ name: 'home' }">
                            Forgot Password ?
                        </RouterLink>
                    </div>
                    <Button>Sign in</Button>
                </form>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>
<style>
    .login-box {
    margin: 5rem;
    padding: 5rem;
    background-color: #ffffff;
    border-radius: 1rem;
    width: 600px;
}

.login-box form {
    /* padding-right: 2.5rem;
    padding-left: 2.5rem; */
    padding-bottom: 5rem;
}

.login-box form .form-info {
    margin-bottom: 2.75rem;
    text-align: center;
}

.login-box form .form-info h1 {
    color: #181c32;
    font-weight: 700;
    margin-bottom: 0.75rem
}

.login-box form .form-info span {
    color: #a1a5b7;
    font-weight: 500;
    font-size: 1.075rem
}
.email-login{
    margin-bottom: 2rem;
}
.forgot-pass{
    margin-top: 0.75rem;
    text-align: end;
    margin-bottom: 2rem;
}
.forgot-pass a{
    color: #009ef7;
    text-decoration: none;
}
.login-box button{
    width: 100%;
}
</style>