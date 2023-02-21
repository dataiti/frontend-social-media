import React, { memo } from "react";
import { Button, ProfileCard } from "../components";

const ListPeoples = ({ listPeople = [], setLimit = () => {}, limit }) => {
  const handleLoadMoreUser = () => {
    setLimit((prev) => prev + 3);
  };

  return (
    <div className="overflow-y-auto max-h-[600px]">
      {listPeople.length > 0 &&
        listPeople.map((item) => {
          return (
            <div
              className="flex items-center justify-between border-b-2 border-gray-200 py-5"
              key={item._id}
            >
              <ProfileCard userInfo={item} />
            </div>
          );
        })}
      {listPeople.length >= limit && (
        <div className="flex justify-center mt-5">
          <Button size="medium" primary onClick={handleLoadMoreUser}>
            More
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(ListPeoples);
