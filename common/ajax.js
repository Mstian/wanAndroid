const ajaxJs = function(url,data,method,success,fail,complete){
	uni.showLoading({
		title: '加载中',
	});
	uni.request({
		url:url,
		data:data,
		header: {
			'content-Type': 'application/json'
		},
		method:method,
		responseType:'text',
		dataType: 'json',
		responseType: 'text',
		success:function({data}){
			// console.log(data);
			if(data.errorCode == 0){
				uni.hideLoading()
				if( success && typeof (success) == "function"){
					success(data)
				}
				
			}else{
				uni.hideLoading()
				// console.log(data,'error');
			}
		},
		fail:function(data){
			uni.hideLoading()
			if( fail && typeof (fail) == "function"){
				fail(data)
			}
			console.log(data,'请求出错'+"--"+url);
		},
		complete:function(data){
			uni.hideLoading()
			if( complete && typeof (complete) == "function"){
				complete(data)
			}
		}	
	})
}
export default{
	ajaxJs
}