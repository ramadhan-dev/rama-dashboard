import React from "react";
import { MoveRight } from "lucide-react";

// Image
import widgets from "#/assets/images/landing/widgets.jpg";
import widgets2 from "#/assets/images/landing/widgets-2.jpg";
import widgets4 from "#/assets/images/landing/widgets-4.jpg";
import widgets5 from "#/assets/images/landing/widgets-5.jpg";

const AboutUs = () => {
	return (
		<React.Fragment>
			<section className="relative py-10" id="about">
				<div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">

					<div className="grid items-center grid-cols-1 gap-6 mt-20 lg:grid-cols-12">
						<div className="lg:col-span-5">
							<h1 className="mb-3 leading-normal capitalize">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
							<p className="mb-6 text-lg text-slate-500 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum quas iusto obcaecati inventore velit hic eos rem facere sint quod necessitatibus, quisquam perspiciatis fugiat doloremque. Molestiae doloremque dolorem quaerat.
							Impedit molestiae cumque autem sapiente veniam cum animi corporis placeat quaerat, inventore saepe, ullam nulla totam nihil excepturi neque quo? Quos unde iusto esse accusamus accusantium quo ipsa est fugit.
							Accusantium repellat, alias debitis ullam harum quia soluta aspernatur molestias odio adipisci voluptates officia quidem deleniti maxime temporibus iusto totam porro dolor, sunt nulla aliquid quae aperiam reprehenderit id. Voluptatibus! </p>
							<button type="button" className="py-2.5 px-6 bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 ">
								<span className="align-middle">Discover Now</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></MoveRight></button>
						</div>
						<div className="text-center lg:col-span-6">
							<img src={widgets4} alt="" className="shadow-lg ltr:lg:ml-auto rtl:lg:mr-auto rounded-xl" />
							<img src={widgets5} alt="" className="relative -mt-24 shadow-lg ltr:ml-auto ltr:mr-24 rtl:mr-auto rtl:ml-24 rounded-xl" />
						</div>
					</div>

					<div className="grid items-center grid-cols-1 gap-6 mt-32 lg:grid-cols-12">
						<div className="text-center lg:col-span-6">
							<img src={widgets2} alt="" className="shadow-lg ltr:ml-auto rtl:mr-auto rounded-xl" />
							<img src={widgets} alt="" className="relative -mt-24 ml-[30%]  shadow-lg ltr:ml-auto rtl:mr-auto ltr:mr-24 rtl:ml-24 rounded-xl" />
						</div>
						<div className="lg:col-span-5">
							<h1 className="mb-3 leading-normal capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
							<p className="mb-6 text-lg text-slate-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ex doloremque vitae, nobis quo explicabo ducimus atque dolore nostrum deserunt odio illum magnam architecto alias est ullam enim, sapiente earum?
							Soluta in quaerat magnam explicabo deserunt, tempora ad est temporibus delectus, quibusdam ipsa provident aliquid ipsum. Alias dicta cum provident assumenda vitae? Fugit natus accusamus nesciunt, earum debitis ullam molestias!</p>
							<button type="button" className="py-2.5 px-6 bg-white text-custom-500 btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 ">
								<span className="align-middle">Discover Now</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180"></MoveRight></button>
						</div>
					</div>


				</div>
			</section>
		</React.Fragment>
	);
}

export default AboutUs;
