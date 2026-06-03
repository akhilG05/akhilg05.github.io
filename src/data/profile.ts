export const profile = {
  name: 'Akhilesh Anant Gonabal',
  shortName: 'Akhilesh Gonabal',
  role: 'Robotics researcher and engineer',
  currentTitle: 'Research Assistant at IISc Bangalore',
  location: 'Bangalore, India',
  email: 'akhilesh.gonabal@gmail.com',
  github: 'https://github.com/akhilG05',
  resume: '/img/resume.pdf',
  summary:
    'I work across robotics, embedded systems, and cyber-physical automation, building intelligent machines that can operate in constrained, real-world environments.',
  currentFocus:
    'Bio-inspired multimodal mobile robots for inspection and surveillance in constrained spaces.',
  bio:
    'My work spans embedded control, robotics software, sensing, automation, and cyber-physical systems. I have built SCADA automation systems, IoT-based infrastructure prototypes, lab-scale cyber-physical platforms, and multimodal robotic systems. I am especially interested in robotics that can make inspection, agriculture, greentech, and sustainable infrastructure more efficient and scalable.',
  education: [
    {
      degree: 'B.Tech in Electrical and Electronics Engineering',
      institution: 'National Institute of Technology Karnataka, Surathkal',
      period: '2016 - 2020',
      detail: 'CGPA: 7.63. Awarded merit scholarship for academic excellence by Government of Karnataka.',
      logo: '/img/nitk-logo.png',
    },
  ],
  experience: [
    {
      title: 'Research Assistant',
      organization: 'IISc Bangalore',
      period: '2024 - Present',
      summary: 'Developing multimodal mobile robotic systems for constrained-environment inspection.',
      logo: '/img/iisc-logo.png',
    },
    {
      title: 'Junior Research Fellow',
      organization: 'NITK Surathkal',
      period: '2022 - 2024',
      summary: 'Established an ACPS lab platform and developed virtual lab workflows.',
      logo: '/img/csd-logo.jpg',
    },
    {
      title: 'Lead Engineer',
      organization: 'TATA Power Company Ltd',
      period: '2020 - 2022',
      summary: 'Managed SCADA-based power distribution automation systems.',
      logo: '/img/tata-logo.png',
    },
  ],
  skills: [
    {
      category: 'Robotics and autonomy',
      items: ['ROS', 'ROS2', 'Gazebo', 'Navigation', 'Teleoperation', 'Perception'],
    },
    {
      category: 'Embedded and hardware',
      items: ['STM32', 'ESP32', 'Arduino', 'Raspberry Pi', 'Jetson Nano', 'CAN', 'MQTT'],
    },
    {
      category: 'Programming',
      items: ['Python', 'C', 'C++', 'JavaScript', 'MATLAB', 'LaTeX'],
    },
    {
      category: 'Design and simulation',
      items: ['SolidWorks', 'Fusion 360', 'Simulink', 'LabVIEW'],
    },
  ],
} as const;