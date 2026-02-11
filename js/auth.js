
import { supabase } from './supabaseClient.js'

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("google-login")

  btn.addEventListener("click", async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://noire-fashion.github.io/Noire-Website/'
      }
    })
  })
})
