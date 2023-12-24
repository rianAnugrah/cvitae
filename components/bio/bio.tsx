import Image from "next/image";
import React from "react";
import NextJsLogo from "components/img/nextJs";
import LogoReact from "components/img/logo-react";
import LogoJS from "components/img/logo-js";
import LogoTailwind from "components/img/logo-tailwind";
import LogoHTML from "components/img/logo-html";
import LogoCSS from "components/img/logo-css";
import LogoNode from "components/img/logo-node";
import LogoMongo from "components/img/logo-mongo";
import LogoPhotoshop from "components/img/logo-photoshop";
import LogoNetLify from "components/img/logo-netlify";
import LogoFigma from "components/img/logo-figma";
import LogoVercel from "components/img/logo-vercel";
import LogoGithub from "components/img/logo-github";
import LogoMySQL from "components/img/logo-mqsql";
import LogoFirebase from "components/img/logo-firebase";
import LogoSupabase from "components/img/logo-supabase";
import SosmedYoutube from "components/img/sosmed-youtube";
import SosmedGithub from "components/img/sosmed-github";
import SosmedWA from "components/img/sosmed-wa";
import SosmedInstagram from "components/img/sosmed-istagram";
import SosmedLinkedin from "components/img/sosmed-linkedin";
import SosmedOutlook from "components/img/sosmed-outlook";
export default function Bio() {
  return (
    <div className="w-full flex flex-col gap-4 pb-10">
      <img
        src="https://scontent.fbdo9-1.fna.fbcdn.net/v/t1.6435-9/50968446_10213875166458697_5109438522914242560_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeF8J5ocFVZYbk4ZDV6hM5lTedZT-sFOeZF51lP6wU55kd37f6WLzKgHIuG5Sp1Iup8&_nc_ohc=vTuluPil9_kAX-S0zEv&_nc_ht=scontent.fbdo9-1.fna&oh=00_AfDUV27wPsf_frDJaXRrd_hSJTg2-vm-jretHRRpeETq_Q&oe=65AE70A5"
        className="w-full h-[200px] object-cover"
      />

      <div className="flex flex-col py-4 px-6 gap-2 text-gray-400">
        <p className="text-3xl text-orange-500 ">Rian Anugrah</p>
        <p className="text-sm">
          6+ years expereienced web developer. Graduated from Manajemen
          Informatika BSI Bogor. Love to learn new things. Moslem. Born in
          Sukabumi September '93
        </p>
        <div className="flex gap-2 w-full">
          <SosmedIcon>
            <SosmedWA />
          </SosmedIcon>
          <SosmedIcon>
            <SosmedInstagram />
          </SosmedIcon>
          <SosmedIcon>
            <SosmedYoutube />
          </SosmedIcon>
          <SosmedIcon>
            <SosmedLinkedin />
          </SosmedIcon>
          <SosmedIcon>
            <SosmedGithub />
          </SosmedIcon>
          <SosmedIcon>
            <SosmedOutlook />
          </SosmedIcon>
        </div>
        <p className="font-bold mt-4">Frontend</p>
        <div className="flex flex-wrap gap-1">
          <Pile icon={<NextJsLogo />}>NextJS</Pile>
          <Pile icon={<LogoReact />}>ReactJS</Pile>
          <Pile icon={<LogoTailwind />}>Tailwind</Pile>
          <Pile icon={<LogoJS />}>Javascript</Pile>
          <Pile icon={<LogoHTML />}>HTML</Pile>
          <Pile icon={<LogoCSS />}>CSS</Pile>
        </div>
        <p className="font-bold mt-4">Backend</p>
        <div className="flex flex-wrap gap-1">
          <Pile icon={<LogoNode />}>ExpressJS</Pile>
          <Pile icon={<LogoMongo />}>MongoDB</Pile>
          <Pile icon={<LogoMySQL />}>MySQL</Pile>
          <Pile icon={<LogoSupabase />}>Supabase</Pile>
          <Pile icon={<LogoFirebase />}> Firebase</Pile>
        </div>
        <p className="font-bold mt-4">Extra</p>
        <div className="flex flex-wrap gap-1">
          <Pile icon={<LogoGithub />}>Github</Pile>
          <Pile icon={<LogoFigma />}>Figma</Pile>
          <Pile icon={<LogoPhotoshop />}>Photoshop</Pile>
          <Pile icon={<LogoVercel />}>Vercel</Pile>
          <Pile icon={<LogoNetLify />}>Netlify</Pile>
        </div>
      </div>
    </div>
  );
}

const Pile = ({ children, icon }) => {
  return (
    <div className="flex gap-1 items-center rounded-sm px-2 py-1 text-black bg-gray-200 text-xs">
      <div className="w-5 h-5  object-fill flex items-center justify-center">
        {icon}
      </div>{" "}
      {children}
    </div>
  );
};

const SosmedIcon = ({ children }) => {
  return (
    <div className="flex transition-all group duration-200 ease-out hover:px-3 items-center justify-center border border-gray-700 rounded-md cursor-pointer hover:bg-white p-2">
      <div className="group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300 ease-in-out">{children}</div>
    </div>
  );
};
