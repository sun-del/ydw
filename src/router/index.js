import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import classify from '@/components/classify'
import shopp from '@/components/shopp'
import me from '@/components/me'
import all from '@/components/all'
import eat from '@/components/classify_eat'
import home from '@/components/classify_home'
import mei from '@/components/classify_mei'
import mom from '@/components/classify_mom'
import qiu from '@/components/classify_qiu'
import details from '@/components/details'
import login from '@/components/login'
import register from '@/components/register'



Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'/all',
			component:all,
			children:[
				{
				  path: '/index',
				  component: index
				},
				{
				  path: '/classify',
				  component: classify,
          children:[
            {
              path: 'eat',
              component: eat
            },
            {
              path: 'home',
              component: home
            },
            {
              path: 'mei',
              component: mei
            },
            {
              path: 'qiu',
              component: qiu
            },
            {
              path: 'mom',
              component: mom
            },
            {
              path: '/classify',
              redirect:'/classify/mom'
            },
          ]
				},
				{
				  path: '/shopp',
				  component: shopp
				},
				{
				  path: '/me',
				  component: me
				},
				{
				  path: '/',
				  redirect:'/index'
				}
			]
		},
		{
      path:'/',
      redirect:'/index'
    },
    {
      path:'/details',
      component: details,
    },
    {
      path:'/login',
      component: login,
    },
    {
      path:'/register',
      component: register,
    },
  ]
})
