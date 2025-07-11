import jsPDF from 'jspdf';
import { Invoice } from '@/app/types/invoice';

export const generateInvoicePDF = (invoice: Invoice) => {
  const doc = new jsPDF();
  
  // Set up colors
  const primaryColor = [59, 130, 246]; // Blue-600
  const grayColor = [107, 114, 128];   // Gray-500
  const darkColor = [17, 24, 39];      // Gray-900
  
  // Header
  doc.setFontSize(28);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('INVOICE', 20, 30);
  
  // Invoice ID and Status
  doc.setFontSize(14);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.text(invoice.id, 20, 45);
  
  // Status badge
  doc.setFontSize(10);
  const statusColor = invoice.status === 'paid' ? [34, 197, 94] : 
                     invoice.status === 'overdue' ? [239, 68, 68] : [234, 179, 8];
  doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
  doc.text(invoice.status.toUpperCase(), 20, 55);
  
  // Company Info (Right side)
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFontSize(12);
  doc.text('Blissful Trave and Tours', 140, 30);
  doc.setFontSize(10);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text('123 Business Street', 140, 40);
  doc.text('City, State 12345', 140, 50);
  doc.text('email@company.com', 140, 60);
  doc.text('(555) 123-4567', 140, 70);
  
  // Bill To Section
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFontSize(14);
  doc.text('Bill To:', 20, 85);
  
  doc.setFontSize(12);
  doc.text(invoice.clientName, 20, 95);
  doc.setFontSize(10);
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.text(invoice.clientEmail, 20, 105);
  
  if (invoice.clientAddress) {
    const addressLines = invoice.clientAddress.split('\n');
    let yPos = 115;
    addressLines.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += 10;
    });
  }
  
  // Invoice Details
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.setFontSize(10);
  doc.text(`Created: ${new Date(invoice.createdDate).toLocaleDateString()}`, 140, 95);
  doc.text(`Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}`, 140, 105);
  
  // Items Table
  const tableStartY = 140;
  
  // Table Header
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(20, tableStartY, 170, 10, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('Description', 25, tableStartY + 7);
  doc.text('Qty', 120, tableStartY + 7);
  doc.text('Rate', 140, tableStartY + 7);
  doc.text('Amount', 165, tableStartY + 7);
  
  // Table Rows
  let currentY = tableStartY + 15;
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  
  invoice.items.forEach((item, index) => {
    const isEven = index % 2 === 0;
    if (isEven) {
      doc.setFillColor(248, 250, 252);
      doc.rect(20, currentY - 5, 170, 10, 'F');
    }
    
    doc.text(item.description, 25, currentY);
    doc.text(item.quantity.toString(), 125, currentY);
    doc.text(`$${item.rate.toFixed(2)}`, 145, currentY);
    doc.text(`$${item.amount.toFixed(2)}`, 170, currentY);
    
    currentY += 15;
  });
  
  // Total
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(20, currentY, 170, 15, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text('TOTAL', 25, currentY + 10);
  doc.setFontSize(14);
  doc.text(`$${invoice.amount.toFixed(2)}`, 160, currentY + 10);
  
  // Notes
  if (invoice.notes) {
    currentY += 30;
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFontSize(12);
    doc.text('Notes:', 20, currentY);
    
    doc.setFontSize(10);
    doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
    const noteLines = doc.splitTextToSize(invoice.notes, 170);
    doc.text(noteLines, 20, currentY + 10);
  }
  
  // Footer
  const pageHeight = doc.internal.pageSize.height;
  doc.setTextColor(grayColor[0], grayColor[1], grayColor[2]);
  doc.setFontSize(8);
  doc.text('Thank you for your business!', 20, pageHeight - 20);
  doc.text(`Generated on ${new Date().toLocaleDateString()}`, 140, pageHeight - 20);
  
  // Save the PDF
  doc.save(`Invoice-${invoice.id}.pdf`);
};
