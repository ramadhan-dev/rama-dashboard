import React from "react";

// Formik validation
import * as Yup from "yup";
import { useFormik as useFormic } from "formik";

// Image
import { useDispatch, useSelector } from "react-redux";
import withRouter from "#/Common/withRouter";
import AuthIcon from "#/pages/AuthenticationInner/AuthIcon";
import { Link, Navigate } from "react-router-dom";
import { doLogin } from "./store/login.asyncAction";


const Login = () => {

	document.title = "Login | React Admin & Dashboard Template";

	const dispatch = useDispatch<any>();
	const { loginSuccess, error, user }= useSelector((state: any) => state?.masterState?.Auth);


	const validation: any = useFormic({
		enableReinitialize: true,
		initialValues: {
			email: user?.email || "local.dev002@gmail.com" || '',
			password: user?.password || "testing1234" || '',
		},
		validationSchema: Yup.object({
			email: Yup.string().required("Please Enter Your email"),
			password: Yup.string().required("Please Enter Your Password"),
		}),
		onSubmit: (values: any) => {
			dispatch(doLogin(values));
		}
	});



	React.useEffect(() => {
		const bodyElement = document.body;

		bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');

		return () => {
			bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');
		}
	}, []);


	/**
	 * jika login sukses maka, ridirect ke halaman dashboard
	 */
	if (loginSuccess) return <Navigate to="/dashboard" replace={true} />

	return (
		<React.Fragment>
			<div className="relative">
				<AuthIcon />

				<div className="mb-0 w-screen lg:mx-auto lg:w-[500px] card shadow-lg border-none shadow-slate-100 relative">
					<div className="!px-10 !py-12 card-body">
						{/* <Link to="/">
                            <img src={logoLight} alt="" className="hidden h-6 mx-auto dark:block" />
                            <img src={logoDark} alt="" className="block h-6 mx-auto dark:hidden" />
                        </Link> */}

						<div className="mt-8 text-center">
							<h4 className="mb-1 text-custom-500 dark:text-custom-500">Welcome Back !</h4>
							<p className="text-slate-500 dark:text-zink-200">Sign in to continue.</p>
						</div>

						<form className="mt-10" id="signInForm"
							onSubmit={(event: any) => {
								event.preventDefault();
								validation.handleSubmit();
								return false;
							}}>
							{loginSuccess && <div className="px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50" id="successAlert">
								You have <b>successfully</b> signed in.
							</div>}
							{error && <div className="px-4 py-3 mb-3 text-sm text-red-500 border border-red-200 rounded-md bg-red-50 dark:bg-red-400/20 dark:border-red-500/50" id="successAlert">
								{error}
							</div>}
							<div className="mb-3">
								<label htmlFor="email" className="inline-block mb-2 text-base font-medium">UserName/ Email ID</label>
								<input
									type="text"
									id="email"
									name="email"
									className="default-form"
									placeholder="Enter username or email"
									onChange={validation.handleChange}
									onBlur={validation.handleBlur}
									value={validation.values.email || ""}
								/>
								{validation.touched.email && validation.errors.email ? (
									<div id="email-error" className="mt-1 text-sm text-red-500">{validation.errors.email}</div>
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
									value={validation.values.password || ""}
								/>
								{validation.touched.password && validation.errors.password ? (
									<div id="password-error" className="mt-1 text-sm text-red-500">{validation.errors.password}</div>
								) : null}
							</div>

							<div className="mt-10">
								<button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</button>
							</div>

							<div className="mt-10 text-center">
								<p className="mb-0 text-slate-500 dark:text-zink-200">Don't have an account ? <Link to="/register" className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"> SignUp</Link> </p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default withRouter(Login);
