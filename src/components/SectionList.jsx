import ITInfrastructureSolutionsPicture from '../assets/it-consulting.png'
import CybersecurityConsultancyPicture from '../assets/cybersecurity-consultancy.png'
import CloudComputingServicesPicture from '../assets/cloud-computing-services.png'
import { useTranslation } from 'react-i18next'

const SectionList = () => {
  const { t } = useTranslation()

  return (
        <>
            <section
                id="list-2"
                className="relative z-10 flex flex-none flex-shrink-0 items-center"
                style={{ minHeight: 'calc(240px - 0px)' }}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0 z-10"
                        style={{
                          backgroundImage:
                                'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))'
                        }}
                    />
                </div>
                <div className="relative z-10 container mx-auto pt-12 lg:pt-20 pb-12 lg:pb-20">
                    <h2
                        className="heading-large mb-6 text-left"
                        style={{
                          color: 'rgb(17, 24, 39)',
                          fontFamily: 'Cabin, sans-serif',
                          fontWeight: 700
                        }}
                    >
                        {t('our_services')}
                    </h2>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-start">
                        <div className="block-list-item w-full">
                            <div className="flex-shrink-0 relative mb-6 aspect-w-1 aspect-h-1">
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
                                        alt="IT Infrastructure Solutions"
                                        src={ITInfrastructureSolutionsPicture}
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
                                          objectPosition: 'center center'
                                        }}
                                    />
                                </span>
                            </div>
                            <div className="text-left">
                                <p
                                    className="heading-medium mb-4"
                                    style={{
                                      color: 'rgb(17, 24, 39)',
                                      fontFamily: 'Cabin, sans-serif',
                                      fontWeight: 700
                                    }}
                                >
                                    {t('it_infrastructure_solutions')}
                                </p>
                                <div className="rich-text-block" style={{ color: 'rgb(17, 24, 39)' }}>
                                    {t('it_infrastructure_solutions_msg')}
                                </div>
                            </div>
                        </div>
                        <div className="block-list-item w-full">
                            <div className="flex-shrink-0 relative mb-6 aspect-w-1 aspect-h-1">
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
                                        alt="Cybersecurity Consultancy"
                                        src={CybersecurityConsultancyPicture}
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
                                          objectPosition: 'center center'
                                        }}
                                    />
                                </span>
                            </div>
                            <div className="text-left">
                                <p
                                    className="heading-medium mb-4"
                                    style={{
                                      color: 'rgb(17, 24, 39)',
                                      fontFamily: 'Cabin, sans-serif',
                                      fontWeight: 700
                                    }}
                                >
                                    {t('cybersecurity_consultancy')}
                                </p>
                                <div className="rich-text-block" style={{ color: 'rgb(17, 24, 39)' }}>
                                    {t('cybersecurity_consultancy_msg')}
                                </div>
                            </div>
                        </div>
                        <div className="block-list-item w-full">
                            <div className="flex-shrink-0 relative mb-6 aspect-w-1 aspect-h-1">
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
                                        alt="Cloud Computing Services"
                                        src={CloudComputingServicesPicture}
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
                                          objectPosition: 'center center'
                                        }}
                                    />
                                </span>
                            </div>
                            <div className="text-left">
                                <p
                                    className="heading-medium mb-4"
                                    style={{
                                      color: 'rgb(17, 24, 39)',
                                      fontFamily: 'Cabin, sans-serif',
                                      fontWeight: 700
                                    }}
                                >
                                    {t('cloud_computing_services')}
                                </p>
                                <div className="rich-text-block" style={{ color: 'rgb(17, 24, 39)' }}>
                                    {t('cloud_computing_services_msg')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default SectionList
