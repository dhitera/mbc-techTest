import Card from "../../components/ui/Card";

export default function Division() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Bidang Keahlian MBC Laboratory
      </h1>

      <div className="flex flex-col space-y-6 w-full px-4">
        <Card
          title="Cyber Security"
          description="Cyber Security adalah upaya untuk melindungi sistem komputer, jaringan, dan data dari ancaman digital seperti peretasan, malware, pencurian data, dan serangan siber lainnya. Tujuannya adalah menjaga kerahasiaan, integritas, dan ketersediaan informasi agar tidak disalahgunakan oleh pihak yang tidak berwenang. Dalam era digital saat ini, keamanan siber sangat penting untuk mencegah kerugian finansial, kebocoran data pribadi, dan gangguan layanan teknologi."
          imageUrl="/images/cs.jpg"
          imageAlt="Technology acquisitions"
        />

        <Card
          title="Big Data"
          description="Big Data adalah istilah untuk menggambarkan kumpulan data yang sangat besar, kompleks, dan terus bertambah dengan cepat, sehingga sulit untuk dikelola menggunakan metode pengolahan data tradisional. Big Data mencakup tiga karakter utama, yaitu volume (jumlah data yang besar), velocity (kecepatan data dihasilkan), dan variety (beragam jenis data). Teknologi Big Data digunakan untuk menganalisis pola, tren, dan wawasan dari data tersebut agar dapat mendukung pengambilan keputusan yang lebih akurat dalam berbagai bidang, seperti bisnis, kesehatan, hingga pemerintahan.
"
          imageUrl="/images/bd.png"
          imageAlt="Another topic"
        />

        <Card
          title="Game Technology"
          description="Game Technology adalah bidang yang mencakup pengembangan perangkat lunak dan perangkat keras untuk menciptakan, menjalankan, dan meningkatkan pengalaman bermain game. Teknologi ini melibatkan berbagai aspek seperti grafis komputer, kecerdasan buatan, fisika virtual, engine game, serta interaksi pengguna. Game Technology tidak hanya digunakan untuk hiburan, tetapi juga diterapkan dalam pendidikan, simulasi, pelatihan, dan bidang lainnya untuk menciptakan pengalaman yang imersif dan interaktif.
"
          imageUrl="/images/gt.jpg"
          imageAlt="Custom example"
        />

        <Card
          title="Geographic Information System"
          description="Geographic Information System (GIS) adalah sistem yang digunakan untuk mengumpulkan, menyimpan, menganalisis, dan menampilkan data yang berkaitan dengan lokasi di permukaan bumi. GIS menggabungkan data spasial (peta) dengan data deskriptif (informasi tambahan) untuk membantu dalam pengambilan keputusan, perencanaan, dan pemecahan masalah di berbagai bidang seperti lingkungan, transportasi, perencanaan kota, dan mitigasi bencana. Teknologi ini memungkinkan visualisasi informasi dalam bentuk peta digital yang interaktif dan mudah dipahami.
"
          imageUrl="/images/gis.jpg"
          imageAlt="Custom example"
        />
      </div>
    </div>
  );
}
