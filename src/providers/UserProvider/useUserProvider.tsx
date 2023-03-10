import {useContext} from 'react';

import {UserContext} from './UserContext';

export const useUserProvider = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      'useUserProvider() hook must be used within <UserContext/>'
    );
  }
  return context;
};