// import { cookies } from 'next/headers';
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface UserInfor{
//     email: string;
//     access_token: string;
//     first_name: string;
// }
// interface UserStore {
//     data?: UserInfor;
  
// }

// const useAuth =  create(
//     persist<UserStore>(
//         (set, get) => ({
//             data: {},
//             checkLogin: (data: any) => {
//                 const token = cookies().get('token')?.value;
//                 if(!token){
//                     return false
//                 }
//                 return true;
//             },
//             getInfor(info: UserInfor){

//             } ,
//             logout: () => set({ data: {} }),
//         }),
            
//         {
//             name: "cart-storage",
//             storage: createJSONStorage(() => localStorage),
//         }
//     )
// );
// export default useAuth;