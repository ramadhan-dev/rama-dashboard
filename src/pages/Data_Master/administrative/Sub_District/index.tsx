
import BreadCrumb from "#/Common/BreadCrumb";
import { Plus } from "lucide-react";
import React, { lazy } from "react";

import { useDispatch, useSelector } from "react-redux";
import { subDistrictAction } from './store/subdistrict.slice';

const AddSubDistrictComponents = lazy(() => import("./components/AddSubDistrictComponents"));
const DownloadButtonComponent = lazy(() => import("#/Common/Components/Button/DownloadButtonComponent"));
const DistrictTableComponent = lazy(() => import("./components/SubDistrictTableComponent"));


/**
 *
 * @returns
 */
const SubDistrictComponent = () => {

	const dispatch = useDispatch<any>();
	const { pageTitle } = useSelector((state: any) => state?.masterState?.SubDistrict);

	return (
		<React.Fragment>
			<BreadCrumb title='' pageTitle='Data Master Sub District' />
			<div className="card" id="employeeTable">
				<div className="card-body">
					<div className="flex items-center gap-3 mb-4">
						<h6 className="text-15 grow">{pageTitle}</h6>
						<div className="shrink-0">
							<button data-modal-target="addDistrictModal" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 add-employee" onClick={() => dispatch(subDistrictAction.setShowModal(true))}>
								<Plus className="inline-block size-4" /> <span className="align-middle">Add District</span>
							</button>
						</div>
					</div>


					<div className="!py-3.5 card-body border-y border-dashed border-slate-200 dark:border-zink-500">
						<div className="grid grid-cols-1 gap-5 xl:grid-cols-12 mb-4">
							<DownloadButtonComponent onClick={(param: string) => console.log(param)} />
						</div>

						{/* Data Table */}
						<DistrictTableComponent />
					</div>


				</div>
			</div>

			<AddSubDistrictComponents />




		</React.Fragment>
	);
};

export default SubDistrictComponent;
