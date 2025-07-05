export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] min-h-screen relative">
      {/* Gradient BG */}
      <div className="bg-gradient-to-b from-red-800 to-transparent dark:from-red-800 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="min-h-screen relative z-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 flex flex-col justify-center min-h-screen">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            MBC Laboratory
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Laboratorium Aplikasi Multimedia, Big Data dan Keamanan Siber yang
            berlokasi di Fakultas Teknik Elektro Universitas Telkom
          </p>
        </div>
      </div>

      <h1 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Visi dan Misi
      </h1>
      <div className="py-16 relative z-10">
        <div className="flex flex-row flex-wrap justify-evenly items-stretch gap-14 px-4 py-8">
          <a
            href="#"
            className="block flex-1 max-w-sm min-h-[200px] p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm hover:bg-white/90 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:bg-gray-700/90 transition-all duration-300"
          >
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Visi
            </h5>
            <p className="font-normal text-gray-700 text-justify dark:text-gray-400">
              Menjadi pusat unggulan dalam penelitian, pengembangan, dan inovasi
              di bidang Aplikasi Multimedia, Big Data, dan Keamanan Siber yang
              berkontribusi secara signifikan bagi kemajuan ilmu pengetahuan,
              teknologi, dan keamanan digital di tingkat nasional maupun global.
            </p>
          </a>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm hover:bg-white/90 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:bg-gray-700/90 transition-all duration-300"
          >
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Misi
            </h5>
            <ul className="font-normal text-gray-700 dark:text-gray-400 space-y-2 text-sm">
              <li>
                • Mengembangkan riset inovatif di bidang multimedia, Big Data,
                dan keamanan siber.
              </li>
              <li>
                • Menerapkan teknologi seperti machine learning dan simulasi
                interaktif untuk analisis data dan pengembangan aplikasi.
              </li>
              <li>
                • Meningkatkan kapabilitas pertahanan siber melalui kolaborasi
                tim Merah, Biru, dan Cloud.
              </li>
              <li>
                • Mendukung pengembangan kompetensi mahasiswa dan peneliti.
              </li>
              <li>
                • Membangun kolaborasi lintas disiplin untuk menghadapi
                tantangan teknologi masa depan.
              </li>
            </ul>
          </a>
        </div>
      </div>

      {/* Divisi Section */}
      <h1 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Bidang Keahlian
      </h1>
      <div className="py-16 relative z-10">
        <div className="flex flex-row flex-wrap justify-evenly items-stretch gap-6 px-4 py-8">
          <div className="block flex-1 max-w-sm min-h-[150px] p-6 bg-[url('/images/cs.jpg')] bg-cover bg-center border border-gray-200 rounded-lg shadow-sm hover:opacity-90 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white relative z-10 flex items-center justify-center h-full">
              Cyber Security
            </h5>
          </div>

          <div className="block flex-1 max-w-sm min-h-[150px] p-6 bg-[url('/images/bd.png')] bg-cover bg-center border border-gray-200 rounded-lg shadow-sm hover:opacity-90 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white relative z-10 flex items-center justify-center h-full">
              Big Data
            </h5>
          </div>

          <div className="block flex-1 max-w-sm min-h-[150px] p-6 bg-[url('/images/gt.jpg')] bg-cover bg-center border border-gray-200 rounded-lg shadow-sm hover:opacity-90 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white relative z-10 flex items-center justify-center h-full">
              Game Tech
            </h5>
          </div>

          <div className="block flex-1 max-w-sm min-h-[150px] p-6 bg-[url('/images/gis.jpg')] bg-cover bg-center border border-gray-200 rounded-lg shadow-sm hover:opacity-90 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white relative z-10 flex items-center justify-center h-full">
              GIS
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
