import {getTranslations} from 'next-intl/server';
import Link from 'next/link';

type PageProps = {
  params: { locale: string }
};

export default async function PrivacyPage({ params: { locale } }: PageProps) {
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="section-block section-blue">
        <h1 className="text-2xl md:text-3xl font-bold">
          {t('title', { default: 'Privacy Policy' })}
        </h1>
        <p className="mt-2 opacity-90">
          {t('intro', { default: 'We are committed to protecting your privacy and keeping your data secure.' })}
        </p>
        <p className="mt-1 opacity-85">
          {t('updated', { default: 'Last updated' })}: {new Date().toLocaleDateString('en-US')}
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">
            {t('dataWeCollect.title', { default: 'Data we collect' })}
          </h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>{t('dataWeCollect.account', { default: 'Account information (email, name) when you sign up or log in.' })}</li>
            <li>{t('dataWeCollect.usage', { default: 'Usage data (feature usage, request counts) to improve product performance.' })}</li>
            <li>{t('dataWeCollect.content', { default: 'Content you upload or generate in the product (files, prompts, configurations).' })}</li>
            <li>{t('dataWeCollect.device', { default: 'Device and technical information to ensure service reliability and security.' })}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            {t('howWeUse.title', { default: 'How we use your data' })}
          </h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>{t('howWeUse.provide', { default: 'To provide, maintain and improve the service.' })}</li>
            <li>{t('howWeUse.support', { default: 'To deliver customer support and respond to inquiries.' })}</li>
            <li>{t('howWeUse.security', { default: 'To detect, prevent, and address technical issues and abuse.' })}</li>
            <li>{t('howWeUse.communication', { default: 'To send important notifications about your account and service changes.' })}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            {t('storage.title', { default: 'Storage and retention' })}
          </h2>
          <p className="mt-2 text-slate-700">
            {t('storage.content', { default: 'We store your data securely and retain it only as long as necessary to provide the service or comply with legal obligations.' })}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            {t('thirdParties.title', { default: 'Third-party services' })}
          </h2>
          <p className="mt-2 text-slate-700">
            {t('thirdParties.content', { default: 'We may integrate with third-party providers (e.g., authentication, payment, analytics). These services only receive the data necessary to perform their function, and we review their privacy practices.' })}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            {t('yourRights.title', { default: 'Your rights' })}
          </h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            <li>{t('yourRights.access', { default: 'Access, update, or delete your personal data.' })}</li>
            <li>{t('yourRights.export', { default: 'Request an export of your data.' })}</li>
            <li>{t('yourRights.contact', { default: 'Contact us to exercise your rights or ask questions about privacy.' })}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            {t('contact.title', { default: 'Contact us' })}
          </h2>
          <p className="mt-2 text-slate-700">
            {t('contact.content', { default: 'If you have any questions or requests regarding this policy, please reach out to us.' })}
          </p>
        </section>
      </div>

      <div className="mt-10">
        <Link href={`/${locale}`} className="btn-outline">
          {t('backHome', { default: 'Back to home' })}
        </Link>
      </div>
    </div>
  );
}