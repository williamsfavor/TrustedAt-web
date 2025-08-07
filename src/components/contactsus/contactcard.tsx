 
 interface card {
    title:string,
    description:string,
    action:string,
    contact?:string
 }
 
 export  const ContactCard = ({ title, description, action }:card) => (
      <div className="bg-white rounded-xl   w-[100%] p-10 px-8 flex flex-col gap-2 border border-gray-300">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 my-8">{description}</p>
        <a href="#" className="text-purple-600 underline  hover:underline">{action}</a>
      </div>
    );