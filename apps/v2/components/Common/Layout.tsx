export const RubricLayout = (props: { children: React.ReactNode }) => (
  <div className="bg-myYellow min-h-screen">{props.children}</div>
);

export const SinglePageLayout = (props: { children: React.ReactNode }) => (
  <div className="bg-myYellow min-h-screen flex flex-col justify-between">
    {props.children}
  </div>
);
