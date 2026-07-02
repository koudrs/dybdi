const WHATSAPP_NUMBER = "50766604603";

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getProductWhatsAppLink(productName: string): string {
  const message = `Hola, me interesa obtener información sobre: ${productName}`;
  return getWhatsAppLink(message);
}

export function getQuoteWhatsAppLink(): string {
  const message =
    "Hola, me gustaría solicitar una cotización de herramientas de diamante.";
  return getWhatsAppLink(message);
}
