import React from "react";
import AuthIcon from "#/pages/AuthenticationInner/AuthIcon";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetRegisterFlag } from "#/slices/thunk";
import { createSelector } from 'reselect';
import { Link, useNavigate } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik as useFormic } from "formik";

// Image
import { RootState } from "#/slices";
import { User } from "#/interfaces/common";

const Register = () => {

	document.title = "Register | Tailwick - React Admin & Dashboard Template";

	const dispatch = useDispatch<any>();
	const navigation = useNavigate(); // Use the useNavigate hook

	const selectRegister = createSelector(
		(state: RootState) => state.Register,
		(register) => ({
			success: register.success,
			error: register.error

		})
	)

	const { success, error } = useSelector(selectRegister)

	const initialValues: User = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		role: "admin",
	}

	const validation: any = useFormic({
		// enableReinitialize : use this flag when initial values needs to be changed
		enableReinitialize: true,
		initialValues,
		validationSchema: Yup.object({
			firstName: Yup.string().required("Please Enter Your First Name"),
			lastName: Yup.string().required("Please Enter Your Last Name"),
			email: Yup.string().email().required("Please Enter Your Email"),
			password: Yup.string().required("Please Enter Your Password"),
		}),
		onSubmit: (values: any) => {
			dispatch(registerUser(values));
		}
	});

	React.useEffect(() => {

		if (success) {
			navigation('/login')
		}

		setTimeout(() => {
			dispatch(resetRegisterFlag());
		}, 3000);

	}, [dispatch, success, navigation]);

	React.useEffect(() => {
		const bodyElement = document.body;

		bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');

		return () => {
			bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');
		}
	}, []);

	return (
		<React.Fragment>
			<div className="relative">

				<AuthIcon />

				<div className="mb-0 w-screen lg:w-[500px] card shadow-lg border-none shadow-slate-100 relative">
					<div className="!px-10 !py-12 card-body">
						{/* <Link to="/">
							<img src={logoLight} alt="" className="hidden h-6 mx-auto dark:block" />
							<img src={logoDark} alt="" className="block h-6 mx-auto dark:hidden" />
						</Link> */}

						<div className="mt-8 text-center">
							<h4 className="mb-1 text-custom-500 dark:text-custom-500">Create your free account</h4>
							<p className="text-slate-500 dark:text-zink-200">Get your free account now</p>
						</div>

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
								<label htmlFor="email-field" className="inline-block mb-2 text-base font-medium">Email</label>
								<input
									type="text"
									id="email-field"
									name="email"
									className="default-form"
									placeholder="Enter email"
									onChange={validation.handleChange}
									onBlur={validation.handleBlur}
									value={validation.values.email || ""} />
								{validation.touched.email && validation.errors.email ? (
									<div id="email-error" className="mt-1 text-sm text-red-500">{validation.errors.email}</div>
								) : null}
							</div>

							<div className="mb-3">
								<label htmlFor="firstName-field" className="inline-block mb-2 text-base font-medium">First Name</label>
								<input
									type="text"
									id="firstName-field"
									name="firstName"
									className="default-form"
									placeholder="Enter First Name"
									onChange={validation.handleChange}
									onBlur={validation.handleBlur}
									value={validation.values.firstName || ""} />
								{validation.touched.firstName && validation.errors.firstName ? (
									<div id="firstName-error" className="mt-1 text-sm text-red-500">{validation.errors.firstName}</div>
								) : null}
							</div>

							<div className="mb-3">
								<label htmlFor="lastName-field" className="inline-block mb-2 text-base font-medium">last Name</label>
								<input
									type="text"
									id="lastName-field"
									name="lastName"
									className="default-form"
									placeholder="Enter last Name"
									onChange={validation.handleChange}
									onBlur={validation.handleBlur}
									value={validation.values.lastName || ""} />
								{validation.touched.lastName && validation.errors.lastName ? (
									<div id="lastName-error" className="mt-1 text-sm text-red-500">{validation.errors.lastName}</div>
								) : null}
							</div>


							<div className="mb-3">
								<label htmlFor="password" className="inline-block mb-2 text-base font-medium">Password</label>
								<input
									type="password"
									id="password"
									name="password"
									className="default-form"
									placeholder="Enter password"
									onChange={validation.handleChange}
									onBlur={validation.handleBlur}
									value={validation.values.password || ""} />
								{validation.touched.password && validation.errors.password ? (
									<div id="password-error" className="mt-1 text-sm text-red-500">{validation.errors.password}</div>
								) : null}
							</div>
							<p className="italic text-15 text-slate-500 dark:text-zink-200">By registering you agree to the Tailwick <a href="#!" className="underline">Terms of Use</a></p>
							<div className="mt-10">
								<button type="submit" className="w-full text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</button>
							</div>

							<div className="mt-10 text-center">
								<p className="mb-0 text-slate-500 dark:text-zink-200">Already have an account ? <Link to="/login" className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500">Login</Link> </p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Register;
