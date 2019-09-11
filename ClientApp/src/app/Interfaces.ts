//Se declaran los Modelos como interfaces y se ocupa export para que puedan importarse
export interface Message {
  Id: number,
  Name: string,
  Message: string
}
export interface MyResponse {
  Success: number,
  Data: any,
  Message: string
}
