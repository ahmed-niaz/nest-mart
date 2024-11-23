import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosCommon = useAxios();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosCommon(`/users`);
      // Find the user by their email
      const userData = data.find((item) => item.email === user.email);
      // Return the role if user is found
      return userData?.role || "";
    },
  });

  return [role, isLoading];
};

export default useRole;
