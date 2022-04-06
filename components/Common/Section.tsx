export const TitleSection: React.FC<{ classNames?: string }> = (props) => (
  <div className={`bg-myYellow items-center py-5 ${props.classNames}`}>
    <div className="container max-w-screen-md  mx-auto flex-row flex justify-between md:px-0 px-4">
      {props.children}
    </div>
  </div>
);

export const ListSection: React.FC = (props) => (
  <div className=" bg-myYellow items-center  pt-0 pb-20">
    <div className="container max-w-screen-md  mx-auto flex-col gap-5 flex justify-between md:px-0 px-4">
      {props.children}
    </div>
  </div>
);