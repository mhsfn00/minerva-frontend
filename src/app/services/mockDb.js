const calls = [
    { number: 1, reason: "Açoalho", dateCreated: "2024-09-01", client: "John Doe", urgency: "moderado", status: "aberto" },
    { number: 2, reason: "Esquadrias", dateCreated: "2024-09-02", client: "Jane Smith", urgency: "baixo", status: "fechado" },
    { number: 3, reason: "Estrutural", dateCreated: "2024-09-03", client: "Carlos Silva", urgency: "alto", status: "aberto" },
    { number: 4, reason: "Pintura", dateCreated: "2024-09-04", client: "Ana Costa", urgency: "moderado", status: "fechado" },
    { number: 5, reason: "Estrutural", dateCreated: "2024-09-05", client: "Roberto Lima", urgency: "alto", status: "aberto" },
    { number: 6, reason: "Açoalho", dateCreated: "2024-09-06", client: "Maria Oliveira", urgency: "baixo", status: "cancelado" },
    { number: 7, reason: "Estrutural", dateCreated: "2024-09-07", client: "Paulo Souza", urgency: "alto", status: "aberto" },
    { number: 8, reason: "Açoalho", dateCreated: "2024-09-08", client: "Fernanda Rocha", urgency: "baixo", status: "fechado" },
    { number: 9, reason: "Esquadrias", dateCreated: "2024-09-09", client: "Gustavo Pereira", urgency: "moderado", status: "aberto" },
    { number: 10, reason: "Pintura", dateCreated: "2024-09-10", client: "Luiza Martins", urgency: "moderado", status: "cancelado" }
  ]
  

const clients = [
    { name: "John Doe", phone: "555-1234", eMail: "john.doe@example.com", city: "Maringá", openCall: "sim" },
    { name: "Jane Smith", phone: "555-5678", eMail: "jane.smith@example.com", city: "Rio de Janeiro", openCall: "não" },
    { name: "Carlos Silva", phone: "555-8765", eMail: "carlos.silva@example.com", city: "Belo Horizonte", openCall: "sim" },
    { name: "Ana Costa", phone: "555-4321", eMail: "ana.costa@example.com", city: "São Paulo", openCall: "não" },
    { name: "Roberto Lima", phone: "555-6789", eMail: "roberto.lima@example.com", city: "Curitiba", openCall: "sim" },
    { name: "Maria Oliveira", phone: "555-9876", eMail: "maria.oliveira@example.com", city: "Brasília", openCall: "não" },
    { name: "Paulo Souza", phone: "555-5432", eMail: "paulo.souza@example.com", city: "Porto Alegre", openCall: "sim" },
    { name: "Fernanda Rocha", phone: "555-6543", eMail: "fernanda.rocha@example.com", city: "Manaus", openCall: "não" },
    { name: "Gustavo Pereira", phone: "555-7654", eMail: "gustavo.pereira@example.com", city: "Florianópolis", openCall: "sim" },
    { name: "Luiza Martins", phone: "555-8765", eMail: "luiza.martins@example.com", city: "Fortaleza", openCall: "não" }
  ]
  
const buildings = [
    { name: "Sky Tower", address: "123 Main St", owner: "John Doe", city: "Maringá", openCall: "sim" },
    { name: "Ocean View", address: "456 Beach Rd", owner: "Jane Smith", city: "Rio de Janeiro", openCall: "não" },
    { name: "Mountain Peak", address: "789 Hilltop Ave", owner: "Carlos Silva", city: "Belo Horizonte", openCall: "sim" },
    { name: "Sunset Plaza", address: "101 Sunset Blvd", owner: "Ana Costa", city: "São Paulo", openCall: "não" },
    { name: "Green Gardens", address: "202 Garden St", owner: "Roberto Lima", city: "Curitiba", openCall: "sim" },
    { name: "City Center", address: "303 Central Ave", owner: "Maria Oliveira", city: "Brasília", openCall: "não" },
    { name: "Lakeside", address: "404 Lake Dr", owner: "Paulo Souza", city: "Porto Alegre", openCall: "sim" },
    { name: "Riverfront", address: "505 River Rd", owner: "Fernanda Rocha", city: "Manaus", openCall: "não" },
    { name: "Forest Heights", address: "606 Forest Ln", owner: "Gustavo Pereira", city: "Florianópolis", openCall: "sim" },
    { name: "Desert Oasis", address: "707 Desert St", owner: "Luiza Martins", city: "Fortaleza", openCall: "não" }
  ]
  
  
export function getCalls() {
    return calls;
}

export function getClients() {
    return clients;
} 

export function getBuildings() {
    return buildings;
}

export function isUserAuth() {
    return false;
}