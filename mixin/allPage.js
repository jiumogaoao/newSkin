import headerCP from '@/components/header_CP.vue'
import footerCP from '@/components/footer_CP.vue'
import breadcrumbsCP from '@/components/breadcrumbs_CP.vue'
module.exports = {
	components:{headerCP,footerCP,breadcrumbsCP},
	computed:{
		destop(){
			return this.$store.state.rootST.destop
		},
		initReady(){
			return this.$store.state.rootST.initReady
		},
		place(){
			return this.$store.state.rootST.place
		},
		logo(){
			return this.$store.state.rootST.logo
		},
		topNav(){
			return this.$store.state.rootST.topNav
		},
		secondNav(){
			return this.$store.state.rootST.secondNav
		}
	}
}