import { authClient } from "@/lib/auth-client";
import { Navigate, Outlet, useLocation } from "react-router";
import { LoadingScreen } from "./LoadingScreen";


export function RequireAuth() {
    const {data: session, isPending} = authClient.useSession();
    const location = useLocation();

    if (isPending) return <LoadingScreen/>;
    if(!session) return <Navigate to='/login' replace state={{from: location.pathname}}/> ;
    return <Outlet/>;
}