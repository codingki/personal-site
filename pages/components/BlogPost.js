export default function BlogPost(props) {
	const item = props;
	return (
		<div className="bg-white border-2 border-b-8 border-black p-4 rounded-xl flex-1">
			<h1 className="font-bold text-2xl">{item.title}</h1>
			<p className="text-lg mt-2 ">
				{item.date} | {item.categories}
			</p>
			<p className="text-lg mt-2 ">{item.excerpt}</p>
		</div>
	);
}
