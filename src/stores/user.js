// stores/users.js
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const useStore = defineStore("user",{
    id: 'users',
    state: () => ({
      users: null,
    }),
    getters: {
      getUsers(state){
        return state.users
      }
    },
    actions: {
      async fetchUsers() {
        try {
          const data = await axios.get('http://localhost:3000/users')
          const user = await res.json();
          this.users = user;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async signUp(email, password) {
        const res = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const user = await res.json()
        this.users = user;
      },
      async signIn(email, password) {
        console.log('hola')
        const res = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const user = await res.json();
        this.users = user;
      },
    },
})