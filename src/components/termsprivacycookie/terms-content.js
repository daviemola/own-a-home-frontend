import Image from "next/image";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import * as FaIcons from "react-icons/fa";
import Link from "next/link";

function TermsContent(props) {
  const { data, content } = props;
  console.log(content);
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <Fragment>
            <div className="post-area pt-155">
              <div className="container">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="md:text-4xl text-2xl font-semibold mb-4 text-gray-900">
                    {data.title}
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    For custom support requests please send a mail to
                    info@ownaproperty.com
                  </p>
                </div>
                <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
                  <div className="lg:col-span-12">
                    <h2 className="font-bold text-[24px] leading-[36px] max-w-[710px] mb-[20px]">
                      CUSTOM NEEDS/SUPPORT
                    </h2>
                    <p className="text-gray-500 leading-[27px] mb-[15px]">
                      Categories of special needs/support includes but is not
                      limited to;
                    </p>
                    <ul className="space-y-1 text-gray-500 list-disc list-inside mb-[20px]">
                      <li>Customized Booth Design</li>
                      <li>Branding and Printing of materials</li>
                      <li>
                        Chairs and Tables different from what is provided by the
                        organizers.
                      </li>
                      <li>LED Screens, 3D Designs etc.</li>
                    </ul>

                    <h2 className="font-bold text-[24px] leading-[36px] max-w-[710px] mb-[15px]">
                      CANCELLATION POLICY
                    </h2>
                    <p className="text-gray-500 leading-[27px] mb-[20px]">
                      Upon Cancellation requests, a 40% cancellation fee will be
                      deducted from the total amount paid.
                    </p>

                    <h2 className="font-bold text-[24px] leading-[36px] max-w-[710px] mb-[15px]">
                      INSTALLMENT POLICY
                    </h2>
                    <ul className="space-y-1 text-gray-500 list-disc list-inside">
                      <li>Customized Booth Design</li>
                      <li>Branding and Printing of materials</li>
                      <li>
                        Chairs and Tables different from what is provided by the
                        organizers.
                      </li>
                      <li>LED Screens, 3D Designs etc.</li>
                    </ul>

                    <div className="single-item pt-[50px]">
                      <div className="content pt-[45px]">
                        <h2 className="font-bold text-[24px] leading-[38px] mb-[15px]">
                          DEFAULT ON INSTALLMENT
                        </h2>
                        <p className="text-gray-500 leading-[27px]">
                          The terms attached to cancellation policy also apply
                          here; A 40% charge will be deducted from the amount
                          paid while the balance will be paid to you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
      }
    },
  };

  return (
    <article>
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}

export default TermsContent;
