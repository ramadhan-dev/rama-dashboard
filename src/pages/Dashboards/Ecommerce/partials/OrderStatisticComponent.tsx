import { MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import StatisticComponent from './StatisticComponent'

const OrderStatisticComponent = () => {
	return (
		<React.Fragment>
			<div className="col-span-12 card xs:col-span-12 md:col-span-5 lg:col-span-5  2xl:col-span-5">
				<div className="card-body">
					<div className="flex items-center mb-3">
						<h6 className="grow text-15">Order Statistics</h6>
						<div className="relative">
							<Link to="#" className="underline transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600">View All
								<MoveRight className="inline-block size-4 align-middle ltr:ml-2 rtl:mr-2"></MoveRight></Link>
						</div>
					</div>
					<StatisticComponent chartId="orderStatisticsChart" />
				</div>
			</div>
		</React.Fragment>
	)
}

export default OrderStatisticComponent
