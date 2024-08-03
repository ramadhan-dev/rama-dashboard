import { Link } from "react-router-dom"
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface IPaginationComponent {
	tableLib: any
	PaginationClassName: string
	totalData: any
}


const PaginationComponent: React.FC<IPaginationComponent> = ({ tableLib, PaginationClassName, totalData }) => {
	const totalPagination = Math.ceil(totalData / tableLib?.getState().pagination.pageSize);

	const [itemsPagination, setItemPagination] = useState<any[]>([])
	const [currentPage, setCurrentPage] = useState<number>(0)
	let pageIndex = tableLib?.getState().pagination.pageIndex
	let MINIMAL_PAGE_ITEM_COUNT = 9;


	/**
	 *
	 * @param total number
	 * @param current number
	 * @param width number
	 * @returns
	 */
	function generatePageItems(total: number, current: number, width: number) {
		if (width < MINIMAL_PAGE_ITEM_COUNT) {
			throw new Error(`Must allow at least ${MINIMAL_PAGE_ITEM_COUNT} page items`);
		}
		if (width % 2 === 0) {
			throw new Error(`Must allow odd number of page items`);
		}
		if (total < width) {
			return [...new Array(total).keys()];
		}
		const left = Math.max(0, Math.min(total - width, current - Math.floor(width / 2)));
		let items: any[] = new Array(width);
		for (let i = 0; i < width; i += 1) {
			items[i] = i + left;
		}
		// replace non-ending items with placeholders
		if (items[0] > 0) {
			items[0] = 0;
			items[1] = 'prev-more';
		}
		if (items[items.length - 1] < total - 1) {
			items[items.length - 1] = total - 1;
			items[items.length - 2] = 'next-more';
		}
		return items;
	}


	/**
	 * init pagination
	 */
	useEffect(() => {
		const pagination = generatePageItems(totalPagination, pageIndex, 9)
		setItemPagination(pagination)
		setCurrentPage(pageIndex)
	}, [pageIndex, totalData])


	return (
		<div className={PaginationClassName}>
			<div className="mb-4 grow md:mb-0">
				<div className="text-slate-500 dark:text-zink-200">Showing
					<b> {tableLib?.getState().pagination.pageSize}</b> of
					<b> {totalData}</b> Results</div>
			</div>
			<ul className="flex flex-wrap items-center gap-2 shrink-0">

				<li>
					<Link to="#!" className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto ${!tableLib?.getCanPreviousPage() && "disabled"}`} onClick={() => {
						tableLib.setPageIndex(0)
						setCurrentPage(0)

					}}>
						<ChevronsLeft className="size-4 mr-1 rtl:rotate-180"></ChevronsLeft> First</Link>
				</li>


				{itemsPagination?.map((data: any, index: number) => {
					return typeof data === 'number' ?
						(
							<li key={index}>
								<Link to="#" className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto ${tableLib?.getState().pagination.pageIndex === data && "active"}`} onClick={() => {
									tableLib?.setPageIndex(data)
									setCurrentPage(data)

								}}>{data + 1}</Link>
							</li>
						) :
						(
							<span key={index} className="relative inline-flex items-center px-2 py-2 text-sm font-semibold">. . .</span>
						)
				})}


				<li>
					<Link to="#!" className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto ${!tableLib?.getCanNextPage() && "disabled"}`} onClick={() => {
									tableLib.setPageIndex(totalPagination - 1)
									setCurrentPage(totalPagination - 1)
									}
							}>
						Last <ChevronsRight className="size-4 ml-1 rtl:rotate-180"></ChevronsRight> </Link>
				</li>

				<li>
					<input type="text" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 w-20 h-8" placeholder="Go to"
					 	onKeyDown={(e:any) => {
							if (e.key === "Enter")
								tableLib?.setPageIndex(e?.target?.value - 1)
								setCurrentPage(e?.target?.value - 1)
							}}
						>

					</input>
				</li>

			</ul>
		</div>
	)
}

export default PaginationComponent
