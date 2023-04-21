export const userBankInfoValidationPatterns = new Map<string, string>([
  //any 10 digits only value
  ['individualEntrepreneurIndividualTaxNumber', '^[0-9]{10}$'],

  // any digits only value
  ['individualEntrepreneurBankCode', '^[0-9]{6}$'],

  // IBAN number format 	UA213223130000026007233566001
  ['individualEntrepreneurBankAccounNumber', 'UA\\d{8}[A-Z0-9]{19}'],

  // SWIFT code format PBANUA2XHAF
  ['individualEntrepreneurSwiftCode', '^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$'],
]);

export const socialsUrlPattern =
  '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
