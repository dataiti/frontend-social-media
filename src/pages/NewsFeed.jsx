import React from "react";
import { CreateMyPostCard, ListStories } from "../components";

const NewsFeed = () => {
  return (
    <div className="flex flex-col gap-4">
      <ListStories />
      <CreateMyPostCard />
    </div>
  );
};

export default NewsFeed;
