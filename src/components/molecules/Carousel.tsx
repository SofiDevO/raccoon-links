import { useEffect, useState } from "react";
import dataImages from "@data/images.json";

let renderData = 0;
let timeOut: any;

export default function Carousel() {
  const [image, setImage] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  let allPoints = Array.from({ length: dataImages.length }, (_, i) => i);

  function changeData() {
    setImage(dataImages[renderData].imageID);
    setLink(dataImages[renderData].url);
    setTitle(dataImages[renderData].title);

    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      if (renderData < allPoints.length - 1) {
        renderData = renderData + 1;
        changeData();
      } else {
        renderData = 0;
        changeData();
      }
    }, 2000);
  }

  useEffect(() => {
    changeData();
  }, []);

  return (
    <section className="min-w-fit w-40 flex relative items-center justify-center select-none">
      <div className="absolute flex bottom-20 px-2 w-full items-center justify-center">
        <a
          href={link}
          target="_blank"
          className={`${image === "ZSdGAbr" ? "w-4/5 pb-7" : "h-auto w-full -rotate-6"}`}
        >
          <img src={`https://i.imgur.com/${image}.png`} />
        </a>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-2.5 absolute px-5">
        {allPoints.map((e) => (
          <span
            key={e}
            className={`min-w-2 min-h-2 rounded-full cursor-pointer outline-none ${e === renderData ? "bg-[#763CC7]" : "bg-black/5"}`}
            onClick={() => {
              renderData = e;
              changeData();
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center w-full absolute mt-20 px-4">
        <a
          href={link}
          target="_blank"
          className="text-center w-full text-wrap text-sm font-medium text-black"
        >
          {title}
        </a>
      </div>
      <div className="w-full h-40 rounded-xl bg-white shadow-md"></div>
    </section>
  );
}
