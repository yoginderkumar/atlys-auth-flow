export type User = {
  uid: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  name?: string
};

export type AuthUser = {
  id: string;
  name: string;
  email: string;
}
