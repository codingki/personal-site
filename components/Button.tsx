export const Button = ({
  color,
  tag,
  deployment,
  text,
}: {
  color?: "blue" | "white" | "orange";
  tag?: boolean;
  deployment?: boolean;
  text: string;
}) => {
  const colorClass = () => {
    if (color == "blue") {
      return "bg-myBlue font-bold  text-white sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
    if (color == "white") {
      return "bg-white font-bold  text-black sm:text-lg text-md px-4 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
    if (color == "orange") {
      return "bg-myOrange font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
    if (tag) {
      return "bg-white font-semibold  text-black sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
    if (deployment) {
      return "bg-myBlue font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100";
    }
  };

  return (
    <div className={colorClass()}>
      <p className=" text-center">{text}</p>
    </div>
  );
};

export const ShareToTwitterButton: React.FC<{ url: string }> = (props) => (
  <a href={props.url} target="_blank">
    <div
      className=" font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
      style={{ backgroundColor: "rgb(29, 161, 242)" }}
    >
      <p className="  text-center">
        <i className="fab fa-twitter fa-md" style={{ color: "white" }}></i>{" "}
        Share this to twitter
      </p>
    </div>
  </a>
);
