import React from "react";

export class About extends React.Component {
    render() {
        return (
            <div className="about-portfolio-wrapper">
                <div className="left-side">
                    <div className="about-content">
                        <h1>
                            O mnie adssad
                         </h1>
                        <div className="about-text">
                            Ukończyłem studia pierwszego stopnia na AGH. Interesuje się programowaniem frontu od półtora roku. Języki, których używam to głównie HTML, CSS, JavaScript (JQuery).
                            Strona ta wykonana została za pomocą biblioteki React.js, byc móc pogłebiać wiedzę na jej temat. Jestem osobą która chce się rozwijać oraz nie boi się nowych wyzwań.
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="portfolio-content">
                        <h1>Zrealizowane projekty</h1>
                        <div>
                            <div className="row">
                                <div>
                                    <div class="freebie">
                                        <img src={"./react/img/gampre.png"} />
                                        <div>
                                            <h3><a href="https:/gampre.pl/">gampre.pl</a></h3>
                                            <p>Front-end</p>
                                        </div>
                                        <a href="https:/gampre.pl/" class="btn btn-more" target="_blank">Przejdź do strony</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="freebie">
                                        <img src={"./react/img/hypelegro.png"} />
                                        <div>
                                            <h3><a href="https://www.hypelegro.pl/">hypelegro.pl</a></h3>
                                            <p>Front-end</p>
                                        </div>
                                        <a href="https://www.hypelegro.pl/" class="btn btn-more" target="_blank">Przejdź do strony</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="freebie">
                                        <img src={"./react/img/rosebay.png"} />
                                        <div>
                                            <h3><a href="https://rosebay.pl/">rosebay.pl</a></h3>
                                            <p>Front-end</p>
                                        </div>
                                        <a href="https://rosebay.pl/" class="btn btn-more" target="_blank">Przejdź do strony</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="freebie">
                                        <img src={"./react/img/topic.png"} />
                                        <div>
                                            <h3><a href="#">topic</a></h3>
                                            <p>Front-end</p>
                                        </div>
                                        <a href="#" class="btn btn-more" target="_blank">In progress</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default About;