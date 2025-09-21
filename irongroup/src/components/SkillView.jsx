function Skill({ skillName, skillLevel }) {
    return(
        <div class="nes-container with-title">
            <p class="title">{skillName} - {skillLevel}</p>
            <progress class="nes-progress is-primary" value={skillLevel} max="100"></progress>
        </div>
    );
}

export default function SkillView() {
    const skills = [
    { name: "Attack", level: 50 },
    { name: "Strength", level: 60 },
    { name: "Defence", level: 45 },
    { name: "Hitpoints", level: 70 },
    { name: "Ranged", level: 55 },
    { name: "Prayer", level: 43 },
    { name: "Magic", level: 65 },
    { name: "Cooking", level: 35 },
    { name: "Woodcutting", level: 40 },
    { name: "Fletching", level: 30 },
    { name: "Fishing", level: 55 },
    { name: "Firemaking", level: 25 },
    { name: "Crafting", level: 20 },
    { name: "Smithing", level: 45 },
    { name: "Mining", level: 50 },
    { name: "Herblore", level: 10 },
    { name: "Agility", level: 30 },
    { name: "Thieving", level: 35 },
    { name: "Slayer", level: 15 },
    { name: "Farming", level: 5 },
    { name: "Runecrafting", level: 7 },
    { name: "Hunter", level: 22 },
    { name: "Construction", level: 12 },
  ];

    return (
        <div class="nes-container" id="skill-holder">
            <div class="lists">
                <ul class="nes-list is-disc">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <Skill skillName={skill.name} skillLevel={skill.level} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}