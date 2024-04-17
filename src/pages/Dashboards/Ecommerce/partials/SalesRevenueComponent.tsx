import Counter from "#/Common/Components/Counter"
import DatePickerComponent from "#/Common/Components/Datepicker"
import { Loader, TrendingUp } from "lucide-react"
import SalesRevenueOverviewChart from "./SalesRevenueOverviewChart"
import { useDispatch, useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { getSalesRevenue } from "#/slices/thunk"

const SalesRevenueComponent = () => {


	const dispatch = useDispatch<any>();
	const selectDataList = createSelector(
		(state: any) => state.Ecommerce,
		(state) => ({
			dataList: state?.salesRevenue
		})
	);

	const { dataList: { series, xAxis, totalSales, totalProfit } } = useSelector(selectDataList);

	// Get Data
	useEffect(() => {
		dispatch(getSalesRevenue());
	}, [dispatch]);


	return (
		<div className="card-body">
			<div className="flex flex-col gap-4 mb-4 md:mb-3 md:items-center md:flex-row">
				<h6 className="grow text-15">Sales Revenue Overview</h6>
				<div className="relative">
					<DatePickerComponent />
				</div>
			</div>

			<div className="grid grid-cols-12 gap-4 mb-3">

				<div className="col-span-12 md:col-span-6 lg:col-span-3">
					<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12" isCard={true}>
						<Counter.Icon className=" text-yellow-500 rounded-md text-15 bg-yellow-50 dark:bg-yellow-500/20 shrink-0" icon={<Loader />} />
						<Counter.Content className="text-slate-500 dark:text-zink-200" title={totalSales?.name} value={totalSales?.value} decimals={2} />
					</Counter>
				</div>

				<div className="col-span-12 md:col-span-6 lg:col-span-3">
					<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12" isCard={true}>
						<Counter.Icon className=" text-green-500 rounded-md bg-green-50 shrink-0 dark:bg-green-500/10" icon={<TrendingUp />} />
						<Counter.Content className="text-slate-500 dark:text-zink-200" title={totalProfit?.name} value={totalProfit?.value} decimals={2} />
					</Counter>
				</div>
			</div>

			<SalesRevenueOverviewChart chartId="sales-revenue" series={series} xAxis={xAxis} />
		</div>
	)
}

export default SalesRevenueComponent
