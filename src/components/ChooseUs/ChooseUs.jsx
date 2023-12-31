import VideoImg from "../../images/choose-us/main-img.png";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainingIcon from "../../images/choose-us/training.png";
import EquipmentsIcon from "../../images/choose-us/bench-press.png";
import BagIcon from "../../images/choose-us/gym-bag.png";
import BottleIcon from "../../images/choose-us/bottle-of-water.png";
import PlayImg from "../../images/choose-us/play.png";
import MainButton from "../MainButton";
// import 'bootstrap/dist/css/bootstrap.min.css';

function ChooseUs() {
  return (
    <>
      <section className="choose-section py-[12rem] ">
        <div className="container page-padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem]">
          <div className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-14">
              why choose us
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[22rem] absolute -top-[6px] -left-14 md1000:hidden "
            />
            <h2 className=" text-[3.6rem] text-white font-bold leading-[1.2] max-w-3xl md1000:max-w-[80%]">
              We are the leading system Integrators for Power infrastructure &
              backup solutions.
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl md1000:max-w-[80%]">
              NG Power Solutions will be focusing on providing End to End
              solutions for the power quality improvement using contemporary
              technology. We offer solutions encompassing UPS systems with
              batteries(VRLA, Li-ion & Ni-Cd), Precision Cooling solutions,
              Integrated Data Centre solutions, Battery Monitoring systems, DCIM
              solutions, CSM with remote monitoring, Transformers, Servo
              Stabilizers, Active and Passive Filters, Distribution Panels,
              Surge Protection Devices, Automatic Transfer Switches & Inverters.
              On top of these solutions, we have built up our service team with
              infrastructure and Capabilities for supporting Installation and
              commissioning, Warranty Support, Servicing of Boards at our own
              anti-static lab, Professional services and Managed services. In
              professional services, we offer Power Quality & Analysis,
              Thermography Inspection, Harmonic Study & Analysis, Electrical
              Safety & SLD preparation, Earth Pit testing, Design & supply of
              all type of panels, APFC-panel design & supply, Socket & Loop
              impedance testing, Post Implementation testing & commissioning,
              Electrical cabling for new facilities, Panel servicing & Amc’s,
              Electrical design and consulting and energy management solutions
              In managed services we are offering Annual Maintenance Contract
              for Multi Brand UPS systems, DG sets, Air conditioning units. We
              offer UPS systems on Rental services and Facility Maintenance for
              electrical services. We have well trained engineers spread across
              PAN INDIA, supporting various Customers. In the last 4years, we
              had grown consistently as a company, achieving a turnover of Rs.
              4-5 Crores in the current financial year with strength of over 15
              people. We have today local engineers (Pre-Sales, Sales and
              Support services) in PAN INDIA. With this background, we are sure
              we can provide solutions and services to all type of Industries,
              Corporates & Large and Medium enterprise clients.
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 min450:flex min450:flex-col">
              <div className="flex items-center gap-6">
                {/* <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={TrainingIcon}
                  alt="icon"
                /> */}
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                 
24/7-365 days service support
                </p>
              </div>

              <div className="flex items-center gap-6">
              
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                System Design
                </p>
              </div>

              <div className="flex items-center gap-6">
                {/* <img
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                  src={BagIcon}
                  alt="icon"
                /> */}
                <p className="text-white font-bold text-[18px] max-w-[150px]">
                Installation  UPS Systems, batteries, and related electrical equipment
                </p>
              </div>

            
              <MainButton
                color={`!text-white`}
                bg={`bg-[#595959]`}
                text="our classes"
                arrowColor={`!text-white`}
                cN="choose-cta"
                hover={`hover:bg-[#ff0336]`}
                goTo="/classes"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
