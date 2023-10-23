export class ReturUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;

  constructor(userEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
  }
}
