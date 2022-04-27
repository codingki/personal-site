export const RubricLayout: React.FC = (props) => (
  <div className="bg-myYellow min-h-screen">{props.children}</div>
);

export const SinglePageLayout: React.FC = (props) => (
  <div className="bg-myYellow min-h-screen flex flex-col justify-between">
    {props.children}
  </div>
);
