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
    },
    {
        path: '/InputTrainerView',
        name: 'InputTrainerView',
        component: ()=>import("../view/InputTrainerView")
    },
    {
        path: '/TrainerTableView',
        name: 'TrainerTableView',
        component: ()=>import("../view/TrainerTableView")
    },
    {
        path: '/GroupTableView',
        name: 'GroupTableView',
        component: () => import("../view/GroupTableView")
    },
    {
        path: '/RoomTableView',
        name: 'RoomTableView',
        component: () => import("../view/RoomTableView")
    }
]

const router = new VueRouter({
    routes
})

export default router