import BreadCrumb from "#/Common/BreadCrumb"
import { Plus } from "lucide-react"
import React from "react"
import { useNavigate } from "react-router-dom";

const ProductComponent = () => {

	const navigate = useNavigate();

	return (
		<React.Fragment>
			<BreadCrumb title='' pageTitle='Data Product' />
			<div className="card" id="employeeTable">
				<div className="card-body">
					<div className="flex items-center gap-3 mb-4">
						<h6 className="text-15 grow">{'Product List'}</h6>
						<div className="shrink-0">
							<button data-modal-target="addCityModal" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 add-employee" onClick={() => navigate('/ecommerce/product/create')}>
								<Plus className="inline-block size-4" /> <span className="align-middle">Add City</span>
							</button>
						</div>
					</div>


					<div className="!py-3.5 card-body border-y border-dashed border-slate-200 dark:border-zink-500">
						<div className="grid grid-cols-1 gap-5 xl:grid-cols-12 mb-4">
							{/* <DownloadButtonComponent onClick={(param: string) => console.log(param)} /> */}
						</div>

						{/* Data Table */}
						{/* <CityTableComponent /> */}
					</div>


				</div>
			</div>

			{/* <AddCityComponents /> */}




		</React.Fragment>
	)
}

export default ProductComponent
