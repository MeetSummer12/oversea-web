import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = typeof locale === 'string' ? locale : 'zh';
  // Provide messages for every request based on the requested locale
  try {
    const messages = (await import(`./src/messages/${safeLocale}.json`)).default;
    return {messages, locale: safeLocale};
  } catch (e) {
    const messages = (await import('./src/messages/zh.json')).default;
    return {messages, locale: 'zh'};
  }
});