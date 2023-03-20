import React, { lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../layout/layout";
import Loading from "../components/2.lazyLoad/Loading";

const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Component {...props}></Component>
    </Suspense>
  );
};
export default [
  {
    path: "/",
    component: Layout,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/setState"} />,
      },
      {
        path: "/setState",
        name: "setState",
        component: SuspenseComponent(
          lazy(() => import("../components/1.setState"))
        ),
      },
      {
        path: "/lazyLoad",
        name: "lazyLoad",
        component: SuspenseComponent(
          lazy(() => import("../components/2.lazyLoad"))
        ),
      },
      {
        path: "/hooks",
        name: "hooks",
        component: SuspenseComponent(
          lazy(() => import("../components/3.hooks"))
        ),
      },
      {
        path: "/Fragment",
        name: "Fragment",
        component: SuspenseComponent(
          lazy(() => import("../components/4.Fragment"))
        ),
      },
      {
        path: "/Context",
        name: "Context",
        component: SuspenseComponent(
          lazy(() => import("../components/5.Context"))
        ),
      },
      {
        path: "/optimize",
        name: "控制组件更新",
        component: SuspenseComponent(
          lazy(() => import("../components/6. optimize 控制组件更新"))
        ),
      },
      {
        path: "/comType",
        name: "父子组件写法",
        component: SuspenseComponent(
          lazy(() => import("../components/7. props Render 父子组件写法"))
        ),
      },
      {
        path: "/ErrorBoundary",
        name: "ErrorBoundary",
        component: SuspenseComponent(
          lazy(() => import("../components/8_ErrorBoundary/Parent"))
        ),
      },
    ],
  },
];
