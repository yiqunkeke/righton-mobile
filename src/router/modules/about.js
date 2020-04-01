import Layout from 'components/public'

export const aboutRouter = {
    path: '/about',
    component: Layout,
    meta: { title: '关于睿昂', roles: ['ROLE_SALEMAN'] },
    children: [
        {
            path: '',
            name: '',
            component: resolve => {
                require(['pages/about/index'], resolve)
            },
            meta: { title: '关于睿昂' }
        }
    ]
    
}