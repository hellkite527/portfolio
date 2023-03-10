import {createContext} from 'react';
import { BioInformation, ProjectsHandled, SocialMedias, WorkExperience } from 'models/data';

export interface UserContextProps {
  bioInformationContext: BioInformation | undefined;
  skillsContext: string[] | undefined;
  projectsHandledContext: ProjectsHandled[] | undefined;
  socialMediaContext: SocialMedias[] | undefined;
  workExperienceContext: WorkExperience[] | undefined;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);