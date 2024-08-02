
import BreadCrumb from "#/Common/BreadCrumb";
import { Plus } from "lucide-react";
import React, { lazy } from "react";

import { useDispatch, useSelector } from "react-redux";
import { provinceAction } from './store/province.slice';

const AddProvinceComponents = lazy(() => import("./components/AddProvinceComponents"));
const DownloadButtonComponent = lazy(() => import("#/Common/Components/Button/DownloadButtonComponent"));
const ProvinceTableComponent = lazy(() => import("./components/ProvinceTableComponent"));


/**
 *
 * @returns
 */
const ProvinceComponent = () => {

	const dispatch = useDispatch<any>();
	const { pageTitle } = useSelector((state: any) => state?.masterState?.Province);

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
						<div className="grid grid-cols-1 gap-5 xl:grid-cols-12 mb-4">
							<DownloadButtonComponent onClick={(param: string) => console.log(param)} />
						</div>

						{/* Data Table */}
						<ProvinceTableComponent />
					</div>


				</div>
			</div>

			<AddProvinceComponents />




		</React.Fragment>
	);
};

export default ProvinceComponent;
