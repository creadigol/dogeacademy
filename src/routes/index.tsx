import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../screens/Dashboard/Dashboard";
import Mint from "../screens/Mint/Mint";

const AppMain = () => {
    return (
        <>
            <Suspense fallback={<span>loading</span>}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/mint" component={Mint} />
                </Switch>
            </Suspense>
        </>
    );
};

export default AppMain;
