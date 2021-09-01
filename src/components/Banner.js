import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-black to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630398990/Realstore/Real_Store_5_hpzhff.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630399039/Realstore/Real_Store_6_aufxci.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630398964/Realstore/Real_Store_4_xuqdhy.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630399062/Realstore/Real_Store_7_lrgcd7.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630399070/Realstore/Real_Store_8_hebvkw.png"
                        alt=""
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
