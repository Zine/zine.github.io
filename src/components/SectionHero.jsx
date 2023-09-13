import { useTranslation } from 'react-i18next'
import Hero1Picture from '../assets/hero-1.png'

const SectionHero = () => {
  const { t } = useTranslation()
  return (
        <>
            <section
                id="hero-1"
                className="flex flex-none flex-shrink-0 relative z-10 items-end"
                style={{ minHeight: 'calc(240px - 0px)' }}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0 z-10"
                        style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                    />
                </div>
                <div className="relative z-10 container mx-auto pt-12 lg:pt-20 pb-12 lg:pb-20">
                    <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-20 items-center">
                        <div className="flex-1 flex flex-col items-center lg:items-start">
                            <div className="rich-text-block" style={{ color: 'rgb(17, 24, 39)' }}>
                                <h3 style={{ whiteSpace: 'pre-line' }}>{t('about_us')}</h3>
                                <p style={{ whiteSpace: 'pre-line' }}>
                                    {t('about_us_message')}
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex w-full justify-center lg:justify-start">
                            <div className="flex-shrink-0 relative w-full mx-auto aspect-w-16 aspect-h-9">
                                <span
                                    style={{
                                      boxSizing: 'border-box',
                                      display: 'block',
                                      overflow: 'hidden',
                                      width: 'initial',
                                      height: 'initial',
                                      background: 'none',
                                      opacity: 1,
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                      position: 'absolute',
                                      top: 0,
                                      left: 0,
                                      bottom: 0,
                                      right: 0
                                    }}
                                >
                                    <img
                                        alt="We provide high quality services"
                                        src={Hero1Picture}
                                        decoding="async"
                                        data-nimg="fill"
                                        className="rounded-2xl md:rounded-3xl lg:rounded-4xl"
                                        style={{
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
                                          boxSizing: 'border-box',
                                          padding: 0,
                                          border: 'none',
                                          margin: 'auto',
                                          display: 'block',
                                          width: 0,
                                          height: 0,
                                          minWidth: '100%',
                                          maxWidth: '100%',
                                          minHeight: '100%',
                                          maxHeight: '100%',
                                          objectFit: 'cover',
                                          objectPosition: 'center 15%'
                                        }}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default SectionHero
