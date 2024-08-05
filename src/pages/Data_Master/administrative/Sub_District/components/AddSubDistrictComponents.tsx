import { SubDistrict } from "#/interfaces/common";
import { useDispatch, useSelector } from "react-redux";
import { createNewSubDistrict, updateSubDistrict } from "../store/subdistrict.asyncAction";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { subDistrictAction } from "../store/subdistrict.slice";
import Modal from "#/Common/Components/Modal";
import ButtonComponent from "#/Common/Components/Button";
import CustomButtonComponent from "#/Common/Components/Button/CustomButtonComponent";
import FormField from "#/Common/Components/Form";

import React, { useEffect } from "react";
import ConfirmationModal from "#/Common/ConfirmationModal";
import { getProvinceOptions } from "../../Province/store/province.asyncAction";
import SelectComponent from "#/Common/Components/Select";
import { getCityOptions } from "../../City/store/city.asyncAction";
import { getDistrictOptions } from "../../District/store/district.asyncAction";


export const validationSchema = Yup.object({
	name: Yup.string()
		.required('Name is required'),
	code: Yup.string()
		.required('Email is required'),
});

const AddSubDistrictComponents = () => {
	const dispatch = useDispatch<any>();
	const { isEdited, error, showModal, subDistrict, showModalUpdate } = useSelector((state: any) => state?.masterState?.SubDistrict);
	const { provinceOptions } = useSelector((state: any) => state?.masterState?.Province);
	const { cityOptions } = useSelector((state: any) => state?.masterState?.City);
	const { districtOptions } = useSelector((state: any) => state?.masterState?.District);

	const initialValues: SubDistrict = {
		code: isEdited ? subDistrict?.code : '',
		name: isEdited ? subDistrict?.name : '',
		province_code: isEdited ? subDistrict.province_data : '',
		city_code: isEdited ? subDistrict.city_data : '',
		district_code: isEdited ? subDistrict.district_data : '',
	}

	return (
		<>
			<Modal data-modal-backdrop="static" show={showModal} onHide={() => dispatch(subDistrictAction.setShowModal(false))} modal-center="true"
				className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
				dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
				<Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
					closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
					<Modal.Title className="text-16">{isEdited ? "Edit SubDistrict" : "Add SubDistrict"}</Modal.Title>
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
								values = {
									...values,
									...{
										id: subDistrict._id,
										district_code: values?.district_code?.value,
									}
								}

								dispatch(updateSubDistrict(values))

							} else {
								const newValue = {
									...values,
									...{
										district_code: values?.district_code?.value,
									}
								}
								dispatch(createNewSubDistrict(newValue))
							}
						}}
					>
						{({ resetForm, isValid, setFieldValue, values }) => {

							/**
							 * @description saat form baru di load, reset nilai form sebelumnya
							 * @description load Data Province
							 */
							useEffect(() => {
								resetForm()
								if (showModal) {
									dispatch(subDistrictAction.setFormError(''))
									dispatch(subDistrictAction.setShowModalUpdate(false))
									dispatch(getProvinceOptions(undefined))
								}
							}, [showModal]);

							return (
								<Form>
									<FormField label="Code" name="code" />
									<FormField label="Name" name="name" />

									<SelectComponent
										value={values.province_code}
										onChange={option => {
											setFieldValue('province_code', option)
											dispatch(getCityOptions(option.value))
											setFieldValue('city_code', '')
											setFieldValue('district_code', '')
										}}
										selectOptions={provinceOptions}
										name="province_code"
										title="Select Province"
									/>

									<SelectComponent
										value={values.city_code}
										onChange={option => {
											setFieldValue('city_code', option)
											dispatch(getDistrictOptions(option.value))
											setFieldValue('district_code', '')
										}}
										selectOptions={cityOptions}
										name="city_code"
										title="Select City"
									/>

									<SelectComponent
										value={values.district_code}
										onChange={option => setFieldValue('district_code', option)}
										selectOptions={districtOptions}
										name="district_code"
										title="Select District"
									/>


									<div className="mt-10 flex justify-between gap-5">
										<ButtonComponent
											onClick={() => dispatch(subDistrictAction.setShowModalUpdate(true))}
											title={isEdited ? "EDIT" : "SAVE"}
											loading={!isValid} />
										<CustomButtonComponent className="btn-horizontal-danger" title="Close" onClick={() => {
											resetForm()
											dispatch(subDistrictAction.setShowModal(false))
										}} />
									</div>

									<ConfirmationModal show={showModalUpdate} onHide={() => dispatch(subDistrictAction.setShowModalUpdate(false))} isEdited={isEdited} />

								</Form>
							)
						}}
					</Formik>
				</Modal.Body>
			</Modal>

		</>
	)
}


const AddSubDistrictMemo = React.memo(AddSubDistrictComponents)

export default AddSubDistrictMemo
