import { IUserBankInvoiceData } from 'src/app/shared/interfaces/user-bank-invoice-data';

export const userBankInfoTitles = new Map<keyof IUserBankInvoiceData, string>([
  ['individualEntrepreneurName', 'Name'],
  ['individualEntrepreneurAddress', 'Address'],
  ['individualEntrepreneurIndividualTaxNumber', 'Individual Tax Number'],
  ['individualEntrepreneurBankAccounNumber', 'Bank account number'],
  ['individualEntrepreneurBankName', 'Bank account number'],
  ['individualEntrepreneurBankCode', 'Bank Code'],
  ['individualEntrepreneurBeneficiaryBank', 'Beneficiary Bank'],
  ['individualEntrepreneurSwiftCode', 'SWIFT Code'],
]);
