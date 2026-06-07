import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ContactoService } from './contacto.service';
import { ContactoDto } from './contacto.dto';

@ApiTags('Contacto')
@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Enviar formulario de contacto',
    description: 'Recibe los datos del formulario de contacto y envía un email',
  })
  @ApiResponse({ status: 200, description: 'Mensaje enviado correctamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos en el formulario' })
  async enviar(@Body() data: ContactoDto) {
    return this.contactoService.enviarContacto(data);
  }
}
