import { useQuery } from '@tanstack/react-query';
import { getProfileByName } from '../../services/api';
import { useBearStore } from '../../state/state';

const Profile = () => {
  const name = useBearStore((state) => state.userInfo?.name);

  const {
    isPending,
    isError,
    data: profile,
    error,
  } = useQuery({
    queryKey: ['venues', name],
    queryFn: () => getProfileByName(name),
  });

  if (isPending)
    return (
      <div className='md:bg-secondary px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        <span>Loading...</span>
      </div>
    );
  if (isError)
    return (
      <div className='md:bg-secondary px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        {' '}
        `Error: ${error.message}`{' '}
      </div>
    );

  return (
    <div className='md:bg-secondary px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <p>Profile page content: </p>
      <h3>{profile.name}</h3>
      <h3>{profile.email}</h3>
    </div>
  );
};

export default Profile;
