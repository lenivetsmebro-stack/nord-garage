type ContactDetails = {
  addressDisplay: string;
  addressMapHref: string;
  emailDisplay: string;
  emailHref: string;
  phoneDisplay: string;
  phoneHref: string;
  scheduleDisplay: string;
  scheduleSundayHours: string;
  scheduleSundayLabel: string;
  scheduleWeekdaysHours: string;
  scheduleWeekdaysLabel: string;
  siteDisplay: string;
  telegramDisplay: string;
  telegramHref: string;
  whatsappDisplay: string;
  whatsappHref: string;
};

// Portfolio/demo data: address, primary phone, email, site URL, and schedule.
// User-provided working channels: WhatsApp and Telegram.
// Replace portfolio/demo values with verified business data before a real launch.
export const contactDetails: ContactDetails = {
  addressDisplay: "г. Калининград, ул. Автомобильная, 27",
  addressMapHref:
    "https://www.google.com/maps/search/?api=1&query=%D0%B3.%20%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%2C%20%D1%83%D0%BB.%20%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%2C%2027",
  emailDisplay: "service@nord-garage.ru",
  emailHref: "mailto:service@nord-garage.ru",
  phoneDisplay: "+7 (4012) 77-77-27",
  phoneHref: "tel:+74012777727",
  scheduleDisplay: "Пн–Сб: 09:00–20:00 · Вс: 10:00–18:00",
  scheduleSundayHours: "10:00–18:00",
  scheduleSundayLabel: "Вс",
  scheduleWeekdaysHours: "09:00–20:00",
  scheduleWeekdaysLabel: "Пн–Сб",
  siteDisplay: "nord-garage.ru",
  telegramDisplay: "@KLD_DEMYANENKO_DANIIL",
  telegramHref: "https://t.me/KLD_DEMYANENKO_DANIIL",
  whatsappDisplay: "+7 952 054-43-48",
  whatsappHref: "https://wa.me/79520544348",
};
