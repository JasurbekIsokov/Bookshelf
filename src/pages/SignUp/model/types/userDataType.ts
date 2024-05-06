export interface userData {
  email: string;
  id: number;
  key: string;
  name: string;
  secret: string;
}

export interface apiResponceuserData {
  data: {
    email: string;
    id: number;
    key: string;
    name: string;
    secret: string;
  };

  isOk: string;
  message: string;
}
