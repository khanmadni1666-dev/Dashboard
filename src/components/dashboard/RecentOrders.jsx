// src/components/dashboard/RecentOrders.jsx
const orders = [
  { id: '#1532', date: 'Dec 30, 10:06 AM', status: 'Paid', total: '$ 329.40', checked: true },
  { id: '#1531', date: 'Dec 29, 2:59 AM', status: 'Pending', total: '$ 117.24', checked: false },
  { id: '#1530', date: 'Dec 29, 12:54 AM', status: 'Pending', total: '$ 52.16', checked: false },
  { id: '#1529', date: 'Dec 28, 2:32 PM', status: 'Paid', total: '$ 350.52', checked: true },
  { id: '#1528', date: 'Dec 27, 2:20 PM', status: 'Pending', total: '$ 246.78', checked: false },
  { id: '#1527', date: 'Dec 26, 9:48 AM', status: 'Paid', total: '$ 64.00', checked: true },
];

const statusStyles = {
  Paid: 'bg-success/10 text-success',
  Pending: 'bg-orange-500/10 text-orange-400',
};

export default function RecentOrders() {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-card p-5 flex-1">
      <div className="flex items-center justify-between mb-4">
        <p className="text-text-primary font-medium">Recent orders</p>
        <span className="text-text-muted text-xs">Jan 2024</span>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-text-muted text-xs border-b border-border-subtle">
            <th className="text-left font-normal pb-2">Order</th>
            <th className="text-left font-normal pb-2">Date</th>
            <th className="text-left font-normal pb-2">Status</th>
            <th className="text-right font-normal pb-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b border-border-subtle/50 last:border-0">
              <td className="py-2.5 flex items-center gap-2">
                <input type="checkbox" defaultChecked={o.checked}
                       className="accent-accent-purple rounded" />
                <span className="text-text-primary">{o.id}</span>
              </td>
              <td className="py-2.5 text-text-muted">{o.date}</td>
              <td className="py-2.5">
                <span className={`text-xs px-2 py-0.5 rounded-md ${statusStyles[o.status]}`}>
                  ● {o.status}
                </span>
              </td>
              <td className="py-2.5 text-right text-text-primary">{o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}