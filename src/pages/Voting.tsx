import { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow } from '../components/Shared';

const drivers = ['jay','jungwon','tzuyu','sana','winter','ning ning','V','jimin','rose','lisa','ian','stella','ahyeon','ruka','sullyoon','jiwoo','minju','wonhee','wonyoung','gaeul'];
const voteEnd = new Date('2026-07-05T15:59:00Z');
const label = (name: string) => name === 'V' ? 'V' : name.split(' ').map((part) => part[0].toUpperCase() + part.slice(1)).join(' ');

export default function Voting() {
  const [selected, setSelected] = useState<string | null>(null);
  const [countdown, setCountdown] = useState('');
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [overlay, setOverlay] = useState(false);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const loadStats = useCallback(async () => {
    try {
      const response = await fetch('/stats', { cache: 'no-store' });
      if (!response.ok) return;
      const next = await response.json() as Record<string, number>;
      const extra = ['wonhee','minju','ian','stella','jimin','V','gaeul','wonyoung'];
      await Promise.all(extra.map(async (name) => {
        try { const result = await fetch(`/getVote?key=${encodeURIComponent(`vote_${name}`)}`, { cache: 'no-store' }); if (result.ok) next[`vote_${name}`] = Number(await result.text()) || 0; } catch { /* keep stats already received */ }
      }));
      setVotes(next);
    } catch { setMessage('Live standings are temporarily unavailable.'); }
  }, []);

  useEffect(() => {
    const update = () => { const diff = voteEnd.getTime() - Date.now(); if (diff <= 0) { setCountdown('VOTING CLOSED'); return; } const d = Math.floor(diff / 86400000); const h = Math.floor(diff / 3600000) % 24; const m = Math.floor(diff / 60000) % 60; const s = Math.floor(diff / 1000) % 60; setCountdown(`${d} DAYS  :  ${h} HOURS  :  ${m} MIN  :  ${s} SEC`); };
    update(); const timer = window.setInterval(update, 1000); void loadStats(); const poll = window.setInterval(() => void loadStats(), 3000);
    return () => { window.clearInterval(timer); window.clearInterval(poll); };
  }, [loadStats]);

  async function submitVote() {
    if (!selected || submitting) return;
    setSubmitting(true); setMessage('');
    try {
      const response = await fetch('/vote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ driver: selected }) });
      if (!response.ok) throw new Error('Vote request was not accepted.');
      setOverlay(true); await loadStats();
    } catch { setMessage('Your vote could not be confirmed. Please try again later.'); }
    finally { setSubmitting(false); }
  }

  async function shareVote() {
    if (!selected) return;
    const imageUrl = `/vote-media/completion-photos/${encodeURIComponent(selected)}.png`;
    try {
      const response = await fetch(imageUrl); const blob = await response.blob(); const file = new File([blob], `${selected}.png`, { type: blob.type });
      if (navigator.canShare?.({ files: [file] })) await navigator.share({ files: [file], text: `I voted for ${label(selected)}! Vote now at totallyascientist.com/vote`, url: 'https://totallyascientist.com/vote' });
      else if (navigator.share) await navigator.share({ title: 'Idol of the Week', text: `I voted for ${label(selected)}!`, url: 'https://totallyascientist.com/vote' });
      else setMessage('Image sharing is not supported on this device.');
    } catch { /* user may cancel the share sheet */ }
  }

  const ranking = drivers.map((name) => ({ name, count: Number(votes[name] ?? votes[`vote_${name}`] ?? 0) })).sort((a,b) => b.count-a.count);
  const total = ranking.reduce((sum, item) => sum + item.count, 0);

  return <main className="vote-page">
    <div className="vote-page-top"><Eyebrow>FAN ZONE / COMMUNITY VOTE</Eyebrow><Link to="/fan-zone" className="vote-back"><ArrowLeft size={15}/> FAN ZONE</Link></div>
    <section className="vote-hero"><p className="vote-kicker">IDOL OF THE WEEK / 2026</p><h1>YOUR IDOL.<br/><em>YOUR VOTE.</em></h1><p>Formula 1's Driver of the Day format, with a K-pop spin. Choose your favourite idol.</p><div className="vote-countdown">{countdown}</div></section>
    <section className="vote-selection"><div className="vote-section-head"><Eyebrow number="01">PICK YOUR IDOL</Eyebrow><span>{selected ? `SELECTED / ${label(selected)}` : 'SELECT ONE CANDIDATE'}</span></div><div className="vote-grid">{drivers.map((name) => <button type="button" className={`vote-card ${selected===name?'is-selected':''}`} key={name} onClick={() => setSelected(name)} aria-pressed={selected===name}><img src={`/vote-media/driver-photos/${encodeURIComponent(name)}.png`} alt={label(name)} loading="lazy"/><span>{label(name)}</span><i>{selected===name?'SELECTED':'CHOOSE'}</i></button>)}</div>{message && <p className="vote-message" role="status">{message}</p>}<button type="button" className="button button-dark vote-submit" disabled={!selected || submitting} onClick={submitVote}>{submitting?'SUBMITTING…':'SUBMIT VOTE'} <ArrowUpRight size={16}/></button><p className="vote-note">The poll's configured closing time has passed. The original endpoint determines whether submissions are accepted.</p></section>
    <section className="vote-standings"><Eyebrow number="02">THE GRID / LIVE DATA</Eyebrow><h2>CURRENT <em>STANDINGS.</em></h2><p className="vote-total">{total.toLocaleString()} votes recorded · refreshed every 3 seconds</p><div className="vote-ranking">{ranking.map((item,index) => <div className="vote-rank-row" key={item.name}><span className="vote-rank-number">{String(index+1).padStart(2,'0')}</span><img src={`/vote-media/driver-names/${encodeURIComponent(item.name)}.png`} alt=""/><span className="vote-rank-name">{label(item.name)}</span><strong>{total ? `${(item.count/total*100).toFixed(2)}%` : '—'}</strong></div>)}</div><button className="button button-outline vote-refresh" onClick={() => void loadStats()}>REFRESH STANDINGS</button></section>
    {overlay && selected && <div className="vote-overlay" role="dialog" aria-modal="true" aria-label="Vote confirmation" onClick={() => setOverlay(false)}><div className="vote-overlay-card" onClick={(event) => event.stopPropagation()}><button className="vote-overlay-close" onClick={() => setOverlay(false)} aria-label="Close">×</button><Eyebrow>VOTE SUBMITTED</Eyebrow><h2>YOU PICKED <em>{label(selected)}.</em></h2><img src={`/vote-media/completion-photos/${encodeURIComponent(selected)}.png`} alt={`Vote completion graphic for ${label(selected)}`}/><button className="button button-dark" onClick={() => void shareVote()}><Share2 size={16}/> SHARE MY VOTE</button></div></div>}
  </main>;
}
