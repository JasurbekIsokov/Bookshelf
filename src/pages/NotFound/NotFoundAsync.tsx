import { lazy } from "react";

const NotFoundAsync = lazy(() => import("./NotFound"));

export default NotFoundAsync;
