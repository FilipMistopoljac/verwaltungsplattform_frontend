import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/StudentTableView',
        name: 'StudentTableView',
        component: ()=>import("../view/StudentTableView")
    },
    {
        path: '/FrontPage',
        name: 'FrontPage',
        component: ()=>import("../view/FrontPage")
    },
    {
        path: '/InputStudentView',
        name: 'InputStudentView',
        component: ()=>import("../view/InputStudentView")
    }
]

const router = new VueRouter({
    routes
})

export default router