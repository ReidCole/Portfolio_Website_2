/** @jsxImportSource theme-ui */

import type { NextPage } from "next";
import { useColorMode, useThemeUI } from "theme-ui";

const Home: NextPage = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque ratione a quas
          praesentium temporibus earum, sunt, architecto in laborum quae odio dolorem molestiae vel
          suscipit officiis quisquam tempore culpa, eveniet tempora quia reprehenderit placeat nemo?
          Alias provident veritatis quia?
        </p>
        <ul>
          <li>stuff</li>
          <li className="text-green-400 mt-4">things</li>
        </ul>
      </div>
      <div className="flex flex-row gap-3 m-4">
        <button
          onClick={() => {
            setColorMode("apple");
          }}
          sx={{
            backgroundColor: "primary",
          }}
          className="p-4"
        >
          A
        </button>
        <button
          onClick={() => {
            setColorMode("banana");
          }}
          sx={{
            backgroundColor: "primary",
          }}
          className="p-4"
        >
          B
        </button>
        <button
          onClick={() => {
            setColorMode("carrot");
          }}
          sx={{
            backgroundColor: "primary",
          }}
          className="p-4"
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Home;
