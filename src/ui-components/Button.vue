<template>
    <div>
        <button class="btn-form" type="submit"><slot></slot></button>
    </div>
</template>
<script>
export default {
    name: 'Button'
}
</script>
<style>
    .btn-form{
        color: #ffffff;
    }
</style>