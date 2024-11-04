import React from "react";

const Home = () => {
	return (
		<React.Fragment>
			<section className="relative pb-36 pt-44" id="home">

				<div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
					<div className="grid grid-cols-12 2xl:grid-cols-2">
						<div className="col-span-12 lg:col-span-7 2xl:col-span-1">
							<h1 className="mb-8 !leading-relaxed md:text-5xl">Belajar membaut aplikasi <span className="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-sky-50  before:rounded-md before:backdrop-blur-xl"><span className="relative text-sky-500">Dashboard</span></span></h1>
							<p className="mb-6 text-lg text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eligendi soluta animi tempora, porro eaque aliquam ea provident delectus dolorem explicabo consectetur culpa fugiat illum vitae veniam enim corrupti. Libero.</p>

						</div>
					</div>
				</div>
			</section>

		</React.Fragment>
	);
}

export default Home;
