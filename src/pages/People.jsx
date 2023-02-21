import React, { useEffect, useState } from "react";
import { Wrapper } from "../components";
import ListPeoples from "../components/ListPeoples";
import { getAllByUserApi } from "../apis/user";

const People = () => {
  const [listPeople, setListPeople] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getAllByUserApi(limit);
        if (res) {
          setListPeople(res.data);
        }
      } catch (error) {}
    };
    fetchApi();
  }, [limit]);

  return (
    <div className="">
      <Wrapper className="">
        <ListPeoples
          listPeople={listPeople}
          setLimit={setLimit}
          limit={limit}
        />
      </Wrapper>
    </div>
  );
};

export default People;
