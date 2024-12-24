import React from "react";

const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Laravel"];

    return (
        // <section id="skills" className="py-5 bg-light">
        //     <div className="container text-center">
        //         <h2 className="mb-4">Compétences</h2>
        //         <div className="d-flex flex-wrap justify-content-center gap-2">
        //             {skills.map((skill, index) => (
        //                 <span key={index} className="badge bg-primary fs-6">
        //                     {skill}
        //                 </span>
        //             ))}
        //         </div>
        //     </div>
        // </section>

        <section id="skills" className="skills section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Compétences</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row skills-content skills-animation">
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;