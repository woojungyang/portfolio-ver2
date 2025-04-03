import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  centerVariants,
  leftSideVariants,
  rightSideVariants,
} from "src/constants";
import { SectionTitle } from "./common";

export default function Contact() {
  const initialMessageStatus = { loading: false, message: "" };
  const [messageStatus, setMessageStatus] = useState(initialMessageStatus);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageStatus({ ...messageStatus, loading: true });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        { publicKey: process.env.REACT_APP_PUBLIC_KEY },
      )
      .then(
        () => {
          setMessageStatus({
            ...messageStatus,
            message: "메일이 전송되었습니다.",
          });
          setTimeout(() => {
            setMessageStatus(initialMessageStatus);
            formRef.current.reset();
          }, 3000);
        },
        () => {
          setMessageStatus({
            ...messageStatus,
            message: "메일 전송에 실패하였습니다.\n잠시후에 다시 시도해주세요.",
          });
          setTimeout(() => {
            setMessageStatus(initialMessageStatus);
            formRef.current.reset();
          }, 3000);
        },
      );
  };
  return (
    <>
      {messageStatus.loading && (
        <motion.div
          variants={centerVariants}
          initial="visible"
          // animate={messageStatus.message ? "visible" : "hidden"}
          className="absolute z-10 w-full h-full bg-gray-90 bg-opacity-10"
        ></motion.div>
      )}
      <section className="pb-sec-md pt-sec-lg h-[calc(100vh-205px)] ">
        <div className="container relative flex flex-col items-center gap-y-9 ">
          <SectionTitle title="CONTACT" subtitle="Get In Touch" />
          <motion.span
            variants={centerVariants}
            initial="hidden"
            animate={messageStatus.message ? "visible" : "hidden"}
            className="w-full max-w-[10vw] absolute top-[50%] lef-[50%] z-20 bg-gray-90 bg-opacity-50 p-2 rounded-xl text-white text-center  text-base font-medium grid gap-y-2 col-span-2 whitespace-pre-wrap"
          >
            {messageStatus.message}
          </motion.span>

          <div className="grid w-full grid-cols-1 gap-x-12 md:grid-cols-12">
            {/* form */}
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              variants={leftSideVariants}
              initial="hidden"
              animate="visible"
              className="col-span-1 grid grid-cols-1 gap-4 md:col-span-7 md:grid-cols-2"
            >
              {/* name */}
              <div className="grid gap-y-2 col-span-2 md:col-span-1">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="John"
                  required
                />
              </div>
              {/* email */}
              <div className="grid gap-y-2 col-span-2 md:col-span-1 ">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              {/* message */}
              <div className="grid gap-y-2 col-span-2">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  name="textarea"
                  id="message"
                  className="input min-h-28 resize-y p-3"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-fit">
                Send
                <RiSendPlaneFill />
              </button>
            </motion.form>
            {/* info */}
            <motion.aside
              variants={rightSideVariants}
              initial="hidden"
              animate="visible"
              className="col-span-1 hidden flex-col gap-y-6 md:col-span-3 md:flex "
            >
              <div className=" flex flex-col gap-y-3">
                <p className="text-xl font-semibold text-gray-90">
                  For Inquiries
                </p>
                <a
                  href="mailto:woojungyang1113@gmail.com"
                  className="link text-lg text-gray-50"
                >
                  woojungyang1113@gmail.com
                </a>
              </div>
              <div className=" flex flex-col gap-y-3">
                <p className="text-xl font-semibold text-gray-90">Socials</p>
                <a
                  href="https://github.com/woojungyang"
                  className="link text-lg text-gray-50"
                >
                  GitHub
                </a>
              </div>
              <div className=" flex flex-col gap-y-3">
                <p className="text-sm text-normal text-gray-50">
                  문의 및 협업 제안은 언제든지 환영합니다.
                  <br /> 작성된 양식을 통해 메시지를 남겨주시면 빠르게
                  답변드리겠습니다.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
