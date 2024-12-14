import { useState } from "react";

import Posts from "../../components/common/Posts";
import CreatePost from "./CreatePost";
import Widgets from "../Widgets/Widgets";

const HomePage = () => {
  const [feedType, setFeedType] = useState("forYou");


  return (
    <>
      <div className="flex-[4_4_0] mr-auto border-r border-sky-700 min-h-screen">
        {/* Header */}
        <div className="flex w-full border-b border-sky-700">
          <div
            className={
              "flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
            }
            onClick={() => setFeedType("forYou")}
          >
            {("For you")} {/* This will display "Pour vous" in French */}
            {feedType === "forYou" && (
              <div className="absolute bottom-0 w-10 h-1 rounded-full bg-primary"></div>
            )}
          </div>
          <div
            className="flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
            onClick={() => setFeedType("following")}
          >
            {("Following")} {/* This will display "Abonnements" in French */}
            {feedType === "following" && (
              <div className="absolute bottom-0 w-10 h-1 rounded-full bg-primary"></div>
            )}
          </div>
        </div>
        <CreatePost />
        {/* POSTS */}
        <Posts feedType={feedType} />
        <Widgets />
      </div>
    </>
  );
};

export default HomePage;
