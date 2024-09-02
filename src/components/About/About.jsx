const About = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center p-10 gap-10 bg-gradient-to-r from-slate-100 to-white relative overflow-hidden rounded-xl shadow-2xl">
      {/* Ligne Courbe dans le fond */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-teal-300 opacity-50 rounded-full w-[200%] h-[100%] -top-32 -left-64 transform rotate-45 blur-lg"></div>

      {/* Champ Texte */}
      <div className="relative mx-11 md:w-1/2 p-14">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
          À propos de lorganisation IDA
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Firmamız Yiyecek İçecek sektörüne sağlıklı, güvenli, hijjen buz temini
          sağlamaktadır. Yurt dışından getirdiğimiz Amerikan malı buz
          makinaları...
        </p>
        <button className="px-6 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-teal-600 hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
          Read More
        </button>
      </div>

      {/* Champ Image */}
      <div className="relative md:w-1/3 p-2 rounded-lg shadow-lg">
        <img
          src="https://ihh.org.tr/public/page/0/21/8693/455567134506.jpg"
          alt="Organisation IDA"
          className="w-[400px] h-[400px] object-cover rounded-lg shadow-xl border-4 border-white transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default About;
