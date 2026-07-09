export default function () {
  return (
    <section>
      <div className="w-full py-16 bg-orange-100 overflow-hidden backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 items-center gap-5">
            <div>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Fresh Homemade Food,
                <br />
                <span className="text-green-600">Delivered with Care</span>
              </h2>
              <div className="mt-6 text-lg text-green-600 leading-8 max-w-xl bg-white rounded-3xl shadow-xl p-8 font-normal">
                <p>
                  At Jagruti Tiffin Service, we believe that good food brings
                  comfort, happiness, and good health. Our mission is to provide
                  fresh, hygienic, and homemade meals that taste just like the
                  food prepared at home.
                </p>
                <p>
                  Whether you're a student, working professional, senior
                  citizen, or someone living away from family, we ensure you
                  enjoy a wholesome meal every day without worrying about
                  cooking.
                </p>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 bg-white overflow-hidden backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 items-center gap-5">
            <div className="hidden lg:block"></div>
            <div>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-green-600 text-center">
                Our Story
              </h2>
              <div className="mt-6 text-lg text-green-600 leading-8 max-w-xl  bg-orange-100 rounded-3xl shadow-xl p-8 font-normal">
                <p>
                  Jagruti Tiffin Service was started with a simple goal—to serve
                  healthy and delicious homemade food at an affordable price. We
                  understand how difficult it can be to find nutritious
                  home-style meals in today's busy lifestyle.
                </p>
                <p>
                  Every meal is prepared with fresh ingredients, balanced
                  spices, and lots of care, making every tiffin feel like home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 bg-orange-100 overflow-hidden  backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Fresh Homemade Food,
            <br />
            <span className="text-green-600">Every tiffin includes:</span>
          </h2>
          <ul className="mt-6 text-lg text-green-600 leading-8 max-w-xl bg-white rounded-3xl shadow-xl p-8 font-normal flex flex-wrap gap-10">
            <li className="text-2xl text-green-600">🍛 Fresh Dal</li>
            <li className="text-2xl text-green-600">🍚 Steamed Rice</li>
            <li className="text-2xl text-green-600">🥘 Seasonal Sabji</li>
            <li className="text-2xl text-green-600">🫓 Soft Roti</li>
          </ul>
          <p className="text-lg text-green-600 leading-8 max-w-xl p-8 font-normal">
            Our menu changes regularly to keep your meals fresh, tasty, and
            nutritious.
          </p>
        </div>
      </div>
    </section>
  );
}
