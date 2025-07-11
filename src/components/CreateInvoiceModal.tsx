"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
import { Invoice, InvoiceItem } from '@/app/types/invoice';

interface CreateInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (invoice: Invoice) => void;
}

const CreateInvoiceModal = ({ isOpen, onClose, onSave }: CreateInvoiceModalProps) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    dueDate: '',
    status: 'unpaid',
    notes: ''
  });
  
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: '', quantity: 1, rate: 0, amount: 0 }
  ]);

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, rate: 0, amount: 0 }]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    // Recalculate amount
    if (field === 'quantity' || field === 'rate') {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }
    
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const invoiceId = `INV-${String(Date.now()).slice(-6)}`;
    const total = calculateTotal();
    
    const newInvoice: Invoice = {
      id: invoiceId,
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientAddress: formData.clientAddress,
      amount: total,
      status: formData.status as 'paid' | 'unpaid' | 'overdue',
      dueDate: formData.dueDate,
      createdDate: new Date().toISOString().split('T')[0],
      items: items.filter(item => item.description.trim() !== ''),
      notes: formData.notes
    };

    onSave(newInvoice);
    
    // Reset form
    setFormData({
      clientName: '',
      clientEmail: '',
      clientAddress: '',
      dueDate: '',
      status: 'unpaid',
      notes: ''
    });
    setItems([{ description: '', quantity: 1, rate: 0, amount: 0 }]);
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Create New Invoice</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clientName">Client Name *</Label>
              <Input
                id="clientName"
                value={formData.clientName}
                onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="clientEmail">Client Email *</Label>
              <Input
                id="clientEmail"
                type="email"
                value={formData.clientEmail}
                onChange={(e) => setFormData({...formData, clientEmail: e.target.value})}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="clientAddress">Client Address</Label>
            <Textarea
              id="clientAddress"
              value={formData.clientAddress}
              onChange={(e) => setFormData({...formData, clientAddress: e.target.value})}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dueDate">Due Date *</Label>
              <Input
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select 
                value={formData.status} 
                onValueChange={(value) => setFormData({...formData, status: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Invoice Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Label className="text-lg font-semibold">Invoice Items</Label>
              <Button type="button" onClick={addItem} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>
            
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-end p-4 border rounded-lg">
                  <div className="col-span-12 md:col-span-5">
                    <Label>Description</Label>
                    <Input
                      value={item.description}
                      onChange={(e) => updateItem(index, 'description', e.target.value)}
                      placeholder="Service or product description"
                    />
                  </div>
                  <div className="col-span-4 md:col-span-2">
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <div className="col-span-4 md:col-span-2">
                    <Label>Rate ($)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      value={item.rate}
                      onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div className="col-span-3 md:col-span-2">
                    <Label>Amount</Label>
                    <div className="font-semibold text-lg p-2">
                      ${item.amount.toFixed(2)}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(index)}
                      disabled={items.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-right">
                <div className="text-lg font-semibold">
                  Total: ${calculateTotal().toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows={3}
              placeholder="Additional notes or terms..."
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Create Invoice
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateInvoiceModal;
