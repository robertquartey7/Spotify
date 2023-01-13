import { Navigate } from "react-router-dom";
import {initialState} from './reducer'

export const ProtectedRoute = ({ children })=> {


  if (!initialState.authenticated) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
}





