import { MonitorCheck, MonitorDot } from "lucide-react";

const menuData: any = [
	{
		label: 'menu',
		isTitle: true,
	},
	{
		id: 'main-dashboard',
		label: 'Dashboard',
		icon: <MonitorCheck />,
		link: '/dashboard',
		parentId: 1
	},
	{
		id: "master-data",
		label: 'Data Master',
		link: "#",
		icon: <MonitorDot />,
		subItems: [
			{
				id: 'data-master-province',
				label: 'province',
				link: '/data-master/province',
				parentId: "data-master"
			},
			{
				id: 'data-master-city',
				label: 'City',
				link: '/data-master/city',
				parentId: "data-master"
			},
			{
				id: 'data-master-district',
				label: 'district',
				link: '/data-master/district',
				parentId: "data-master"
			},
			{
				id: 'data-master-sub-district',
				label: 'sub-district',
				link: '/data-master/sub-district',
				parentId: "data-master"
			},
		]
	},
];

export { menuData };
