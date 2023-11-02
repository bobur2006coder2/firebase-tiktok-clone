import { array } from "prop-types";
import VideoInformation from "./VideoInformation";
import VideoPlayer from "./VideoPlayer";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
const Index = ({ data }) => {
  return (
    <div>
      {/* <VideoPlayer />
      <VideoInformation /> */}
      {data?.map((elem, i) => {
        console.log(elem);
        return (
          <div key={i} className="grid grid-cols-2 items-center">
            <img src={elem?.img_url} alt="" className="w-32" />
            <div className="flex gap-2" >
            <span className="cursor-pointer">👍: {elem?.likes}</span>
            <span className="cursor-pointer">👎: {elem?.dislikes}</span>
            <span className="cursor-pointer">💬: {elem?.comments}</span>

            </div>
          </div>
        );
      })}
    </div>
  );
};
Index.propTypes = {
  data: array,
};
export default Index;
