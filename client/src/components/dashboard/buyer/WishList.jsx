import useAuth from "../../../hooks/useAuth"

const WishList = () => {
    const {user} = useAuth()
    console.log('wishlist',user);
  return (
    <div>WishList</div>
  )
}

export default WishList