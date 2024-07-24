import React from "react";
import AuthIcon from "#/pages/AuthenticationInner/AuthIcon";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetRegisterFlag } from "#/slices/thunk";
import { Link, Navigate, useNavigate } from "react-router-dom";

// Formik validation
import * as Yup from "yup";
import { useFormik as useFormic } from "formik";

// Image
import { User } from "#/interfaces/common";
import { doLogin, RegisterUser } from "./store/login.asyncAction";

const Register = () => {

	document.title = "Register | React Admin & Dashboard Template";

	const navigation = useNavigate(); // Use the useNavigate hook
	const dispatch = useDispatch<any>();
	const { success, error, loginSuccess, loading } = useSelector((state: any) => state?.masterState?.Auth);

	const initialValues: User = {
		firstName: "3",
		lastName: "2",
		email: "local.dev002@gmail.com",
		password: "2",
		role: "admin",
	}

	const validation: any = useFormic({
		enableReinitialize: true,
		initialValues,
		validationSchema: Yup.object({
			firstName: Yup.string().required("Please Enter Your First Name"),
			lastName: Yup.string().required("Please Enter Your Last Name"),
			email: Yup.string().email().required("Please Enter Your Email"),
			password: Yup.string().required("Please Enter Your Password"),
		}),
		onSubmit: (values: any) => {
			dispatch(RegisterUser(values));
		}
	});

	React.useEffect(() => {
		if (success) {
			const {values} = validation
			dispatch(doLogin({ email: values?.email, password: values?.password, role: values?.role}));
		}
	}, [dispatch, success, navigation]);


	/**
	 *
	 */
	React.useEffect(() => {
		const bodyElement = document.body;

		bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');

		return () => {
			bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');
		}
	}, []);


	/**
	 *
	 */
	if (loginSuccess) return <Navigate to="/dashboard" replace={true} />


	/**
	 *
	 */
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
							<p className="italic text-15 text-slate-500 dark:text-zink-200">By registering you agree to the <a href="#!" className="underline">Terms of Use</a></p>
							<div className="mt-10">
								<button
									type="submit"
									className={`btn-horizontal-primary ${loading ? 'cursor-not-allowed' : 'pointer'}`}
									disabled={loading}
								>
									{loading ? 'Loading...' : 'Sign In'}
								</button>
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
