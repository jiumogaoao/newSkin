import config from '@/common/config'
import moment from 'moment'
module.exports = {
	onShow: function() {
		if(!this.isLogon){
			uni.navigateTo({
			    url: '/pages/logon/logon'
			});
		}
	},
	computed:{
		isLogon(){
			if(this.$store.state.rootST.refresh_expired && (moment(this.$store.state.rootST.refresh_expired.substr(0, this.$store.state.rootST.refresh_expired.length - 8),'YYYYY-MM-DD hh:mm:ss').format('x')>moment().format('x'))){
				return true;
			}else{
				return false;
			}
		}
	}
}