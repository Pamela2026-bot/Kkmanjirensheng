import imgImgFenjing1 from "figma:asset/1992ee527cfa8d457d4deb39ae0913ac100bbbeb.png";

interface ManhuaProps {
  panel1Image?: string;
  panel2Image?: string;
  panel3Image?: string;
  panel4Image?: string;
}

function Shang({ panel1Image, panel2Image }: { panel1Image?: string; panel2Image?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full" data-name="shang">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing1">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="第一格分镜" 
              className="absolute inset-0 size-full object-cover" 
              src={panel1Image || imgImgFenjing1} 
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing2">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="第二格分镜" 
              className="absolute inset-0 size-full object-cover" 
              src={panel2Image || imgImgFenjing1} 
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
    </div>
  );
}

function Xia({ panel3Image, panel4Image }: { panel3Image?: string; panel4Image?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full" data-name="xia">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing3">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="第三格分镜" 
              className="absolute inset-0 size-full object-cover" 
              src={panel3Image || imgImgFenjing1} 
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="img_fenjing4">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute bg-[#eadabc] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img 
              alt="第四格分镜" 
              className="absolute inset-0 size-full object-cover" 
              src={panel4Image || imgImgFenjing1} 
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
    </div>
  );
}

export default function Manhua({ panel1Image, panel2Image, panel3Image, panel4Image }: ManhuaProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pointer-events-none relative size-full" data-name="manhua">
      <Shang panel1Image={panel1Image} panel2Image={panel2Image} />
      <Xia panel3Image={panel3Image} panel4Image={panel4Image} />
    </div>
  );
}