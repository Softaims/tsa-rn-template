import { useQuery } from "@tanstack/react-query";
// import { getUserDetails } from "../apis/UserApis";

// export const useGetUserDetailsQuery = (userId: string, options = {}) => {
//     return useQuery({
//         queryKey: ['user', userId],
//         queryFn: () => getUserDetails(userId),
//         enabled: !!userId, // only run if userId is available
//         ...options,
//     });
// };