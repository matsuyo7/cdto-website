import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl text-center">Follow us on social media!</h2>
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/cambodiandancetroupeoforegon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={50} color="orange" />
        </a>
        <a
          href="https://www.instagram.com/cdt_oregon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare size={50} color="orange" />
        </a>
      </div>
    </div>
  );
}
