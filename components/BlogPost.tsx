export default function BlogPost({
  title,
  date,
  categories,
  excerpt,
}: {
  title: string;
  date: string;
  categories: string;
  excerpt: string;
}) {
  return (
    <div className="bg-white border-2 border-b-8 border-black p-4 rounded-xl flex-1">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-lg mt-2 ">
        {date} | {categories}
      </p>
      <p className="text-lg mt-2 ">{excerpt}</p>
    </div>
  );
}
