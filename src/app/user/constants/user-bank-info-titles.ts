import { IUserDetails } from 'src/app/shared/interfaces/user-details';

export const userBankInfoTitles = new Map<keyof IUserDetails, string>([
  ['individualEntrepreneurName', 'Name'],
  ['individualEntrepreneurAddress', 'Address'],
  ['individualEntrepreneurIndividualTaxNumber', 'Individual Tax Number'],
  ['individualEntrepreneurBankAccounNumber', 'Bank account number'],
  ['individualEntrepreneurBankName', 'Bank account number'],
  ['individualEntrepreneurBankCode', 'Bank Code'],
  ['individualEntrepreneurBeneficiaryBank', 'Beneficiary Bank'],
  ['individualEntrepreneurSwiftCode', 'SWIFT Code'],
]);
