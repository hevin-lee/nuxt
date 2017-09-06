import Vue from 'vue'
import axios from 'axios'
import apiConfig from '../api.config'

const Service = axios.create({
	baseURL:apiConfig.baseUrl
})

//请求拦截
Service.interceptors.request.use(
	config => {
		return config;
	},
	err => {
		return Promise.reject(error);
	}
)
// 响应拦截
Service.interceptors.response.use(
	response => {
		if (!response) {
			return;
		}
		// 拦截response状态
		// 需要登录
		if(response.data.responseCode == 1004){
			router.replace({
				path: '/login',
				query: {
					redirect: router.currentRoute.fullPath
				}
			})
			return;
		}
		// 成功
		return response;
	},
	err => {
		if (error.response) {
			var status = error.response.status,
				statusText = error.response.statusText;
			console.error(JSON.stringify(statusText) + ' 状态码：' + status);
			switch (status) {
				case 404:
					console.log(JSON.stringify(statusText) + ' 状态码：' + status);
					alert(JSON.stringify(statusText) + ' 状态码：' + status)
					break;
				// 返回 401 清除token信息并跳转到登录页面
				case 401:
					// sessionStorage.removeItem('user');
					// routes.replace({
					//   path: 'login',
					//   query: {redirect: routes.currentRoute.fullPath}
					// })
			}
		}
		// 返回接口返回的错误信息
		return Promise.reject(error.response.data) 
	}
)
Vue.prototype.$http = axios
export default Service