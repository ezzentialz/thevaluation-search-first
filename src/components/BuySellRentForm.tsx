'use client';

import { useState } from 'react';
import { buySellRent } from '@/lib/content';
import { openMailto } from '@/lib/request';
import { ui } from '@/lib/ui';
import { useI18n } from '@/context/I18nContext';
import { useRequestTab } from '@/context/RequestContext';
import type { Bi } from '@/lib/content';
import RequestTabs from './RequestTabs';
import SectionHeading from './SectionHeading';

type Values = Record<string, string>;

interface TextFieldProps {
  name: string;
  label: Bi;
  values: Values;
  onChange: (name: string, v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: 'numeric' | 'decimal' | 'tel';
}

function TextField({ name, label, values, onChange, type = 'text', required, autoComplete, inputMode }: TextFieldProps) {
  const { t } = useI18n();
  return (
    <div>
      <label htmlFor={`f-${name}`} className="field-label">
        {t(label)}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={`f-${name}`}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        aria-required={required}
        className="field"
        value={values[name] ?? ''}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
}

export default function BuySellRentForm() {
  const { t } = useI18n();
  const { tab } = useRequestTab();
  const [values, setValues] = useState<Values>({});
  const [advice, setAdvice] = useState(false);
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle');

  const onChange = (name: string, v: string) => setValues((prev) => ({ ...prev, [name]: v }));
  const tf = (name: string, label: Bi, extra: Partial<TextFieldProps> = {}) => (
    <TextField name={name} label={label} values={values} onChange={onChange} {...extra} />
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.fullName?.trim() || !values.phone?.trim()) {
      setStatus('error');
      return;
    }
    const f = ui.form;
    const typeLabel = f.types.find((x) => x.key === values.type)?.label;
    const rows: Array<[string, string]> = [
      [t(buySellRent.title), t(buySellRent.tabs[tab])],
      [t(f.fullName), values.fullName],
      [t(f.phone), values.phone],
      [t(f.email), values.email ?? ''],
      [t(f.lineId), values.lineId ?? ''],
      [t(f.propertyType), typeLabel ? t(typeLabel) : ''],
      [t(f.otherType), values.otherType ?? ''],
      [t(f.rai), values.rai ?? ''],
      [t(f.ngan), values.ngan ?? ''],
      [t(f.wah), values.wah ?? ''],
      [t(f.sqm), values.sqm ?? ''],
      [t(f.floors), values.floors ?? ''],
      [t(f.bedrooms), values.bedrooms ?? ''],
      [t(f.bathrooms), values.bathrooms ?? ''],
      [t(f.kitchens), values.kitchens ?? ''],
      [t(f.price[tab]), values.price ?? ''],
      [t(f.advice[tab]), advice ? t(f.yes) : ''],
      [t(f.address), values.address ?? ''],
      [t(f.moo), values.moo ?? ''],
      [t(f.soi), values.soi ?? ''],
      [t(f.road), values.road ?? ''],
      [t(f.subDistrict), values.subDistrict ?? ''],
      [t(f.district), values.district ?? ''],
      [t(f.province), values.province ?? ''],
      [t(f.details), values.details ?? ''],
    ];
    openMailto(`${t(f.mailSubject)}: ${t(buySellRent.tabs[tab])}`, rows);
    setStatus('sent');
  };

  return (
    <section id="apply" aria-labelledby="apply-title" className="bg-mist py-16 md:py-24">
      <div className="container-x">
        <SectionHeading id="apply-title">{t(buySellRent.title)}</SectionHeading>
        <div className="bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <RequestTabs tone="light" />
          <form onSubmit={submit} noValidate className="mt-8">
            <fieldset className="min-w-0">
              <legend className="font-display text-xl font-semibold text-navy-800">{t(ui.form.contactDetails)}</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {tf('fullName', ui.form.fullName, { required: true, autoComplete: 'name' })}
                {tf('phone', ui.form.phone, { required: true, type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
                {tf('email', ui.form.email, { type: 'email', autoComplete: 'email' })}
                {tf('lineId', ui.form.lineId)}
              </div>
            </fieldset>

            <fieldset className="mt-10 min-w-0">
              <legend className="font-display text-xl font-semibold text-navy-800">{t(ui.form.propertyDetails)}</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-type" className="field-label">{t(ui.form.propertyType)}</label>
                  <select id="f-type" className="field" value={values.type ?? ''} onChange={(e) => onChange('type', e.target.value)}>
                    <option value="">{t(ui.form.choose)}</option>
                    {ui.form.types.map((x) => (
                      <option key={x.key} value={x.key}>{t(x.label)}</option>
                    ))}
                  </select>
                </div>
                {tf('otherType', ui.form.otherType)}
              </div>

              <p className="field-label mt-6">{t(ui.form.area)}</p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {tf('rai', ui.form.rai, { inputMode: 'decimal' })}
                {tf('ngan', ui.form.ngan, { inputMode: 'decimal' })}
                {tf('wah', ui.form.wah, { inputMode: 'decimal' })}
                {tf('sqm', ui.form.sqm, { inputMode: 'decimal' })}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {tf('floors', ui.form.floors, { inputMode: 'numeric' })}
                {tf('bedrooms', ui.form.bedrooms, { inputMode: 'numeric' })}
                {tf('bathrooms', ui.form.bathrooms, { inputMode: 'numeric' })}
                {tf('kitchens', ui.form.kitchens, { inputMode: 'numeric' })}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {tf('price', ui.form.price[tab], { inputMode: 'decimal' })}
                <label className="flex min-h-[44px] items-center gap-3 self-end">
                  <input type="checkbox" className="h-5 w-5 flex-none accent-royal" checked={advice} onChange={(e) => setAdvice(e.target.checked)} />
                  <span>{t(ui.form.advice[tab])}</span>
                </label>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tf('address', ui.form.address, { autoComplete: 'address-line1' })}
                {tf('moo', ui.form.moo)}
                {tf('soi', ui.form.soi)}
                {tf('road', ui.form.road)}
                {tf('subDistrict', ui.form.subDistrict)}
                {tf('district', ui.form.district)}
                {tf('province', ui.form.province)}
              </div>

              <div className="mt-6">
                <label htmlFor="f-details" className="field-label">{t(ui.form.details)}</label>
                <textarea id="f-details" rows={4} className="field" value={values.details ?? ''} onChange={(e) => onChange('details', e.target.value)} />
              </div>
            </fieldset>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <button type="submit" className="btn-primary min-w-[160px]">{t(ui.form.submit)}</button>
              <a href={buySellRent.agentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center font-semibold text-royal underline underline-offset-4 hover:text-navy-800">
                {t(ui.joinAgent)} <span aria-hidden="true">&nbsp;→</span>
              </a>
            </div>
            <p role="status" className={`mt-4 text-sm ${status === 'error' ? 'font-medium text-[#b42318]' : 'text-slate2'}`}>
              {status === 'error' && t(ui.form.errorRequired)}
              {status === 'sent' && t(ui.form.sent)}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
