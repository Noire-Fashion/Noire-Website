import { supabase } from './supabaseClient.js'

async function loginWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://noire-fashion.github.io/Noire-Website/'
    }
  })
}
