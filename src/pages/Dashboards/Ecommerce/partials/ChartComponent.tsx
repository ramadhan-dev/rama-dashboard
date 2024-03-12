import useChartColors from "#/Common/useChartColors";
import React from "react";
import ReactApexChart from "react-apexcharts";

const SalesRevenueOverviewChart = ({ chartId }: any) => {

	const chartColors = useChartColors(chartId);

	//Sales Revenue Overview
	const series = [{
		name: 'Total Sales',
		data: [44, 55, 41, 67, 22, 43, 21, 49, 20, 41, 67, 22,]
	}, {
		name: 'Total Profit',
		data: [11, 17, 15, 15, 21, 14, 15, 13, 5, 15, 15, 21,]
	}];
	var options: any = {
		chart: {
			type: 'bar',
			height: 300,
			stacked: true,
			stackType: '100%',
			toolbar: {
				show: false,
			},
		},
		xaxis: {
			categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		},
		tooltip: {
			y: {
				formatter: function (val: any) {
					return "$" + val + "k";
				}
			}
		},
		grid: {
			show: true,
			padding: {
				top: -20,
				right: -10,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '50%',
			},
		},
		colors: chartColors,
		fill: {
			opacity: 1
		},
		legend: {
			position: 'bottom',
		},
	};
	return (
		<React.Fragment>
			<ReactApexChart
				dir="ltr"
				options={options}
				series={series}
				data-chart-colors='["bg-custom-500", "bg-custom-400", "bg-custom-300"]'
				id={chartId}
				className="apex-charts"
				type='bar'
				height={300}
			/>
		</React.Fragment>
	);
};



export {
	SalesRevenueOverviewChart
}
