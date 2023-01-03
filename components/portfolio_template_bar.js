import PortfolioOption from "./independent/portfolio_option";
import templateIcon from "../assets/img/template.png";

function PortfolioTemplateBar() {
    return (
        <>
            {/* <!-- Choose Portfolio Template --> */}
            <p class="text-brand text-lg md:text-xl font-medium mt-10 mb-4">Choose Portfolio Template</p>
            {/* <!-- Templates list --> */}
            <div class="flex flex-row flex-nowrap gap-x-4 md:gap-x-8 overflow-x-auto">
                <PortfolioOption label="Template 1" icon={templateIcon} />
                <PortfolioOption label="Template 2" icon={templateIcon} active />
            </div>
        </>);
}

export default PortfolioTemplateBar;