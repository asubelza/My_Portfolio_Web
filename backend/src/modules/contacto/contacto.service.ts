import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

export interface ContactoDto {
  nombre: string;
  email: string;
  telefono?: string;
  servicio: string;
  mensaje: string;
}

@Injectable()
export class ContactoService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASSWORD'),
      },
    });
  }

  async enviarContacto(data: ContactoDto): Promise<{ success: boolean; message: string }> {
    const destino = this.configService.get('EMAIL_DESTINO') || this.configService.get('EMAIL_USER');

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Nuevo contacto desde Subelza CG</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Nombre:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Teléfono:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.telefono || 'No proporcionado'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Servicio:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.servicio}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Mensaje:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.mensaje}</td>
          </tr>
        </table>
      </div>
    `;

    try {
      await this.transporter.sendMail({
        from: `"Subelza CG Web" <${this.configService.get('EMAIL_USER')}>`,
        to: destino,
        subject: `Nuevo contacto: ${data.servicio} - ${data.nombre}`,
        html: htmlContent,
      });

      return { success: true, message: 'Mensaje enviado correctamente' };
    } catch (error) {
      console.error('Error al enviar email:', error);
      return { success: false, message: 'Error al enviar el mensaje' };
    }
  }
}