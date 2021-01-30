export default function Button(props) {
	function color() {
		if (props.color == 'blue') {
			return 'bg-myBlue font-bold  text-white sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.color == 'white') {
			return 'bg-white font-bold  text-black sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.color == 'orange') {
			return 'bg-myOrange font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.tag) {
			return 'bg-white font-semibold  text-black sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.deployment) {
			return 'bg-myBlue font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
	}

	return (
		<div className={color()}>
			<p className=" text-center">{props.text}</p>
		</div>
	);
}
