import "../../stylesheets/layout/footer.css";
import Socials from "../ui/Socials";
import logo from "../../assets/chicks-logo-large.svg";
import FooterDropdown from "../ui/FooterDropdown";
import { AiFillStar } from "../../assets/icons";

export default function Footer() {
    const chicksGoldSections = ["About Us", "Blog", "Bug Bounty"];
    const supportSections = ["Contact Us", "FAQ", "Sitemap"];
    const legalSections = [
        "Privacy Policy",
        "Terms of Service",
        "Copyright Policy",
    ];

    return (
        <footer className="footer">
            <div className="footer_brandInfo">
                <div className="footer_brandInfo-email">
                    <img src={logo} alt="logo" />
                    <h4>support@chicksgold.com</h4>
                </div>
                <FooterDropdown
                    title={"Chicks Gold"}
                    sections={chicksGoldSections}
                />
                <FooterDropdown title={"Support"} sections={supportSections} />
                <FooterDropdown title={"Legal"} sections={legalSections} />
                <div className="footer_brandInfo-review">
                    <h4>Trustpilot Reviews</h4>
                    <div className="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                </div>
                <Socials />
            </div>
            <h5>Copyright © 2017, ChicksGold.com. All Rights Reserved.</h5>
        </footer>
    );
}
