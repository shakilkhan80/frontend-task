import { FaBolt } from "react-icons/fa6";

const doData = [
  {
    icons: <FaBolt />,
    title: "Web Desgin",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icons: <FaBolt />,
    title: "UI/UX Design",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icons: <FaBolt />,
    title: "Branding",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icons: <FaBolt />,
    title: "E-commerce Solutions",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icons: <FaBolt />,
    title: "Web Flow",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    icons: <FaBolt />,
    title: "Custom Development",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
];

const Do = () => {
  return (
    <div className="mx-20 my-16">
      <h1 className="text-4xl font-bold mb-10">What We Do</h1>
      <div className="grid grid-cols-3 gap-2">
        {doData.map((d) => {
          return (
            <div key={d.title} className="">
              <h1 className="my-6">{d.icons}</h1>
              <h1 className="text-2xl font-bold ">{d.title}</h1>
              <p className="my-4">{d.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Do;
