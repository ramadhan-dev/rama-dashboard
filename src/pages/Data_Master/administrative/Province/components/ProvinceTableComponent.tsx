import { paginationPayload } from "#/interfaces/common";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllProvince } from "../store/province.asyncAction";
import ReactTableComponent from "#/Common/Components/ReactTable";
import { usePagination } from "#/Common/Components/ReactTable/hooks/usePagination";
import { useSorting } from "#/Common/Components/ReactTable/hooks/useSorting";
import { useFilter } from "#/Common/Components/ReactTable/hooks/useFilter";
import moment from 'moment';

const ProvinceTableComponent = () => {

	const dispatch = useDispatch<any>();
	const { getDataLoading, provinceList, meta } = useSelector((state: any) => state?.masterState?.Province);


	const { limit, onPaginationChange, skip, pagination } = usePagination();
	const { sorting, onSortingChange, field, order } = useSorting();
	const { filter, onFilterChange } = useFilter();



	useEffect(() => {
		let resetMeta: paginationPayload = {
			pagination: {
				pageIndex: pagination?.pageIndex + 1,
				pageSize: pagination?.pageSize,
			},
			filter: [],
			sort: [],
			search: '',
			total: 0,
			pageCount:0
		};
		dispatch(getAllProvince(resetMeta));
	}, [limit, skip, sorting, field, order, filter])



	const cols = [
		{
			id: "code",
			header: "Code",
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['code']
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
			id: "updatedAt",
			header: "Updated At",
			enableSorting: true,
			cell: ({ row }: any) => {
				return moment(row.original['updatedAt']).format('MMMM DD YYYY')
			}
		}
	]

	return (
	<React.Fragment>
			{provinceList?.length > 0 && !getDataLoading &&(
				<ReactTableComponent
					cols={cols}
					// // columns={columns}
					data={provinceList}
					loading={getDataLoading}
					onPaginationChange={onPaginationChange}
					onSortingChange={onSortingChange}
					onFilterChange={onFilterChange}
					filter={filter}
					pageCount={meta?.pageCount}
					totalData={meta?.total}
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
			)}
	</React.Fragment>
	)
}

export default ProvinceTableComponent
