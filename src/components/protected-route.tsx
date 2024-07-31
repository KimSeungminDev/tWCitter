import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({ // 로그인한 사용자가 누구인지 물어보는 Route
    children,
  }: {
    children: React.ReactNode;
  }) {
    const user = auth.currentUser;
    console.log(user);
    if( user === null){
      return <Navigate to ="/login" />;
    }
    return children;
}