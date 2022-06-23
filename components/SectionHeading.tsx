type Props = {
  children: string;
  className?: string;
};

const SectionHeading: React.FC<Props> = ({ children, className = "" }) => {
  return <h2 className={"text-xl xs:text-2xl font-bold text-center " + className}>{children}</h2>;
};

export default SectionHeading;
