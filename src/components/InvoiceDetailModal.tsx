"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Mail, Calendar, MapPin, FileText, Edit } from 'lucide-react';
import { Invoice } from '../../types/invoice';
import { generateInvoicePDF } from '@/lib/pdfGenerator';

interface InvoiceDetailModalProps {
  invoice: Invoice;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (invoice: Invoice) => void;
}

const InvoiceDetailModal = ({ invoice, isOpen, onClose, onUpdate }: InvoiceDetailModalProps) => {
  const [currentStatus, setCurrentStatus] = useState(invoice.status);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'unpaid': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = (newStatus: string) => {
    setCurrentStatus(newStatus as 'paid' | 'unpaid' | 'overdue');
    const updatedInvoice = { ...invoice, status: newStatus as 'paid' | 'unpaid' | 'overdue' };
    onUpdate(updatedInvoice);
  };

  const handleDownloadPDF = () => {
    generateInvoicePDF(invoice);
  };

  const handleSendEmail = () => {
    // In a real app, this would integrate with an email service
    const subject = `Invoice ${invoice.id} from Your Company`;
    const body = `Dear ${invoice.clientName},\n\nPlease find attached your invoice ${invoice.id} for the amount of $${invoice.amount.toLocaleString()}.\n\nDue Date: ${new Date(invoice.dueDate).toLocaleDateString()}\n\nThank you for your business!\n\nBest regards,\nYour Company`;
    
    const mailtoLink = `mailto:${invoice.clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Invoice Details</DialogTitle>
            <div className="flex items-center gap-3">
              <Select value={currentStatus} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Invoice Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{invoice.id}</h2>
                  <Badge className={getStatusColor(currentStatus)}>
                    {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
                  </Badge>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-3xl font-bold text-gray-900">
                    ${invoice.amount.toLocaleString()}
                  </div>
                  <div className="text-gray-600">Total Amount</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Bill To:</h3>
                  <div className="space-y-2">
                    <p className="font-medium">{invoice.clientName}</p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {invoice.clientEmail}
                    </p>
                    {invoice.clientAddress && (
                      <p className="text-gray-600 flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{invoice.clientAddress}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Invoice Info:</h3>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">Created:</span> 
                      {new Date(invoice.createdDate).toLocaleDateString()}
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Due Date:</span> 
                      {new Date(invoice.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Items */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Invoice Items</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Description</th>
                      <th className="text-center py-3 px-2">Qty</th>
                      <th className="text-right py-3 px-2">Rate</th>
                      <th className="text-right py-3 px-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-2">{item.description}</td>
                        <td className="text-center py-3 px-2">{item.quantity}</td>
                        <td className="text-right py-3 px-2">${item.rate.toFixed(2)}</td>
                        <td className="text-right py-3 px-2 font-medium">${item.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-gray-300 font-bold">
                      <td colSpan={3} className="text-right py-3 px-2">Total:</td>
                      <td className="text-right py-3 px-2 text-lg">${invoice.amount.toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          {invoice.notes && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Notes</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{invoice.notes}</p>
              </CardContent>
            </Card>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Button
              variant="outline"
              onClick={handleSendEmail}
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Send Email
            </Button>
            <Button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceDetailModal;
