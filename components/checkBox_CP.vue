<template>
	<view :class="destop?'destopCP':'phoneCP'">
		<!-- #ifdef H5 -->
		<image class="checkboxCP" :src="imgPath+'checked.png'" v-if="destop"></image>
		<!-- #endif -->
		<image class="checkboxCP" :src="imgPath+'cartxuan.png'" v-if="!destop"></image>
	</view>
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
	/* #ifdef H5 */
	.destopCP{
		.checkboxCP{
			width:18px;
			height:18px;
		}
	}
	/* #endif */
	.phoneCP{
		.checkboxCP{
			width:38px;
			height:38px;
		}
	}
</style>
