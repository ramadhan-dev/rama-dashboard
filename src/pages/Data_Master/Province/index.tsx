
import BreadCrumb from "#/Common/BreadCrumb";
import Modal from "#/Common/Components/Modal";
import { Province } from "#/interfaces/common";
import { Plus } from "lucide-react";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import * as Yup from "yup";
import { useFormik as useFormic } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "#/pages/Authentication/store/login.asyncAction";

const ProvinceComponent = () => {
	const [show, setShow] = useState<boolean>(false);
	const [edit, setEdit] = useState<boolean>(false);

	const dispatch = useDispatch<any>();
	const {error, success} = useSelector((state:any) => state?.masterState?.Login);

	// const { success, error } = useSelector(provinceSelector)
	// console.log("🚀 ~ ProvinceComponent ~ success:", success)

	React.useEffect(() => {
		if (success) {
			setShow((prev) => !prev);
		}
	}, [success]);


	const initialValues: Province = {
		code: "",
		name: "",
	}

	const validation: any = useFormic({
		// enableReinitialize : use this flag when initial values needs to be changed
		enableReinitialize: true,
		initialValues,
		validationSchema: Yup.object({
			code: Yup.string().required("Please Enter Your Province Code"),
			name: Yup.string().required("Please Enter Your Province Name"),
		}),
		onSubmit: (values: any) => {
			dispatch(doLogin(values));
		}
	});

	//
	const toggle = useCallback(() => {
		setShow((prev) => !prev);
	}, [show]);

	return (
		<React.Fragment>
			<BreadCrumb title='' pageTitle='Data Master Province' />
			{/* <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} /> */}
			<ToastContainer closeButton={false} limit={1} />
			<div className="card" id="employeeTable">
				<div className="card-body">
					<div className="flex items-center gap-3 mb-4">
						<h6 className="text-15 grow">Province (<b className="total-Employs">{10}</b>)</h6>
						<div className="shrink-0">
							<Link to="#!" data-modal-target="addProvinceModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 add-employee" onClick={toggle}>
								<Plus className="inline-block size-4" /> <span className="align-middle">Add Province</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<Modal show={show} onHide={toggle} modal-center="true"
				className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
				dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
				<Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
					closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
					<Modal.Title className="text-16">{edit ? "Edit Province" : "Add Province"}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
					{error && <div className="px-4 py-3 mb-3 text-sm text-red-500 border border-red-200 rounded-md bg-red-50 dark:bg-red-400/20 dark:border-red-500/50" id="successAlert">
						{error}
					</div>}

					<form action="/" className="mt-10" id="registerForm"
						onSubmit={(event: any) => {
							event.preventDefault();
							validation.handleSubmit();
							return false;
						}}>
					<div className="mb-3">
						<label htmlFor="code-field" className="inline-block mb-2 text-base font-medium">Province Code</label>
						<input
							type="text"
							id="code-field"
							name="code"
							className="default-form"
							placeholder="Enter Province Code"
							onChange={validation.handleChange}
							onBlur={validation.handleBlur}
							value={validation.values.code || ""}
							/>
						{validation.touched.code && validation.errors.code ? (
							<div id="code-error" className="mt-1 text-sm text-red-500">{validation.errors.code}</div>
						) : null}
					</div>


						<div className="mb-3">
							<label htmlFor="name-field" className="inline-block mb-2 text-base font-medium">Province Name</label>
							<input
								type="text"
								id="name-field"
								name="name"
								className="default-form"
								placeholder="Enter Province Name"
								onChange={validation.handleChange}
								onBlur={validation.handleBlur}
								value={validation.values.name || ""}
							/>
							{validation.touched.name && validation.errors.name ? (
								<div id="name-error" className="mt-1 text-sm text-red-500">{validation.errors.name}</div>
							) : null}
						</div>

						<div className="mt-10">
							<button type="submit" className="w-full text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Save</button>
						</div>

					</form>

					</Modal.Body>
					</Modal>

		</React.Fragment>
	);
};

export default ProvinceComponent;
