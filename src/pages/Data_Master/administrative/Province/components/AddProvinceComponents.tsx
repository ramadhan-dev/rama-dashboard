import { Province } from "#/interfaces/common";
import { useDispatch, useSelector } from "react-redux";
import { createNewProvince, updateProvince } from "../store/province.asyncAction";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { provinceAction } from "../store/province.slice";
import Modal from "#/Common/Components/Modal";
import ButtonComponent from "#/Common/Components/Button";
import CustomButtonComponent from "#/Common/Components/Button/CustomButtonComponent";
import FormField from "#/Common/Components/Form";

import React, { useEffect } from "react";
import ConfirmationModal from "#/Common/ConfirmationModal";


export const validationSchema = Yup.object({
	name: Yup.string()
		.required('Name is required'),
	code: Yup.string()
		.required('Email is required'),
});

const AddProvinceComponents = () => {
	const dispatch = useDispatch<any>();
	const { isEdited, error, showModal, province, showModalUpdate } = useSelector((state: any) => state?.masterState?.Province);
	const initialValues: Province = {code: isEdited ? province?.code : '', name: isEdited ? province?.name : '' }

	return  (
	<>
			<Modal show={showModal} onHide={() => dispatch(provinceAction.setShowModal(false))} modal-center="true"
				className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
				dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
				<Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
					closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
					<Modal.Title className="text-16">{isEdited ? "Edit Province" : "Add Province"}</Modal.Title>
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
								values = { ...values, ...{ id: province._id } }
								dispatch(updateProvince(values))

							} else {
								dispatch(createNewProvince(values))
							}
						}}
					>
						{({ resetForm }) => {

							/**
							 * Reset form saat pertamakali di akses
							 */
							useEffect(() => {
								resetForm()
								if (showModal) {
									dispatch(provinceAction.setFormError(''))
								}
							}, [showModal]);

							return (
								<Form>
									<FormField label="Code" name="code" />
									<FormField label="Name" name="name" />
									<div className="mt-10 flex justify-between gap-5">
										<ButtonComponent
											onClick={() => dispatch(provinceAction.setShowModalUpdate(true))}
										 	title={isEdited ? "EDIT" : "SAVE"}
											loading={false} />
										<CustomButtonComponent className="btn-horizontal-danger" title="Close" onClick={() => {
											resetForm()
											dispatch(provinceAction.setShowModal(false))
										}} />
									</div>

									<ConfirmationModal show={showModalUpdate} onHide={() => dispatch(provinceAction.setShowModalUpdate(false))} isEdited={isEdited} />

								</Form>
							)
						}}
					</Formik>
				</Modal.Body>
			</Modal>

	</>
	)
}


const AddProvinceMemo = React.memo(AddProvinceComponents)

export default AddProvinceMemo
