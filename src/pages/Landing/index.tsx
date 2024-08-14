import React, { lazy } from "react";
import { ChevronUp } from "lucide-react";

const NavBar = lazy(() => import("./NavBar"));
// const Home = lazy(() => import("./Home"));
// const OurFeatures = lazy(() => import("./OurFeatures"));
// const AboutUs = lazy(() => import("./AboutUs"));
// const Contact = lazy(() => import("./Contact"));
// const Footer = lazy(() => import("./Footer"));


const LandingPage = () => {
	document.title = "One Page | Ramadhan - React Admin & Dashboard Template";

	const windowScroll = () => {
		const backToTop = document.getElementById("back-to-top");
		if (backToTop) {
			if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
				backToTop.style.opacity = "1";
			} else {
				backToTop.style.opacity = "0";
			}
		}
	};

	React.useEffect(() => {
		window.addEventListener('scroll', windowScroll);

		window.addEventListener('load', windowScroll);

		return () => {
			window.removeEventListener('scroll', windowScroll);
		};
	}, []);

	const handleScroll = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	React.useEffect(() => {
		const bodyElement = document.body;

		bodyElement.classList.add( "text-base", "bg-white", "text-body", "font-public", "dark:text-zink-50", "dark:bg-zink-800" );

		return () => {
			bodyElement.classList.remove("text-base", "bg-white", "text-body", "font-public", "dark:text-zink-50", "dark:bg-zink-800");
		}
	}, []);

	React.useEffect(() => {
		document.documentElement.classList.add("overflow-x-hidden", "scroll-smooth", "group");
		return () => {
			document.documentElement.classList.remove("overflow-x-hidden", "scroll-smooth", "group");
		};
	}, []);

	return (
		<React.Fragment>

			<NavBar />
			{/* <Home /> */}
			{/* <OurFeatures /> */}
			{/* <AboutUs /> */}
			{/* <Pricing /> */}
			{/* <Contact /> */}
			{/* <Footer /> */}

			<button id="back-to-top"
				className="fixed flex items-center justify-center size-10 text-white bg-purple-500 rounded-md bottom-10 right-10"
				onClick={handleScroll}>
				<ChevronUp className="animate animate-icons"></ChevronUp>
			</button>
		</React.Fragment>
	);
};

export default LandingPage;
