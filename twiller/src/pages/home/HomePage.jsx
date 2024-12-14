import { useState } from "react";

import Posts from "../../components/common/Posts";
import CreatePost from "./CreatePost";
import Widgets from "../Widgets/Widgets";

const HomePage = () => {
  const [feedType, setFeedType] = useState("forYou");


  return (
    <>
      <div className="flex-[4_4_0] mr-auto border-r border-sky-700 min-h-screen">
     
            <p>hello</p>
          <Widgets />
      </div>
    </>
  );
};

export default HomePage;
