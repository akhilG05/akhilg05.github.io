"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[996],{6833:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(6540),i=a(797),n=a(1410),o=a(9324);const r={pageTitle:"pageTitle_ku4F",tabContainer:"tabContainer_SlCV",tabList:"tabList_HuID",tab:"tab_nF05",tabSelected:"tabSelected_JoMj",tabPanels:"tabPanels_Z3uK",projectCard:"projectCard_qilu",activePanel:"activePanel_HFXy",inactivePanel:"inactivePanel_S1fs",carouselContainer:"carouselContainer_b6mc",imageWrapper:"imageWrapper_y4UH",carouselImage:"carouselImage_FsXn",carouselButton:"carouselButton__Qc2",prevButton:"prevButton_xkKI",nextButton:"nextButton_X5Ia",imageDots:"imageDots_y59u",dot:"dot_O4wi",activeDot:"activeDot_Ou80",projectContent:"projectContent_cyMr",headerRow:"headerRow_OqP1",period:"period_TPmz",description:"description_tG_i",highlights:"highlights_sjmU",tech:"tech_Irsy",techList:"techList_PR_9",techPill:"techPill_NjSg"};var c=a(4848);const d=[{title:"Multimodal Mobile Robot",period:"2024 - Present",description:"Leading the development of an autonomous robotic system designed for inspection and surveillance in constrained environments. This project integrates bio-inspired design principles with real-time control and navigation, utilizing ROS2, Jetson Nano, and a distributed embedded system to enable multimodal mobility.",highlights:["Simulated and Optimized Robot Mechanisms: Used SolidWorks Motion Analysis to calculate torque and force profiles, optimizing component selection for improved performance.","Developed a Distributed Embedded System: Designed an architecture where local microcontrollers control individual mechanisms, with a Jetson Nano managing system-level control.","Implemented CAN Protocol for Communication: Established efficient real-time communication between microcontrollers and the Jetson Nano using the CAN bus.","Implemented Teleoperation Using ROS2 Over WiFi: Enabled remote control of the robot using ROS2, allowing wireless operation and testing."],tech:"ROS, Jetson Nano, Intel RealSense, SolidWorks, Python, C++",images:[a(3134).A,a(7445).A,a(6466).A,a(8414).A]},{title:"ACPS Lab Platform",period:"2022 - 2024",description:"Designed and developed a lab-scale cyber-physical system platform for education and research. This platform features sensor-actuator nodes with ARM-based microcontrollers, a layered edge-fog-cloud computing architecture, and real-time data acquisition, providing hands-on experience in ACPS.",highlights:["Developed Sensor-Actuator Nodes: Designed and implemented ARM-based microcontroller nodes (STM32, ESP32) for real-time data acquisition and control.","Implemented a Layered Computing Architecture: Integrated edge, fog, and cloud computing to model cyber-physical system interactions.","Enabled Hands-on Learning: Created an interactive platform for embedded systems, communication protocols, and system integration in education.","Presented at the 11th ISSS National Conference: Showcased the platform\u2019s impact on cyber-physical system education and research."],tech:"STM32, ESP32, MQTT, Python, Web Technologies",images:[a(9549).A,a(8267).A,a(6722).A,a(1567).A,a(2738).A]},{title:"Smart City Project",period:"2019",description:"Engineered a scalable IoT-driven innovative city model for autonomous resource management. This project incorporated MQTT-based communication, computer vision for real-time localization, and path-planning algorithms to optimize navigation and infrastructure automation.",highlights:["Implemented MQTT-based Communication: Established Wi-Fi-based MQTT protocol for seamless data exchange between the central server and multiple autonomous bots.","Developed an Image Processing System for Localization: Utilized OpenCV and ArUco markers for real-time tracking and localization of bots within the city grid.","Designed and Integrated Path Planning Algorithms: Implemented Dijkstra\u2019s algorithm for dynamic shortest path computation and navigation.","Established Multi-Protocol Communication: Integrated I2C, Serial, and MySQL-based database handling for sensor data management and bot control."],tech:"Python, Arduino, Raspberry Pi, MQTT, JavaScript",images:[a(7020).A,a(2347).A,a(3445).A,a(7927).A]},{title:"Home Assistance System",period:"2018 - 2019",description:"Developed a voice-controlled smart home system to enhance accessibility for disabled and visually impaired users. Using a Django-based web interface, the system integrated Raspberry Pi, ESP8266, and a GSM module for remote control, real-time monitoring, and automated alerts.",highlights:["Developed a Web-Based Control System: Designed and implemented a Django-based web application for centralized home automation control.","Integrated GSM and IoT Connectivity: Enabled remote device control using a GSM module (SIM800A) and ESP8266 for wireless communication.","Implemented Voice Command Interface: Developed a speech recognition system using WebkitSpeechRecognition for hands-free operation.","Designed Smart Home Monitoring Modules: Integrated fire, gas, and smoke detectors, a temperature and humidity sensor, and automated alerts for real-time safety monitoring."],tech:"Raspberry Pi, GSM Module, Python, Django",images:[a(3869).A,a(9963).A,a(2987).A]}],l=e=>{let{images:t,interval:a=2e3}=e;const[i,n]=(0,s.useState)(0),[d,l]=(0,s.useState)(!1);(0,s.useEffect)((()=>{if(t.length<=1||d)return;const e=setInterval((()=>{n((e=>(e+1)%t.length))}),a);return()=>clearInterval(e)}),[t.length,a,d]);const m=(0,s.useCallback)((()=>{n((e=>(e+1)%t.length))}),[t.length]),h=(0,s.useCallback)((()=>{n((e=>(e-1+t.length)%t.length))}),[t.length]);return(0,c.jsxs)("div",{className:r.carouselContainer,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[(0,c.jsx)("div",{className:r.imageWrapper,children:(0,c.jsx)(o.A,{sources:{light:t[i],dark:t[i]},alt:`Project slide ${i+1}`,className:r.carouselImage})}),t.length>1&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:h,className:`${r.carouselButton} ${r.prevButton}`,"aria-label":"Previous image",children:(0,c.jsx)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),(0,c.jsx)("button",{onClick:m,className:`${r.carouselButton} ${r.nextButton}`,"aria-label":"Next image",children:(0,c.jsx)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),(0,c.jsx)("div",{className:r.imageDots,children:t.map(((e,t)=>(0,c.jsx)("button",{className:`${r.dot} ${t===i?r.activeDot:""}`,onClick:()=>n(t),"aria-label":`Go to slide ${t+1}`},t)))})]})]})};function m(){const{siteConfig:e}=(0,i.A)(),[t,a]=(0,s.useState)(0);return(0,c.jsx)(n.A,{title:"Projects",description:"Featured projects showcasing expertise in robotics, IoT, and smart systems",children:(0,c.jsxs)("main",{className:"container padding-vert--lg",children:[(0,c.jsx)("h1",{className:r.pageTitle,children:"Featured Projects"}),(0,c.jsxs)("div",{className:r.tabContainer,children:[(0,c.jsx)("div",{className:r.tabList,role:"tablist",children:d.map(((e,s)=>(0,c.jsx)("button",{role:"tab","aria-selected":t===s,"aria-controls":`panel-${s}`,className:`${r.tab} ${t===s?r.tabSelected:""}`,onClick:()=>a(s),children:(0,c.jsx)("div",{className:"flex flex-col items-center",children:(0,c.jsx)("span",{children:e.title})})},s)))}),(0,c.jsx)("div",{className:r.tabPanels,children:d.map(((e,a)=>(0,c.jsxs)("div",{role:"tabpanel",id:`panel-${a}`,"aria-labelledby":`tab-${a}`,className:`${r.projectCard} ${t===a?r.activePanel:r.inactivePanel}`,children:[(0,c.jsx)(l,{images:e.images}),(0,c.jsxs)("div",{className:r.projectContent,children:[(0,c.jsxs)("div",{className:r.headerRow,children:[(0,c.jsx)("h2",{children:e.title}),(0,c.jsxs)("span",{className:r.period,children:[(0,c.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),e.period]})]}),(0,c.jsx)("p",{className:r.description,children:e.description}),(0,c.jsxs)("div",{className:r.highlights,children:[(0,c.jsx)("h3",{children:"Key Achievements"}),(0,c.jsx)("ul",{children:e.highlights.map(((e,t)=>(0,c.jsx)("li",{children:e},t)))})]}),(0,c.jsxs)("div",{className:r.tech,children:[(0,c.jsx)("h3",{children:"Technical Stack"}),(0,c.jsx)("div",{className:r.techList,children:e.tech.split(", ").map(((e,t)=>(0,c.jsx)("span",{className:r.techPill,children:e},t)))})]})]})]},a)))})]})]})})}},3134:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/Ground-4e3d46a8f512ee26491b6c5b325b473c.gif"},7445:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/Pipe_Forward-3433664513430b2d65d343e9aa37149d.gif"},6466:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/Pipe_Revesre-7af559a6e3bdacda54b3e8c2dd68d392.gif"},8414:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/Roll-c719440115cbb05e087f4d30a35d6cf6.gif"},3869:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/complete-c7430091bfb6012a5580934c00aa9b26.jpg"},7927:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/cv-8470d160eb21ad1ac0aa0bb76e0ad281.jpg"},2738:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/implemented_architecture-224d08ab06e9501f69d3a12af7bf6fd8.png"},9549:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/nodes-f1df4bc09dd5d3925e3b1a440f4bbb68.png"},8267:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/nodes2-1bfa5b35ebd7b8bc32c0760fba9588cc.png"},6722:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/nodes3-769ed7c31c90e98461e31e54a3d3abfe.png"},2987:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/overall2-26759a7d9f5f78b9798535acec686bb3.jpg"},7020:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/smart_city-0d6ac6245176eaa628d8f2154d69621f.JPEG"},3445:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/smart_city_architecture-13aa33721da14a2139a46e3359acafa8.jpg"},2347:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/smartcity2-4d5f3dbc10d415ba060153dab289ec6d.gif"},1567:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/thingsboard-24dcc99eb7e697c6c7b299d99d2b90ac.png"},9963:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/webApp-d8e8ab09aac3a7918a2c28fb2ca5456e.jpg"}}]);