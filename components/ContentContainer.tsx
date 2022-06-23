type Props = {
  children: React.ReactNode;
  className?: string;
};

const ContentContainer: React.FC<Props> = ({ children, className = "" }) => {
  return <div className={"max-w-xl mx-auto lg:max-w-4xl " + className}>{children}</div>;
};

export default ContentContainer;
