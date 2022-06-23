/** @jsxImportSource theme-ui */

import { ElementType } from "react";

type Props = {
  children: string;
  className: string;
  wrapperElement: ElementType;
};

const HTMLTagStyledText: React.FC<Props> = ({
  children,
  className,
  wrapperElement: WrapperElement,
}) => {
  return (
    <WrapperElement sx={{ fontFamily: "code", color: "code_component" }} className={className}>
      <span sx={{ color: "code_bracket" }}>&lt;</span>
      {children}
      <span sx={{ color: "code_bracket" }}>/&gt;</span>
    </WrapperElement>
  );
};

export default HTMLTagStyledText;
