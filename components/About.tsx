import { MailIcon, PhoneCall, User2 } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Clémence Fernandez",
  },
  {
    icon: <MailIcon size={20} />,
    text: "clemencefrz@gmail.com",
  },
  {
    icon: <User2 size={20} />,
    text: "Ryan Davis",
  },
];

const qualificationData = [
  {
    title: "Formation",
    data: [
      {
        university: "E.N.S.E.E.I.H.T.",
        qualification: "Diplôme d'ingénieur",
        years: "2019 - 2022",
      },
      {
        university: "Classes préparatoires au Lycée Louis Barthou",
        qualification: "MPSI - MP option Science de l'ingénieur",
        years: "2016 - 2019",
      },
    ],
  },
  {
    title: "Expérience Professionnelle",
    data: [
      {
        company: "Alara",
        position: "Cofondatrice",
        years: "2024 - Aujourd'hui",
      },
      {
        company: "Polyconseil",
        position: "Ingénieure informatique en développement web",
        years: "2022 - Aujourd'hui",
      },
      {
        company: "Freelance",
        position:
          "Enseignante particulière en mathématiques, physique-chimie et informatique (niveau lycée jusqu'à Bac+2)",
        years: "2019 - Aujourd'hui",
      },
    ],
  },
];

const About = () => {
  const getData = (arr: { title: string }[], title: string) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        {/* image */}
        <div></div>
      </div>
    </section>
  );
};

export default About;
