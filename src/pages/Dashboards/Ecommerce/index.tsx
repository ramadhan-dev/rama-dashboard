import BreadCrumb from "#/Common/BreadCrumb";
import React, { lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderStatisticComponent from "./partials/OrderStatisticComponent";
import CounterComponent from "./partials/CounterComponent";
import { BarChart, CalendarRange, Loader, TrendingUp } from "lucide-react";

import CountUp from "react-countup";
import { SalesRevenueOverviewChart } from "./partials/ChartComponent";
import Counter from "#/Common/Components/Counter";
import DatePickerComponent from "#/Common/Components/Datepicker";
const WelcomeComponent = lazy(() => import("./partials/WelcomeComponent"));

const Ecommerce = () => {

	const navigate = useNavigate();
	useEffect(() => navigate("/dashboard"), [navigate]);

	return (
		<React.Fragment>
			<BreadCrumb title='Ecommerce' pageTitle='Dashboards' />

			{/* Welcome Message */}
			<WelcomeComponent />

			{/* Counter Data */}
			<CounterComponent />

			{/* Grafik Data */}
			<div className="grid grid-cols-12 gap-x-5">

				<OrderStatisticComponent />

				<div className="col-span-12 card md:col-span-7">
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
									<Counter.Content className="text-slate-500 dark:text-zink-200" title="Total Sales" value={1517.36} decimals={2} />
								</Counter>

							</div>

							<div className="col-span-12 md:col-span-6 lg:col-span-3">

								<Counter className="xs:col-span-12 sm:col-span-6 xl:col-span-2 col-span-12" isCard={true}>
									<Counter.Icon className=" text-green-500 rounded-md bg-green-50 shrink-0 dark:bg-green-500/10" icon={<TrendingUp />} />
									<Counter.Content className="text-slate-500 dark:text-zink-200" title="Total Profit" value={746.84} decimals={2} />
								</Counter>

							</div>
						</div>


						<SalesRevenueOverviewChart />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Ecommerce;
