import "./Features.scss"

export function Features() {
    return (
        <section className="features">
            <h1 className="features-title">Unmatched Features for<br/> Unstoppable Gamers</h1>
            <p className="features-paragraph">We don’t just create gaming accessories—we engineer experiences. Our products are <br/>crafted with precision,
                innovation, and passion, ensuring that every gamer gets the best<br/> possible performance.</p>
            <div className="features-cards">
                <div className="features-card">
                    <div className="features-card-wrapper">                    <img src="/icons/technology.svg" alt="" className="features-card-icon" />
                        <h2 className="features-card-title">High-Performance Technology</h2>
                        <p className="features-card-paragraph">Cutting-edge sensors, mechanical switches, and rapid response rates ensure seamless and lag-free gaming.</p>
                        <button className="features-card-link">
                            Read More
                            <img src="/icons/featuresArrow.svg" alt="" />
                        </button></div>
                </div>
                <div className="features-card">
                    <div className="features-card-wrapper">
                        <img src="/icons/ergonomic.svg" alt="" className="features-card-icon" />
                        <h2 className="features-card-title">Ergonomic Design</h2>
                        <p className="features-card-paragraph">Play longer without fatigue with our comfortable, hand-friendly designs crafted for extended
                            gaming sessions.</p>
                        <button className="features-card-link">
                            Read More
                            <img src="/icons/featuresArrow.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="features-card">
                    <div className="features-card-wrapper">
                        <img src="/icons/competitive.svg" alt="" className="features-card-icon" />
                        <h2 className="features-card-title">Durable & Reliable Build</h2>
                        <p className="features-card-paragraph">Built with premium materials, our gaming accessories withstand even the most intense gaming marathons.</p>
                        <button className="features-card-link">
                            Read More
                            <img src="/icons/featuresArrow.svg" alt="" />
                        </button> </div>

                </div>
                <div className="features-card">
                    <div className="features-card-wrapper">
                        <img src="/icons/ultra.svg" alt="" className="features-card-icon" />
                        <h2 className="features-card-title">Ultra-Fast Connectivity</h2>
                        <p className="features-card-paragraph">Enjoy instant response times with wired and wireless options, ensuring no input lag.</p>
                        <button className="features-card-link">
                            Read More
                            <img src="/icons/featuresArrow.svg" alt="" />
                        </button> </div>

                </div>
                <div className="features-card">
                    <div className="features-card-wrapper">                     
                        <img src="/icons/durable.svg" alt="" className="features-card-icon" />
                        <h2 className="features-card-title">Competitive Pricing</h2>
                        <p className="features-card-paragraph">Get top-tier performance without breaking the bank—premium quality at an affordable price.</p>
                        <button className="features-card-link">
                            Read More
                            <img src="/icons/featuresArrow.svg" alt="" />
                        </button></div>
                </div>
                <div className="features-card">
                    <div className="features-card-wrapper">                     
                        <img src="/icons/cross.svg" alt="" className="features-card-icon" />
                        <h2 className="features-card-title">Cross-Platform Compatibility</h2>
                        <p className="features-card-paragraph">Whether you game on PC, Mac, or console, NexaGear accessories work seamlessly across all major platforms.</p>
                        <button className="features-card-link">
                            Read More
                            <img src="/icons/featuresArrow.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}