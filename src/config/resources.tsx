import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            lable: 'Dasboard',
            icon: <DashboardOutlined/>
        }
    },
    {
        name:'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/new',
        edit: '/companies/edit/:id',
        meta: {
            lable: 'Companies',
            icon: <ShopOutlined/>
        }
    },
    {
        name:'tasks',
        list: '/tasks',
        show: '/tasks/:id',
        create: '/tasks/new',
        edit: '/tasks/edit/:id',
        meta: {
            lable: 'Tasks',
            icon: <ProjectOutlined/>
        }
    },

]