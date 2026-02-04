// Initialize Supabase client
// In production, replace with your env vars. Locally, set via a .env file or global window object.
const SUPABASE_URL = 'https://xpfydaohsihasabnalyw.supabase.co';  // Replace with your URL
const SUPABASE_ANON_KEY = 'sb_publishable_y9IGmcNotMSeJhbE7gqXig_tgAPScy3';  // Replace with your anon key
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabase;
