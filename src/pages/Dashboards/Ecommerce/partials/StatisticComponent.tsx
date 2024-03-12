import useChartColors from '#/Common/useChartColors';
import React from 'react'
import ReactApexChart from "react-apexcharts";

interface StatisticComponentProps {
    chartId:any
}

const StatisticComponent: React.FC<StatisticComponentProps> = ({ chartId }) => {
    const chartColors = useChartColors(chartId);

    //Order Statistics
    const series = [{
        name: 'Pending',
			data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35, 17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35,25, 20, 25, 31, 28, 35,]
    }, {
        name: 'New Orders',
			data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28, 30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28,32, 21, 24, 20, 38, 28,]
    }];
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
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-purple-500", "bg-sky-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={310}
            />
        </React.Fragment>
    );
}

export default StatisticComponent
