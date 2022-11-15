const SUPABASE_URL = 'https://eqvhbypqmflvzwpuxohs.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdmhieXBxbWZsdnp3cHV4b2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMzAsImV4cCI6MTk4MzY4NDAzMH0.69mAZ8sZWHEPxgHYg8wvmHJc4GleoS6fqfGdJQOWGno';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCards() {
    const response = await client.from('cards').select('*');
    return response.data;
}

export async function getCard(id) {
    const response = await client.from('cards').select('*').match({ id: id }).single();
    return response.data;
}
