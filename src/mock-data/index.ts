export type Currency = 'USD' | 'EUR' | 'GBP' | 'SGD' | 'IDR' | 'PHP';
export type PaymentStatus = 'completed' | 'pending' | 'failed';
export type InvoiceStatus = 'paid' | 'sent' | 'draft' | 'overdue';

export interface Payment {
  id: string;
  client: string;
  amount: number;
  currency: Currency;
  status: PaymentStatus;
  date: string;
  source: string;
}

export interface Invoice {
  id: string;
  number: string;
  client: string;
  amount: number;
  currency: Currency;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
}

export interface ComplianceAlert {
  id: string;
  title: string;
  description: string;
  severity: 'info' | 'warning' | 'urgent';
  country: string;
  dueDate?: string;
}

export const mockPayments: Payment[] = [
  { id: 'p1', client: 'Acme Studios', amount: 2400, currency: 'USD', status: 'completed', date: '2026-04-28', source: 'Wise' },
  { id: 'p2', client: 'Northwind GmbH', amount: 1850, currency: 'EUR', status: 'completed', date: '2026-04-25', source: 'Stripe' },
  { id: 'p3', client: 'Tokyo Labs', amount: 3200, currency: 'USD', status: 'pending', date: '2026-04-22', source: 'PayPal' },
  { id: 'p4', client: 'Pixel & Co.', amount: 980, currency: 'GBP', status: 'completed', date: '2026-04-18', source: 'Wise' },
  { id: 'p5', client: 'Kopi Digital', amount: 1500, currency: 'SGD', status: 'completed', date: '2026-04-15', source: 'Stripe' },
  { id: 'p6', client: 'Bali Creative', amount: 12000000, currency: 'IDR', status: 'failed', date: '2026-04-10', source: 'Bank' },
];

export const mockInvoices: Invoice[] = [
  { id: 'i1', number: 'INV-2026-014', client: 'Acme Studios', amount: 2400, currency: 'USD', status: 'paid', issueDate: '2026-04-15', dueDate: '2026-04-29' },
  { id: 'i2', number: 'INV-2026-015', client: 'Northwind GmbH', amount: 1850, currency: 'EUR', status: 'paid', issueDate: '2026-04-12', dueDate: '2026-04-26' },
  { id: 'i3', number: 'INV-2026-016', client: 'Tokyo Labs', amount: 3200, currency: 'USD', status: 'sent', issueDate: '2026-04-20', dueDate: '2026-05-04' },
  { id: 'i4', number: 'INV-2026-017', client: 'Mango Media', amount: 1100, currency: 'USD', status: 'overdue', issueDate: '2026-03-30', dueDate: '2026-04-13' },
  { id: 'i5', number: 'INV-2026-018', client: 'Lumen AI', amount: 4500, currency: 'USD', status: 'draft', issueDate: '2026-05-01', dueDate: '2026-05-15' },
];

export const mockAlerts: ComplianceAlert[] = [
  { id: 'a1', title: 'Quarterly tax filing due', description: 'Your Q2 self-assessment for Indonesia is due in 18 days. Estimated owed: $480.', severity: 'urgent', country: 'ID', dueDate: '2026-05-20' },
  { id: 'a2', title: 'Foreign income reporting', description: 'AI suggests setting aside 12% of USD income for income tax based on your bracket.', severity: 'warning', country: 'ID' },
  { id: 'a3', title: 'New double-tax treaty', description: 'Singapore-Indonesia DTA update may reduce your withholding tax. Review applicable invoices.', severity: 'info', country: 'SG' },
];

export const revenueData = [
  { month: 'Nov', revenue: 4200 }, { month: 'Dec', revenue: 5100 },
  { month: 'Jan', revenue: 6300 }, { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 7400 }, { month: 'Apr', revenue: 8930 },
];

export const currencyDistribution = [
  { name: 'USD', value: 62, color: 'hsl(240 90% 66%)' },
  { name: 'EUR', value: 18, color: 'hsl(190 95% 55%)' },
  { name: 'GBP', value: 9, color: 'hsl(265 85% 65%)' },
  { name: 'SGD', value: 7, color: 'hsl(150 70% 50%)' },
  { name: 'Other', value: 4, color: 'hsl(38 95% 60%)' },
];

export const currencySymbol: Record<Currency, string> = {
  USD: '$', EUR: '€', GBP: '£', SGD: 'S$', IDR: 'Rp', PHP: '₱',
};

export const countries = [
  { code: 'ID', name: 'Indonesia' }, { code: 'SG', name: 'Singapore' },
  { code: 'PH', name: 'Philippines' }, { code: 'MY', name: 'Malaysia' },
  { code: 'TH', name: 'Thailand' }, { code: 'VN', name: 'Vietnam' },
  { code: 'IN', name: 'India' }, { code: 'US', name: 'United States' },
];
