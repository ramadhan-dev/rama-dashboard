import { MonitorCheck } from "lucide-react";

const menuData: any = [
    {
        label: 'menu',
        isTitle: true,
    },
    {
        id: 'main-dashboard',
        label: 'Dashboard',
        icon: <MonitorCheck />,
        link: '/',
        parentId: 1
    }
];

export { menuData };
