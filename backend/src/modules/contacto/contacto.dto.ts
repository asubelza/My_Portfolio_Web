import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class ContactoDto {
  @ApiProperty({
    description: 'Nombre completo de la persona que contacta',
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  nombre: string;

  @ApiProperty({
    description: 'Correo electrónico para responder',
    example: 'juan@ejemplo.com',
  })
  @IsEmail({}, { message: 'El email no es válido' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email: string;

  @ApiPropertyOptional({
    description: 'Teléfono de contacto (opcional)',
    example: '+54 11 1234 5678',
  })
  @IsString()
  @IsOptional()
  telefono?: string;

  @ApiProperty({
    description: 'Servicio sobre el que se consulta',
    example: 'IA',
    enum: ['IA', 'RPA/Automatización', 'Desarrollo Web', 'APIs', 'Consultoría', 'Otro'],
  })
  @IsString()
  @IsNotEmpty({ message: 'El servicio es requerido' })
  servicio: string;

  @ApiProperty({
    description: 'Mensaje o consulta',
    example: 'Hola, quiero consultar por servicios de IA para mi empresa.',
  })
  @IsString()
  @IsNotEmpty({ message: 'El mensaje no puede estar vacío' })
  mensaje: string;
}
