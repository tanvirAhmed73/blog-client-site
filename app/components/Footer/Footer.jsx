import { Facebook } from "lucide";
import { FacebookIcon, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-base-content p-10">
        <nav>
          <h6 className="text-xl font-bold text-black">Follow on </h6>

          <div className="flex gap-5 justify-center items-center">
            <a className="">Follow on <span className="font-bold">Twitter</span></a>
            <span><Twitter className="iconColor"/></span>
          </div>

          <div className="flex gap-5 justify-center items-center">
            <a className="link link-hover">Follow on <span className="font-bold">Facebook</span></a>
            <span><FacebookIcon className="iconColor"/></span>
          </div>

            <div className="flex gap-5 justify-center items-center">
                <a className="link link-hover">Follow on <span className="font-bold">Instagram </span></a>
                <span><Instagram className="iconColor"/></span>
            </div>
            
            <a className="link link-hover">Follow on <span className="font-bold">Tiktok </span></a>
                
            
        </nav>
        <nav>
          <h6 className="text-xl font-bold text-black">Home</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <form>
          <h6 className="text-xl font-bold text-black">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn-style btn-style-color px-5">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
