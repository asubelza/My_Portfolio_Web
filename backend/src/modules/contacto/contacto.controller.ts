import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ContactoService, ContactoDto } from './contacto.service';
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

class ContactoBodyDto implements ContactoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  @IsNotEmpty()
  servicio: string;

  @IsString()
  @IsNotEmpty()
  mensaje: string;
}

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  @HttpCode(200)
  async enviar(@Body() data: ContactoBodyDto) {
    return this.contactoService.enviarContacto(data);
  }
}