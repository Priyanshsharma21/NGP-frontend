import Footer from "../components/Footer/Footer";
import GirlRunning from "../images/who-we-are/girl-run.png";
import GirlRedBg from "../images/who-we-are/girl-redbg.svg";
import GirlText from "../images/who-we-are/girl-side-text.png";
import GirlWind from "../images/who-we-are/wind.png";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MainButton from "../components/MainButton";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/AboutPage/4.jpg";
import Target from "../images/AboutPage/target.png";
import Mountain from "../images/AboutPage/mountain.png";

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                who we are
              </p>
              {/* <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21rem] absolute top-[120px] min450:top-[84px] min375:top-[68px]"
              /> */}

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                We Are The Leading System Integrators For Power Infrastructure &
                Backup Solutions.
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[80rem] ">
                NG POWER SOLUTIONS working towards Energy Savings, backup
                solutions and services to all type of industries and Power
                Management Solutions for future Energy Demands, was started in
                2014 with the sole intention of providing a variety of power
                conditioning solutions for a broad spectrum of applications. NG
                Power Solutions will be focusing on providing End to End
                solutions for the power quality improvement using contemporary
                technology. We offer solutions encompassing UPS systems with
                batteries(VRLA, Li-ion & Ni-Cd), Precision Cooling solutions,
                Integrated Data Centre solutions, Battery Monitoring systems,
                DCIM solutions, CSM with remote monitoring, Transformers, Servo
                Stabilizers, Active and Passive Filters, Distribution Panels,
                Surge Protection Devices, Automatic Transfer Switches &
                Inverters. On top of these solutions, we have built up our
                service team with infrastructure and Capabilities for supporting
                Installation and commissioning, Warranty Support, Servicing of
                Boards at our own anti-static lab, Professional services and
                Managed services. In professional services, we offer Power
                Quality & Analysis, Thermography Inspection, Harmonic Study &
                Analysis, Electrical Safety & SLD preparation, Earth Pit
                testing, Design & supply of all type of panels, APFC-panel
                design & supply, Socket & Loop impedance testing, Post
                Implementation testing & commissioning,
                
              </p>
              {/* <MainButton
                color={`!text-white`}
                bg={`bg-[#ff0336]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              /> */}
            </div>
            {/*  */}
            <div className="relative w-[80%] -top-[90px] left-[40px] md1000:hidden">
              {/* <img
                src={GirlRunning}
                alt="girl_running"
                className="girl-running"
              />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <img src={GirlText} alt="bg-text" className="girl-text" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind" /> */}
            </div>
          </div>
          {/*  */}
          
           
               
            
            
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                {/* <img src={Mountain} alt="target_img" className="w-[9rem]" /> */}
                <h2 className="text-[36px] font-bold mt-3">SERVICES RENDERD</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                A COMPLETE SOLUTION FOR UPS AND BATTERIES We provide the following primary services:
• 24/7-365 days service support 
• System Design 
• Installation – UPS Systems, batteries, and related electrical equipment 
• UPS Maintenance and Battery Preventative Maintenance – quarterly to annual inspection, cleaning, and formal reporting
 • Full UPS Maintenance – repair and parts replacement for routine problems. Ideal for controlling maintenance budgets. 
• Troubleshooting and Repair 
• Equipment types serviced
                </p>
              </div>
            </div>
        
        
        <Footer />
      </section>
    </>
  );
}

export default About;
