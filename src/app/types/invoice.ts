export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Invoice {
  id: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  status: 'paid' | 'unpaid' | 'overdue';
  dueDate: string;
  createdDate: string;
  items: InvoiceItem[];
  notes?: string;
  clientAddress?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  address?: string;
  phone?: string;
  company?: string;
}
