import { skillGroups } from '../constants/index.js';

const Skills = () => {
  return (
    <section className="c-space my-20" id="skills">
      <p className="head-text">Skills</p>

      <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
        {skillGroups.map((group) => (
          <div key={group.id} className="grid-container">
            <p className="grid-headtext">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border border-black-300 bg-black-300 text-white-600 text-sm font-generalsans">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
