export default function Footer() {
  return (
    <footer className="bg-white px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Address */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
            <p className="text-sm text-gray-500">
              400 University Drive Suite 200
              <br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-base font-medium text-gray-500 mb-4">Links</h3>
            <ul className="space-y-2">
              <li className="text-black font-medium hover:text-gray-600 cursor-pointer">Home</li>
              <li className="text-black font-medium hover:text-gray-600 cursor-pointer">Shop</li>
              <li className="text-black font-medium hover:text-gray-600 cursor-pointer">About</li>
              <li className="text-black font-medium hover:text-gray-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-base font-medium text-gray-500 mb-4">Help</h3>
            <ul className="space-y-2">
              <li className="text-black font-medium hover:text-gray-600 cursor-pointer">Payment Options</li>
              <li className="text-black font-medium hover:text-gray-600 cursor-pointer">Return</li>
              <li className="text-black font-medium hover:text-gray-600 cursor-pointer">Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-medium text-gray-500 mb-4">Newsletter</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <input
                type="email"
                className="w-full sm:w-auto flex-grow px-4 py-2 text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter Your Email Address"
              />
              <button className="mt-4 sm:mt-0 sm:ml-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
