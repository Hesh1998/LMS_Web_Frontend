const routes = [
    {
        path: '/',
        name: 'lgin',
        component: () =>
            import ('../views/Login.jsx')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Register.vue')
    },
]

export default router