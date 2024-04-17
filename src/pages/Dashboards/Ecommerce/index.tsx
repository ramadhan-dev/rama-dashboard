
import BreadCrumb from "#/Common/BreadCrumb";
import React, { lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderStatisticComponent from "./partials/OrderStatisticComponent";
import CounterComponent from "./partials/CounterComponent";

import SalesRevenueComponent from "./partials/SalesRevenueComponent";
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
					<SalesRevenueComponent />
				</div>

			</div>
		</React.Fragment>
	);
};

export default Ecommerce;
