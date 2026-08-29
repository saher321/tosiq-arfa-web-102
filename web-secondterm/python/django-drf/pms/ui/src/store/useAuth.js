import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      userForgotEmail: '',
      isAuthenticated: false,

      login: (user, token) => {
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
            user: null,
            token: null,
            isAuthenticated: false,
        })
      }, 
      forgotEmail: (forgotUserEmail) => {
        set({
          userForgotEmail: forgotUserEmail
        })
      }
    }),
    {
      name: "uDetails",
    },
  ),
);

export default useAuth;
