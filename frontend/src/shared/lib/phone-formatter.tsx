export const formatPhoneNumber = (value: string): string => {
  let cleanedValue = value.replace(/\D/g, ''); // Удаляем все нецифровые символы

  if (cleanedValue.startsWith('7') || cleanedValue.startsWith('8')) {
    cleanedValue = cleanedValue.slice(1);
  } else if (cleanedValue.startsWith('+7')) {
    cleanedValue = cleanedValue.slice(2);
  }
  if (cleanedValue.length > 10) cleanedValue = cleanedValue.slice(0, 10);

  let formattedValue = '';

  if (cleanedValue.length > 0) {
    formattedValue = '+7 ';

    if (cleanedValue.length > 3) {
      formattedValue += `(${cleanedValue.slice(0, 3)}) `;
    } else {
      formattedValue += `(${cleanedValue.slice(0, 3)}`;
    }

    if (cleanedValue.length > 6) {
      formattedValue += `${cleanedValue.slice(3, 6)}-`;
    } else {
      formattedValue += `${cleanedValue.slice(3, 6)}`;
    }

    if (cleanedValue.length > 8) {
      formattedValue += `${cleanedValue.slice(6, 8)}-`;
    } else {
      formattedValue += `${cleanedValue.slice(6, 8)}`;
    }

    if (cleanedValue.length > 10) {
      formattedValue += `${cleanedValue.slice(8, 10)}`;
    } else {
      formattedValue += `${cleanedValue.slice(8, 10)}`;
    }
  }

  return formattedValue;
}