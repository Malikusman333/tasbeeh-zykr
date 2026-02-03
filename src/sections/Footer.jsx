import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
 const {t,i18n}= useTranslation("footer");
  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white">
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <img src="/assets/zykr-logo.png" alt="" />
              </div>
              <h2 className="text-2xl font-bold">{t('zikr')}</h2>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
         {t("subHeading")}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Link to="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-green-700">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t("home")}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors">{t("services")}</Link></li>
              <li><Link to="/download" className="text-gray-300 hover:text-white transition-colors">{t("downloadApp")}</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-green-700">{t("legal")}</h3>
            <ul className="space-y-3">
            <li> <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">{t("privacyPolicy")}</Link></li> 
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">{t("termsOfService")}</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">{t("cookiePolicy")}</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">{t("FAQ")}</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">{t("support")}</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact & App Download */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-green-700">{t("gettheApp")}</h3>
            
            {/* App Store Buttons */}
            <div className="space-y-4 mb-8">
              <Link to="#" className="flex items-center bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-900 transition-colors">
                <FaApple className="w-6 h-6 mr-3" />
                <div  className={`${i18n.dir(i18n.language) === "rtl" ? "mr-3" : ""}`}>
                  <div className="text-xs">{t("downloadOnthe")}</div>
                  <div className="font-bold">{t("appStore")}</div>
                </div>
              </Link>
              
              <Link to="#" className="flex items-center bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-900 transition-colors">
               <img src="/assets/playStore.png" className='w-6 h-6 mr-3' alt="" />
                <div className={`${i18n.dir(i18n.language) === "rtl" ? "mr-3" : ""}`}>
                  <div className="text-xs">{t("getItOn")}</div>
                  <div className="font-bold">{t("googlePlay")}</div>
                </div>
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MdEmail className="text-green-400" />
                <span className="text-sm">support@zikrapp.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-green-400" />
                <span className="text-sm">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-green-400" />
                <span className="text-sm">123 Spiritual Street</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-green-950 to-emerald-950 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {t("rightReserved")}
            </div>
            
          
      
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              {t("lastLine")}
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;