
import BreadCrumb from "#/Common/BreadCrumb";
import DownloadButtonComponent from "#/Common/Components/Button/DownloadButtonComponent";
import { Plus } from "lucide-react";
import React, { lazy } from "react";

import { useDispatch, useSelector } from "react-redux";
import { typeAction } from "./store/type.slice";

const AddTypeComponents = lazy(() => import("./components/AddTypeComponents"));
const TypeTableComponent = lazy(() => import("./components/TypeTableComponent"));


/**
 *
 * @returns
 */
const ProductTypeComponent = () => {
	const dispatch = useDispatch<any>();
	const { pageTitle } = useSelector((state: any) => state?.masterState?.ProductType);

	return (
		<React.Fragment>
			<BreadCrumb title='' pageTitle='Data Master City' />
			<div className="card" id="employeeTable">
				<div className="card-body">
					<div className="flex items-center gap-3 mb-4">
						<h6 className="text-15 grow">{pageTitle}</h6>
						<div className="shrink-0">
							<button data-modal-target="addCityModal" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 add-employee" onClick={() => dispatch(typeAction.setOpenModalAdd(true))}>
								<Plus className="inline-block size-4" /> <span className="align-middle">Add Type</span>
							</button>
						</div>
					</div>


					<div className="!py-3.5 card-body border-y border-dashed border-slate-200 dark:border-zink-500">
						<div className="grid grid-cols-1 gap-5 xl:grid-cols-12 mb-4">
							<DownloadButtonComponent onClick={(param: string) => console.log(param)} />
						</div>

						{/* Data Table */}
						<TypeTableComponent />
					</div>


				</div>
			</div>

			<AddTypeComponents />


		</React.Fragment>
	);
};

export default ProductTypeComponent;
