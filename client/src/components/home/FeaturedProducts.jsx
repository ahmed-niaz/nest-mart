import useAuth from "../../hooks/useAuth"
import useRole from "../../hooks/useRole";
import Loader from "../shared/Loader";


const FeaturedProducts = () => {
  const {user} = useAuth()
  const [data,isLoading] = useRole()
  if(isLoading) return <Loader/>
  console.log('user form auth',user);
  console.log('role => ',data);
  return (
    <div>FeaturedProducts</div>
  )
}

export default FeaturedProducts