export default{
	closeWin:function (){ //正常返回关闭当前页面
		uni.navigateBack()
	},
	getUserName:function(){
		var userName = '';
		uni.getStorage({
			key:"userName",
			success:function(res){
				if(res.data){
					userName = res.data;
				}
			}
		})
		return userName;
	}
}

