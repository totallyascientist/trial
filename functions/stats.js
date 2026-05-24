const DRIVERS = [
    'rose','tzuyu','jay','bang chan','winter','wonhee','minju','lisa',
    'sana','mingyu','ian','stella','jungwon','jimin','vernon','V',
    'ning ning','gaeul','wonyoung','felix'
  ];

export async function onRequestGet({ env }) {
  if (!env.VOTES) {
    return new Response(
      JSON.stringify({ error: 'KV not bound' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let total = 0;
  const counts = {};

  for (const d of DRIVERS) {
    const v = parseInt(await env.VOTES.get(`vote_${d}`) || '0');
    counts[d] = v;
    total += v;
  }

  const result = {};
  for (const d of DRIVERS) {
    result[d] = total === 0 ? 0 : (counts[d] / total * 100);
  }

  return new Response(JSON.stringify(result, total), {
    headers: { 'Content-Type': 'application/json' }
  });
}
