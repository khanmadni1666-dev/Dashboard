// src/App.jsx
import { useState } from 'react';
import { Eye, Users, UserPlus, Star } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import StatCard from './components/dashboard/StatCard';
import RevenueChart from './components/dashboard/RevenueChart';
import ProfitChart from './components/dashboard/ProfitChart';
import DeviceUsers from './components/dashboard/DeviceUsers';
import RecentOrders from './components/dashboard/RecentOrders';
import UsersByCountry from './components/dashboard/UsersByCountry';
import UsersHeader from './components/users/UsersHeader';
import UsersTable from './components/users/UsersTable';
import AddUserForm from './components/users/AddUserForm';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  return (
    <div className="min-h-screen bg-bg-main">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="md:ml-64 p-6">

        {activePage === 'Dashboard' && (
          <>
        
        <Topbar />

        <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <StatCard
            icon={Eye}
            label="Pageviews"
            value="50.8K"
            change="24.6%"
            isPositive={true}
          />
          <StatCard
            icon={Users}
            label="Monthly users"
            value="23.6K"
            change="18.2%"
            isPositive={true}
          />
          <StatCard
            icon={UserPlus}
            label="New sign ups"
            value="756"
            change="3.1%"
            isPositive={false}
          />
          <StatCard
            icon={Star}
            label="Subscriptions"
            value="2.3K"
            change="8.4%"
            isPositive={true}
          />
        </div>

        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
  <RevenueChart />
  <ProfitChart />
</div>

        {/* Reports overview section starts here */}
        <h2 className="text-text-primary text-xl font-semibold mb-6">Reports overview</h2>

        <div className="flex flex-wrap gap-4">
          <DeviceUsers />
          <RecentOrders />
        </div>
        <div className="mt-8">
          <UsersByCountry/>
        </div>
        </>
        )}

        {activePage === 'Reports' && (
          <div>Reports page (or keep as part of Dashboard — your call)</div>
        )}

        {activePage === 'Users' && (
      <>
      <UsersHeader onNavigate={setActivePage} />
      <UsersTable />
      </>      
      )}
      {activePage === 'AddUser' && <AddUserForm />}



      </main>
    </div>
  );

}


export default App;