'use client';

const mockInquiries = [
  { id: '1', name: 'James Robertson', email: 'james@email.com', type: 'viewing', property: 'Marryat Road', date: '2024-03-10', status: 'new' },
  { id: '2', name: 'Sarah Collins', email: 'sarah@email.com', type: 'info', property: 'High Street', date: '2024-03-09', status: 'new' },
  { id: '3', name: 'Michael Chen', email: 'michael@email.com', type: 'viewing', property: 'Burghley Road', date: '2024-03-08', status: 'replied' },
  { id: '4', name: 'Emma Thompson', email: 'emma@email.com', type: 'general', property: null, date: '2024-03-07', status: 'replied' },
  { id: '5', name: 'David Park', email: 'david@email.com', type: 'viewing', property: 'Church Road', date: '2024-03-06', status: 'closed' },
];

export default function AdminInquiriesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="heading-title text-charcoal">Inquiries</h1>
        <p className="text-small text-slate font-inter mt-1">{mockInquiries.length} total inquiries</p>
      </div>

      <div className="bg-white overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-taupe/20">
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Name</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Email</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Type</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Property</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Date</th>
              <th className="text-left py-3 px-4 text-tiny font-inter font-medium uppercase tracking-widest text-slate">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockInquiries.map((inquiry) => (
              <tr key={inquiry.id} className="border-b border-taupe/10 hover:bg-cream/50 transition-colors cursor-pointer">
                <td className="py-3 px-4 text-small font-inter text-charcoal font-medium">{inquiry.name}</td>
                <td className="py-3 px-4 text-small font-inter text-slate">{inquiry.email}</td>
                <td className="py-3 px-4 text-small font-inter text-slate capitalize">{inquiry.type}</td>
                <td className="py-3 px-4 text-small font-inter text-slate">{inquiry.property || '—'}</td>
                <td className="py-3 px-4 text-small font-inter text-slate">{inquiry.date}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 text-[10px] font-inter font-medium uppercase tracking-wider ${
                    inquiry.status === 'new' ? 'bg-gold/10 text-gold-dark' :
                    inquiry.status === 'replied' ? 'bg-forest/10 text-forest' :
                    'bg-slate/10 text-slate'
                  }`}>
                    {inquiry.status}
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
