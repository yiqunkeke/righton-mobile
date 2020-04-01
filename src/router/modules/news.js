import Layout from 'components/public'

export const newsRouter = {
    path: '/news',
    component: Layout,
    meta: { title: '新闻中心', roles: ['ROLE_SALEMAN'] },
    children: [
        {
            path: '',
            name: '',
            component: resolve => {
                require(['pages/news/index'], resolve)
            },
            meta: { title: '公司新闻' }
        },
        {
            path: 'detail',
            name: 'newsDetail',
            hidden: true,
            component: resolve => {
                require(['pages/news/detail'], resolve)
            },
            meta: { title: '新闻详情' }
        },
    ]
    
}