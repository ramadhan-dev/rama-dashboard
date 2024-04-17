import useChartColors from '#/Common/useChartColors';
import { getOrderStatistic } from '#/slices/thunk';
import { createSelector } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';

interface StatisticComponentProps {
	chartId: any
}

const StatisticComponent: React.FC<StatisticComponentProps> = ({ chartId }) => {

	const dispatch = useDispatch<any>();

	const selectDataList = createSelector(
		(state: any) => state.Ecommerce,
		(state) => ({
			dataList: state?.orderStatistics
		})
	);

	const { dataList: { series, xAxis } } = useSelector(selectDataList);

	// Get Data
	useEffect(() => {
		dispatch(getOrderStatistic());
	}, [dispatch]);

	const chartColors = useChartColors(chartId);

	//Order Statistics
	const seriesData = series;
	var options: any = {
		chart: {
			type: 'line',
			height: 310,
			toolbar: {
				show: false,
			},
		},
		stroke: {
			curve: 'smooth',
			width: 2,
		},
		colors: chartColors,
		dataLabels: {
			enabled: false
		},
		xAxis: {
			type: 'category',
			categories: xAxis,
		},
		grid: {
			show: true,
			padding: {
				top: -20,
				right: 0,
			}
		},
		markers: {
			hover: {
				sizeOffset: 4
			}
		}
	};
	return (
		<React.Fragment>
			{series?.length > 0 && (
				<ReactApexChart
					dir="ltr"
					options={options}
					series={seriesData}
					data-chart-colors='["bg-purple-500", "bg-sky-500"]'
					id={chartId}
					className="apex-charts"
					type='line'
					height={450}
				/>
			)}
		</React.Fragment>
	);
}

export default StatisticComponent
