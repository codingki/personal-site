import Icon from "../IconButton";

const Footer = () => {
  return (
    <>
      <div className=" bg-myOrange items-center border-t-4 border-black py-5  w-full ">
        <div className="container max-w-screen-md  mx-auto flex-row gap-2 flex justify-center md:justify-end md:px-0 px-5">
          <Icon url="https://github.com/codingki" color="white">
            <i className="fab fa-github fa-lg"></i>
          </Icon>
          <Icon url="https://twitter.com/kikiding" color="white">
            <i className="fab fa-twitter fa-lg"></i>
          </Icon>
          <Icon url="https://www.instagram.com/kikiding/" color="white">
            <i className="fab fa-instagram fa-lg"></i>
          </Icon>
          <Icon url="https://medium.com/@kikidding" color="white">
            <i className="fab fa-medium fa-lg"></i>
          </Icon>
        </div>
      </div>
    </>
  );
};
export default Footer;
