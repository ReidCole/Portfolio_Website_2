import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const Sidebar: React.FC<Props> = ({ isOpen, close }) => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     setIsVisible(true);
  //   }
  // }, [isOpen]);

  // function onClose() {
  //   close();
  //   setTimeout(() => {
  //     setIsVisible(false);
  //   }, 200);
  // }

  return (
    <>
      <div
        id="background"
        className={
          "bg-black transition-opacity fixed h-screen w-screen top-0 left-0 z-30 " +
          (isOpen ? "pointer-events-auto opacity-50" : "pointer-events-none opacity-0")
        }
        onClick={(e) => {
          const t = e.target as Element;
          if (t.id === "background") close();
        }}
      />
      <div
        className={
          "fixed h-screen w-60 top-0 left-0 z-30 bg-red-700 transition-all " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <button onClick={() => console.log("chee")}>weoifjwoejofiwje</button>
        {/* TODO: MAKE STUFF NOT SELECTABLE WHEN CLOSED */}
      </div>
    </>
  );
};

export default Sidebar;
