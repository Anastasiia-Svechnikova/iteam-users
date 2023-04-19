interface IOffsets {
  bold: number[];
  italic: number[];
  ' bold italic': number[];
}

export enum OffsetOptions {
  bold = 'bold',
  italic = 'italic',
  'bold italic' = 'bold italic',
}

export function modifyStringByOffsetVariant(
  string = '',
  variant: OffsetOptions,
): string {
  const offsets: IOffsets = {
    bold: [0x1d400, 0x1d7ce],
    italic: [0x1d434, 0x00030],
    ' bold italic': [0x1d468, 0x00030],
  };

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  let result = '';

  for (const char of string) {
    let index: number;

    if ((index = letters.indexOf(char)) > -1) {
      result = `${result}${String.fromCodePoint(
        index + offsets[variant as keyof IOffsets][0],
      )}`;
    } else if ((index = numbers.indexOf(char)) > -1) {
      result = `${result}${String.fromCodePoint(
        index + offsets[variant as keyof IOffsets][1],
      )}`;
    } else {
      result = `${result}${char}`;
    }
  }
  return result;
}
