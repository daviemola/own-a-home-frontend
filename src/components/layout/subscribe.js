import React from "react";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="max-w-7xl mx-auto text-white">
      <div
        style={{ boxShadow: "0px 0px 40px 10px rgba(0, 0, 0, 0.3)" }}
        className="mx-auto flex max-w-content flex-col items-center rounded-[20px] bg-[url('/panels/panel_op.jpeg')] bg-cover bg-center p-[32px] md:py-[158px]"
      >
        <h2 className="text-3xl leading-[30px] font-bold md:heading-lg md:mt-4">
          Pre register to stay up to date
        </h2>
        <div className="mt-6 w-full max-w-[585px]">
          <p className="max-w-[616px] text-base leading-6 text-light">
            Sign up to our newsletter to receive development updates, token and
            NFT drops, and exclusive promotions.
          </p>
          <form>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
              <div className="relative">
                <div className="relative">
                  <input
                    className="input block w-full"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
              <button className="boxed-btn text-white text-[18px] leading-[30px]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
