import { flexRender } from "@tanstack/react-table"
import React from "react"

interface ITableBodyComponent {
	tableLib:any
	tbodyclassName: string
	trclassName: string
	tdclassName: string
}

const TableBodyComponent: React.FC<ITableBodyComponent> = ({ tableLib, tbodyclassName, trclassName, tdclassName }) => {
	return (
		<tbody className={tbodyclassName}>
			{tableLib?.getRowModel().rows.map((row:any) => {
				return (
					<tr key={row.id} className={trclassName}>
						{row.getVisibleCells().map((cell:any) => {
							const { columnDef } = cell.column;
							return (
								<td key={cell.id} className={tdclassName} style={{ textAlign: columnDef.bodyAlign }}>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext()
									)}
								</td>
							);
						})}
					</tr>
				);
			})}
		</tbody>
	)
}

export default TableBodyComponent
