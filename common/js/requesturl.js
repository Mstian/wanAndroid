const baseUrl = "https://www.wanandroid.com";

export default{
	// 首页
	_url_home_banner : baseUrl + "/banner/json",
	_url_home_article : function(pageSize){
		return baseUrl + "/article/list/" + pageSize + "/json"
	},
	_url_register : baseUrl + "/user/register",
	_url_login : baseUrl + "/user/login",
	_url_system : baseUrl + "/tree/json",
	_url_nav : baseUrl + "/navi/json",
	_url_website:baseUrl + "/friend/json",
	_url_hotkey: baseUrl + "/hotkey/json",
	_url_search: function(pageSize,k){
		return baseUrl + "/article/query/"+ pageSize +"/json?k="+k
	},
	_url_logout:baseUrl + "/user/logout/json",
	_url_collect_list: function (pageSize){
		return baseUrl + "/lg/collect/list/"+ pageSize +"/json"
	},
	_url_user_share : function (pageSize){
		return baseUrl + "/user/lg/private_articles/"+ pageSize +"/json"
	},
	_url_user_article:function(title,link){
		return baseUrl + "/lg/user_article/add/json?title="+title + "&link="+link
	}
}






