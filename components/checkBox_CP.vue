<template>
	<image class="checkboxCP" :src="imgPath+'checked.png'"></image>
</template>

<script>
	import allComponent from "@/mixin/allComponent"
	export default {
		mixins: [allComponent],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.checkboxCP{
		width:18px;
		height:18px;
	}
</style>
