import { paginationPayload } from "#/interfaces/common";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteProvince, getAllProvince, getOneProvince } from "../store/province.asyncAction";
import ReactTableComponent from "#/Common/Components/ReactTable";
import { usePagination } from "#/Common/Components/ReactTable/hooks/usePagination";
import { useSorting } from "#/Common/Components/ReactTable/hooks/useSorting";
import { useFilter } from "#/Common/Components/ReactTable/hooks/useFilter";
import moment from 'moment';
import DeleteModal from "#/Common/DeleteModal";
import { provinceAction } from "../store/province.slice";
import { toast } from "react-toastify";

const ProvinceTableComponent = () => {

	const dispatch = useDispatch<any>();
	const { getDataLoading, provinceList, meta, isUpdated, isDeleted, showModalDelete, dataSelected } = useSelector((state: any) => state?.masterState?.Province);


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
			pageCount: 0
		};
		dispatch(getAllProvince(resetMeta));
	}, [limit, skip, sorting, field, order, filter])


	useEffect(() => {
		if (isUpdated || isDeleted) {
			const newMeta = {
				...meta, ...{
					pagination: {
						pageSize: pagination.pageSize,
						pageIndex: pagination?.pageIndex + 1,
					}
				}
			}
			dispatch(getAllProvince(newMeta));
		}
	}, [isUpdated, isDeleted])


	/**
	 * @description fungsi untuk mengambil detail data, dan menampilkan form edit
	 * @param id
	 */
	const editData = (id: string) => {
		dispatch(getOneProvince(id));
	}

	const onDelete = () => {
		dispatch(deleteProvince(dataSelected));
	}



	const cols = [
		{
			id: "code",
			header: "Code",
			size: 250,
			minSize: 100,
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['code']
			}
		},
		{
			id: "name",
			header: "Name",
			size: 250,
			minSize: 100,
			enableSorting: true,
			cell: ({ row }: any) => {
				return row.original['name']
			}
		},
		{
			id: "updatedAt",
			header: "Updated At",
			size: 250,
			minSize: 100,
			enableSorting: true,
			cell: ({ row }: any) => {
				return moment(row.original['updatedAt']).format('MMMM DD YYYY')
			}
		},
		{
			id: "action",
			header: "Action",
			headerAlign: 'center',
			size: 50,
			minSize: 20,
			enableSorting: true,
			cell: ({ row }: any) => {
				const id = row.original['_id']
				return (
					<div className="flex gap-5 justify-center">
						<button
							onClick={() => editData(id)}
							type="button"
							className="bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500 dark:ring-custom-400/20 dark:focus:bg-custom-500"
						>Edit</button>

						<button
							onClick={() => {
								dispatch(provinceAction.setShowModalDelete(true))
								dispatch(provinceAction.setDataSelected(id))
							}}
							type="button"
							className="bg-white text-red-500 btn border-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-custom-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-custom-100 dark:bg-zink-700 dark:hover:bg-red-500 dark:ring-red-400/20 dark:focus:bg-red-500"
						>Delete</button>
					</div>
				)
			}
		}
	]

	return (
		<React.Fragment>
			<DeleteModal show={showModalDelete} onHide={() => dispatch(provinceAction.setShowModalDelete(false))} onDelete={() => onDelete()} />
			{provinceList?.length > 0 && !getDataLoading && (
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
