
const authorName = "Junyeong Choi";

export default function About() {
  return (
    <section className="py-20">
      <div className="page-container">
        <h1 className="text-3xl font-bold text-[#1c1a17] mb-3">About Me</h1>
        <p className="text-base text-[#6b6862] leading-relaxed">
          Hi, I am <strong className="text-[#1c1a17]">{authorName}</strong> 👋
        </p>
      </div>
    </section>
  );
}
