import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase env variables: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY'
  )
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
