import Header from '@/components/header'
import Button from '@/components/button'
import Image from 'next/image'
import InstagramFeed from '@/components/instagram-feed'
import Script from 'next/script'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="min-h-screen flex items-center bg-white pt-3 md:pt-4 scroll-mt-20">
          <div className="container mx-auto px-4 py-2 md:py-3">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="relative inline-block">
                  <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-lightBlue rounded-full opacity-50 bg-white"></div>
                  <span className="relative text-primary font-bold text-[10px] md:text-xs uppercase tracking-wider bg-white px-2">
                    ULTRASSONOGRAFIA VETERINÁRIA
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Diagnósticos precisos, onde seu{' '}
                  <span className="text-secondary">Pet</span> estiver.
                </h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                  A VetHoff oferece serviços de ultrassonografia veterinária móvel com equipamentos de alta precisão e profissionais especializados, garantindo diagnósticos rápidos, confiáveis e com total comodidade.
                </p>
                <Button>Agendar Exame</Button>
              </div>
                          <div className="relative h-full min-h-[600px] md:min-h-[900px] lg:min-h-[1000px] py-8 -mx-4 md:-mx-8">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-lightBlue/40 blur-3xl -translate-x-16 -translate-y-8"></div>
                    <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-secondary/30 blur-3xl translate-x-20 translate-y-12"></div>
                    <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full bg-lightBeige/35 blur-3xl -translate-x-32 translate-y-24"></div>
                    <div className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full bg-lightBlue/25 blur-2xl translate-x-28 -translate-y-16"></div>
                    <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full bg-secondary/25 blur-2xl -translate-x-12 translate-y-32"></div>
                    <div className="absolute w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full bg-lightBeige/30 blur-2xl translate-x-40 translate-y-8"></div>
                    <div className="absolute w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full bg-primary/15 blur-2xl -translate-x-24 -translate-y-12"></div>
                    <div className="absolute w-[80px] h-[80px] md:w-[160px] md:h-[160px] rounded-full bg-lightBlue/20 blur-xl translate-x-36 translate-y-20"></div>
                  </div>
                </div>
                <div className="relative z-10 h-full flex items-center justify-center w-full overflow-hidden">
                  <div className="relative w-full max-w-none">
                    <Image
                      src="/heronew.png"
                      alt="Hero"
                      width={2400}
                      height={3200}
                      className="w-full h-auto rounded-lg scale-x-[-1] object-contain relative z-10 scale-110 md:scale-125 lg:scale-150"
                      priority
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative -mt-16 md:-mt-20 lg:-mt-24 bg-white pb-12 overflow-hidden">
          <div className="relative">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-[#B9D5EA] rounded-xl shadow-lg border border-[#B9D5EA]/30 p-6 md:p-8 hover:bg-[#B9D5EA]/90 transition-all duration-300 flex flex-col items-center justify-center text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
                    Missão
                  </h2>
                  <p className="text-primary text-sm md:text-base leading-relaxed">
                    Entregar diagnósticos precisos e confiáveis para nossos parceiros clínicos e uma experiência atenciosa, cuidadosa e humanizada para os Pets e tutores.
                  </p>
                </div>
                <div className="bg-[#223958] rounded-xl shadow-lg border border-[#223958]/30 p-6 md:p-8 hover:bg-[#223958]/95 transition-all duration-300 flex items-center justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 justify-items-center w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <Image
                        src="/car.svg"
                        alt="Carro"
                        width={32}
                        height={32}
                        className="md:w-10 md:h-10 w-8 h-8"
                        unoptimized={true}
                      />
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2 md:mb-3">Mobilidade</h3>
                    <p className="text-white text-[10px] md:text-xs">
                      Eu vou até seu paciente, para a comodidade de realizar a consulta e o exame no mesmo local.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <svg
                        width="24"
                        height="24"
                        className="md:w-8 md:h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2 md:mb-3">Experiência</h3>
                    <p className="text-white text-[10px] md:text-xs">
                      Há mais de 06 anos atuando na Clínica Médica de Pequenos animais.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                      <svg
                        width="24"
                        height="24"
                        className="md:w-8 md:h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2 md:mb-3">Conforto</h3>
                    <p className="text-white text-[10px] md:text-xs">
                      Além de equipamento de ponta, utilizamos gel quentinho na barriga dos pacientes, o que ajuda a acalmá-los.
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                <Image
                  src="/cristine.jpg"
                  alt="Cristine Hoffmeister"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg object-cover"
                  quality={100}
                />
              </div>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4 md:mb-6">
                  Muito Prazer,
                  <br />
                  <span className="font-dancing text-secondary">Cristine Hoffmeister</span>
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Sou pós-graduada em Clínica Médica de Pequenos Animais e atuo há mais de cinco anos na rotina veterinária, sempre em busca de oferecer o melhor cuidado para cada paciente. Já trabalhei com medicina equina, área que continua sendo uma grande paixão e hobby, mas foi entre os pequenos animais que encontrei minha verdadeira realização. Desde criança, sempre soube que seria veterinária — e hoje vivo essa vocação com amor, técnica e sensibilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-12 md:py-16 lg:py-20 bg-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-4 md:mb-6">
              Serviços
            </h2>
            <p className="text-center text-gray-600 text-sm md:text-base mb-8 md:mb-12">
              Atendemos as seguintes modalidades de Ultrassonografia Veterinária
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <div className="relative rounded-xl p-6 md:p-8 shadow-lg border border-[#B9D5EA]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px] text-center overflow-hidden flex items-center justify-center min-h-[200px] group">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/pet001.jpg)' }}></div>
                <div className="absolute inset-0 bg-[#B9D5EA]/30 backdrop-blur-sm group-hover:bg-transparent group-hover:backdrop-blur-0 transition-all duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="bg-white/0 group-hover:bg-white/95 rounded-lg px-4 py-3 transition-all duration-300 text-center translate-y-[2px]">
                    <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary">
                      Abdominal Total
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl p-6 md:p-8 shadow-lg border border-[#B9D5EA]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px] text-center overflow-hidden flex items-center justify-center min-h-[200px] group">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/pet002.jpg)' }}></div>
                <div className="absolute inset-0 bg-[#B9D5EA]/30 backdrop-blur-sm group-hover:bg-transparent group-hover:backdrop-blur-0 transition-all duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="bg-white/0 group-hover:bg-white/95 rounded-lg px-4 py-3 transition-all duration-300 text-center translate-y-[2px]">
                    <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary">
                      Gestacional
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl p-6 md:p-8 shadow-lg border border-[#B9D5EA]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px] text-center overflow-hidden flex items-center justify-center min-h-[200px] group">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/pet003.jpg)' }}></div>
                <div className="absolute inset-0 bg-[#B9D5EA]/30 backdrop-blur-sm group-hover:bg-transparent group-hover:backdrop-blur-0 transition-all duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="bg-white/0 group-hover:bg-white/95 rounded-lg px-4 py-3 transition-all duration-300 text-center translate-y-[2px]">
                    <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary">
                      Torácica
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl p-6 md:p-8 shadow-lg border border-[#B9D5EA]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px] text-center overflow-hidden flex items-center justify-center min-h-[200px] group">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/pet004.jpg)' }}></div>
                <div className="absolute inset-0 bg-[#B9D5EA]/30 backdrop-blur-sm group-hover:bg-transparent group-hover:backdrop-blur-0 transition-all duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="bg-white/0 group-hover:bg-white/95 rounded-lg px-4 py-3 transition-all duration-300 text-center translate-y-[2px]">
                    <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary">
                      Ocular
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl p-6 md:p-8 shadow-lg border border-[#B9D5EA]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex-1 min-w-[200px] max-w-[280px] text-center overflow-hidden flex items-center justify-center min-h-[200px] group">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/pet005.jpg)' }}></div>
                <div className="absolute inset-0 bg-[#B9D5EA]/30 backdrop-blur-sm group-hover:bg-transparent group-hover:backdrop-blur-0 transition-all duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="bg-white/0 group-hover:bg-white/95 rounded-lg px-4 py-3 transition-all duration-300 text-center translate-y-[2px]">
                    <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-primary">
                      Intervencionista
                    </h3>
                    <p className="text-primary text-xs md:text-sm opacity-80 group-hover:opacity-100 mt-1">
                      (Citologia, Centeses)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full my-12 md:my-16 lg:my-20 overflow-hidden">
          <div className="relative w-full min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/catdogbaixe.jpg"
                alt="Cachorro e gato"
                fill
                className="object-cover scale-x-[-1]"
                quality={90}
              />
              {/* Overlay escuro com gradiente para contraste do texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent max-w-[60%] md:max-w-[55%]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Baixe seu exame em poucos cliques!
                </h2>
                <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 leading-relaxed">
                  Acesse nosso portal de exames e tenha acesso aos laudos do seu pet!
                </p>
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Download De Exames
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <InstagramFeed />
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 md:p-12 lg:p-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-8 md:mb-10">
                Avaliações
              </h2>
              <div className="px-4 md:px-8 lg:px-12">
                <div id="reviews-widget-725" className="min-h-[400px]"></div>
              </div>
              <Script
                src="https://app.reviewconnect.me/embed/VSqbRWa2kisIs1FVjzHASVX0f7LPgzmV/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </div>
        </section>

        <section id="contato" className="py-12 md:py-16 lg:py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-4 md:mb-6">
              Contato
            </h2>
            
            <div className="space-y-6 md:space-y-8">
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4 md:mb-6">
                    Atendimento Volante em:
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {[
                      { name: 'Curitiba', image: '/curitiba.jpg' },
                      { name: 'São José dos Pinhais', image: '/sjp.jpg' },
                      { name: 'Piraquara', image: '/piraquara.jpeg' },
                      { name: 'Pinhais', image: '/pinhais.jpg' },
                      { name: 'Fazenda Rio Grande', image: '/fzd.jpg' },
                    ].map((city) => (
                      <div
                        key={city.name}
                        className="relative w-24 h-24 md:w-28 md:h-28 rounded-lg text-[10px] md:text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default flex items-center justify-center text-center p-2 text-white overflow-hidden group"
                        style={{
                          backgroundImage: `url(${city.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundBlendMode: 'multiply',
                          backgroundColor: '#BA805B',
                        }}
                      >
                        <div className="absolute inset-0 bg-secondary/80 group-hover:bg-primary/80 transition-colors duration-300" style={{ mixBlendMode: 'multiply' }}></div>
                        <span className="relative z-10 font-bold">{city.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 text-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:w-7 md:h-7"
                    >
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3518 21.3992C21.1464 21.5859 20.9036 21.7267 20.6391 21.8123C20.3746 21.8979 20.0942 21.9263 19.817 21.8956C16.7429 21.4957 13.787 20.3699 11.19 18.5956C8.77382 16.9828 6.72533 14.8343 5.19 12.3356C3.36989 9.35776 2.21586 6.02045 1.82 2.61556C1.78931 2.33838 1.81769 2.05795 1.90331 1.79347C1.98894 1.52898 2.12969 1.28616 2.31634 1.08073C2.50299 0.875305 2.73147 0.711681 2.98641 0.600076C3.24134 0.488471 3.51706 0.431523 3.79556 0.432556H6.79556C7.39446 0.411264 7.98672 0.554543 8.51423 0.849119C9.04173 1.14369 9.48684 1.57997 9.80556 2.11556L11.3556 5.01556C11.6233 5.50207 11.7713 6.04526 11.7874 6.60097C11.8035 7.15669 11.6872 7.70856 11.4489 8.20856C11.2106 8.70856 10.8572 9.14265 10.4156 9.47556L8.86556 10.7256C10.1987 13.2477 12.2323 15.2813 14.7544 16.6144L16.0044 15.0644C16.3373 14.6228 16.7714 14.2695 17.2714 14.0312C17.7714 13.7929 18.3233 13.6765 18.879 13.6926C19.4347 13.7087 19.9779 13.8567 20.4644 14.1244L23.3644 15.6744C23.8964 15.9913 24.3298 16.433 24.6212 16.957C24.9126 17.4809 25.0534 18.0693 25.0306 18.6644L22.0306 18.6144"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a
                      href="tel:+5541996852421"
                      className="text-lg md:text-xl font-bold hover:text-secondary transition-colors duration-300"
                    >
                      (41) 99685-2421
                    </a>
                  </div>

                  <a
                    href="https://wa.me/5541996852421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button className="w-full md:w-auto">
                      Entre em Contato
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
