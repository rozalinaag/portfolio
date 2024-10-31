type Props = {
  date: string;
  title: string;
  link: string;
  description: string;
  skills: string[];
};

export default function Card({
  date,
  title,
  link,
  description,
  skills,
}: Props) {
  return (
    <div>
      <div>{date}</div>

      <div>
        <div>
          {title} + {link}
        </div>

        <div>{description}</div>

        <div>
          {skills.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
