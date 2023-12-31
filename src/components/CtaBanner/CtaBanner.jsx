import MainButton from "../MainButton";

function CtaBanner() {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[7rem] text-black">
          <h2 className="text-[36px] font-bold text-white">For Our Primary services</h2>
          <h3 className="text-[28px] font-bold mb-20 text-white">
            <span className="text-white">Call: </span>
            +(91) 9980456064 || +(91) 9880924100 || +(91) 9900936663
          </h3>
          <MainButton
            color={`text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            arrowColor={`text-white`}
            cN="pricing-cta cta-banner-btn"
            goTo="/contact"
          />
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
