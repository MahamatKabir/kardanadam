import Services from "../Service/Service";


const OrganizationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100  flex flex-col items-center justify-center p-6">
      <header className=" pt-4 mt-10 flex items-center justify-center">
  <div className="flex items-center w-full max-w-6xl mx-auto">
    {/* Left Bar */}
    <div className="flex-1 flex items-center justify-end pr-4">
      <div className="border-t h-3 w-14 border-blue-500"></div>
    </div>

    {/* Title */}
    <h1 className="text-4xl font-bold whitespace-nowrap">
      Faaliyetlerimiz
    </h1>

    {/* Right Bar */}
    <div className="flex-1 flex items-center justify-start pl-4">
      <div className="border-t h-3 w-14 border-blue-500"></div>
    </div>
  </div>
</header>

     <Services />
    </div>
  );
};

export default OrganizationPage;
