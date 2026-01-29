export interface NavItem {
  id: string;
  title: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface PartnerLogo {
  name: string;
  logo: string;
  url: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}