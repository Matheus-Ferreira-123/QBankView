import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.error('Erro ao carregar clientes:', error)
    );
  }
  deleteClient(clientId: string) {
    this.clientService.deleteClient(clientId).subscribe({
      next: () => {
        console.log(`Cliente com ID ${clientId} excluído.`);
        this.clients = this.clients.filter(client => client.id !== clientId); // Remove o cliente localmente
      },
      error: error => console.error('Erro ao excluir cliente:', error)
    });
  }
  updateClient(client: any) {
    console.log('Cliente a ser atualizado:', client);
    // Aqui você pode adicionar lógica para redirecionar para uma página de edição, 
    // abrir um modal de edição ou executar qualquer outra ação relacionada ao cliente.
  }
}
