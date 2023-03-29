<template>
    <div>
        <input :type="type" class="input-login" id="floatingInput"
            :placeholder="placeholder"
            @input="updateInput"
			:value="modelValue"
            >
    </div>
</template>
<script>
export default {
    name: 'Input',
    props:{
        type: String,
        placeholder: String,
		modelValue: [String, Number],
    },
    methods:{
        updateInput(e) {
			this.$emit('update:modelValue', e.target.value)
		},
    }
    
}
</script>
<style>
     .input-login{
        width: 100%;
        padding: 0.775rem 1rem;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.5;
        color: #5e6278;
        border-radius: 0.475rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
</style>