'use client';

const mockValuations = [
  { id: '1', name: 'Patricia Hawkins', address: '14 Marryat Road, SW19 5BB', phone: '07700 900123', date: '2024-03-10', status: 'new' },
  { id: '2', name: 'Robert Clarke', address: '28 Church Road, SW19 5AG', phone: '07700 900456', date: '2024-03-08', status: 'contacted' },
  { id: '3', name: 'Helen Foster', address: '5 Ridgway, SW19 4QW', phone: '07700 900789', date: '2024-03-05', status: 'booked' },
  { id: '4', name: 'Andrew Mitchell', address: '91 Wimbledon Hill Road, SW19 7PA', phone: '07700 900012', date: '2024-03-01', status: 'completed' },
];

export default function AdminValuationsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="heading-title text-charcoal">Valuation Requests</h1>
        <p className="text-small text-slate font-inter mt-1">{mockValuations.length} requests</p>
      </div>

      <div className="bg-white overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-taupe/20">
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Name</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Address</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Phone</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Date</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockValuations.map((val) => (
              <tr key={val.id} className="border-b border-taupe/10 hover:bg-cream/50 transition-colors cursor-pointer">
                <td className="py-3 px-4 text-small font-inter text-charcoal font-medium">{val.name}</td>
                <td className="py-3 px-4 text-small font-inter text-slate">{val.address}</td>
                <td className="py-3 px-4 text-small font-inter text-slate">{val.phone}</td>
                <td className="py-3 px-4 text-small font-inter text-slate">{val.date}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 text-[10px] font-inter font-medium uppercase tracking-wider ${
                    val.status === 'new' ? 'bg-gold/10 text-gold-dark' :
                    val.status === 'contacted' ? 'bg-forest/10 text-forest' :
                    val.status === 'booked' ? 'bg-forest/10 text-forest' :
                    'bg-slate/10 text-slate'
                  }`}>
                    {val.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
