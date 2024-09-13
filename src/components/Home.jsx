import React from "react";
import './Home.css';

class Home extends React.Component{


    render() {
        return <div>
            <article>
                <div className="container">
                    <div className="container-inner">
                        <div className = "image">
                        <img src={require("../assets/images/melol.jpg")} alt="Me"/>
                        </div>
                        <h3 className="Welcome">Hi, Hello, and welcome to my photography
                            portfolio!</h3>
                        <p className="About">
                            Here you will find some of my favorite images, located on the Portfolio
                            page.
                            On the Albums page (To be completed!) You will find albums of images
                            from my
                            most recent adventures. If you are interested, you can contact me using
                            the
                            Contact Me page. Happy Scrolling!
                        </p>
                    </div>
                </div>
            </article>
        </div>

    }
}

export default Home;