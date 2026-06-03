export const profile = {
  name: 'Akhilesh Anant Gonabal',
  shortName: 'Akhilesh Gonabal',
  role: 'Medical navigation software engineer',
  currentTitle: 'Software Engineer Level 2 at Capla India',
  location: 'Bangalore, India',
  email: 'akhilesh.gonabal@gmail.com',
  github: 'https://github.com/akhilG05',
  resume: '/img/resume.pdf',
  summary:
    'I work across robotics, embedded systems, cyber-physical automation, and medical navigation, building software for intelligent machines that operate reliably in precise, real-world environments.',
  currentFocus:
    'Cranial, spine, and robotic exoscope workflows that connect medical imaging, optical tracking, registration, hand-eye calibration, instrument calibration, and real-time visualization.',
  bio:
    'My work sits at the intersection of medical imaging, robotics, embedded systems, and product-grade software. I currently develop hardware-connected surgical navigation workflows at CAPLA, including patient data import, multi-view visualization, point and surface registration, tracked-tool navigation, robotic exoscope integration, instrument calibration, recovery, persistence, and deployment support. Earlier work includes multimodal mobile robots, applied cyber-physical systems, IoT infrastructure prototypes, and SCADA automation.',
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
      title: 'Software Engineer Level 2',
      organization: 'Capla India Private Limited',
      period: 'Sep 2025 - Present',
      summary:
        'Building medical navigation software for cranial, spine, and robotic exoscope workflows using Qt/QML, C++, ImFusion SDK, Atracsys tracking, CUDA/OpenCV, and workflow-focused persistence.',
      logo: '/img/capla-logo.svg',
    },
    {
      title: 'Research Assistant',
      organization: 'IISc Bangalore',
      period: '2024 - 2025',
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
      category: 'Medical navigation and imaging',
      items: ['ImFusion SDK', 'DICOM/NIfTI', 'MPR visualization', 'Point registration', 'Surface registration', 'Image fusion'],
    },
    {
      category: 'Tracking, robotics, and hardware',
      items: ['Atracsys SpryTrack', 'Robotic exoscope', 'Hand-eye calibration', 'Instrument calibration', 'ROS2', 'Jetson', 'CAN', 'MQTT'],
    },
    {
      category: 'Programming',
      items: ['C++17', 'Qt/QML', 'Python', 'JavaScript', 'MATLAB', 'LaTeX'],
    },
    {
      category: 'Systems and deployment',
      items: ['Linux', 'CMake', 'SQLite', 'Docker', 'CUDA/OpenCV', 'Git', 'SolidWorks'],
    },
  ],
} as const;