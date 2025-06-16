import { createClient } from '@/lib/supabase/server';

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes, error } = await supabase.from("notes").select();

  if (error) {
    console.error('Supabase error:', error.message);
  }

  return <pre>{JSON.stringify({ notes, error }, null, 2)}</pre>
}