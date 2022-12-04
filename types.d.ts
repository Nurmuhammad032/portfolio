export interface ProjectType {
  title: string;
  info: string;
  imgUrl: string;
  link: string;
}

export interface FooterProject {
  imgUrl: string;
  githubLink: string;
  link: string;
}

export interface FormValue {
  name: string;
  email: string;
  message: string;
}

export interface FormValidate {
  isValidName: boolean;
  isValidEmail: boolean;
  isValidMessage: boolean;
}
