const IconButton = ({
  color,
  url,
  children,
}: {
  color: "blue" | "white" | "orange";
  url: string;
  children: React.ReactNode;
}) => {
  const colorClass = () => {
    if (color == "blue") {
      return "bg-myBlue text-white px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
    if (color == "white") {
      return "bg-white text-black px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
    if (color == "orange") {
      return "bg-myOrange text-white px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
  };

  return (
    <a href={url} target="_blank">
      <div className={colorClass()}>
        <p className=" font-bold text-lg text-center">{children}</p>
      </div>
    </a>
  );
};
export default IconButton;
