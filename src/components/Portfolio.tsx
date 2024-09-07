import { useState } from "react";
import './Portfolio.css';
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";



export default function Portfolio() {
    const [index, setIndex] = useState(-1);
    const photos = [
        {
            src: "/images/portfolio_imgs/5-7.jpg",
            alt: "image 1",
            width: 800,
            height: 533,

        },
        {
            src: "/images/portfolio_imgs/039.JPG",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/059ed.jpg",
            alt: "image 1",
            height: 1000,
            width: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0022done.jpg",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0045done.jpg",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0077.JPG",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0094.JPG",
            alt: "image 1",
            height: 1000,
            width: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0187.jpg",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0298.JPG",
            alt: "image 1",
            height: 1000,
            width: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0570.JPG",
            alt: "image 1",
            height: 1000,
            width: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0638.JPG",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_0883.JPG",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_1132.JPG",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_2980.jpg",
            alt: "image 1",
            width: 1000,
            height: 573,

        },
        {
            src: "/images/portfolio_imgs/IMG_5053.JPG",
            alt: "image 1",
            width: 4272,
            height: 2848,

        },
        {
            src: "/images/portfolio_imgs/IMG_5594.JPG",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_6896.jpg",
            alt: "image 1",
            width: 1000,
            height: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_8776.jpg",
            alt: "image 1",
            height: 1000,
            width: 667,

        },
        {
            src: "/images/portfolio_imgs/IMG_9831.jpg",
            alt: "image 1",
            width: 1000,
            height: 673,

        }
    ]

    return (
                <div className="p-container">
                    <div className="p-container-inner">
                        <>
                            <ColumnsPhotoAlbum photos={photos} columns={(containerWidth) => {
                                if (containerWidth < 400) return 2;
                                if (containerWidth < 800) return 3;
                                if (containerWidth < 1000) return 4
                                return 5;
                            }} onClick={({index}) => setIndex(index)}/>

                            <Lightbox
                                slides={photos}
                                open={index >= 0}
                                index={index}
                                close={() => setIndex(-1)}
                                // enable optional lightbox plugins
                                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                            />
                        </>
                    </div>
                </div>
    )
}
