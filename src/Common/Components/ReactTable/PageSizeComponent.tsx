

const PageSizeComponent = ({ tableLib }:any) => {
	return (
		<div className = "self-center col-span-12 lg:col-span-6" >
			<label><span className="pr-5">Show</span>
				<select name="basic_tables_length" aria-controls="basic_tables"
					className=" py-2 form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 inline-block w-auto"
					onClick={(event: any) => tableLib.setPageSize(parseInt(event.target.value, 10))}>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
			</label>
			</div >
	)
}

export default PageSizeComponent
