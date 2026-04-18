import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqeondlkejwecenatscp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZW9uZGxrZWp3ZWNlbmF0c2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxODk4ODIsImV4cCI6MjA5MTc2NTg4Mn0.Ifb075ogRN7-FY_OzfVk8R7c55930W99F_9T1A17GVg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);