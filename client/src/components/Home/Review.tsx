import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { review } from "../../data/review";
import "swiper/css";
import "swiper/css/navigation";

import SButton from "../SButton";

export default function Review() {
  return (
    <section
      className="w-full bg-white px-5 py-16 inset-shadow-sm inset-shadow-gray-500"
      id="clients-review"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-green-700 font-semibold text-lg">
          🌿 Clients Review
        </h2>

        <h2 className="text-4xl font-bold mt-2 mb-10">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {review.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#fdf5ee] rounded-2xl border border-black my-3 mx-1 p-5 h-[200px] flex flex-col justify-between hover:-translate-y-2 transition duration-300">
                <div>
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>

                      <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-5 leading-7">
                    "{review.review}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-[#fdf5ee] rounded-2xl shadow-lg border flex flex-col lg:flex-row items-center justify-evenly p-8">
          <div>
            <h2 className="text-3xl font-bold text-green-900">
              Ready for Homemade Food?
            </h2>

            <p className="mt-2 text-gray-600">
              Order your tiffin today and enjoy delicious homemade meals every
              day.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <SButton link="/contact" value="Order Now" />
          </div>
        </div>
      </div>
    </section>
  );
}
