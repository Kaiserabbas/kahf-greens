                                                                                      import { Link } from 'react-router-dom';
                                                                                      import { useLanguage } from '../contexts/LanguageContext';

                                                                                      const Banner = () => {
                                                                                        const { isRTL } = useLanguage();

                                                                                        return (
                                                                                          <section className="py-8 md:py-12 bg-[#fbfdfa] relative overflow-hidden">
                                                                                            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                                              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#1a4d2e] to-[#2d5f3f] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                                                                                                <div className="w-full sm:w-auto">
                                                                                                  <h4 className="text-xl sm:text-2xl font-bold mb-1">
                                                                                                    {isRTL ? 'هل تحتاج إلى حل متكامل مخصص أو جدول كميات تجاري؟' : 'Need a Customized Turnkey Solution or Commercial BOQ?'}
                                                                                                  </h4>
                                                                                                  <p className="text-emerald-100 text-sm sm:text-base font-light">
                                                                                                    {isRTL
                                                                                                      ? 'يقدم مهندسونا ومعماريو الحدائق في الإمارات تصاميم مخصصة وحسابات هندسية وأسعار جملة مباشرة للمشاريع.'
                                                                                                      : 'Our UAE engineers and landscape architects provide custom designs, technical calculations, and direct wholesale pricing.'}
                                                                                                  </p>
                                                                                                </div>
                                                                                                <Link
                                                                                                  to="/contact"
                                                                                                  className="flex-shrink-0 px-6 py-3.5 bg-white hover:bg-emerald-50 text-[#1a4d2e] font-bold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                                                                                                >
                                                                                                  {isRTL ? 'طلب استشارة هندسية' : 'Request Technical Consultation'}
                                                                                                </Link>
                                                                                              </div>
                                                                                            </div>
                                                                                          </section>
                                                                                        );
                                                                                      };

                                                                                      export default Banner;
