export default function Footer({ userLoggedIn }) {
  return (
    <div className="Footer fixed bottom-0 left-0 right-0 bg-gray-300 vh10 text-center flex justify-items-end">
      <div className="flex-1 text-left"></div>
      <div className="flex-1 text-center  hover:bg-green-200">
        <button></button>
        <a href="#app-top">BACK TO TOP</a>
      </div>
      <div className="flex-1 text-right">{userLoggedIn}</div>
    </div>
  );
}
