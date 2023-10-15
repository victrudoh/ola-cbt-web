// panels
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";

const Test = () => {
  return (
    <>
      <div className="w-full mb-5 p-4 h-[15rem]"></div>
      <div className="flex gap-6 items-start m-auto w-[85%] min-h-[200px] mb-5">
        <Leftpanel />
        <RightPanel />
      </div>
    </>
  );
};

export default Test;
