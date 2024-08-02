
import BreadCrumb from "#/Common/BreadCrumb";
import { DownloadIcon, FileText, Plus, Search } from "lucide-react";
import React, { useEffect } from "react";
import Select from 'react-select';

import { useDispatch, useSelector } from "react-redux";
import { getAllProvince } from "./store/province.asyncAction";

import { provinceAction } from './store/province.slice';
import AddProvinceComponents from "./components/AddProvinceComponents";
import { Dropdown } from "#/Common/Components/Dropdown";
import { paginationPayload } from "#/interfaces/common";

const ProvinceComponent = () => {

	const dispatch = useDispatch<any>();
	const { pageTitle } = useSelector((state: any) => state?.masterState?.Province);


	useEffect(() => {
		let resetMeta:paginationPayload = {
			pagination: {
				page: 1,
				size: 10,
			},
			filter: [],
			sort: [],
			search: '',
			total: 0,
			lastId:null
		};
		dispatch(getAllProvince(resetMeta));
	}, [])

	return (
		<React.Fragment>
			<BreadCrumb title='' pageTitle='Data Master Province' />
			{/* <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} /> */}
			{/* <ToastContainer closeButton={false} limit={1} /> */}
			<div className="card" id="employeeTable">
				<div className="card-body">
					<div className="flex items-center gap-3 mb-4">
						<h6 className="text-15 grow">{pageTitle}</h6>
						<div className="shrink-0">
							<button data-modal-target="addProvinceModal" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 add-employee" onClick={() => dispatch(provinceAction.setShowModal(true))}>
								<Plus className="inline-block size-4" /> <span className="align-middle">Add Province</span>
							</button>
						</div>
					</div>


					<div className="!py-3.5 card-body border-y border-dashed border-slate-200 dark:border-zink-500">
						<div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
							<div className="relative xl:col-span-2">
								<input type="text" className="default-form ltr:pl-8 rtl:pr-8 search" placeholder="Search for name, email,  etc..." autoComplete="off" onChange={(e) => alert(1)} />
								<Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
							</div>
							<div className="xl:col-span-2">
								<Select
									className="form-search"
									options={[{'label':'1', value:1}]}
									isSearchable={false}
									defaultValue={[{ 'label': '1', value: 1 }][0]}
									onChange={(event: any) => alert(1)}
									id="choices-single-default"
								/>
							</div>
							<div className="xl:col-span-3 xl:col-start-10">
								<div className="flex gap-2 xl:justify-end">
									<Dropdown className="relative">
										<Dropdown.Trigger type="button" className="bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20 dropdown-toggle" id="export-drodown" data-bs-toggle="dropdown">
											Export
											<DownloadIcon className="inline-block size-4 ltr:ml-3 rlt:mr-3" />
										</Dropdown.Trigger>

										<Dropdown.Content placement="right-end" className="absolute z-50 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600 gap-4" aria-labelledby="export-drodown">
											<li className="border-t dark:border-zink-300/50 pointer">
												<span className="export-list dropdown-item" > <FileText className="inline-block size-4 ltr:ml-1 rlt:mr-1 text-green-500"></FileText> Excel (xlsx)</span>
											</li>
											<li className="border-t dark:border-zink-300/50 pointer">
												<span className="export-list dropdown-item" > <FileText className="inline-block size-4 ltr:ml-1 rlt:mr-1 text-red-500"></FileText> PDF</span>
											</li>
										</Dropdown.Content>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<AddProvinceComponents />




		</React.Fragment>
	);
};

export default ProvinceComponent;
