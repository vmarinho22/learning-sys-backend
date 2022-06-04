export class CreateUserDto {
  name: string;
  mail: string;
  password: string;
  permission: number;
  blocked: boolean;
  sectorId: number;
}
