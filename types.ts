export interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IContactType {
  id: string;
  name: string;
  email: string;
  adress: IAdress;
}

export interface IPostType {
  title: string;
  body: string;
}
export interface IPostsType {
  id: string;
  title: string;
}

export interface NavigationInfo {
  id: string | number;
  title: string;
  path: string;
}
