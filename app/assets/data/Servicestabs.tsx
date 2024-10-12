import Image from "next/image";
import webD from "../web-d.jpg"

const DummyContent = ({image}: {image?: string}) => {
    return (
      <Image
        src={webD}
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

export const tabs = [
    {
      title: "Web Devlopment",
      value: "Web Devlopment",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web Devlopment</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "UI/UX Design",
      value: "UI/UX Design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>UI/UX Design</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Website Maintenance",
      value: "Website Maintenance",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Bug Fixes and Maintenace</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Consultations & Innovation",
      value: "Consultations & Innovation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Consultations & Innovation</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Mentorship",
      value: "Mentorship",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Mentorship</p>
          <DummyContent />
        </div>
      ),
    },
  ];