// auth.js

import { supabase } from "./supabaseClient.js"

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("google-login")
  const logoutBtn = document.getElementById("logout-btn")

  // LOGIN
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "https://noire-fashion.github.io/Noire-Website/"
        }
      })
    })
  }

  // LOGOUT
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await supabase.auth.signOut()
      window.location.reload()
    })
  }

  // CHECK SESSION
  checkUser()
})

async function checkUser() {
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    console.log("User logged in:", session.user)

    const loginBtn = document.getElementById("google-login")
    if (loginBtn) loginBtn.style.display = "none"
  }
}
