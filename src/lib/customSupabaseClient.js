import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kphdwtcsteyqjwmkaiun.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwaGR3dGNzdGV5cWp3bWthaXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwNTk3ODIsImV4cCI6MjA3NTYzNTc4Mn0.BAiYL0JFfBL8A2dnI6EFkKZByZL-Je0FIz4yC9sOmqQ';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
