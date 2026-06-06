export const profile = {
  name: 'Akhilesh Anant Gonabal',
  shortName: 'Akhilesh Gonabal',
  role: 'Robotics and embedded systems engineer',
  currentTitle: 'Robotics, cyber-physical systems, and automation',
  location: 'Bangalore, India',
  email: 'akhilesh.gonabal@gmail.com',
  github: 'https://github.com/akhilG05',
  linkedin: 'https://www.linkedin.com/in/akhilesh-gonabal/',
  resume: '/img/resume.pdf',
  summary:
    'I build robotics, embedded systems, and cyber-physical automation for real-world use, drawing on experience from power-distribution automation, academic research at NITK and IISc, and Linux-based product software.',
  currentFocus:
    'Currently applying robotics and embedded-systems experience to Linux-based product software at CAPLA, focused on hardware-integrated application workflows at public scope.',
  bio:
    'My path spans industrial automation and research-led robotics. After starting in SCADA-based power distribution automation, I moved into cyber-physical systems research at NITK, where I helped build a lab-scale ACPS platform using STM32/ESP32 sensor-actuator nodes and edge-fog-cloud architecture. At IISc, I worked on multimodal autonomous mobile robots for constrained inspection, contributing across mechanical design, embedded control, and ROS2-based autonomy. I now apply that foundation to embedded product software at CAPLA, and I remain focused on building robust robotics for agriculture, sustainability, and other high-impact domains.',
  education: [
    {
      degree: 'B.Tech in Electrical and Electronics Engineering',
      institution: 'National Institute of Technology Karnataka, Surathkal',
      period: '2016 - 2020',
      detail: 'Awarded merit scholarship for academic excellence by Government of Karnataka.',
      logo: '/img/nitk-logo.png',
    },
  ],
  experience: [
    {
      title: 'Software Engineer Level 2',
      organization: 'Capla India Private Limited',
      period: 'Sep 2025 - Present',
      summary:
        'Contributing to Linux-based embedded product software using C++/Qt on Jetson-class platforms, including hardware-connected workflows, testing, debugging, and product documentation.',
      logo: '/img/capla-logo.png',
    },
    {
      title: 'Research Assistant',
      organization: 'IISc Bangalore',
      period: '2024 - 2025',
      summary:
        'Developed a multimodal autonomous mobile robot for constrained-environment inspection, contributing to distributed embedded architecture, CAN communication, and ROS2-based navigation workflows.',
      logo: '/img/iisc-logo.png',
    },
    {
      title: 'Junior Research Fellow',
      organization: 'NITK Surathkal',
      period: '2022 - 2024',
      summary:
        'Built an applied cyber-physical systems lab platform with STM32/ESP32 sensor-actuator nodes integrated across edge, fog, and cloud layers for education and research.',
      logo: '/img/csd-logo.jpg',
    },
    {
      title: 'Lead Engineer',
      organization: 'TATA Power Company Ltd',
      period: '2020 - 2022',
      summary:
        'Worked on SCADA-driven power-distribution automation using IEC 60870 and Modbus, while supporting field monitoring, LoRa-based visibility for unautomated substations, and process automation.',
      logo: '/img/tata-logo.png',
    },
  ],
  skills: [
    {
      category: 'Robotics and autonomy',
      items: ['ROS2', 'Teleoperation', 'Mobile robots', 'Simulation', 'Robot mechanisms', 'Robot calibration', 'Computer vision', 'Sensor fusion'],
    },
    {
      category: 'Embedded and cyber-physical systems',
      items: ['Jetson', 'STM32', 'ESP32', 'CAN', 'MQTT', 'Sensor-actuator nodes', 'Edge-fog-cloud systems', 'Imaging hardware interfaces', 'Real-time testing'],
    },
    {
      category: 'Programming',
      items: ['C++17', 'Qt/QML', 'Python', 'JavaScript', 'MATLAB', 'LaTeX'],
    },
    {
      category: 'Systems and deployment',
      items: ['Linux', 'NVIDIA Jetson', 'CMake', 'Docker', 'Git', 'System integration', 'SolidWorks', 'Embedded software integration'],
    },
  ],
} as const;