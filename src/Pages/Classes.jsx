import { useState } from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import Footer from "../components/Footer/Footer";

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
           Services
          </h1>
        </div>

        {/* boxes 1*/}
        <div
          className={`container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left ${
            load ? "grid" : "hidden"
          }`}
        >
          <ClassesBox
            bgImg="cycling-bg"
            
            title="DATA CENTER SOLUTION & SERVICE "
            trainer="Securing and Ensuring Access to Your Vital Business Data at All Times"
            date=""
          />
          <ClassesBox
            bgImg="mma-bg"
            title="POWER BACKUP SOLUTION & SERVICE"
            trainer="Enhance Your Business Operations with Dependable Power Backup Solutions"
            date=""
          />
          <ClassesBox
            bgImg="karate-bg"
            title="COOLING SOLUTION & SERVICE"
            trainer="Efficient Cooling Systems and Professional Services for Achieving Your Business Objectives"
            date=""
          />
          <ClassesBox
            bgImg="powerlift-bg"
            title="POWER QUALITY ANALYSIS SOLUTION"
            trainer="Optimize Performance and Efficiency with our Comprehensive Power Quality Analysis Solution"
            date=""
          />
          <ClassesBox
            bgImg="workout-bg"
            title="POWER SOLUTION"
            trainer="Achieve optimal energy efficiency with Power Solution's advanced power management systems. Maximize savings while minimizing environmental impact."
            date=""
          />
          <ClassesBox
            bgImg="mma-bg"
            title="SERVICE SOLUTION"
            trainer="Solutions for Equipment Rental, UPS Spare Parts, Repairs, Maintenance Services, and Annual Maintenance Contracts (AMC) across Diverse Industries and Applications."
            date=""
          />
        
        </div>

        {/* boxes 2*/}
        {/* <div
          className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
            load ? "hidden" : "grid"
          }`}
        >
          <ClassesBox
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesBox
            bgImg="meditaion-bg"
            title="Meditation"
            trainer="Maria Mich"
            date="Fri: 1:00 pm"
          />
          <ClassesBox
            bgImg="mma-bg"
            title="Boxing"
            trainer="John Flex"
            date="Tue: 4:00 pm"
          />
          <ClassesBox
            bgImg="karate-bg"
            title="Karate"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesBox
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesBox
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wen: 9:00 pm"
          />
          <ClassesBox
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Thu: 12:00 am"
          />
          <ClassesBox
            bgImg="bodybuilding-bg"
            title="Body Building"
            trainer="Jake Paul"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="box-bg"
            title="Mma"
            trainer="Becky Lynch"
            date="Fri: 6:00 am"
          />
          <ClassesBox
            bgImg="yoga-bg"
            title="Yoga"
            trainer="Marta Mich"
            date="Wen: 8:00 am"
          />
          <ClassesBox
            bgImg="fitness-bg"
            title="Fitness"
            trainer="Mia Malkova"
            date="Sun: 5:00 pm"
          />
        </div> */}

      

        <Footer />
      </section>
    </>
  );
}

export default Classes;
