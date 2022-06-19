import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../context/ScrollContext";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ScrollViewContainer: React.FC<Props> = ({ children, className = "" }) => {
  const scroll = useContext(ScrollContext);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current === null || isVisible) return;
    var rect = ref.current.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var visible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    // var visible = elemTop < window.innerHeight && elemBottom >= 0;

    if (visible) {
      setIsVisible(true);
    }
  }, [scroll, isVisible]);

  return (
    <div
      className={
        "transition-opacity duration-700 " + (isVisible ? "opacity-100 " : "opacity-0 ") + className
      }
      ref={ref}
    >
      {children}
    </div>
  );
};

export default ScrollViewContainer;
