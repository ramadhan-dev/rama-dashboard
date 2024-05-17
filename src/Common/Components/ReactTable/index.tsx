import { createColumnHelper, FilterFn, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Fragment, useMemo } from "react";
import PageSizeComponent from "./PageSizeComponent";
import { rankItem } from "@tanstack/match-sorter-utils";
import SearchComponent from "./SearchComponent";
import TableHeaderComponent from "./TableHeaderComponent";
import TableBodyComponent from "./TableBodyComponent";
import PaginationComponent from "./PaginationComponent";

const ReactTableComponent = ({
	// columns,
	cols,
	data,
	loading,
	onPaginationChange,
	onSortingChange,
	onFilterChange,
	pageCount,
	pagination,
	sorting,
	filter,
	totalData,
	divclassName,
	tableclassName,
	theadclassName,
	trclassName,
	thclassName,
	tdclassName,
	tbodyclassName,
	PaginationClassName
}: any) => {

	const columnHelper = createColumnHelper();
	const columns = useMemo(() => cols.map(({ id, header, enableSorting, cell }: any) => {
		return ({
			...columnHelper.accessor(id, { header }),
			enableSorting,
			cell
		})
	}), [cols]);


	const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
		const itemRank = rankItem(row.getValue(columnId), value);
		addMeta({
			itemRank
		});
		return itemRank.passed;
	};


	// Setup Table
	const tableLib = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		manualSorting: true,
		onPaginationChange,
		onSortingChange,
		state: { pagination, sorting },
		pageCount,
	});




	return (
		<Fragment>

			<div className="grid grid-cols-12 lg:grid-cols-12 gap-3">
				<PageSizeComponent tableLib={tableLib} />
				<SearchComponent filter={filter} onFilterChange={onFilterChange} />
			</div>

			<div className={divclassName}>
				<table className={tableclassName}>

					<TableHeaderComponent tableLib={tableLib} theadclassName={theadclassName} trclassName={trclassName} thclassName={thclassName} />

					{loading && ( <>loading...</>)}
					{!loading && ( <TableBodyComponent tableLib={tableLib} tbodyclassName={tbodyclassName} tdclassName={tdclassName} trclassName={trclassName} /> )}

				</table>
			</div>

			<PaginationComponent tableLib={tableLib} totalData={totalData} PaginationClassName={PaginationClassName} />
		</Fragment>
	)
}

export default ReactTableComponent
