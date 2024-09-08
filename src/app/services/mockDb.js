const calls = [
    { number: 1, reason: 'Inquiry', dateCreated: '2024-09-01', clientName: 'Alice Johnson', urgency: 'High', status: 'Open' },
    { number: 2, reason: 'Complaint', dateCreated: '2024-09-02', clientName: 'Bob Smith', urgency: 'Medium', status: 'In Progress' },
    { number: 3, reason: 'Support', dateCreated: '2024-09-03', clientName: 'Charlie Brown', urgency: 'Low', status: 'Closed' },
    { number: 4, reason: 'Inquiry', dateCreated: '2024-09-04', clientName: 'Diana Prince', urgency: 'High', status: 'Open' },
    { number: 5, reason: 'Complaint', dateCreated: '2024-09-05', clientName: 'Eve Adams', urgency: 'Medium', status: 'In Progress' },
    { number: 6, reason: 'Support', dateCreated: '2024-09-06', clientName: 'Frank Castle', urgency: 'Low', status: 'Closed' },
    { number: 7, reason: 'Inquiry', dateCreated: '2024-09-07', clientName: 'Grace Hopper', urgency: 'High', status: 'Open' },
    { number: 8, reason: 'Complaint', dateCreated: '2024-09-08', clientName: 'Hank Pym', urgency: 'Medium', status: 'In Progress' },
    { number: 9, reason: 'Support', dateCreated: '2024-09-09', clientName: 'Ivy Green', urgency: 'Low', status: 'Closed' },
    { number: 10, reason: 'Inquiry', dateCreated: '2024-09-10', clientName: 'Jack Ryan', urgency: 'High', status: 'Open' }
];

const clients = [
    { name: "Alice Johnson", phone: "555-1234", eMail: "alice.johnson@example.com", city: "New York", openCall: "yes" },
    { name: "Bob Smith", phone: "555-5678", eMail: "bob.smith@example.com", city: "Los Angeles", openCall: "no" },
    { name: "Carol White", phone: "555-8765", eMail: "carol.white@example.com", city: "Chicago", openCall: "yes" },
    { name: "David Brown", phone: "555-4321", eMail: "david.brown@example.com", city: "Houston", openCall: "no" },
    { name: "Eve Davis", phone: "555-6789", eMail: "eve.davis@example.com", city: "Phoenix", openCall: "yes" },
    { name: "Frank Wilson", phone: "555-9876", eMail: "frank.wilson@example.com", city: "Philadelphia", openCall: "no" },
    { name: "Grace Lee", phone: "555-3456", eMail: "grace.lee@example.com", city: "San Antonio", openCall: "yes" },
    { name: "Henry Clark", phone: "555-6543", eMail: "henry.clark@example.com", city: "San Diego", openCall: "no" },
    { name: "Ivy Martinez", phone: "555-7890", eMail: "ivy.martinez@example.com", city: "Dallas", openCall: "yes" },
    { name: "Jack Taylor", phone: "555-0987", eMail: "jack.taylor@example.com", city: "San Jose", openCall: "no" }
]
  
export function getCalls() {
    return calls;
}

export function getClients() {
    return clients;
} 