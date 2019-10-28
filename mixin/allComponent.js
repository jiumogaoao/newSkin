import config from '@/common/config'
module.exports = {
	computed:{
		destop(){
			return this.$store.state.rootST.destop
		},
		initReady(){
			return this.$store.state.rootST.initReady
		},
		imgPath(){
			if(this.destop){
				return config.OSS + 'destop/'
			}else{
				return config.OSS + 'phone/'
			}
		}
	}
}