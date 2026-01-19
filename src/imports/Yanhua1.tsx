import imgImage from "figma:asset/4fe6ded441013e64ccfa57234faf7fc057255ccc.png";
import imgImage1 from "figma:asset/0ec1508d134126f142a924d5b76a32b6d79b6b51.png";
import imgImage2 from "figma:asset/273e876e797790147a08fbf09c34df159b5faafd.png";

export default function Yanhua() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="yanhua1">
      <div className="absolute bottom-[297.3px] h-[69.82px] right-[215.09px] w-[83.333px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute bottom-[296.17px] h-[70.946px] right-[219.59px] w-[78.829px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute bottom-[320.95px] h-[52.928px] right-[503.38px] w-[94.595px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}