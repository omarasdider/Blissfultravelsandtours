"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Users, Mail, Phone, Building } from 'lucide-react';
import { Client } from '../app/types/invoice';

interface ClientsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClientsModal = ({ isOpen, onClose }: ClientsModalProps) => {
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Acme Corp',
      email: 'billing@acme.com',
      company: 'Acme Corporation',
      phone: '+1 (555) 123-4567',
      address: '123 Business St, Suite 100\nNew York, NY 10001'
    },
    {
      id: '2',
      name: 'Tech Solutions Ltd',
      email: 'payments@techsolutions.com',
      company: 'Tech Solutions Limited',
      phone: '+1 (555) 987-6543',
      address: '456 Innovation Ave\nSan Francisco, CA 94105'
    },
    {
      id: '3',
      name: 'StartupXYZ',
      email: 'finance@startupxyz.com',
      company: 'StartupXYZ Inc.',
      phone: '+1 (555) 456-7890',
      address: '789 Startup Blvd\nAustin, TX 78701'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newClient, setNewClient] = useState<Partial<Client>>({
    name: '',
    email: '',
    company: '',
    phone: '',
    address: ''
  });

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (newClient.name && newClient.email) {
      const client: Client = {
        id: Date.now().toString(),
        name: newClient.name,
        email: newClient.email,
        company: newClient.company,
        phone: newClient.phone,
        address: newClient.address
      };
      setClients([...clients, client]);
      setNewClient({ name: '', email: '', company: '', phone: '', address: '' });
      setShowAddForm(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Users className="h-6 w-6" />
              Clients ({clients.length})
            </DialogTitle>
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Client
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Add Client Form */}
          {showAddForm && (
            <Card className="border-2 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Add New Client</h3>
                <form onSubmit={handleAddClient} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="clientName">Name *</Label>
                      <Input
                        id="clientName"
                        value={newClient.name || ''}
                        onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="clientEmail">Email *</Label>
                      <Input
                        id="clientEmail"
                        type="email"
                        value={newClient.email || ''}
                        onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="clientCompany">Company</Label>
                      <Input
                        id="clientCompany"
                        value={newClient.company || ''}
                        onChange={(e) => setNewClient({...newClient, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="clientPhone">Phone</Label>
                      <Input
                        id="clientPhone"
                        value={newClient.phone || ''}
                        onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="clientAddress">Address</Label>
                    <textarea
                      id="clientAddress"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      value={newClient.address || ''}
                      onChange={(e) => setNewClient({...newClient, address: e.target.value})}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Add Client
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Clients List */}
          <div className="grid gap-4">
            {clients.map((client) => (
              <Card key={client.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{client.name}</h3>
                      <div className="space-y-2 text-gray-600">
                        {client.company && (
                          <p className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            {client.company}
                          </p>
                        )}
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {client.email}
                        </p>
                        {client.phone && (
                          <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {client.phone}
                          </p>
                        )}
                        {client.address && (
                          <p className="text-sm whitespace-pre-line">
                            {client.address}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {clients.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No clients yet. Add your first client to get started!</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClientsModal;
