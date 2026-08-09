// import { motion } from "framer-motion";

// const families = [
//   {
//     person: "Shaza",
//     relation: "Daughter of",
//     parents: "Abdul Salam TV & Shareefa BS",
//     paternal: "Ebrahim & Amina TV",
//     maternal: "Ali Kunhi NK & Zainaba BS",
//     color: "#8A1538",
//   },
//   {
//     person: "Salman",
//     relation: "Son of",
//     parents: "Abdul Salam TP & Subaida M",
//     paternal: "Hassan Musliyar & Kunhamina TP",
//     maternal: "Mohd Kunhi & Jameela",
//     color: "#0F6D58",
//   },
// ];

// function LeafDecoration({ color }: { color: string }) {
//   return (
//     <svg
//       viewBox="0 0 90 38"
//       className="mx-auto h-8 w-20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M22 30C18 23 12 22 8 23C12 29 17 32 22 30Z"
//         fill={color}
//         opacity="0.65"
//       />

//       <path
//         d="M31 22C27 16 22 14 18 16C21 22 26 25 31 22Z"
//         fill="#C8A95B"
//         opacity="0.7"
//       />

//       <path
//         d="M59 22C63 16 68 14 72 16C69 22 64 25 59 22Z"
//         fill="#C8A95B"
//         opacity="0.7"
//       />

//       <path
//         d="M68 30C72 23 78 22 82 23C78 29 73 32 68 30Z"
//         fill={color}
//         opacity="0.65"
//       />

//       <circle cx="45" cy="8" r="2.5" fill="#C8A95B" />
//     </svg>
//   );
// }

// function FamilyLine({
//   label,
//   text,
//   color,
// }: {
//   label: string;
//   text: string;
//   color: string;
// }) {
//   return (
//     <div className="relative">
//       <div className="flex items-center justify-center gap-2">
//         <span
//           className="h-px w-8 opacity-30"
//           style={{ backgroundColor: color }}
//         />

//         <span className="whitespace-nowrap text-center font-[Poppins] text-[8px] uppercase tracking-[0.2em] text-[#9A9188] sm:text-[9px]">
//           {label}
//         </span>

//         <span
//           className="h-px w-8 opacity-30"
//           style={{ backgroundColor: color }}
//         />
//       </div>

//       <p className="mt-2 text-center font-[Cormorant_Garamond] text-lg font-semibold leading-6 text-[#3D3834] sm:text-xl">
//         {text}
//       </p>
//     </div>
//   );
// }

// export function Parents() {
//   return (
//     <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

//       {/* Background decoration */}
//       <div className="pointer-events-none absolute left-0 top-20 h-40 w-40 rounded-full bg-[#8A1538]/5 blur-3xl" />

//       <div className="pointer-events-none absolute right-0 top-40 h-48 w-48 rounded-full bg-[#0F6D58]/5 blur-3xl" />

//       <div className="relative mx-auto max-w-6xl">

//         {/* SECTION HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center"
//         >
//           <p className="font-[Poppins] text-[9px] uppercase tracking-[0.45em] text-[#C8A95B] sm:text-xs">
//             With Love & Blessings
//           </p>

//           <h2 className="mt-3 font-[Cinzel] text-3xl tracking-wide text-[#292522] sm:text-4xl lg:text-5xl">
//             Our Families
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl font-[Cormorant_Garamond] text-base italic text-[#766D64] sm:text-xl">
//             Two hearts, two families, one beautiful beginning
//           </p>

//           <div className="mt-4">
//             <LeafDecoration color="#8A1538" />
//           </div>
//         </motion.div>

//         {/* FAMILY CARDS */}
//         {/* Mobile: 1 column | Desktop: 2 columns */}
//         <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

//           {families.map((family, index) => (
//             <motion.article
//               key={family.person}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.15,
//               }}
//               className="group relative overflow-hidden rounded-[2rem] border border-[#C8A95B]/25 bg-[#FFF8EF] shadow-[0_20px_60px_rgba(60,45,30,0.10)]"
//             >

//               {/* Top gold / family color accent */}
//               <div
//                 className="absolute left-0 right-0 top-0 h-1"
//                 style={{
//                   background: `linear-gradient(90deg, transparent, ${family.color}, #C8A95B, ${family.color}, transparent)`,
//                 }}
//               />

//               {/* Decorative glow - top right */}
//               <div
//                 className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 blur-3xl"
//                 style={{
//                   backgroundColor: family.color,
//                 }}
//               />

//               {/* Decorative glow - bottom left */}
//               <div
//                 className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full opacity-5 blur-3xl"
//                 style={{
//                   backgroundColor: family.color,
//                 }}
//               />

//               <div className="relative p-6 sm:p-7 lg:p-8">

//                 {/* NAME */}
//                 <div className="text-center">

//                   <h3
//                     className="font-[Cormorant_Garamond] text-4xl font-semibold sm:text-5xl"
//                     style={{
//                       color: family.color,
//                     }}
//                   >
//                     {family.person}
//                   </h3>

//                   <div className="mx-auto mt-3 flex items-center justify-center gap-2">

//                     <span className="h-px w-10 bg-[#C8A95B]/40" />

//                     <span className="text-xs text-[#C8A95B]">
//                       ✦
//                     </span>

//                     <span className="h-px w-10 bg-[#C8A95B]/40" />

//                   </div>

//                 </div>

//                 {/* PARENTS */}
//                 <div className="mt-7">

//                   <FamilyLine
//                     label={family.relation}
//                     text={family.parents}
//                     color={family.color}
//                   />

//                 </div>

//                 {/* TREE CONNECTOR */}
//                 <div className="mx-auto my-6 h-8 w-px bg-[#C8A95B]/35" />

//                 {/* GRANDPARENTS */}
//                 <div className="space-y-6">

//                   {/* First Grandparents */}
//                   <FamilyLine
//                     label={
//                       family.relation === "Daughter of"
//                         ? "Granddaughter of"
//                         : "Grandson of"
//                     }
//                     text={family.paternal}
//                     color={family.color}
//                   />

//                   {/* Divider */}
//                   <div className="mx-auto h-px w-12 bg-[#C8A95B]/25" />

//                   {/* Second Grandparents */}
//                   <FamilyLine
//                     label={
//                       family.relation === "Daughter of"
//                         ? "Granddaughter of"
//                         : "Grandson of"
//                     }
//                     text={family.maternal}
//                     color={family.color}
//                   />

//                 </div>

//                 {/* Bottom decoration */}
//                 <div className="mt-7 flex items-center justify-center gap-2">

//                   <span className="h-px w-12 bg-[#C8A95B]/25" />

//                   <span
//                     className="text-sm"
//                     style={{
//                       color: family.color,
//                     }}
//                   >
//                     ❧
//                   </span>

//                   <span className="h-px w-12 bg-[#C8A95B]/25" />

//                 </div>

//               </div>

//             </motion.article>
//           ))}

//         </div>

//         {/* FINAL BLESSING */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//           }}
//           className="mt-8 text-center"
//         >
//           <p className="font-[Cormorant_Garamond] text-lg italic text-[#766D64] sm:text-xl">
//             “May their blessings always surround us.”
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
export function Parents() {
  return (
    <section className="w-full bg-[#F8F1E7] px-2 py-6 sm:px-4 sm:py-10">
      <div className="mx-auto w-full max-w-[1400px]">
        
        <div className="relative rounded-[20px] border border-[#C8A95B]/50 bg-[#F8F1E7] p-[3px] shadow-[0_8px_30px_rgba(120,90,45,0.10)] sm:rounded-[28px] sm:p-1">
          
          {/* Inner border */}
          <div className="rounded-[17px] border border-[#C8A95B]/25 overflow-hidden sm:rounded-[25px]">
            
            <img
              src="/assets/parent.png"
              alt="Our Families"
              className="block w-full h-auto"
            />

          </div>
        </div>

      </div>
    </section>
  );
}