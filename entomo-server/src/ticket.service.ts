import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TicketService { 
    public prisma = new PrismaClient();
  
  async getAllTikects(): Promise<any> {
    return await this.prisma.ticket.findMany();
  } 

  async updateTicket(ticket:Ticket): Promise<Ticket> {
    return await this.prisma.ticket.update({
        where:{id: ticket.id},
        data:{
            state:ticket.state,
        }
    })
  }

  async createNewTicket(ticket : Ticket): Promise<Ticket>{ 
    const newTicket : Ticket =  await this.prisma.ticket.create({
        data:{
            title: ticket.title,
            description: ticket.description,
            state: ticket.state
        },
    });
    return newTicket;
  } 

  async deleteTicket(ticketId : string): Promise<Ticket>{
    return await this.prisma.ticket.delete({
        where:{id:ticketId}
    })
  }

  async getTicketById(id:string): Promise<Ticket>{
    return await this.prisma.ticket.findUnique({
      where:{id}
    })
  }

}
