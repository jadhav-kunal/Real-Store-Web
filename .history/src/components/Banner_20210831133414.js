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
                        src="https://res.cloudinary.com/realstore/image/upload/v1630396931/Realstore/Real_Store_rtfqci.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630396918/Realstore/Real_Store_1_nj96zy.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630396888/Realstore/Real_Store_3_qbwna0.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/realstore/image/upload/v1630396902/Realstore/Real_Store_2_qzsgza.png"
                        alt=""
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
