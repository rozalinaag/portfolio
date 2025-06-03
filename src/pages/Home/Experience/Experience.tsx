import css from './styles.module.css';

export default function Experience() {
    return (
        <section id="experience" className={css.wrapper}>
            <h2 className={css.title}>Work Experience</h2>

            <div className={css.experienceItem}>
                <div className={css.company}>Magnit</div>
                <div className={css.role}>Software Engineer</div>
                <div className={css.dates}>2021 – 2024</div>
                <p className={css.companyDescription}>
                    Magnit is the leading food retailer in Russia. It operates across four formats:
                    convenience stores, hypermarkets, “Magnit Family” stores, and cosmetics stores.
                    Its mission is to improve consumer welfare by providing high-quality goods at
                    affordable prices to a wide income range.
                </p>
                <ul className={css.bullets}>
                    <li>
                        Developed a corporate intranet portal using JavaScript, React.js, TypeScript, Next.js, and CSS,
                        improving workflows for 10,000+ employees.
                    </li>
                    <li>
                        Implemented a scalable, component-based architecture and maintained a shared component library
                        for design consistency.
                    </li>
                    <li>
                        Built a real-time workspace booking system integrated with REST APIs.
                    </li>
                    <li>
                        Collaborated in Agile teams with QA, DevOps, and Design via Jira.
                    </li>
                </ul>
            </div>

            <div className={css.experienceItem}>
                <div className={css.company}>SimbirSoft</div>
                <div className={css.role}>Frontend Engineer</div>
                <div className={css.dates}>2018 – 2021</div>
                <p className={css.companyDescription}>
                    SimbirSoft is an international IT services and consulting company that delivers
                    tailored software solutions for B2B and B2C clients.
                </p>
                <ul className={css.bullets}>
                    <li>
                        Refactored legacy front-end codebases and migrated them to modern JavaScript and React standards.
                    </li>
                    <li>
                        Built B2B and B2C platforms with React, Redux, and TypeScript, including real-time dashboards and booking systems.
                    </li>
                    <li>
                        Participated in architecture decisions and improved performance across large-scale apps.
                    </li>
                    <li>
                        Wrote unit tests using Jest and React Testing Library to ensure code reliability and maintainability.
                    </li>
                </ul>
            </div>
        </section>
    );
}
