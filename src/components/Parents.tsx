import { motion } from "framer-motion";

const families = [
  {
    side: "Bride's Family",
    color: "#8A1538",
    parents: {
      father: "Abdul Salam TV",
      mother: "Shareefa BS",
    },
    paternal: {
      grandfather: "Ebrahim",
      grandmother: "Amina TV",
    },
    maternal: {
      grandfather: "Ali KUnhi NK",
      grandmother: "Zainaba BS",
    },
  },
  {
    side: "Groom's Family",
    color: "#0F6D58",
    parents: {
      father: "Groom Father",
      mother: "Groom Mother",
    },
    paternal: {
      grandfather: "Groom Grandfather",
      grandmother: "Groom Grandmother",
    },
    maternal: {
      grandfather: "Groom Maternal Grandfather",
      grandmother: "Groom Maternal Grandmother",
    },
  },
];

export function Parents() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#C8A95B]">
            Families
          </p>

          <h2 className="mt-3 font-[Cinzel] text-4xl text-[#2B2B2B]">
            With the Blessings of Our Families
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#C8A95B] to-transparent" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {families.map((family) => (

            <motion.div
              key={family.side}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-[#D9BC70]/30 bg-[#FFF8EF] p-8 shadow-xl"
            >

              <h3
                className="text-center font-[Cinzel] text-3xl"
                style={{ color: family.color }}
              >
                {family.side}
              </h3>

              <div className="mx-auto mt-4 mb-8 h-px w-20 bg-[#D4AF37]" />

              {/* Parents */}

              <div className="mb-8">

                <h4 className="text-lg font-semibold text-[#C8A95B]">
                  Parents
                </h4>

                <p className="mt-3 text-lg text-[#333]">
                  <strong>Father:</strong> {family.parents.father}
                </p>

                <p className="mt-1 text-lg text-[#333]">
                  <strong>Mother:</strong> {family.parents.mother}
                </p>

              </div>

              {/* Paternal */}

              <div className="mb-8">

                <h4 className="text-lg font-semibold text-[#C8A95B]">
                  Paternal Grandparents
                </h4>

                <p className="mt-3 text-[#555]">
                  Grandfather : {family.paternal.grandfather}
                </p>

                <p className="mt-1 text-[#555]">
                  Grandmother : {family.paternal.grandmother}
                </p>

              </div>

              {/* Maternal */}

              <div>

                <h4 className="text-lg font-semibold text-[#C8A95B]">
                  Maternal Grandparents
                </h4>

                <p className="mt-3 text-[#555]">
                  Grandfather : {family.maternal.grandfather}
                </p>

                <p className="mt-1 text-[#555]">
                  Grandmother : {family.maternal.grandmother}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}