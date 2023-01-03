import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import AddSocialLinkOption from "./independent/add_social_link_option";
import SocialLinkOption from "./independent/social_link_option";

function SocialLinkBar() {
    return (
        <>
            {/* title */}
            <p class="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Social Links</p>
            {/* <!-- Social Links List --> */}
            <div class="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <AddSocialLinkOption />
                <SocialLinkOption icon={faLink} label="Website" color="#CC6B2C" />
                <SocialLinkOption icon={faFacebookF} label="Facebook" color="#1771E6" />
                <SocialLinkOption icon={faGithub} label="Github" color="#22272C" />
            </div>
        </>
    );
}

export default SocialLinkBar;