import HeroImage from "../../assets/hero.png";
import SButton from "../SButton";

export default function Hero() {
  return (
    <section className="relative w-full py-16 bg-orange-100 overflow-hidden">
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center gap-5">
          <div>
            <span className="inline-flex justify-center rounded-full bg-green-100 text-green-700 px-5 py-2 font-medium">
              🌿 100% Pure Veg Gujarati Meals.
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Home Made
              <br />
              <span className="text-green-600">Tiffin Service,</span>
              <br />
              At Your Door.
            </h1>

            <p className="mt-6 text-lg text-green-600 leading-8 max-w-xl bg-white rounded-3xl shadow-xl p-8 font-medium">
              Enjoy fresh, hygienic and homemade meals delivered straight to
              your doorstep. Affordable pricing, healthy ingredients and
              delicious taste every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <SButton link="/products" value="Order Now" />

              <SButton link="/about" value="How it Works" />
            </div>

            <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-600">
                    10K+
                  </h2>
                  <p className="font-medium">Happy Customers</p>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-600">
                    50K+
                  </h2>
                  <p className="font-medium">Tiffins Delivered</p>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-600">
                    100+
                  </h2>
                  <p className="font-medium">Menu Varieties</p>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-600">
                    15+
                  </h2>
                  <p className="font-medium">Cities Served</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
