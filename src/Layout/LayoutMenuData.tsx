import { MonitorCheck, FileArchive, MonitorDot } from "lucide-react";

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
		icon: <FileArchive />,
		subItems: [
			{
				id: 'level1',
				label: 'Level 1.1',
				link: '/#',
				parentId: "master-data"
			},
			{
				id: 'administratif',
				label: 'Administratif',
				link: '/',
				parentId: "master-data",
				subItems: [
							{
								id: 'administratif-province',
								label: 'province',
								link: '/data-master/province',
								parentId: "administratif"
							},
							{
								id: 'administratif-city',
								label: 'City',
								link: '/data-master/city',
								parentId: "administratif"
							},
							{
								id: 'administratif-district',
								label: 'district',
								link: '/data-master/district',
								parentId: "administratif"
							},
							{
								id: 'administratif-sub-district',
								label: 'sub-district',
								link: '/data-master/sub-district',
								parentId: "administratif"
							},
				]
			}
		]
	},
];

export { menuData };
