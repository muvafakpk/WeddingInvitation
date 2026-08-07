import { useState } from "react";
import { supabase } from "../../supabase";

export default function RSVP() {
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState(1);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("rsv").insert([
      {
        family_name: familyName,
        email: email,
        members: members,
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Thank you! Your RSVP has been submitted.");
      setFamilyName("");
      setEmail("");
      setMembers(1);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-xl rounded-3xl bg-[#FCF5EB] p-8 shadow-xl border border-[#D9BC70]">

        <h2 className="text-center text-4xl font-[Cinzel] text-[#2B2B2B]">
          RSVP
        </h2>

        <p className="text-center text-[#8A7D6A] mt-2">
          Kindly let us know if you'll be joining us.
        </p>

        <form onSubmit={submitForm} className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Family Name"
            required
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
            className="w-full rounded-xl border border-[#D8B56A] bg-white px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[#D8B56A] bg-white px-4 py-3 outline-none"
          />

          <input
            type="number"
            min={1}
            placeholder="Number of Members"
            required
            value={members}
            onChange={(e) => setMembers(Number(e.target.value))}
            className="w-full rounded-xl border border-[#D8B56A] bg-white px-4 py-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#C8A95B] py-3 text-white font-semibold hover:bg-[#B08F3E]"
          >
            {loading ? "Submitting..." : "Submit RSVP"}
          </button>

        </form>
      </div>
    </section>
  );
}