
const url = "https://tsvnfqjoosrkwxgaomui.supabase.co";
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdm5mcWpvb3Nya3d4Z2FvbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMzA2OTcsImV4cCI6MjA3NDkwNjY5N30.k_gBiLCptHIXO2dDvMTllMI09wPBkTryPtfzNOLsJC8";
const tables = ['call_summaries', 'customer_interactions', 'initial_intake', 'orthopedic_intake', 'primary_care_intake', 'psychiatric_intake', 'vapi_calls'];
async function run() {
    for (const t of tables) {
        const r = await fetch(`${url}/rest/v1/${t}?select=*&limit=1`, { headers: { 'apikey': anon_key, 'Authorization': `Bearer ${anon_key}` } });
        const d = await r.json();
        console.log(`SCHEMA_FOR_${t}: ${d.length > 0 ? Object.keys(d[0]).join(',') : 'EMPTY'}`);
    }
}
run();
