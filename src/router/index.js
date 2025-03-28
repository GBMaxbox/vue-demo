import {createRouter,createWebHistory} from 'vue-router';

const routers =[
    {
        // 重定向到home
        path:'/',
        redirect:'/home'
    },
    {
        path:'/:pathMatch(.*)',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('@/components/Home.vue'),
        meta:{
            'title':'首页'
        }
    },
    {
        path:'/student',
    
        name:'student',
        component:()=>import('@/view/student.vue'),
        meta:{
            'title':'首页'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes:routers
})

export default router
