import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ynecombuffkbyloeqsny.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluZWNvbWJ1ZmZrYnlsb2Vxc255Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTkwNzY2OSwiZXhwIjoyMDY3NDgzNjY5fQ.NcBLq9Oh8FCdV7c8benzFV9OUy9t3spmOQ4A5TMp3bY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
