import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { makeSelectGroupById } from "../../features/group/groupSelector";
import GroupNewFeedView from "./GroupNewFeedView";
import { getListGroupMembers } from "../../features/group/groupSlice";

const GroupNewFeedContainer = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const location = useLocation();
    const group = useSelector(makeSelectGroupById(Number(id)));
    const { groupMembers } = useSelector((state) => state.group);
    useEffect(() => {
        dispatch(getListGroupMembers({ groupId: Number(id) }));
    }, [id, dispatch]);
    console.log("Check: groupMember:", groupMembers);
    return <GroupNewFeedView group={group} groupMembers={groupMembers} />;
};
export default GroupNewFeedContainer;
