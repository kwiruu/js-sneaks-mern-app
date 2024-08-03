import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Navigate } from 'react-router-dom';
import ProfileComponent from '../components/ProfileComponent';
import ShoesList from '../components/ShoesList';
import Loading from '../components/Loading';

export default function AccountPage() {
  const { ready, user } = useContext(UserContext);

  if (!ready) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (ready && !user) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className="p-5 pt-10">
      <ProfileComponent user={user} />
      <ShoesList />
    </div>
  );
}
