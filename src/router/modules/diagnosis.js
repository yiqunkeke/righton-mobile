import Layout from "components/public"

export const diagnosisRouter = {
    path: '/diagnosis',
    component: Layout,
    meta: { title: '诊断试剂', roles: ["ROLE_SALEMAN"] },
    children: [
        {
            path: '',
            name: '',
            component: resolve => {
                require(['pages/diagnosis/index'], resolve)
            },
            meta: { title: '诊断试剂' }
        },
        {
            path: 'detail',
            name: 'diagnosisDetail',
            hidden: true,
            component: resolve => {
                require(['pages/diagnosis/detail'], resolve)
            },
            meta: { title: '诊断试剂详情' }
        }
    ]
    
}