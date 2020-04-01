import Layout from 'components/public'

export const subCompanyRouter = {
    path: '/subCompany',
    component: Layout,
    meta: { title: '睿昂子公司', roles: ['ROLE_SALEMAN'] },
    children: [
        {
            path: '',
            name: '',
            component: resolve => {
                require(['pages/subCompany/index'], resolve)
            },
            meta: { title: '睿昂子公司' }
        }
    ]
    
}