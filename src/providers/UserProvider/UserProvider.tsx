import {
  bioData,
  projectsData,
  skillsData,
  socialMediaData,
  workExperiencesData
} from 'data/index';
import {UserContext} from './UserContext';

type UserProviderProps = ComponentWithChildren;

export const UserProvider = ({children}: UserProviderProps) => {
  return (
    <UserContext.Provider value={{
      bioInformationContext: bioData,
      skillsContext: skillsData,
      projectsHandledContext: projectsData,
      socialMediaContext: socialMediaData,
      workExperienceContext: workExperiencesData,
    }}>
      {children}
    </UserContext.Provider>
  );
};
