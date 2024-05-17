import { flexRender } from "@tanstack/react-table"
import React from "react"

interface ITableHeaderComponent {
	tableLib:any
	theadclassName: string
	trclassName: string
	thclassName: string
}

const TableHeaderComponent: React.FC<ITableHeaderComponent> = ({ tableLib, theadclassName, trclassName, thclassName }) => {
	return (
		<thead className={theadclassName}>
			{tableLib?.getHeaderGroups().map((headerGroup:any) => (
				<tr key={headerGroup.id} className={trclassName}>
					{headerGroup.headers.map((header:any) => {
						return (
							<th key={header.id} colSpan={header.colSpan}
								{...{
									className: `${header.column.getCanSort()} ${thclassName}`,
									onClick: header.column.getToggleSortingHandler(),
								}}>

								{header.isPlaceholder ? null : (
									<React.Fragment>
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
										{{
											asc: ' ',
											desc: ' ',
										}
										[header.column.getIsSorted() as string] ?? null}
										{/* {header.column.getCanFilter() ? (
														<div>
															<Filter column={header.column} table={table} />
														</div>
													) : null} */}
									</React.Fragment>
								)}
							</th>
						);
					})}
				</tr>
			))}
		</thead>
	)
}

export default TableHeaderComponent
