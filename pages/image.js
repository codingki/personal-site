export default function socialImages({ title, description, path }) {
	return (
		<div
			className="bg-myYellow flex flex-row p-20 py-12"
			style={{ width: 1024, height: 512 }}
		>
			<div className="m-auto  bg-white  border-2 border-b-8 border-black rounded-xl grid grid-cols-12  justify-between">
				<div className="col-span-12 md:col-span-8 sm:py-10 sm:px-8 p-5 my-auto ">
					<p className="font-bold text-4xl  text-black">{title}</p>

					<p className="font-normal sm:text-xl text-md text-black mt-2">
						{description}
					</p>
					<p className="font-normal sm:text-xl text-md text-black mt-4">
						{path}
					</p>
				</div>
				<div className="col-span-4 m-auto hidden md:inline mt-10 ">
					<img className="" src="/me.png" />
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = async ({ query }) => {
	const t = query.title;
	const d = query.description;
	const p = query.path;

	return {
		props: {
			title: t,
			description: d,
			path: p,
		},
	};
};
