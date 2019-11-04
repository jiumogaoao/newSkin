import config from '@/common/config'
module.exports = {
	onShow: function() {
		if(!this.userName){
			uni.navigateTo({
			    url: '/pages/logon/logon'
			});
		}
	},
	computed:{
		userName(){
			return this.$store.state.userST.userName
		}
	}
}