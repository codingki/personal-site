export default function Button(props) {
	const slug = props.slug;
	function color() {
		if (props.color == 'blue') {
			return 'bg-myBlue text-white w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.color == 'white') {
			return 'bg-white text-black w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.color == 'orange') {
			return 'bg-myOrange text-white w-full md:w-24 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
	}

	return (
		<div className={color()}>
			<p className="font-bold md:text-lg text-md text-center">{props.text}</p>
		</div>
	);
}
