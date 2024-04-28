"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Card from "./card";
import { Item } from "@prisma/client";
import EditQuantityModal from "./editQuantityModal";

//  <>
//   {sections.map((section) => (
//     <div key={section.name} className="mx-4">
//       <h1 className="text-2xl">{section.name}</h1>
//         <div className="bg-black rounded-lg shadow-md grid lg:grid-cols-3 grid-cols-2 gap-2 overflow-y-auto  min-h-[calc(50vh)] p-4">
//           {section.val.map((item) => (
//             <div
//               className="full-screen flex flex-wrap gap-4 m-4"
//               key={item.name}
//             >
//               <EditQuantityModal item={item}/>
//             </div>
//            ))}
//           </div>
//        <div className="divider"></div>
//      </div>
//    ))}
//  </>

export default function TabsDemo({medicineItems, food_suppliesItems, cleaning_suppliesItems, hygieneItems} : {medicineItems: Item[], food_suppliesItems: Item[], cleaning_suppliesItems: Item[], hygieneItems: Item[]}) {
  const tabs = [
    {
      title: "Food & Supplies",
      value: "Food & Supplies",
      content: (
        <div className="w-full flex flex-col relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900 gap-4 overflow-y-scroll">
          <p>Food & Supplies Products</p>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
            {food_suppliesItems.map((item) => (
              <EditQuantityModal item={item} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Cleaning & Sanitizing",
      value: "Cleaning & Sanitizing",
      content: (
        <div className="w-full flex flex-col relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900 gap-4 overflow-y-scroll">
          <p>Cleaning & Sanitizing Products</p>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
            {cleaning_suppliesItems.map((item) => (
              <EditQuantityModal item={item} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Hygiene",
      value: "Hygiene",
      content: (
        <div className="w-full flex flex-col relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900 gap-4 overflow-y-scroll">
          <p>Hygiene</p>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
            {hygieneItems.map((item) => (
              <EditQuantityModal item={item} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Medicine",
      value: "Medicine",
      content: (
        <div className="w-full flex flex-col relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900 gap-4 overflow-y-scroll">
          <p>Medicine</p>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
            {medicineItems.map((item) => (
              <EditQuantityModal item={item} />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[100vh] [perspective:1000px] relative b flex flex-col max-w-[90%] mx-auto w-full items-start justify-start mb-40 overflow-y-visible">
      <Tabs contentClassName="h-[100vh]" tabs={tabs} />
    </div>
  );
}
