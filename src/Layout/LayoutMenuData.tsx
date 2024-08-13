import { MonitorCheck, FileArchive, PackageSearch, ShoppingBag } from "lucide-react";

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
			},
			{
				id: 'employee',
				label: 'Employee',
				link: '/',
				parentId: "master-data",
				subItems: [
					{
						id: 'employee-list',
						label: 'Employee',
						link: '/data-master/employee',
						parentId: "employee"
					},
				]
			},
			{
				id: 'product',
				label: 'Product',
				link: '/',
				parentId: "master-data",
				subItems: [
					{
						id: 'product-tag',
						label: 'Tagging',
						link: '/data-master/product-tag',
						parentId: "product"
					},
					{
						id: 'product-brand',
						label: 'Brand',
						link: '/data-master/product-brand',
						parentId: "product"
					},
					{
						id: 'product-category',
						label: 'Category',
						link: '/data-master/product-category',
						parentId: "product"
					},
					{
						id: 'product-size',
						label: 'Size',
						link: '/data-master/product-size',
						parentId: "product"
					},
					{
						id: 'product-status',
						label: 'Status',
						link: '/data-master/product-status',
						parentId: "product"
					},
					{
						id: 'product-type',
						label: 'Type',
						link: '/data-master/product-type',
						parentId: "product"
					},
					{
						id: 'product-visibility',
						label: 'Visibility',
						link: '/data-master/product-visibility',
						parentId: "product"
					},
				]
			}
		]
	},
	{
		id: "ecommerce",
		label: 'Ecommerce',
		link: "#",
		icon: <ShoppingBag />,
		subItems: [
			{
				id: 'product',
				label: 'Product',
				icon: <PackageSearch />,
				link: '/ecommerce/product',
				parentId: 'ecommerce'
			},
		]
	},

];

export { menuData };
