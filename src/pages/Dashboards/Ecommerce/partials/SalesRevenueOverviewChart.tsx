import useChartColors from "#/Common/useChartColors";
import React from "react";
import ReactApexChart from "react-apexcharts";


interface ISalesRevenueOverviewChart {
	chartId:string
	series:any
	xAxis:string[]
}

const SalesRevenueOverviewChart: React.FC<ISalesRevenueOverviewChart> = ({ chartId, series, xAxis }) => {


	const chartColors = useChartColors(chartId);

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
			categories: xAxis,
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
			{series?.length > 0 && (
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
			)}
		</React.Fragment>
	);
};



export default SalesRevenueOverviewChart
