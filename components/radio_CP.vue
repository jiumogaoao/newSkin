<template>
	<image class="radioCP" :src="imgPath+'radio.png'"></image>
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
	.radioCP{
		width:12px;
		height:12px;
	}
</style>
