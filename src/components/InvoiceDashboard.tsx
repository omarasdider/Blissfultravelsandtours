 'use client'
import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, Users, DollarSign, Calendar, Search, Filter, Trash2, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import CreateInvoiceModal from './CreateInvoiceModal';
import InvoiceDetailModal from './InvoiceDetailModal';
import ClientsModal from './ClientsModal';
import { Invoice } from '@/app/types/invoice';

const InvoiceDashboard = () => {
  const [invoices, setInvoices] = useLocalStorage<Invoice[]>('invoices', []);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isClientsModalOpen, setIsClientsModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedForDelete, setSelectedForDelete] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Initialize with sample data if localStorage is empty
  // useEffect(() => {
  //   if (invoices.length === 0) {
  //     const sampleInvoices: Invoice[] = [
  //       {
  //         id: 'INV-001',
  //         clientName: 'Acme Corp',
  //         clientEmail: 'billing@acme.com',
  //         amount: 2500.00,
  //         status: 'paid',
  //         dueDate: '2024-01-15',
  //         createdDate: '2024-01-01',
  //         items: [
  //           { description: 'Web Development', quantity: 1, rate: 2000, amount: 2000 },
  //           { description: 'Consultation', quantity: 5, rate: 100, amount: 500 }
  //         ]
  //       },
  //       {
  //         id: 'INV-002',
  //         clientName: 'Tech Solutions Ltd',
  //         clientEmail: 'payments@techsolutions.com',
  //         amount: 1800.00,
  //         status: 'unpaid',
  //         dueDate: '2024-02-01',
  //         createdDate: '2024-01-15',
  //         items: [
  //           { description: 'UI/UX Design', quantity: 1, rate: 1800, amount: 1800 }
  //         ]
  //       },
  //       {
  //         id: 'INV-003',
  //         clientName: 'StartupXYZ',
  //         clientEmail: 'finance@startupxyz.com',
  //         amount: 3200.00,
  //         status: 'overdue',
  //         dueDate: '2023-12-30',
  //         createdDate: '2023-12-15',
  //         items: [
  //           { description: 'Full Stack Development', quantity: 1, rate: 3200, amount: 3200 }
  //         ]
  //       }
  //     ];
  //     setInvoices(sampleInvoices);
  //   }
  // }, );

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInvoices = filteredInvoices.slice(startIndex, startIndex + itemsPerPage);

  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const paidAmount = invoices.filter(inv => inv.status === 'paid').reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = invoices.filter(inv => inv.status === 'unpaid').reduce((sum, invoice) => sum + invoice.amount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, invoice) => sum + invoice.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'unpaid': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-800 hover:bg-red-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const addInvoice = (newInvoice: Invoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  const deleteInvoices = () => {
    setInvoices(invoices.filter(invoice => !selectedForDelete.includes(invoice.id)));
    setSelectedForDelete([]);
  };

  const toggleSelectInvoice = (invoiceId: string) => {
    setSelectedForDelete(prev => 
      prev.includes(invoiceId) 
        ? prev.filter(id => id !== invoiceId)
        : [...prev, invoiceId]
    );
  };

  const selectAllInvoices = (checked: boolean) => {
    if (checked) {
      setSelectedForDelete(paginatedInvoices.map(invoice => invoice.id));
    } else {
      setSelectedForDelete([]);
    }
  };

      const [mounted , setMounted] =useState(false)
    const origin = typeof window !=="undefined" && window.location.origin ? window.location.origin : ""
    useEffect(()=> {
      setMounted(true)
    }, []);
    if(!mounted){
   return '';
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Invoice Management</h1>
            <p className="text-gray-600">Manage your invoices and generate PDF receipts</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button 
              onClick={() => setIsClientsModalOpen(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Clients
            </Button>
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              New Invoice
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalAmount.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paid</CardTitle>
              <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${paidAmount.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">${pendingAmount.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue</CardTitle>
              <div className="h-4 w-4 bg-red-500 rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">${overdueAmount.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6 bg-white shadow-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search invoices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Invoices List */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Invoices ({filteredInvoices.length})
              </CardTitle>
              {selectedForDelete.length > 0 && (
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={deleteInvoices}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete ({selectedForDelete.length})
                </Button>
              )}
            </div>
            {paginatedInvoices.length > 0 && (
              <div className="flex items-center gap-2 pt-2">
                <Checkbox 
                  checked={selectedForDelete.length === paginatedInvoices.length}
                  onCheckedChange={selectAllInvoices}
                />
                <span className="text-sm text-muted-foreground">
                  Select all on this page
                </span>
              </div>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paginatedInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Checkbox 
                    checked={selectedForDelete.includes(invoice.id)}
                    onCheckedChange={() => toggleSelectInvoice(invoice.id)}
                  />
                  <div
                    className="flex flex-col md:flex-row items-start md:items-center justify-between flex-1 cursor-pointer"
                    onClick={() => setSelectedInvoice(invoice)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{invoice.id}</h3>
                        <Badge className={getStatusColor(invoice.status)}>
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-1">{invoice.clientName}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due: {new Date(invoice.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-2xl font-bold text-gray-900">
                        ${invoice.amount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredInvoices.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No invoices found</p>
                </div>
              )}
            </div>
            
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Modals */}
        <CreateInvoiceModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSave={addInvoice}
        />

        <ClientsModal
          isOpen={isClientsModalOpen}
          onClose={() => setIsClientsModalOpen(false)}
        />

        {selectedInvoice && (
          <InvoiceDetailModal
            invoice={selectedInvoice}
            isOpen={!!selectedInvoice}
            onClose={() => setSelectedInvoice(null)}
            onUpdate={(updatedInvoice) => {
              setInvoices(invoices.map(inv => 
                inv.id === updatedInvoice.id ? updatedInvoice : inv
              ));
              setSelectedInvoice(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InvoiceDashboard