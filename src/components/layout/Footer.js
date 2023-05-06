import PaymentMethods from "../ui/PaymentMethods";
import '../../stylesheets/layout/footer.css';
import Socials from "../ui/Socials";
import logo from '../../assets/chicks-logo-large.svg';
import FooterDropdown from "../ui/FooterDropdown";
import {AiFillStar} from '../../assets/icons';

export default function Footer() {

  const chicksGoldSections = ['Games','About Us','Blog','Sidemap'];
  const supportSections = ['Contact Us','FAQ'];
  const legalSections = ['Privacy Policy','Terms of Service','Copyright Policy'];

  return (
  <footer className='footer' >
		<PaymentMethods />
		<Socials />
		<div className="footer_brandInfo">
			<div className="footer_brandInfo-email">
				<img src={logo} alt="logo" />
				<h4>support@chicksgold.com</h4>
			</div>
      <FooterDropdown title={'Chicks Gold'} sections={chicksGoldSections} />
      <FooterDropdown title={'Support'} sections={supportSections} />
      <FooterDropdown title={'Legal'} sections={legalSections} />
      <div className='footer_brandInfo-review'>
        <h4>Trustpilot Reviews</h4>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
		</div>
    <h5>© 2017 - 2023 Chicksgold.com. All Rights Reserved</h5>
  </footer>
  )
}