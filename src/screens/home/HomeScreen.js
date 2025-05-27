import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeLayout from "../../layout/home/HomeLayout";
import { getListGroup } from "../../features/group/groupSlice";
import { getListContact } from "../../features/contact/contactSlice";

const HomeScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListGroup({ limit: 10 }));
        dispatch(getListContact({ type: "isLastest", limit: 10 }));
    }, [dispatch]);

    return (
        <>
            <HomeLayout />
        </>
    );
};

export default HomeScreen;
