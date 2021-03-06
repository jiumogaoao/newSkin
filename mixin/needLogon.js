import config from '@/common/config'
import moment from 'moment'
module.exports = {
	onShow: function() {
		if(!this.isLogon){
			var pages = getCurrentPages(); 
			var page = (pages[pages.length - 2]).route||(pages[pages.length - 1]).route; 
			uni.navigateTo({
			    url: '/pages/logon/logon?page='+page
			});
		}
	},
	computed:{
		isLogon(){
			console.log('this.$store.state.rootST.refresh_expired',this.$store.state.rootST.refresh_expired)
			if(this.$store.state.rootST.refresh_expired && (moment(this.$store.state.rootST.refresh_expired.substr(0, this.$store.state.rootST.refresh_expired.length - 8),'YYYYY-MM-DD hh:mm:ss').format('x')>moment().format('x'))){
				return true;
			}else{
				return false;
			}
		}
	}
}