import React from "react";

// Image
import widgets from "#/assets/images/landing/card-1.png";
import widgets2 from "#/assets/images/landing/card-2.png";
import widgets3 from "#/assets/images/landing/chart-1.png";
import widgets4 from "#/assets/images/landing/chart-2.png";
import home from "#/assets/images/landing/table.png";


const OurFeatures = () => {
	return (
		<React.Fragment>
			<section className="relative py-32 bg-slate-900 " id="features">
				<div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
					<div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
						<div className="order-2 xl:col-span-5 xl:-mt-60 xl:order-1">
							<div className="relative z-10 grid grid-cols-3 gap-5 xl:grid-cols-12">
								<div className="xl:col-span-12">
									<img src={widgets} alt="" className=" rtl:mr-auto ltr:ml-auto rounded-xl" />
								</div>
								<div className="xl:col-span-6">
									<img src={widgets3} alt="" className="shadow-xl xl:mt-5 rtl:mr-auto ltr:ml-auto rounded-xl" />
								</div>
								<div className="xl:col-span-6">
									<img src={widgets2} alt="" className="shadow-xl xl:mt-5 rtl:mr-auto ltr:ml-auto rounded-xl" />
									<img src={widgets4} alt="" className="shadow-xl xl:mt-5 rtl:mr-auto ltr:ml-auto rounded-xl mt-2" />
								</div>
							</div>
						</div>
						<div className="relative z-20 order-1 xl:-mt-60 xl:col-span-7 xl:order-last">
							<img src={home} alt="" className=" rounded-xl" />
							<div className="text-white pt-10">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ab deleniti quis, ipsam necessitatibus id! Eius ducimus, labore eaque eligendi officiis ex obcaecati iusto, ipsa alias reprehenderit vero incidunt sit?
								Sint molestiae culpa deleniti vitae optio ipsum praesentium labore esse blanditiis tempora, necessitatibus eaque nulla, at, natus quia quo ad illo nam non. Amet, aliquam quasi! Fugit veritatis amet minus.
								Totam architecto deleniti inventore reprehenderit magni, ratione officia impedit corporis dolor quidem in hic suscipit a ad eaque velit, commodi esse dolores maxime magnam tempora numquam rerum explicabo voluptatibus! Eius?</p>
							</div>
						</div>
					</div>
				</div>
			</section>


		</React.Fragment>
	);
}

export default OurFeatures;
