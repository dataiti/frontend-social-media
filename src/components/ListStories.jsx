import React from "react";
import { CreateMyStoryCard, StoryCard } from "../components";

const ListStories = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      <CreateMyStoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  );
};

export default ListStories;
