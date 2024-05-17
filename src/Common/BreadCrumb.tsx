import React from 'react';

interface BreadCrumbProps {
	title: string;
	pageTitle: string;
}
const BreadCrumb = ({ title, pageTitle }: BreadCrumbProps) => {

	document.title = `${title} | React Admin & Dashboard Template`;

	return (
		<React.Fragment>


			<div className="flex flex-col py-2 md:flex-row md:items-center print:hidden">
				<div className="grow">
					<h5 className="text-16">{title}</h5>
				</div>
				<ul className="inline-flex flex-wrap items-center gap-2 p-2 text-sm font-normal rounded bg-slate-500 dark:bg-zink-100">
					<li className="relative before:content-['\ea54'] before:font-remix before:ltr:-right-1 before:rtl:-left-1 before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:rtl:rotate-180 before:text-slate-100 dark:before:text-zink-200">
						<a href="#!" className="text-slate-100 dark:text-zink-100">Dashboard</a>
					</li>

				</ul>
			</div>
		</React.Fragment>
	);
};

export default BreadCrumb;
