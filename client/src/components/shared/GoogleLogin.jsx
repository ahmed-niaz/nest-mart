import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import google from '../../assets/googleIcon.png'
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <main>
      <Link
        onClick={handleGoogleLogin}
    
      >
       <img className="w-8" src={google} alt={google} />
      </Link>
    </main>
  );
};

export default GoogleLogin;
