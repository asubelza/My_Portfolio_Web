import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Throttle, seconds } from '@nestjs/throttler';
import { ContactoService } from './contacto.service';
import { ContactoDto } from './contacto.dto';

@ApiTags('Contacto')
@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  @HttpCode(200)
  @Throttle({ default: { limit: 5, ttl: seconds(60) } })
  @ApiOperation({
    summary: 'Enviar formulario de contacto',
    description: 'Recibe los datos del formulario de contacto y envía un email',
  })
  @ApiResponse({ status: 200, description: 'Mensaje enviado correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos en el formulario' })
  @ApiResponse({ status: 429, description: 'Demasiadas solicitudes. Esperá un minuto.' })
  async enviar(@Body() data: ContactoDto) {
    return this.contactoService.enviarContacto(data);
  }
}
