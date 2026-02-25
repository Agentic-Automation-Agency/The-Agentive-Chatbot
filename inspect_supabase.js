
const fs = require('fs');
const url = "https://tsvnfqjoosrkwxgaomui.supabase.co";
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdm5mcWpvb3Nya3d4Z2FvbXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMzA2OTcsImV4cCI6MjA3NDkwNjY5N30.k_gBiLCptHIXO2dDvMTllMI09wPBkTryPtfzNOLsJC8";

const tables = [
    'call_summaries',
    'customer_interactions',
    'initial_intake',
    'orthopedic_intake',
    'primary_care_intake',
    'psychiatric_intake',
    'vapi_calls'
];

async function inspect() {
    const schema = {};
    for (const table of tables) {
        try {
            const res = await fetch(`${url}/rest/v1/${table}?select=*&limit=1`, {
                headers: { 'apikey': anon_key, 'Authorization': `Bearer ${anon_key}` }
            });
            const data = await res.json();
            if (data && data.length > 0) {
                schema[table] = Object.keys(data[0]);
            } else {
                schema[table] = [];
            }
        } catch (e) {
            schema[table] = ["Error: " + e.message];
        }
    }
    fs.writeFileSync('vapi_schema.json', JSON.stringify(schema, null, 2));
}
inspect();
