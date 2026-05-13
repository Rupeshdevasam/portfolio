import { Suspense, useCallback, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { Canvas } from '@react-three/fiber';
import Hammer from '../components/Hammer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import InView from '../components/InView.jsx';
import { PerspectiveCamera } from '@react-three/drei';
import { education } from '../constants/index.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isDay, setIsDay] = useState(false);

  function isDaytime() {
    const now = new Date();
    const hours = now.getHours();

    // Approximation: Adjust these hours based on sunrise and sunset data for better accuracy
    const dayStartHour = 6;
    const dayEndHour = 18;

    return hours >= dayStartHour && hours < dayEndHour;
  }

  useEffect(() => {
    if (isDaytime()) {
      setIsDay(true);
    }
  }, []);

  // Callback ref so pointOfView fires when the Globe actually mounts (which is
  // deferred by InView until the section scrolls into view). A regular ref +
  // useEffect would run before the Globe exists and leave the camera at its
  // default position over Africa.
  const handleGlobeRef = useCallback((node) => {
    if (!node) return;
    node.pointOfView({
      lat: 39.2818355,
      lng: -76.709509,
      altitude: 2,
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('rupeshdevasam@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Rupesh Devasam</p>
              <p className="grid-subtext">
                AI Full-Stack Engineer (M.S. Computer Science, UMBC, May 2026) with 5+ years building production GenAI
                and full-stack systems for enterprise and Fortune 500 clients. Currently shipping FDA regulatory
                automation (CHAAP) and budget intelligence (BIS) at Centennial Technologies on Azure AI Agents, Prompt
                Flow, RAG, FastAPI, and React / Next.js. Strong in Python, TypeScript, distributed REST APIs, and
                cloud-native architecture on Azure and AWS.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/*<img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />*/}
            <InView>
              <Canvas className={"w-full h-full"}>
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 3, 20]} />

                  <Hammer position={[0, 3, 0]} scale={19} rotation={[0.1, 0, 0]} />
                  <ambientLight intensity={12} />
                  <directionalLight position={[10, 100, 10]} intensity={0.5} />
                  {/*<ambientLight />*/}
                  <spotLight intensity={100} position={[2,10, 10]} />
                </Suspense>
              </Canvas>
            </InView>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Python, TypeScript, FastAPI, React, Next.js, and Azure AI Agents day to day. Full breakdown in the
                Skills section below.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <InView className="w-[326px] h-[326px]">
                <Globe
                  ref={handleGlobeRef}
                  height={326}
                  width={326}
                  autoRotate={true}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGlobe
                  showGraticules
                  globeImageUrl={`//unpkg.com/three-globe/example/img/earth-${isDay ? 'day' : 'night'}.jpg`}
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[
                    { lat: 39.2818355, lng: -76.709509, label: `I'm here`, size: 2, color: 'yellow', altitude: 0.1 },
                  ]}
                  labelLat={(d) => d.lat}
                  labelLng={(d) => d.lng}
                  labelText={(d) => d.label}
                  labelSize={(d) => d.size}
                  labelColor={(d) => d.color}
                  labelAltitude={(d) => d.altitude}
                />
              </InView>
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I&apos;m based in Baltimore, Maryland, USA and open to remote work worldwide.
              </p>
              <a href="#contact" className={"cursor-pointer"}><Button name="Contact Me" isBeam containerClass="w-full mt-10" /> </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Education</p>
              <ul className="mt-3 space-y-3">
                {education.map((item) => (
                  <li key={item.id} className="grid-subtext">
                    <p className="text-white font-medium">{item.degree}</p>
                    <p>
                      {item.school}, {item.location}
                    </p>
                    <p className="text-white-500 text-sm">{item.duration}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  rupeshdevasam@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
