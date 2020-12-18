import React from "react";
import { Switch } from "react-router-dom";
import { NotFound } from "./components/error/404-not-found.page";
import { Loader } from "./components/loader.component";
import { Route } from "./components/route.component";
import { useLoginGuard } from "./hooks/use-login-guard";
import { Admin } from "./modules/admin/admin-page";
import { Course } from "./modules/courses/course.page";
import { Home } from "./modules/home/home.page";
import { LoginPage } from "./modules/login/login.page";
import { SignUp } from "./modules/login/sign-up.page";
import { Material } from "./modules/materials/material.page";
import { Statistics } from "./modules/statistics/statistics.page";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} useGuard={useLoginGuard} />
      <Route path="/module/:id?" component={Course} useGuard={useLoginGuard} />
      <Route
        path="/material/:id"
        component={Material}
        useGuard={useLoginGuard}
      />
      <Route
        path="/statistics"
        component={Statistics}
        useGuard={useLoginGuard}
      />
      <Route path="/admin" component={Admin} />
      <Route path="/teste" component={Loader} />
      <Route path="/signup/:id?" exact component={SignUp} />
      <Route path="/login" exact component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
};
