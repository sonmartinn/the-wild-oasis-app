import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://qobjdzkaawnyjjkafxyf.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvYmpkemthYXdueWpqa2FmeHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0OTI2MjMsImV4cCI6MjA3MDA2ODYyM30.PAU23V4V3xqnYI8_JTQBOJxGIA7XqyYsFyVZTBblK5M'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
