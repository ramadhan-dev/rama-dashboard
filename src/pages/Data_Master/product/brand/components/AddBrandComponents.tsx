import { ProductAtt } from "#/interfaces/common";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Modal from "#/Common/Components/Modal";
import ButtonComponent from "#/Common/Components/Button";
import CustomButtonComponent from "#/Common/Components/Button/CustomButtonComponent";
import FormField from "#/Common/Components/Form";

import React, { useEffect } from "react";
import ConfirmationModal from "#/Common/ConfirmationModal";
import { brandAction } from "../store/brand.slice";
import CustomSwitch from "#/Common/Components/Form/switch";
import { createNewBrand, updateProductBrand } from "../store/brand.asyncAction";
import TextArea from "#/Common/Components/Form/TextArea";


export const validationSchema = Yup.object({
	name: Yup.string()
		.required('Name is required'),
	code: Yup.string()
		.required('Email is required'),
});

const AddBrandComponents = () => {
	const dispatch = useDispatch<any>();
	const { isEdited, error, showModalAdd, brand, showModalConfirmation } = useSelector((state: any) => state?.masterState?.ProductBrand);

	const initialValues: ProductAtt = {
		code: isEdited ? brand?.code : '',
		name: isEdited ? brand?.name : '',
		status: isEdited ? brand.status : true,
		description: isEdited ? brand.description : '',

	}

	return (
		<>
			<Modal show={showModalAdd} onHide={() => dispatch(brandAction.setOpenModalAdd(false))} modal-center="true"
				className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
				dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
				<Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
					closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
					<Modal.Title className="text-16">{isEdited ? "Edit Brand" : "Add Brand"}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
					{error && (
						<div className="px-4 py-3 mb-3 text-sm text-red-500 border border-red-200 rounded-md bg-red-50 dark:bg-red-400/20 dark:border-red-500/50" id="successAlert">
							{error}
						</div>
					)}

					<Formik
						enableReinitialize={true}
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							if (isEdited) {
								values = { ...values, ...{ id: brand._id } }
								dispatch(updateProductBrand(values))

							} else {
								dispatch(createNewBrand(values))
							}
						}}
					>
						{({ resetForm, setFieldValue, values }) => {

							/**
							 * Reset form saat pertamakali di akses
							 */
							useEffect(() => {
								if (showModalAdd) {
									resetForm()
									dispatch(brandAction.setFormError(''))
								}
							}, [showModalAdd]);

							return (
								<Form>
									<FormField label="Code" name="code" />
									<FormField label="Name" name="name" />
									<TextArea label="Description" name="description" />

									<div className="mb-4">
										<CustomSwitch
											label="Status"
											name="status"
											onClick={() => setFieldValue('status', !values.status)}
											value={values?.status}
										/>
									</div>

									<div className="mt-10 flex justify-between gap-5">
										<ButtonComponent
											onClick={() => dispatch(brandAction.setShowModalUpdate(true))}
											title={isEdited ? "EDIT" : "SAVE"}
											loading={false} />
										<CustomButtonComponent className="btn-horizontal-danger" title="Close" onClick={() => {
											resetForm()
											dispatch(brandAction.setOpenModalAdd(false))
										}} />
									</div>
									<ConfirmationModal show={showModalConfirmation} onHide={() => dispatch(brandAction.setShowModalUpdate(false))} isEdited={isEdited} />

								</Form>
							)
						}}
					</Formik>
				</Modal.Body>
			</Modal>

		</>
	)
}


const AddBrandMemo = React.memo(AddBrandComponents)

export default AddBrandMemo
