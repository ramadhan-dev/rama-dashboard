
import BreadCrumb from "#/Common/BreadCrumb";
import React, { lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductOrderComponent = lazy(() => import("./partials/ProductOrderComponent"))
const OrderStatisticComponent = lazy(() => import("./partials/OrderStatisticComponent"))
const CounterComponent = lazy(() => import("./partials/CounterComponent"))
const SalesRevenueComponent = lazy(() => import("./partials/SalesRevenueComponent"))
const WelcomeComponent = lazy(() => import("./partials/WelcomeComponent"));

const Ecommerce = () => {

	const navigate = useNavigate();
	useEffect(() => navigate("/dashboard"), [navigate]);

	return (
		<React.Fragment>
			<BreadCrumb title='' pageTitle='Dashboards' />

			{/* <WelcomeComponent />

			<CounterComponent />


			<div className="grid grid-cols-12 gap-x-5">

				<OrderStatisticComponent />

				<div className="col-span-12 card md:col-span-7">
					<SalesRevenueComponent />
				</div>

			</div>

			<ProductOrderComponent /> */}

		</React.Fragment>
	);
};

const MemoEcommerce = React.memo(Ecommerce)
export { MemoEcommerce as default} ;
