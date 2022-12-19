import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller()
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get("/ticket/all")
  async getAllTickets(): Promise<any> {
    const res =  await this.ticketService.getAllTikects(); 
    console.log(res);
    return res;
  }
  
  @Get("/ticket/:id")
  async getTicketById(@Param('id') id:string): Promise<any>{
    return await this.ticketService.getTicketById(id)
  }

  @Post("/ticket")
  async generateTicket(@Body() ticket: Ticket): Promise<any>{
    return await this.ticketService.createNewTicket(ticket);
  }

  @Delete("/ticket/:id")
  async deleteTicket(@Param('id') id:string): Promise<any>{
    return await this.ticketService.deleteTicket(id);
  } 

  @Patch("/ticket")
  async updateTicket(@Body() ticket: Ticket): Promise<any>{
    return await this.ticketService.updateTicket(ticket);
  }

}
