import Layout from "components/public"

export const contactRouter = {
    path: '/contact',
    component: Layout,
    meta: { title: '联系我们', roles: ["ROLE_SALEMAN"] },
    children: [
        {
            path: '',
            name: '',
            component: resolve => {
                require(['pages/contact/index'], resolve)
            },
            meta: { title: '联系我们' }
        }
    ]
    
}