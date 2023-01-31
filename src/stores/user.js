// stores/users.js
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const useUserStore = defineStore("user",{
    state: () => ({
      users: [],
    }),
    getters: {
      getUsers(state){
        return state.users
      }
    },
    actions: {
      async fetchUsers() {
        try {
          const data = await axios.get('https://api-jsonserver.vercel.app/users')
          const user = await res.json();
          this.user = user;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async signUp(email, password) {
        const res = await fetch("https://api-jsonserver.vercel.app/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const user = await res.json()
        this.user = user;
      },
      async signIn(email, password) {
        const res = await fetch("https://api-jsonserver.vercel.app/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const user = await res.json();
        this.user = user;
      },
    },
})