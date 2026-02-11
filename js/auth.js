// js/auth.js

window.auth = {
  isLoggedIn: false,

  async init() {
    // IMPORTANT: handle OAuth redirect
    await window.supabaseClient.auth.getSession()

    const { data: { session } } = await window.supabaseClient.auth.getSession()

    this.isLoggedIn = !!session
    this.render()
  },

  render() {
    const container = document.getElementById("auth-links")
    if (!container) return

    if (this.isLoggedIn) {
      container.innerHTML = `
        <a href="#" id="logout-link">Logout</a>
      `

      document.getElementById("logout-link").addEventListener("click", async (e) => {
        e.preventDefault()
        await window.supabaseClient.auth.signOut()
        location.reload()
      })

    } else {
      container.innerHTML = `
        <a href="#" id="login-link">Login</a>
      `

      document.getElementById("login-link").addEventListener("click", async (e) => {
        e.preventDefault()

        await window.supabaseClient.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: "https://noire-fashion.github.io/Noire-Website/"
          }
        })
      })
    }
  },

  async requireLogin(callback) {
    if (this.isLoggedIn) {
      await callback()
    } else {
      await window.supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "https://noire-fashion.github.io/Noire-Website/"
        }
      })
    }
  }
}
