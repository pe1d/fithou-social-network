import React from "react";
import GroupView from "./GroupView";
import { makeSelectGroupById } from "../../features/group/groupSelector";
import { useSelector } from "react-redux";
const GroupContainer = (props) => {
    const { groupId } = props;
    const group = useSelector(makeSelectGroupById(groupId));
    return <GroupView group={group} {...props} />;
};
export default GroupContainer;
