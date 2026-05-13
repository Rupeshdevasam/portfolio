import { socialMedia } from '../constants/index.js';
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
      <p className="text-white-500">&copy; 2026 Rupesh Devasam. All rights reserved.</p>
      <div className="flex gap-3 items-center">

        {socialMedia.map(({ src, title, id, href }) => {
          return (
            <a href={href} key={id} target={"_blank"} className="flex justify-center items-center">
              <div className="social-icon">
                <img src={src} alt={title} className="w-1/2 h-1/2" />
              </div>
            </a>
          );
        })}
      </div>

    </footer>
  );
};

export default Footer;
