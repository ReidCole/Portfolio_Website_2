type Props = {
  children: React.ReactNode;
};

const ContentContainer: React.FC<Props> = ({ children }) => {
  return <div className="max-w-xl mx-auto">{children}</div>;
};

export default ContentContainer;
