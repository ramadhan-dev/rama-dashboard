import Counter from "#/Common/Components/Counter";
import { getCounters } from "#/slices/ecommerce/thunk";
import { createSelector } from "@reduxjs/toolkit";
import { Boxes, Loader, PackageCheck, PackagePlus, PackageX, Truck } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterComponent = () => {

	const dispatch = useDispatch<any>();

	const selectDataList = createSelector(
		(state: any) => state.Ecommerce,
		(state) => ({
			dataList: state?.orders
		})
	);

	const { dataList } = useSelector(selectDataList);
	console.log("🚀 ~ CounterComponent ~ dataList:", dataList)

	// Get Data
	useEffect(() => {
		dispatch(getCounters());
	}, [dispatch]);


	useEffect(() => {
		// alert(1)
	}, []);

	return (
		<React.Fragment>
			<div className="grid grid-cols-12 gap-x-5">

				<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12">
					<Counter.Icon className="bg-custom-50 text-custom-500 dark:bg-custom-500/20 shrink-0" icon={<Boxes />} />
					<Counter.Content className="text-slate-500 dark:text-zink-200" title="Total Order" value={10000} />
				</Counter>

				<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12">
					<Counter.Icon className="bg-sky-50 text-sky-500 dark:bg-sky-500/20 shrink-0" icon={<PackagePlus />} />
					<Counter.Content className="text-slate-500 dark:text-zink-200" title="New Orders" value={4000} />
				</Counter>

				<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12">
					<Counter.Icon className=" text-yellow-500 rounded-md text-15 bg-yellow-50 dark:bg-yellow-500/20 shrink-0" icon={<Loader />} />
					<Counter.Content className="text-slate-500 dark:text-zink-200" title="Pending Orders" value={1500} />
				</Counter>

				<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12">
					<Counter.Icon className="text-purple-500 rounded-md text-15 bg-purple-50 dark:bg-purple-500/20 shrink-0" icon={<Truck />} />
					<Counter.Content className="text-slate-500 dark:text-zink-200" title="Shipping Orders" value={9000} />
				</Counter>

				<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12">
					<Counter.Icon className="text-green-500 rounded-md text-15 bg-green-50 dark:bg-green-500/20 shrink-0" icon={<PackageCheck />} />
					<Counter.Content className="text-slate-500 dark:text-zink-200" title="Delivered Orders" value={8000} />
				</Counter>

				<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12">
					<Counter.Icon className=" text-red-500 rounded-md text-15 bg-red-50 dark:bg-red-500/20 shrink-0" icon={<PackageX />} />
					<Counter.Content className="text-slate-500 dark:text-zink-200" title="Cancelled Orders" value={500} />
				</Counter>
			</div>
		</React.Fragment>
	 );
}

export default CounterComponent;
