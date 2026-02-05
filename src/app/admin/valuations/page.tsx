'use client';


const mockValuations = [
  { id: '1', name: 'Patricia Hawkins', address: '14 Marryat Road, SW19 5BB', phone: '07700 900123', email: 'p.hawkins@email.com', date: '2025-01-28', status: 'new', type: 'Sales' },
  { id: '2', name: 'Robert Clarke', address: '28 Church Road, SW19 5AG', phone: '07700 900456', email: 'r.clarke@email.com', date: '2025-01-25', status: 'contacted', type: 'Lettings' },
  { id: '3', name: 'Helen Foster', address: '5 Ridgway, SW19 4QW', phone: '07700 900789', email: 'helen.f@email.com', date: '2025-01-22', status: 'booked', type: 'Sales' },
  { id: '4', name: 'Andrew Mitchell', address: '91 Wimbledon Hill Road, SW19 7PA', phone: '07700 900012', email: 'a.mitchell@email.com', date: '2025-01-18', status: 'completed', type: 'Sales' },
  { id: '5', name: 'Louise Barton', address: '6 Lancaster Road, SW19', phone: '07700 900345', email: 'l.barton@email.com', date: '2025-01-15', status: 'completed', type: 'Lettings' },
];

const pipelineSteps = ['new', 'contacted', 'booked', 'completed'];
const pipelineLabels: Record<string, string> = { new: 'New', contacted: 'Contacted', booked: 'Booked', completed: 'Completed' };
const pipelineColors: Record<string, string> = {
  new: 'bg-emerald-500',
  contacted: 'bg-blue-500',
  booked: 'bg-amber-500',
  completed: 'bg-slate/40',
};
const badgeColors: Record<string, string> = {
  new: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  contacted: 'bg-blue-50 text-blue-700 border-blue-200',
  booked: 'bg-amber-50 text-amber-700 border-amber-200',
  completed: 'bg-slate/5 text-slate/50 border-slate/15',
};

export default function AdminValuationsPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-[11px] font-inter uppercase tracking-[0.2em] text-slate/60 mb-1">Manage</p>
        <h1 className="font-cormorant text-[2rem] font-light text-charcoal">Valuation Requests</h1>
      </div>

      {/* Pipeline */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {pipelineSteps.map((step) => {
          const count = mockValuations.filter((v) => v.status === step).length;
          return (
            <div key={step} className="bg-white border border-beige/80 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full ${pipelineColors[step]}`} />
                <span className="text-[11px] font-inter uppercase tracking-[0.15em] text-slate/60">{pipelineLabels[step]}</span>
              </div>
              <p className="font-cormorant text-[1.75rem] font-light text-charcoal">{count}</p>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-white border border-beige/80 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-beige/60">
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Status</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Name</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Property</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Type</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Contact</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Date</th>
              <th className="text-left py-3.5 px-5 text-[10px] font-inter font-medium uppercase tracking-[0.15em] text-slate/50">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockValuations.map((val) => (
              <tr key={val.id} className="border-b border-beige/30 hover:bg-cream/30 transition-colors">
                <td className="py-3.5 px-5">
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-inter font-medium capitalize border rounded-sm ${badgeColors[val.status]}`}>
                    {val.status}
                  </span>
                </td>
                <td className="py-3.5 px-5 text-[13px] font-inter text-charcoal font-medium">{val.name}</td>
                <td className="py-3.5 px-5 text-[12px] font-inter text-slate">{val.address}</td>
                <td className="py-3.5 px-5">
                  <span className="text-[11px] font-inter text-slate bg-beige/50 px-2 py-0.5">{val.type}</span>
                </td>
                <td className="py-3.5 px-5">
                  <p className="text-[12px] font-inter text-slate">{val.phone}</p>
                  <p className="text-[11px] font-inter text-slate/50">{val.email}</p>
                </td>
                <td className="py-3.5 px-5 text-[12px] font-inter text-slate/60">{val.date}</td>
                <td className="py-3.5 px-5">
                  <button className="text-[11px] font-inter text-brand hover:text-brand-dark transition-colors font-medium uppercase tracking-wider">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
