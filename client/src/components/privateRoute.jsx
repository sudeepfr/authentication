import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
function privateRoute() {
  const { currentUser } = useSelector((state) => state.user);
    return currentUser ? (<Outlet/>) : (<Navigate to="/SignIn" />)
}

export default privateRoute;