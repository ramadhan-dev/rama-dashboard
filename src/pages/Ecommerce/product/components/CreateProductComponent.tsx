import BreadCrumb from "#/Common/BreadCrumb"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone"
import { UploadCloud } from "lucide-react";

const CreateProductComponent = () => {


	const navigate = useNavigate();

	const menus = [
		{ label: 'summary', title: 'Summary' },
		{ label: 'image', title: 'Image & Gallery' },
		{ label: 'pricing', title: 'Pricing & Inventory' },
		{ label: 'seo', title: 'SEO' },
		{ label: 'variant', title: 'Variant Options' },
	];


	const [activeSection, setActiveSection] = useState<string | null>(null);
	const sectionRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

	const handleScroll = (entries: IntersectionObserverEntry[]) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setActiveSection(entry.target.id);
			}
		});
	};

	useEffect(() => {

		const observerOptions = {
			root: null,
			rootMargin: '-50% 0px -50% 0px',
			threshold: 0,
		};

		const observer = new IntersectionObserver(handleScroll, observerOptions);

		sectionRefs.current.forEach((ref, key) => {
			if (ref) {
				observer.observe(ref);
			}
		});

		return () => {
			sectionRefs.current.forEach((ref) => {
				if (ref) {
					observer.unobserve(ref);
				}
			});
		};
	}, []);

	/**
	 * @description fungsi untuk menuju ke section tertentu
	 * @param id
	 */
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};


	// DROPZONE
	const [selectedBorderFiles, setSelectedBorderFiles] = React.useState<any>([])

	/**
 * Formats the size
 */
	const formatBytes = (bytes: any, decimals = 2) => {
		if (bytes === 0) return "0 Bytes"
		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

		const i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
	}


	const handleAcceptedBorderFiles = (files: any) => {
		files.map((file: any) =>
			Object.assign(file, {
				preview: URL.createObjectURL(file),
				formattedSize: formatBytes(file.size),
			})
		)
		setSelectedBorderFiles(files)
	}

	return (
		<React.Fragment>
			<BreadCrumb title='' pageTitle='Add New Product' />
			<div className="mx-auto">


				<div className="w-full sticky top-16 bg-white">
					<div className="py-5">
						<div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
							<div className="col-span-12">
								<ul
									className="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs">
									{menus.map((menu, index) =>
										<li className={`group cursor-pointer ${activeSection === menu?.label ? 'active' : ''}`} onClick={() => scrollToSection(menu?.label)}
											key={index}>
											<span
												className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-custom-500 -mb-[1px] font-bold">{menu?.title}</span>
										</li>
									)}


								</ul>

							</div>
						</div>
					</div>
				</div	>


				<div className="card">
					<div className=" card-body tab-content">

						<div className="grid grid-cols-12 gap-4 p-4" id="summary" ref={el => sectionRefs.current.set('summary', el)} >
							<div className="col-span-12 md:col-span-4">
								<h4 className="text-base font-bold">Summary</h4>
								<p className="mt-2">Edit your product description and necessary information from here</p>
							</div>
							<div className="col-span-12 md:col-span-8 ">

								<div className="grid grid-cols-12 gap-4">

									<div className="col-span-12 md:col-span-6">
										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Title</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5">
											<label className="inline-block mb-2 text-base font-medium">Type</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>



									</div>


									<div className="col-span-12 md:col-span-6">

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium"> Code</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Category</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Brand</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>


									</div>


								</div>

							</div>
						</div>

						<div className="grid grid-cols-12 gap-4 p-4" id="image" ref={el => sectionRefs.current.set('image', el)} >
							<div className="col-span-12 md:col-span-4">
								<h4 className="text-base font-bold">Upload new product images</h4>
								<p className="mt-2">Upload your product image gallery here</p>
							</div>
							<div className="col-span-12 md:col-span-8 p-4">
								<div className="flex items-center justify-center bg-white border border-dashed rounded-md cursor-pointer dropzone border-slate-300 dropzone2 dark:bg-zink-700 dark:border-zink-500">
									<Dropzone
										onDrop={(acceptedFiles: any) => {
											handleAcceptedBorderFiles(acceptedFiles)
										}}
									>
										{({ getRootProps, getInputProps }: any) => (
											<div
												className="w-full py-5 text-lg text-center dz-message needsclick"
												{...getRootProps()}
											>
												<input {...getInputProps()} />
												<div className="mb-3">
													<UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500"></UploadCloud>
												</div>

												<h5 className="mb-0 font-normal text-slate-500 text-15">Drag and drop your files or <a href="#!">browse</a> your files</h5>
											</div>
										)}
									</Dropzone>
								</div>
								<ul className="flex flex-wrap mb-0 gap-x-5" id="dropzone-preview2">
									{
										(selectedBorderFiles || [])?.map((f: any, i: any) => {
											return (
												<li className="mt-2" id="dropzone-preview-list" key={i + "-file"}>
													<div className="border rounded border-slate-200 dark:border-zink-500">
														<div className="p-2 text-center">
															<div>
																<div className="p-2 mx-auto rounded-md size-14 bg-slate-100 dark:bg-zink-600">
																	<img data-dz-thumbnail className="block w-full h-full rounded-md" src={f.preview} alt={f.name} />
																</div>
															</div>
															<div className="pt-3">
																<h5 className="mb-1 text-15" data-dz-name>{f.name}</h5>
																<p className="mb-0 text-slate-500 dark:text-zink-200" data-dz-size>{f.formattedSize}</p>
															</div>
															<div className="mt-2">
																<button data-dz-remove
																	className="px-2 py-1.5 text-xs text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
																	onClick={() => {
																		const newImages = [...selectedBorderFiles];
																		newImages.splice(i, 1);
																		setSelectedBorderFiles(newImages);
																	}}
																>Delete</button>
															</div>
														</div>
													</div>
												</li>
											)
										})
									}
								</ul>
							</div>
						</div>


						<div className="grid grid-cols-12 gap-4 p-4" id="pricing" ref={el => sectionRefs.current.set('pricing', el)} >
							<div className="col-span-12 md:col-span-4">
								<h4 className="text-base font-bold">Summary</h4>
								<p className="mt-2">Edit your product description and necessary information from here</p>
							</div>
							<div className="col-span-12 md:col-span-8 ">

								<div className="grid grid-cols-12 gap-4">

									<div className="col-span-12 md:col-span-6">
										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Title</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5">
											<label className="inline-block mb-2 text-base font-medium">Type</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5">
											<label className="inline-block mb-2 text-base font-medium">SKU</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium"> Code</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Category</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Brand</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>


									</div>


									<div className="col-span-12 md:col-span-6">

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium"> Code</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Category</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Brand</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium"> Code</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Category</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

										<div className="col-span-12 mb-5 ">
											<label className="inline-block mb-2 text-base font-medium">Brand</label>
											<input
												type="text"
												id="productNameInput"
												className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Product title" required />
										</div>

									</div>


								</div>

							</div>
						</div>

					</div>


					<div className="w-full sticky bottom-0 bg-white border py-5">
						<div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
							<div className="col-span-12 px-10">
								<ul className="flex flex-wrap justify-end w-full gap-2 text-sm font-medium text-center filter-btns grow">

									<button
										type="button"
										onClick={() => navigate('/ecommerce/product')}
										className="bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">Cancel</button>

									<button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Save Product</button>
								</ul>
							</div>
						</div>
					</div>

				</div>




			</div>
		</React.Fragment>
	)
}

export default CreateProductComponent
