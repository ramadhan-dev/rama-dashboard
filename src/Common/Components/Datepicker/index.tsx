import { CalendarRange } from "lucide-react"
import React from "react"
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/flatpickr.css";

const DatePickerComponent = () => {
	return (
		<React.Fragment>
			<CalendarRange className="absolute size-4 ltr:left-3 rtl:right-3 top-3 text-slate-500 dark:text-zink-200"></CalendarRange>
			<Flatpickr
				className="ltr:pl-10 rtl:pr-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
				options={{
					dateFormat: "d M, Y",
					mode: "range",
				}}
				placeholder='Select Date'
			/>
		</React.Fragment>
	)
}
export default DatePickerComponent
