export function SysmonVisual() {
  return (
    <svg viewBox="0 0 200 120" className="h-auto w-full" aria-hidden="true">
      <rect x="4" y="4" width="192" height="96" fill="#131313" stroke="#0a0a0a" strokeWidth="3" />
      <rect x="4" y="4" width="192" height="14" fill="#adff2f" stroke="#0a0a0a" strokeWidth="3" />
      <circle cx="12" cy="11" r="3" fill="#0a0a0a" />
      <circle cx="22" cy="11" r="3" fill="#0a0a0a" />
      <circle cx="32" cy="11" r="3" fill="#0a0a0a" />
      <text x="10" y="40" fill="#adff2f" fontSize="11" fontFamily="monospace" fontWeight="700">
        cpu: 42% | mem: 6.1G | io: 1.2M
      </text>
      <text x="10" y="58" fill="#3d8bff" fontSize="11" fontFamily="monospace" fontWeight="700">
        svc: nginx  [ok]   sched: daily
      </text>
      <text x="10" y="76" fill="#f4f2ed" fontSize="11" fontFamily="monospace" fontWeight="700">
        alert: disk &gt; 80%  -&gt;  webhook
      </text>
      <rect x="10" y="86" width="30" height="4" fill="#adff2f" />
    </svg>
  );
}

export function TaskbruteVisual() {
  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 120 180" className="h-auto w-full max-w-40" aria-hidden="true">
        <rect x="6" y="2" width="108" height="176" rx="8" fill="#f4f2ed" stroke="#0a0a0a" strokeWidth="3" />
        <rect x="14" y="10" width="92" height="14" rx="3" fill="#131313" stroke="#0a0a0a" strokeWidth="3" />
        <rect x="18" y="34" width="84" height="14" fill="#adff2f" stroke="#0a0a0a" strokeWidth="3" />
        <rect x="18" y="56" width="84" height="30" fill="#131313" stroke="#0a0a0a" strokeWidth="3" />
        <rect x="26" y="62" width="40" height="6" fill="#f4f2ed" />
        <rect x="26" y="72" width="60" height="4" fill="#3d8bff" />
        <rect x="18" y="94" width="84" height="30" fill="#131313" stroke="#0a0a0a" strokeWidth="3" />
        <rect x="26" y="100" width="46" height="6" fill="#f4f2ed" />
        <rect x="26" y="110" width="58" height="4" fill="#adff2f" />
        <rect x="18" y="132" width="84" height="30" fill="#131313" stroke="#0a0a0a" strokeWidth="3" />
        <rect x="26" y="138" width="52" height="6" fill="#f4f2ed" />
        <rect x="26" y="148" width="44" height="4" fill="#3d8bff" />
      </svg>
    </div>
  );
}