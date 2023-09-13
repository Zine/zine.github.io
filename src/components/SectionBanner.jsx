import { useTranslation } from 'react-i18next'
import Banner0Picture from '../assets/banner-0.png'

const SectionBanner = () => {
  const { t } = useTranslation()

  return (
    <>
      <section
        id="banner-0"
        data-combine-with-header="false"
        data-text-color="#111827"
        className="flex-shrink-0 flex relative z-10 items-center"
        style={{ minHeight: 'calc(160px)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage:
                'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))',
              opacity: '0.5'
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${Banner0Picture})`,
              backgroundPosition: 'center 25%',
              backgroundSize: 'cover'
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-20 lg:pt-48 pb-20 lg:pb-48">
          <div className="max-w-3xl text-center mx-auto">
            <h2
              className="heading-xlarge mb-6 break-word text-center hyphens-none"
              style={{
                color: 'rgb(17, 24, 39)',
                fontFamily: 'Cabin, sans-serif',
                fontWeight: 700
              }}
            >
              {t('banner_message_1')}
            </h2>
            <p
              className="body-large"
              style={{
                color: 'rgb(17, 24, 39)',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 400
              }}
            >
              {t('banner_message_2')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionBanner
