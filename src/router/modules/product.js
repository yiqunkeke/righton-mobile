import Layout from "components/public"

export const productRouter = {
    path: '/product',
    component: Layout,
    meta: { title: '产品与研发', roles: ["ROLE_SALEMAN"] },
    children: [
        {
            path: 'diagnosis',
            name: 'diagnosis',
            component: resolve => {
                require(['pages/diagnosis/index'], resolve)
            },
            meta: { title: '诊断试剂' }
        },
        {
            path: 'diagnosis/detail',
            name: 'diagnosisDetail',
            hidden: true,
            component: resolve => {
                require(['pages/diagnosis/detail'], resolve)
            },
            meta: { title: '诊断试剂详情' }
        },
        {
            path: 'scientific',
            name: 'scientific',
            component: resolve => {
                require(['pages/scientific/index'], resolve)
            },
            meta: { title: '科研试剂' }
        },
        {
            path: 'test',
            name: 'test',
            component: resolve => {
                require(['pages/test/index'], resolve)
            },
            meta: { title: '检测服务' }
        },
        {
            path: 'example',
            name: 'example',
            component: resolve => {
                require(['pages/example/index'], resolve)
            },
            meta: { title: '应用示例' }
        }                   
    ]
    
}