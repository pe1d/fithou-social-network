import React from "react";
import AccountView from "./AccountView";
import { useSelector } from "react-redux";
import { makeSelectContactById } from "../../features/contact/contactSelector";

const AccountContainer = (props) => {
    const { account } = props;
    // const account = useSelector(makeSelectContactById(accountId));
    if (!account) {
        return null;
    }

    return <AccountView account={account} {...props} />;
};
export default AccountContainer;
