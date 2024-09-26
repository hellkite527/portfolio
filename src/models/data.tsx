export type BioInformation = {
  fullname: string;
  dateOfBirth: number;
  contact: {
    mobile: string;
    email: string;
  },
  languages: string;
  cvLink: string;
}

export type ProjectsHandled = {
  name: string;
  url: string;
  period: {
    from: string;
    till: string;
  },
  description: string;
  techStack: string[],
}

export type SocialMedias = {
  url: string;
  icon: string;
}

export type WorkExperience = {
  jobTitle: string;
  employer: string;
  location: {
    city: string;
    country: string;
  },
  workPeriod: {
    from: string;
    till: string;
  },
  description: string;
}
