type Props = {
  children: string;
};

const SectionHeading: React.FC<Props> = ({ children }) => {
  return <h2 className="text-2xl font-bold mb-6 text-center">{children}</h2>;
};

export default SectionHeading;
