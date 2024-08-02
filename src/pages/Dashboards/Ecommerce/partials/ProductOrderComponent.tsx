import React from "react";

import ReactTableComponent from "#/Common/Components/ReactTable";
import { usePagination } from "#/Common/Components/ReactTable/hooks/usePagination";
import { useSorting } from "#/Common/Components/ReactTable/hooks/useSorting";
import { useMockAPI } from "../mock";
import { useFilter } from "#/Common/Components/ReactTable/hooks/useFilter";


const ProductOrder3Component = () => {

	// type TPerson = {
	// 	id: string | number;
	// 	firstName: string;
	// 	lastName: string;
	// 	age: number;
	// 	visits: number;
	// 	status: string;
	// 	progress: number;
	// 	subRows?: TPerson[];
	// };




	const { limit, onPaginationChange, skip, pagination } = usePagination();
	const { sorting, onSortingChange, field, order } = useSorting();
	const { filter, onFilterChange } = useFilter();

	const [data, count, loading]: any = useMockAPI("/episodes", {
		pagination: { skip, limit },
		sort: { field, order }
	});

	const cols = [
		{
			header: "No",
			id: "id",
			cell: ({ row, table }: any) => {
				return (
					table.getSortedRowModel()?.flatRows?.findIndex((flatRow: any) => flatRow.id === row.id) || 0
				) + 1 + skip;
			}
		},
		{
			id: "email",
			header: "Email",
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['email']
			}
		},
		{
			id: "name",
			header: "Name",
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['name']
			}
		},
		{
			id: "address",
			header: "Address",
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['address']
			}
		},
		{
			id: "bio",
			header: "BIO",
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['bio']
			}
		},
		{
			id: "image",
			header: "Image",
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['image']
			}
		},
	];



	const pageCount = Math.round(count / limit);

	return (
		<React.Fragment>
			<div className="card">
				<div className="card-body">
					<h6 className="mb-4 text-15">Product Order</h6>
					<ReactTableComponent
						cols={cols}
						// columns={columns}
						data={data}
						loading={loading}
						onPaginationChange={onPaginationChange}
						onSortingChange={onSortingChange}
						onFilterChange={onFilterChange}
						filter={filter}
						pageCount={pageCount}
						totalData={count}
						pagination={pagination}
						sorting={sorting}
						divclassName="my-2 col-span-12 overflow-x-auto lg:col-span-12"
						tableclassName="bordered group dataTable w-full text-sm align-middle whitespace-nowrap no-footer"
						theadclassName="border-b border-slate-200 dark:border-zink-500"
						trclassName="group-[.stripe]:even:bg-slate-50 group-[.stripe]:dark:even:bg-zink-600 transition-all duration-150 ease-linear group-[.hover]:hover:bg-slate-50 dark:group-[.hover]:hover:bg-zink-600 [&.selected]:bg-custom-500 dark:[&.selected]:bg-custom-500 [&.selected]:text-custom-50 dark:[&.selected]:text-custom-50"
						thclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500"
						tdclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500"
						PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
					/>
				</div>
			</div>

		</React.Fragment>
	);
}

export default ProductOrder3Component;
