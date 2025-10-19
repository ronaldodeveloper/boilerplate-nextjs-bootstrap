

// formata data 
// ex: 10 OUT 2025
const FormatDateBR = (dateString: string) => {
    const date: Date = new Date(dateString);
    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit' as const,
        month: 'short' as const,
        year: 'numeric' as const
    });

    const parts: Intl.DateTimeFormatPart[] = formatter.formatToParts(date);
    
    const day: string = parts.find(p => p.type === 'day')!.value;
    const month: string = parts.find(p => p.type === 'month')!.value
        .replace('.', '')
        .toUpperCase();
    const year: string = parts.find(p => p.type === 'year')!.value;

    return `${day} ${month} ${year}`;
};

// formatar valor para milhas 
// ex: 100.000.000
const FormatMilhas = (number: number) => {
    const cleanNumber = String(number).replace(/\D/g, '');
    return cleanNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Formata valor para Real 
// ex: R$ 15,99
const FormatMoney = (num: number) => {
  if (isNaN(num)) throw new Error('Formato de número inválido');
  return Number(num).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Formata texto, remove espaços e caracteres especiais
// ex: texto-formatado
function FormatLabel(texto: string) {
    return texto
        .toLowerCase()                    
        .normalize('NFD')                
        .replace(/[\u0300-\u036f]/g, '')  
        .replace(/\s+/g, '-')             
        .replace(/[^a-z0-9-]/g, '')       
        .replace(/-+/g, '-')             
        .replace(/^-|-$/g, '');         
}


export { FormatDateBR, FormatMilhas, FormatMoney, FormatLabel };