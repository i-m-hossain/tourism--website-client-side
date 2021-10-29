import { useContext } from "react"
import { AuthContext } from "../Pages/Context/AuthProvider"

const useAuth = () => useContext(AuthContext)

export default useAuth;