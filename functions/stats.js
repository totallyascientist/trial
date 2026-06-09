const DRIVERS = [
    'jay','jungwon','tzuyu','sana','winter','ning ning','V','jimin',
    'rose','lisa','ian','stella','ahyeon','ruka','sullyoon','jiwoo',
    'minju','wonhee','wonyoung','gaeul'
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
