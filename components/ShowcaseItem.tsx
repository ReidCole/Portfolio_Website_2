/** @jsxImportSource theme-ui */

import Image, { StaticImageData } from "next/image";
import ScrollViewContainer from "./ScrollViewContainer";

type Props = {
  name: string;
  imageSrc: string | StaticImageData;
  href: string;
};

const ShowcaseItem: React.FC<Props> = ({ name, imageSrc, href }) => {
  return (
    <ScrollViewContainer>
      <a href={href} rel="noopener noreferrer" target="_blank" title={`Visit ${name} Website`}>
        <div
          sx={{
            backgroundColor: "background2",
          }}
          className="px-3 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform group"
        >
          <h3 className="text-lg mb-1">{name}</h3>
          <div className="flex flex-row gap-4">
            <div className="rounded-xl flex flex-shrink-0 overflow-hidden w-max">
              <Image
                src={imageSrc}
                alt="simple notes website"
                className="brightness-75 group-hover:brightness-100 transition-all"
                priority
                height={200}
                width={150}
              />
            </div>
            <p className="text-lg">
              Info: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim
              deserunt asperiores. Cum, facere atque? Facere tempore ipsum ipsa. Placeat.
            </p>
          </div>
        </div>
      </a>
    </ScrollViewContainer>
  );
};

export default ShowcaseItem;
