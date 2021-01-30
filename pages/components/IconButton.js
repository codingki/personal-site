export default function Button(props) {
	function color() {
		if (props.color == 'blue') {
			return 'bg-myBlue text-white px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.color == 'white') {
			return 'bg-white text-black px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
		if (props.color == 'orange') {
			return 'bg-myOrange text-white px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100';
		}
	}

	return (
		<a href={props.url} target="_blank">
			<div className={color()}>
				<p className=" font-bold text-lg text-center">{props.children}</p>
			</div>
		</a>
	);
}
