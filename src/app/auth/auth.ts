export interface LogInModel {
  email: string,
  password: string;
}

export interface RegisterModel {
  firstname: string,
  lastname: string,
  email: string,
  password: string
}

export interface data {
  api_token: string,
  email: string,
  firstname: string,
  id: number,
  lastname: string,
}

export class ResponseModel {
  constructor(private modelData: data) {
    this.modelData.firstname = modelData.firstname;
    this.modelData.lastname = modelData.lastname;
    this.modelData.email = modelData.email;
    this.modelData.id = modelData.id;
    this.modelData.api_token = modelData.api_token;
  }
}

