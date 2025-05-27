import React from "react";
import AccountView from "./AccountView";
import { useSelector } from "react-redux";
import { makeSelectContactById } from "../../features/contact/contactSelector";

const AccountContainer = (props) => {
    const { accountId } = props;
    const account = useSelector(makeSelectContactById(accountId));
    console.log("Check: account", account);
    if (!account) {
        return null;
    }

    return <AccountView account={account} {...props} />;
};
export default AccountContainer;
