import { useTranslation } from 'react-i18next'

const SectionContact = () => {
  const { t } = useTranslation()

  return (
        <>
            <section
                id="contact-3"
                className="flex flex-none flex-shrink-0 relative z-10 items-center"
                style={{ minHeight: 'calc(100vh - 0px)' }}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0 z-10"
                        style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                    />
                </div>
                <div className="relative z-10 container mx-auto pt-12 lg:pt-20 pb-12 lg:pb-20">
                    <div className="flex flex-col w-full gap-10 lg:gap-20 lg:flex-row">
                        <div className="w-full lg:w-1/2 lg:mt-10">
                            <div className="rich-text-block" style={{ color: 'rgb(17, 24, 39)' }}>
                                <h3>{t('contact_us_today')}</h3>
                                <p>
                                    {t('contact_us_today_msg')}
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <form className="block" noValidate="">
                                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                                    <div className="flex-1">
                                        <label
                                            className="mb-1 body-small"
                                            style={{ color: 'rgb(17, 24, 39)' }}
                                        >
                                            {t('contact_us_name')}
                                        </label>
                                        <input
                                            type="text"
                                            className="input border-none !shadow-none !ring-transparent !placeholder-current"
                                            defaultValue=""
                                            style={{
                                              borderRadius: 8,
                                              backgroundColor: 'rgba(0, 0, 0, 0.07)',
                                              color: 'rgb(17, 24, 39)'
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label
                                            className="mb-1 body-small"
                                            style={{ color: 'rgb(17, 24, 39)' }}
                                        >
                                            {t('contact_us_email')}
                                        </label>
                                        <input
                                            type="text"
                                            className="input border-none !shadow-none !ring-transparent !placeholder-current"
                                            defaultValue=""
                                            style={{
                                              borderRadius: 8,
                                              backgroundColor: 'rgba(0, 0, 0, 0.07)',
                                              color: 'rgb(17, 24, 39)'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="mb-1 body-small"
                                        style={{ color: 'rgb(17, 24, 39)' }}
                                    >
                                        {t('contact_us_message')}
                                    </label>
                                    <textarea
                                        className="input border-none !shadow-none !ring-transparent !placeholder-current"
                                        placeholder=""
                                        rows={5}
                                        style={{
                                          borderRadius: 8,
                                          backgroundColor: 'rgba(0, 0, 0, 0.07)',
                                          color: 'rgb(17, 24, 39)'
                                        }}
                                        defaultValue={''}
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                    <div
                                        className="text-xs max-w-sm text-gray-500"
                                        style={{ color: 'rgb(17, 24, 39)' }}
                                    >
                                        {t('captcha_1')}
                                        <a
                                            target="_blank"
                                            className="font-bold"
                                            style={{ color: 'rgb(17, 24, 39)' }}
                                            href="https://policies.google.com/privacy" rel="noreferrer"
                                        >
                                            {' '}
                                            {t('captcha_2')}
                                        </a>{' '}
                                        and
                                        <a
                                            target="_blank"
                                            className="font-bold"
                                            style={{ color: 'rgb(17, 24, 39)' }}
                                            href="https://policies.google.com/terms" rel="noreferrer"
                                        >
                                            {' '}
                                            {t('captcha_3')}
                                        </a>{' '}
                                        apply.
                                    </div>
                                    <button
                                        type="submit"
                                        className="button lg w-36 mt-2 md:mt-0"
                                        style={{
                                          borderWidth: 2,
                                          borderStyle: 'solid',
                                          boxShadow: 'none',
                                          backgroundColor: 'rgb(0, 0, 0)',
                                          color: 'rgb(255, 255, 255)',
                                          borderRadius: 8,
                                          borderColor: 'rgb(0, 0, 0)'
                                        }}
                                    >
                                        {t('contact_us_send')}
                                    </button>
                                </div>
                                <div className="hidden">
                                    <div>
                                        <div
                                            className="grecaptcha-badge"
                                            data-style="inline"
                                            style={{
                                              width: 256,
                                              height: 60,
                                              boxShadow: 'gray 0px 0px 5px'
                                            }}
                                        >
                                            <div className="grecaptcha-logo">
                                                <iframe
                                                    title="reCAPTCHA"
                                                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Leu0w4eAAAAAN0DPcebVt2LMLmRMOIocTcPheC0&co=aHR0cHM6Ly9qZXN1c2dhcmNpYS5kdXJhYmxlLmNvOjQ0Mw..&hl=es-419&type=image&v=uEf7E1417z6GNSkRx7AyL8K8&theme=light&size=invisible&badge=inline&cb=wi4rwcg0fhqa"
                                                    width={256}
                                                    height={60}
                                                    role="presentation"
                                                    name="a-zh009rs8nazt"
                                                    frameBorder={0}
                                                    scrolling="no"
                                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                                />
                                            </div>
                                            <div className="grecaptcha-error" />
                                            <textarea
                                                id="g-recaptcha-response"
                                                name="g-recaptcha-response"
                                                className="g-recaptcha-response"
                                                style={{
                                                  width: 250,
                                                  height: 40,
                                                  border: '1px solid rgb(193, 193, 193)',
                                                  margin: '10px 25px',
                                                  padding: 0,
                                                  resize: 'none',
                                                  display: 'none'
                                                }}
                                                defaultValue={''}
                                            />
                                        </div>
                                        <iframe style={{ display: 'none' }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default SectionContact
