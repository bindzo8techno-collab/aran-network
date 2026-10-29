  import React from 'react';
  import type {
    NavLinkItem,
    ContactInfo,
    Testimonial,
    Brand,
    ProductCategory,
    Product,
    WhyChooseUsItem,
    FaqItem,
  } from '@/types';
  import {
    CameraIcon,
    FingerPrintIcon,
    HomeModernIcon,
    CogIcon,
    WrenchScrewdriverIcon,
    CheckCircleIcon,
    BoltIcon,
    ShieldExclamationIcon,
    SpeakerWaveIcon,
    BellAlertIcon,
    ShieldCheckIcon,
    MapPinIcon,
    UserGroupIcon,
    BuildingOffice2Icon,
    PhoneIcon,
    ChatBubbleLeftRightIcon,
    PlayIcon,
  } from './components/icons';

  // --- Shared Data ---
  const commonFaq: FaqItem[] = [
    {
      question: 'What is the warranty period for your products?',
      answer:
        "All our products come with a standard manufacturer's warranty, typically ranging from 1 to 3 years. We also offer extended warranty and maintenance packages.",
    },
    {
      question: 'Do you provide after-sales support?',
      answer:
        'Yes, we offer comprehensive after-sales support, including troubleshooting, maintenance services, and technical assistance to ensure your systems are always operational.',
    },
    {
      question: 'Can these systems be integrated with my existing setup?',
      answer:
        'Absolutely. We specialize in integrating our solutions with existing systems. Our team will assess your current setup and ensure a seamless integration for enhanced functionality.',
    },
  ];

  // --- Dynamic Why Choose Us Sections ---

  const surveillanceWhyChooseUs: WhyChooseUsItem[] = [
    {
      title: 'Expert Installation',
      description:
        'Our certified technicians ensure optimal camera placement and system configuration for maximum coverage.',
      icon: WrenchScrewdriverIcon,
    },
    {
      title: '24/7 Reliability',
      description:
        'We use high-quality, weatherproof cameras and robust storage solutions to ensure your system is always operational.',
      icon: ShieldExclamationIcon,
    },
    {
      title: 'Remote Accessibility',
      description:
        'Monitor your property from anywhere in the world with our secure mobile apps and remote viewing platforms.',
      icon: BoltIcon,
    },
  ];

  const accessControlWhyChooseUs: WhyChooseUsItem[] = [
    {
      title: 'Unmatched Security',
      description:
        'Utilize cutting-edge biometrics and encrypted credentials to ensure only authorized individuals gain access.',
      icon: FingerPrintIcon,
    },
    {
      title: 'Seamless Integration',
      description:
        'Our systems integrate perfectly with your existing security infrastructure, including CCTV and alarm systems.',
      icon: CogIcon,
    },
    {
      title: 'Auditable Control',
      description:
        'Maintain detailed logs of all access events, providing a complete audit trail for enhanced accountability and security.',
      icon: CheckCircleIcon,
    },
  ];

  const alarmSafetyWhyChooseUs: WhyChooseUsItem[] = [
    {
      title: 'Rapid Response',
      description:
        'Our systems provide instant alerts to you and our 24/7 monitoring center for the fastest possible emergency response.',
      icon: BellAlertIcon,
    },
    {
      title: 'Proven Reliability',
      description:
        'We install life-safety grade systems with battery backups and regular self-diagnostics to ensure they work when you need them most.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Comprehensive Protection',
      description:
        'Go beyond intrusion detection with integrated smoke, heat, and carbon monoxide sensors for complete safety.',
      icon: ShieldExclamationIcon,
    },
  ];

  const communicationWhyChooseUs: WhyChooseUsItem[] = [
    {
      title: 'Crystal-Clear Audio',
      description:
        'We provide systems with high-intelligibility speakers and noise-cancelling technology to ensure your message is always heard.',
      icon: SpeakerWaveIcon,
    },
    {
      title: 'Durable & Rugged',
      description:
        'Our communication devices are built to withstand harsh environments, making them ideal for any operational setting.',
      icon: WrenchScrewdriverIcon,
    },
    {
      title: 'Scalable Solutions',
      description:
        'From a single-building intercom to a campus-wide public address system, our solutions grow with your needs.',
      icon: CogIcon,
    },
  ];

  const smartITWhyChooseUs: WhyChooseUsItem[] = [
    {
      title: 'Customized Automation',
      description:
        'We design smart home and IT solutions that are perfectly tailored to your lifestyle and business operations for ultimate convenience.',
      icon: HomeModernIcon,
    },
    {
      title: 'Future-Proof Technology',
      description:
        'We use the latest standards in networking and automation to build a robust foundation that is ready for future expansion.',
      icon: BoltIcon,
    },
    {
      title: 'Expert Network Design',
      description:
        'Our IT professionals design and implement reliable, high-performance network infrastructures that your business can depend on.',
      icon: CheckCircleIcon,
    },
  ];

  // --- Navigation ---
  export const NAV_LINKS: NavLinkItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  // --- Contact Info ---
  export const CONTACT_INFO: ContactInfo = {
    address:
      'No: 3/298 D, GP Complex, Iniyanur Main Road, Varma Nagar, Pirattiyur, Trichy – 620009, Tamil Nadu, India',
    phone: '+91 9344933368',
    email: 'admin@arannetwork.com',
    whatsapp: '+91 9344933368',
  };

  // --- Testimonials ---
  export const TESTIMONIALS: Testimonial[] = [
    {
      quote:
        "Aran Network's CCTV installation in Trichy was seamless and professional. Their team was knowledgeable and efficient. We feel much safer now.",
      author: 'Suresh Kumar',
      company: 'SK Enterprises',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
      quote:
        'The smart home automation system has transformed our daily routine. Everything is so convenient, and the support from Aran Network has been outstanding.',
      author: 'Priya Sharma',
      company: 'Homeowner',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    },
    {
      quote:
        'Our office network infrastructure is now robust and reliable, thanks to their expert team. Downtime is a thing of the past. Highly recommended for IT solutions in Trichy!',
      author: 'Rajesh Gupta',
      company: 'Innovate Solutions Ltd.',
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    },
  ];

  // --- Partners ---
  export const PARTNERS: Brand[] = [
    { name: 'Prama', logoUrl: '/optimized/partners/new/prama.webp' },
    { name: 'Cpplus', logoUrl: '/optimized/partners/new/cpplus.webp' },
    { name: 'Hikvision', logoUrl: '/optimized/partners/new/hikvision.webp' },
    { name: 'Essl', logoUrl: '/optimized/partners/new/essl.webp' },
    { name: 'Imou', logoUrl: '/optimized/partners/new/imou.webp' },
    { name: 'Texecom', logoUrl: '/optimized/partners/new/texecom.webp' },
    { name: 'Beetel', logoUrl: '/optimized/partners/new/beetel.webp' },
    { name: 'Securio', logoUrl: '/optimized/partners/new/securio.webp' },
    { name: 'TVS', logoUrl: '/optimized/partners/new/tvs.webp' },
    { name: 'Concex', logoUrl: '/optimized/partners/new/concex.webp' },
    { name: 'Toshiba', logoUrl: '/optimized/partners/new/toshiba.webp' },
    { name: 'Telematics', logoUrl: '/optimized/partners/new/telematics.webp' },
    { name: 'Mantra', logoUrl: '/optimized/partners/new/mantra.webp' },
    { name: 'NEC', logoUrl: '/optimized/partners/new/nec.webp' },
    { name: 'LG', logoUrl: '/optimized/partners/new/lg.webp' },
    { name: 'Honeywell', logoUrl: '/optimized/partners/new/honewell.webp' },
    { name: 'Matrix', logoUrl: '/optimized/partners/new/matrix.webp' },
    { name: 'Wester', logoUrl: '/optimized/partners/new/wester.webp' },
    { name: 'Bosch', logoUrl: '/optimized/partners/new/bosch.webp' },
    { name: 'Netgear', logoUrl: '/optimized/partners/new/netgear.webp' },
    { name: 'Dlink', logoUrl: '/optimized/partners/new/dlink.webp' },
    { name: 'Motorola', logoUrl: '/optimized/partners/new/motorola.webp' },
    { name: 'Wbox', logoUrl: '/optimized/partners/new/wbox.webp' },
    { name: 'Samsung', logoUrl: '/optimized/partners/new/samsung.webp' },
    { name: 'DSC', logoUrl: '/optimized/partners/new/dsc.webp' },
    { name: 'Pyronix', logoUrl: '/optimized/partners/new/pyronix.webp' },
    { name: 'Ahuja', logoUrl: '/optimized/partners/new/ajhua.webp' },
    { name: 'Tplink', logoUrl: '/optimized/partners/new/tplink.webp' },
    { name: 'Cisco', logoUrl: '/optimized/partners/new/cisco.webp' },
    { name: 'Powering', logoUrl: '/optimized/partners/new/powering.webp' },
    { name: 'Ravel', logoUrl: '/optimized/partners/new/ravel.webp' },
    { name: 'Ezviz', logoUrl: '/optimized/partners/new/ezviz.webp' },
    { name: 'Yale', logoUrl: '/optimized/partners/new/yale.webp' },
    { name: 'Zkteco', logoUrl: '/optimized/partners/new/zkteco.webp' },
    { name: 'Panasonic', logoUrl: '/optimized/partners/new/panasonic.webp' },
    { name: 'Logictech', logoUrl: '/optimized/partners/new/logictech.webp' },
    { name: 'Seagate', logoUrl: '/optimized/partners/new/seagate.webp' },
    { name: 'Ahuja Hall', logoUrl: '/optimized/partners/new/ahujahall.webp' },
  ];

  // --- Product Data ---

  // 1. Surveillance & Monitoring
  const surveillanceProducts: Product[] = [
    {
      id: 'cctv',
      path: '/products/cctv',
      name: 'CCTV Security Systems',
      icon: CameraIcon,
      tagline: 'Uncompromising Clarity for Total Security Surveillance.',
      description:
        'Secure your premises with our state-of-the-art CCTV systems, providing crystal-clear, high-definition video surveillance to monitor and protect your property 24/7. Our solutions range from single-camera setups for small homes to complex, multi-site systems for large enterprises in Trichy, all featuring remote viewing capabilities, intelligent analytics, and robust storage options to ensure you never miss a critical moment.',
      features: [
        '4K Ultra HD Resolution for Superior Clarity',
        'Advanced Color Night Vision Technology',
        'AI-Powered Motion Detection & People/Vehicle Alerts',
        'Secure Remote Viewing via Mobile App',
        'H.265+ Video Compression for Efficient Storage',
        'IP67 Weatherproof Rating for Outdoor Durability',
        'Wide Dynamic Range (WDR) for Clear Images in Mixed Lighting',
      ],
      imageUrl:
        '/optimized/camera/cctv_banner.webp',
      overviewImageUrl:
        '/optimized/camera/camera_overview.webp',
      featuresImageUrl:
        '/optimized/camera/camera_overview.webp',
      whyChooseUs: surveillanceWhyChooseUs,
      productTypes: [
        {
          name: 'IP Cameras',
          description:
            'IP cameras are digital, network-connected cameras used in modern CCTV systems. They offer high-resolution video, remote access, advanced analytics, and flexible installation options, making them superior to traditional analog systems in most scenarios.',
          imageUrl:
            '/optimized/camera/ip.webp',
          specifications: {
            Resolution: 'Support HD, Full HD, 4K, and even higher.',
            'Field of View': '110° Wide Angle',
            'Night Vision': 'Up to 30 meters',
            'Best Use': 'Indoor, Discreet Monitoring',
            Weatherproof: 'IP66 Rated',
          },
        },
        {
          name: 'HD Cameras',
          description:
            'HD CCTV cameras provide high-definition video over traditional coaxial cables, making them a popular, cost-effective option for upgrading older analog systems. They offer excellent image quality, reliable transmission, and simple installation—without the complexity of IP-based networking.',
          imageUrl:
            '/optimized/camera/hd.webp',
          specifications: {
            Resolution: 'Up to 4K Ultra HD',
            'Field of View': '90° Long Range',
            'Night Vision': 'Up to 50 meters',
            'Best Use': 'Outdoor, Perimeter Security',
            Weatherproof: 'IP67 Rated',
          },
        },
        {
          name: 'PTZ Cameras (Pan-Tilt-Zoom)',
          description:
            'Advanced cameras that provide wide-area coverage with the ability to pan, tilt, and zoom to focus on specific details, ideal for monitoring large areas.',
          imageUrl:
            '/optimized/camera/ptz_camera.webp',
          specifications: {
            Resolution: '1080p / 4MP',
            'Field of View': '360° Pan, 90° Tilt',
            'Night Vision': 'Up to 100 meters',
            'Best Use': 'Active Monitoring, Large Areas',
            Weatherproof: 'IP67 Rated',
          },
        },
        {
          name: 'Solar Powered Cameras',
          description:
            'Solar-powered CCTV cameras are fully independent surveillance devices that use solar energy to operate. They provide flexible installation, wireless connectivity, smart detection features, and are ideal for both urban and remote locations where running power cables is inconvenient or impossible.',
          imageUrl:
            '/optimized/camera/solar.webp',
          specifications: {
            Resolution: 'Up to 4K Ultra HD',
            'Field of View': '105° Flexible Angle',
            'Night Vision': 'Up to 40m (EXIR Technology)',
            'Best Use': 'Outdoor/Indoor, Reduced Glare',
            Weatherproof: 'IP67 Rated',
          },
        },
      ],
      faq: [
        {
          question: 'How can I view the CCTV camera feed remotely?',
          answer:
            'You can securely access a live feed and recordings from anywhere in the world using our dedicated mobile app, available for both iOS and Android devices, for your CCTV system in Trichy.',
        },
        {
          question: 'How much video footage can be stored?',
          answer:
            'Storage capacity depends on the system. We offer solutions with local storage (NVR/DVR) and optional cloud backup, ranging from several days to months of continuous recording.',
        },
        {
          question: 'What happens if the power or internet goes out?',
          answer:
            'Many of our systems can be equipped with an uninterruptible power supply (UPS) and can continue recording locally even if the internet connection is down. You will be alerted once the connection is restored.',
        },
        {
          question: 'Are the cameras suitable for outdoor use in Trichy?',
          answer:
            'Yes, we offer a wide range of outdoor cameras with IP67 weatherproof ratings, ensuring they can withstand rain, dust, and the climate conditions in Trichy.',
        },
        {
          question: 'Do you offer professional CCTV installation?',
          answer:
            'Absolutely. Our team of certified technicians provides professional installation and setup to ensure optimal camera placement and system performance for homes and businesses.',
        },
      ],
    },
    {
      id: 'video-door-phone',
      path: '/products/video-door-phone',
      name: 'Video Door Phone',
      icon: HomeModernIcon,
      tagline: 'See, Speak, and Secure Your Front Door from Anywhere.',
      description:
        'Enhance your front door security and convenience with a smart video door phone. See, hear, and speak to visitors from anywhere using your smartphone. Our systems provide high-definition video, two-way communication, and seamless integration with smart locks, allowing you to not only see who is at your door but also grant them access remotely.',
      features: [
        'Crystal-Clear Full HD Video',
        'Seamless Two-Way Audio Communication',
        'Instant Motion-Activated Alerts to Your Phone',
        'Clear Infrared Night Vision',
        'Integration with Smart Locks & Home Automation Systems',
        'Cloud & Local Video Recording Options',
        'Ultra-Wide-Angle Lens for a Complete View',
      ],
      imageUrl:
        '/optimized/video_door_phone/video_door_phone.webp',
      overviewImageUrl:
        '/optimized/video_door_phone/video_door_phone_overview.webp',
      featuresImageUrl:
        '/optimized/video_door_phone/video_door_phone_overview.webp',
      whyChooseUs: surveillanceWhyChooseUs,
      productTypes: [
        {
          name: 'Wireless Video Doorbells',
          description:
            'Easy-to-install, battery-powered devices that connect to your home Wi-Fi, perfect for simple retrofitting.',
          imageUrl:
            '/optimized/video_door_phone/wireless.webp',
          specifications: {
            Resolution: '1080p Full HD',
            'Field of View': '160° Wide Angle',
            Power: 'Rechargeable Battery',
            Connectivity: '2.4 GHz Wi-Fi',
          },
        },
        {
          name: 'Wired Video Doorbells',
          description:
            'Powered by existing doorbell wiring, offering a continuous power supply and reliable connection without the need for recharging.',
          imageUrl:
            '/optimized/video_door_phone/wired.webp',
          specifications: {
            Resolution: '1080p / 2K HD',
            'Field of View': '180° Vertical & Horizontal',
            Power: 'Hardwired (8-24V AC)',
            Connectivity: '2.4 / 5 GHz Wi-Fi',
          },
        },
        {
          name: 'IP Intercom Doorbells',
          description:
            'Advanced systems that integrate into your network via Ethernet, providing superior video quality and integration with other security systems.',
          imageUrl:
            '/optimized/video_door_phone/ip.webp',
          specifications: {
            Resolution: '2K / 4MP Super HD',
            'Field of View': '180° Fisheye Lens',
            Power: 'Power over Ethernet (PoE)',
            Connectivity: 'Wired Ethernet',
          },
        },
      ],
      faq: [
        {
          question: 'Can I install the video door phone myself?',
          answer:
            'While some models are designed for DIY installation, we recommend professional setup to ensure proper wiring and integration with your home network for optimal performance.',
        },
        {
          question: 'Does it require a subscription?',
          answer:
            'Basic features like live viewing and two-way talk are typically free. Optional cloud storage for recorded video clips may require a monthly or annual subscription.',
        },
        {
          question: 'How is the device powered?',
          answer:
            'Most video door phones can be powered by your existing doorbell wiring. We also offer battery-powered and PoE (Power over Ethernet) models depending on your needs.',
        },
        {
          question: 'Can multiple family members access the video feed?',
          answer:
            'Yes, you can grant access to multiple users through the mobile app, allowing your entire family to receive alerts and answer the door remotely.',
        },
        {
          question: 'What is the video quality like at night?',
          answer:
            'Our video door phones are equipped with infrared (IR) night vision, providing clear black-and-white video even in complete darkness.',
        },
      ],
    },
    {
      id: 'vehicle-tracker',
      path: '/products/vehicle-tracker',
      name: 'GPS Vehicle Tracker',
      icon: MapPinIcon,
      tagline: 'Real-Time Vehicle Tracking for Total Peace of Mind.',
      description:
        'Gain full visibility of your vehicles with our advanced GPS tracking systems. Ideal for both personal vehicle security and professional fleet management, our trackers provide real-time location monitoring, detailed route histories, and intelligent alerts to enhance security, improve efficiency, and give you complete peace of mind.',
      features: [
        'Real-time GPS Location Tracking',
        'Geo-fencing and Boundary Alerts',
        'Detailed Route History and Playback',
        'Driver Behavior Monitoring (Speeding, Harsh Braking)',
        'Remote Engine Immobilizer for Theft Prevention',
        'Real-time Alerts for Ignition, Towing, and Tampering',
        'Comprehensive Fleet Management Dashboard',
      ],
      imageUrl:
        '/optimized/gps/gps_tracking.webp',
      overviewImageUrl:
        '/optimized/gps/gps_overview.webp',
      featuresImageUrl:
        '/optimized/gps/gps_overview.webp',
      whyChooseUs: surveillanceWhyChooseUs,
      productTypes: [
        {
          name: 'Personal Vehicle Trackers',
          description:
            'Compact devices focused on anti-theft and personal safety, offering features like live location and engine immobilizer.',
          imageUrl:
            '/optimized/gps/personal.webp',
          specifications: {
            'GPS Accuracy': '5-10 Meters',
            'Battery Backup': 'Up to 72 Hours',
            'Key Features': 'Live Tracking, Geo-fence, Immobilizer',
            Network: '2G/4G Cellular',
          },
        },
        {
          name: 'Fleet Management Trackers',
          description:
            'Advanced systems for businesses to monitor driver behavior, optimize routes, manage fuel consumption, and improve overall fleet efficiency.',
          imageUrl:
            '/optimized/gps/fleet.webp',
          specifications: {
            'GPS Accuracy': '2-5 Meters',
            'Key Features':
              'Driver Behaviour, Fuel Monitoring, Route Optimization',
            Reporting: 'Advanced Analytics Dashboard',
            Integration: 'API Access Available',
          },
        },
        {
          name: 'Asset Trackers',
          description:
            'Battery-powered, rugged trackers for monitoring non-powered assets like trailers, containers, and heavy equipment.',
          imageUrl:
            '/optimized/gps/asset.webp',
          specifications: {
            'GPS Accuracy': '5-15 Meters',
            'Battery Life': 'Up to 5 years',
            Durability: 'IP67 Weatherproof & Ruggedized',
            'Key Features': 'Movement Alerts, Tamper Detection',
          },
        },
      ],
      faq: [
        {
          question: 'Is there a monthly subscription fee for GPS tracking?',
          answer:
            'Yes, our GPS tracking services require a subscription plan to cover cellular data and access to our tracking platform. We offer various affordable plans based on your needs.',
        },
        {
          question: 'How accurate is the vehicle tracking?',
          answer:
            'Our trackers use high-sensitivity GPS modules, providing location accuracy typically within 5 to 10 meters.',
        },
        {
          question: 'How is the GPS tracker installed?',
          answer:
            "We provide professional, discreet installation to connect the tracker to your vehicle's power source, ensuring it is always active and secure.",
        },
        {
          question: 'Can I track multiple vehicles at once?',
          answer:
            'Yes, our platform supports tracking multiple vehicles under a single account, making it perfect for fleet management.',
        },
        {
          question: 'What kind of alerts can I receive?',
          answer:
            'You can configure a variety of alerts, including speeding, excessive idling, geo-fence entry/exit, and main power disconnect alerts, delivered via SMS or app notification.',
        },
      ],
    },
    {
      id: 'guard-patrolling',
      path: '/products/guard-patrolling',
      name: 'Guard Patrolling System',
      icon: UserGroupIcon,
      tagline: 'Ensuring Accountability, Enhancing Security.',
      description:
        'Streamline your security operations with our advanced Guard Patrolling System. This solution replaces traditional paper-based methods with a powerful, real-time system to monitor guard tours, ensure accountability, and provide detailed reporting. It’s the perfect tool for security companies and large facilities to enhance site protection and operational efficiency.',
      features: [
        'Real-time Guard GPS Tracking',
        'NFC/QR Code Checkpoint Scanning',
        'Instant Incident Reporting with Photos & Notes',
        'Automated Tour Scheduling and Management',
        'SOS/Panic Button for Emergencies',
        'Detailed Digital Reports and Analytics',
        'Lone Worker Protection Features',
      ],
      imageUrl:
        '/optimized/guards/guard_system_banner.webp',
      overviewImageUrl:
        '/optimized/guards/guard_overview.webp',
      featuresImageUrl:
        '/optimized/guards/guard_overview.webp',
      whyChooseUs: surveillanceWhyChooseUs,
      productTypes: [
        {
          name: 'NFC/RFID Based Systems',
          description:
            'Guards tap durable NFC tags at checkpoints, providing a robust and weatherproof method for confirming their presence.',
          imageUrl:
            '/optimized/guards/nfc.webp',
          specifications: {
            Technology: 'NFC (Near Field Communication)',
            Durability: 'IP68 Weatherproof Tags',
            'Data Storage': 'Real-time Cloud Sync',
            Hardware: 'NFC-enabled Smartphone / Device',
          },
        },
        {
          name: 'QR Code Based Systems',
          description:
            'An economical solution where guards scan QR codes at checkpoints using a smartphone app, ideal for indoor or less harsh environments.',
          imageUrl:
            '/optimized/guards/qr.webp',
          specifications: {
            Technology: 'QR Code Scanning',
            'App Requirement': 'iOS / Android',
            Reporting: 'Instant Digital Reports',
            'Cost-Effectiveness': 'High',
          },
        },
        {
          name: 'GPS Based Systems',
          description:
            "Leverages GPS tracking to monitor a guard's location in real-time and automate checkpoint validation without physical tags, perfect for large, open sites.",
          imageUrl:
            '/optimized/guards/gps.webp',
          specifications: {
            Technology: 'GPS / A-GPS',
            Accuracy: '5-15 Meters',
            'Battery Life': 'Dependent on Device',
            'Key Features': 'Live Map View, Geo-fenced Checkpoints',
          },
        },
      ],
      faq: [
        {
          question: 'How does this system improve guard accountability?',
          answer:
            'By requiring guards to scan checkpoints in real-time and providing GPS tracking, you have verifiable proof of their presence and patrol progress, eliminating missed rounds.',
        },
        {
          question: 'What hardware do the guards need?',
          answer:
            'Guards typically use a rugged smartphone or a dedicated patrol device with our app installed to scan checkpoints and report incidents.',
        },
        {
          question: 'Can I monitor patrols from anywhere?',
          answer:
            'Yes, our system includes a web-based dashboard that allows supervisors to monitor all patrol activities in real-time from any device with internet access.',
        },
        {
          question: 'Is the system difficult to set up?',
          answer:
            'No, setup is straightforward. We assist you in placing the NFC or QR code checkpoints at your desired locations and configuring the patrol schedules in the software.',
        },
        {
          question: 'How are reports generated?',
          answer:
            'The system automatically generates detailed reports, including patrol completion times, missed checkpoints, and incident logs. These reports can be exported and sent to clients.',
        },
      ],
    },
  ];

  // 2. Access Control
  const accessControlProducts: Product[] = [
    {
      id: 'biometrics',
      path: '/products/biometrics',
      name: 'Biometric Access Control',
      icon: FingerPrintIcon,
      tagline: 'The Future of Secure Identification.',
      description:
        'Step into the future of security with our cutting-edge biometric systems. Utilizing unique physiological traits like fingerprints, facial features, or irises, these systems offer highly secure, convenient, and auditable identification. Ideal for businesses requiring stringent access control and accurate time & attendance tracking, biometrics eliminate the risks associated with lost cards or forgotten passwords.',
      features: [
        'Advanced Fingerprint & Facial Recognition Algorithms',
        'Contactless Options for Hygienic Operation',
        'Verification Speeds of Less Than 1 Second',
        'Seamless Integration with Time & Attendance Software',
        'Multi-Factor Authentication (Biometric + Card/PIN)',
        'Anti-Passback Functionality for High-Security Zones',
        'Centralized Management Software for Multiple Devices',
      ],
      imageUrl:
        '/optimized/biometric/biometric_banner.webp',
      overviewImageUrl:
        '/optimized/biometric/biometric_overview.webp',
      featuresImageUrl:
         '/optimized/biometric/biometric_overview.webp',
      whyChooseUs: accessControlWhyChooseUs,
      productTypes: [
        {
          name: 'Fingerprint Readers',
          description:
            'The most common biometric solution, offering a fast, reliable, and cost-effective method for identity verification.',
          imageUrl:
            '/optimized/biometric/fingerprint.webp',
          specifications: {
            'Fingerprint Capacity': '3,000 - 10,000',
            'Verification Speed': '< 1 Second',
            Communication: 'TCP/IP, Wi-Fi, USB',
            Algorithm: 'Advanced Live Finger Detection',
          },
        },
        {
          name: 'Facial Recognition Terminals',
          description:
            'A touchless and highly secure solution that identifies users from a distance, ideal for high-traffic areas and hygienic environments.',
          imageUrl:
            '/optimized/biometric/face.webp',
          specifications: {
            'Face Capacity': '1,500 - 50,000',
            'Verification Speed': '< 0.5 Seconds',
            Communication: 'TCP/IP, Wi-Fi',
            Features: 'Anti-Spoofing, Mask Detection',
          },
        },
        {
          name: 'Iris Scanners',
          description:
            'Provides the highest level of accuracy by analyzing the unique patterns of the iris, used in high-security facilities.',
          imageUrl:
            '/optimized/biometric/iris.webp',
          specifications: {
            'Accuracy (FAR)': '1 in 1.5 Million',
            'Verification Speed': '~ 1 Second',
            'Use Case': 'High-Security Government & Data Centers',
            'Security Level': 'Extremely High',
          },
        },
        {
          name: 'Palm Vein Scanners',
          description:
            'A contactless technology that identifies individuals by the unique vein patterns in their palms, offering excellent security and hygiene.',
          imageUrl:
            '/optimized/biometric/palm.webp',
          specifications: {
            Technology: 'Infrared Palm Vein Recognition',
            'Verification Speed': '< 1 Second',
            Hygiene: 'Contactless Operation',
            'Security Level': 'Very High',
          },
        },
      ],
      faq: [
        {
          question: 'How accurate are biometric systems?',
          answer:
            'Modern biometric systems are extremely accurate, with very low False Acceptance Rates (FAR) and False Rejection Rates (FRR), ensuring that only authorized individuals gain access.',
        },
        {
          question: 'Can biometric data be faked or spoofed?',
          answer:
            'Our advanced systems feature live finger detection and anti-spoofing algorithms to prevent the use of fake fingerprints or photos, ensuring a high level of security.',
        },
        {
          question: 'Where is the biometric data stored?',
          answer:
            'Biometric templates are encrypted and stored securely on the device or a central server. The system does not store actual images of fingerprints or faces, only mathematical representations.',
        },
        {
          question: "What happens if a person's fingerprint isn't recognized?",
          answer:
            "In rare cases of non-recognition (e.g., due to a cut), our systems support multiple verification methods, such as a PIN code or an access card, to ensure access is not denied.",
        },
        {
          question:
            'Can these systems be used for tracking employee attendance?',
          answer:
            'Yes, biometric systems are an excellent tool for time and attendance, as they prevent "buddy punching" and provide an accurate, indisputable record of clock-in and clock-out times.',
        },
      ],
    },
    {
      id: 'access-control',
      path: '/products/access-control',
      name: 'Card & Mobile Access Control',
      icon: ShieldCheckIcon,
      tagline: 'Complete Control Over Your Premises.',
      description:
        'Take complete command over who can access your premises with our comprehensive access control solutions. We provide robust systems that utilize key cards, fobs, mobile credentials, and PIN codes to manage and restrict entry. From a single door to a large, multi-site facility, our scalable solutions provide a secure, convenient, and auditable trail of every entry, enhancing the safety of your property and personnel.',
      features: [
        'Centralized Management of All Access Points',
        'Flexible, Time-Based Access Rules and Schedules',
        'Detailed Event Logs for Auditing and Reporting',
        'Support for Key Cards, Fobs, and Mobile Credentials',
        'Seamless Integration with CCTV and Alarm Systems',
        'Emergency Lockdown and Remote Access Capabilities',
        'Scalable Architecture for Facilities of Any Size',
      ],
      imageUrl:
        '/optimized/access_control/access-control-system.webp',
      overviewImageUrl:
        '/optimized/access_control/access_control_overview.webp',
      featuresImageUrl:
        '/optimized/access_control/access_control_overview.webp',
      whyChooseUs: accessControlWhyChooseUs,
      productTypes: [
        {
          name: 'Card-Based Systems',
          description:
            'Utilizes proximity or smart cards for access. A versatile and widely-used solution for most commercial buildings.',
          imageUrl:
            '/optimized/access_control/card.webp',
          specifications: {
            'Card Type': 'Proximity (125KHz), Mifare (13.56MHz)',
            'User Capacity': '1,000 - 100,000+',
            Communication: 'Wiegand, OSDP',
            Integration: 'CCTV, Alarm, Fire Systems',
          },
        },
        {
          name: 'Keypad Systems',
          description:
            'Requires a PIN code for entry. Can be used standalone or combined with card readers for multi-factor authentication.',
          imageUrl:
            '/optimized/access_control/keypad.webp',
          specifications: {
            'User Capacity': 'Up to 2,000 PINs',
            'Code Length': '4-8 Digits',
            Material: 'Vandal-resistant Metal',
            Features: 'Backlit Keypad, Weatherproof (IP65)',
          },
        },
        {
          name: 'Mobile Access Control',
          description:
            'Uses smartphones as credentials, offering a highly convenient and modern way to manage access without physical cards.',
          imageUrl:
            '/optimized/access_control/mobile.webp',
          specifications: {
            Technology: 'Bluetooth (BLE), NFC',
            'Credential Type': 'Mobile App',
            Compatibility: 'iOS & Android',
            Security: 'End-to-end Encryption',
          },
        },
        {
          name: 'IP-Based Controllers',
          description:
            'Network-based systems that offer superior scalability, remote management, and integration capabilities for large or multi-site facilities.',
          imageUrl:
            '/optimized/access_control/ip.webp',
          specifications: {
            'Door Capacity': '1, 2, 4, 8+ Doors per Controller',
            'Reader Support': 'Wiegand, OSDP',
            Network: 'TCP/IP Ethernet',
            Scalability: 'Virtually Unlimited',
          },
        },
      ],
      faq: [
        {
          question: 'What happens if an employee loses their access card?',
          answer:
            'A lost card can be instantly deactivated from the central system, eliminating the security risk. A new card can then be issued just as quickly.',
        },
        {
          question: 'Can I control access from my phone?',
          answer:
            'Yes, our modern systems offer mobile apps that allow administrators to manage users, monitor events, and even remotely unlock doors from anywhere.',
        },
        {
          question: 'What happens during a power outage?',
          answer:
            'Our systems are installed with battery backups to ensure that all doors remain secure and operational for a period of time during a power failure.',
        },
        {
          question: 'How difficult is it to add or remove users?',
          answer:
            'Managing users is simple with our user-friendly software. You can add, modify, or delete user access rights in just a few clicks.',
        },
        {
          question: 'Can this system track who is in the building?',
          answer:
            'Yes, the system logs every access event, providing a detailed report of who entered which door and at what time, which is invaluable for security and audits.',
        },
      ],
    },
    {
      id: 'fingerprint-smart-locks',
      path: '/products/fingerprint-smart-locks',
      name: 'Fingerprint Smart Locks',
      icon: FingerPrintIcon,
      tagline: 'Keyless Convenience at Your Fingertips.',
      description:
        'Experience the ultimate convenience of keyless entry with our range of Fingerprint Smart Locks. Perfect for modern homes and offices, these locks provide secure and effortless access with just a touch of your finger. Say goodbye to lost keys and enjoy multiple ways to unlock your door, including PIN codes, RFID cards, and even your smartphone, all while tracking every entry in a detailed activity log.',
      features: [
        '5-in-1 Keyless Entry (Fingerprint, PIN, Card, App, Key)',
        'Advanced 360° Fingerprint Recognition Sensor',
        'Grant Temporary Access Codes for Guests Remotely',
        'Real-time Activity Log and Notifications via Mobile App',
        'Auto-Locking Feature for Enhanced Security',
        'Low Battery Warning and Emergency Power Supply Option',
        'Durable, Weather-Resistant Construction',
      ],
      imageUrl:
        '/optimized/fingerprint/fingerprint_banner.webp',
      overviewImageUrl:
        '/optimized/fingerprint/fingerprint.webp',
      featuresImageUrl:
        '/optimized/fingerprint/fingerprint.webp',
      whyChooseUs: accessControlWhyChooseUs,
      productTypes: [
        {
          name: 'Smart Deadbolt Locks',
          description:
            'Replaces your existing deadbolt, offering a simple yet powerful upgrade to keyless, fingerprint access for your main door.',
          imageUrl:
            '/optimized/fingerprint/smart.webp',
          specifications: {
            'Unlock Methods': 'Fingerprint, PIN, App, Key',
            'Fingerprint Capacity': 'Up to 100',
            Power: '4x AA Batteries',
            'Door Compatibility': 'Standard Doors (35-50mm)',
          },
        },
        {
          name: 'Smart Mortise Locks',
          description:
            'A full lockset replacement that includes a handle and multiple latching points, providing a higher level of security and a sleek look.',
          imageUrl:
            '/optimized/fingerprint/mortise.webp',
          specifications: {
            'Unlock Methods': 'Fingerprint, PIN, Card, App, Key',
            'Security Features': 'Multi-latch Mortise, Tamper Alarm',
            Material: 'Zinc Alloy / Stainless Steel',
            Power: '4x AA Batteries / Li-ion Battery',
          },
        },
        {
          name: 'Smart Lever Handle Locks',
          description:
            'Ideal for interior doors in offices or homes, these locks combine the convenience of a lever with advanced fingerprint security.',
          imageUrl:
            '/optimized/fingerprint/lever.webp',
          specifications: {
            'Unlock Methods': 'Fingerprint, App',
            Application: 'Interior Doors, Bedrooms, Offices',
            Power: '4x AAA Batteries',
            Handle: 'Reversible for Left/Right Handing',
          },
        },
        {
          name: 'Glass Door Smart Locks',
          description:
            'Specifically designed for frameless glass doors, these locks offer a secure, no-drill solution for modern office entrances.',
          imageUrl:
            '/optimized/fingerprint/glass.webp',
          specifications: {
            'Unlock Methods': 'Fingerprint, PIN, Card',
            'Door Type': 'Frameless Glass Doors (10-12mm)',
            Installation: 'No-Drill Clamp-on',
            Power: '4x AA Batteries',
          },
        },
      ],
      faq: [
        {
          question: 'How many fingerprints can a smart lock store?',
          answer:
            'Most of our smart locks can store up to 100 different fingerprints, making them suitable for both families and small businesses.',
        },
        {
          question: 'What is the battery life of a smart lock?',
          answer:
            'On average, the batteries in a smart lock last for about 10-12 months with regular use. The lock will provide low battery alerts well in advance.',
        },
        {
          question: 'What if the batteries die completely?',
          answer:
            'All our smart locks come with a mechanical key for emergency backup. Many models also feature a USB port for emergency power from a power bank.',
        },
        {
          question: 'Can a smart lock be installed on any door?',
          answer:
            'Our locks are designed to fit most standard doors. Our technicians will verify compatibility before installation to ensure a perfect fit.',
        },
        {
          question: 'Is it possible to hack a smart lock?',
          answer:
            'We prioritize security. Our locks use advanced encryption protocols for communication, and features like scrambled PIN codes to prevent unauthorized access.',
        },
      ],
    },
    {
      id: 'boom-flap-barrier',
      path: '/products/boom-flap-barrier',
      name: 'Boom & Flap Barriers',
      icon: BuildingOffice2Icon,
      tagline: 'Control the Flow, Secure the Perimeter.',
      description:
        'Manage and control the flow of vehicle and pedestrian traffic with our robust automated boom and flap barriers. Essential for parking facilities, corporate entrances, and high-security perimeters, these barriers provide a reliable physical deterrent. Integrated with access control systems, they ensure that only authorized individuals and vehicles can pass, enhancing both security and operational efficiency.',
      features: [
        'High-Speed Operation for Efficient Traffic Flow',
        'Durable, All-Weather Construction for Outdoor Use',
        'Seamless Integration with RFID, Biometric, and Ticketing Systems',
        'Built-in Safety Sensors to Prevent Accidents',
        'LED Indicator Lights for Clear Visual Guidance',
        'Manual Override for Power Failure Scenarios',
        'Variety of Arm Lengths and Barrier Types Available',
      ],
      imageUrl:
        '/optimized/boom/boom_banner.webp',
      overviewImageUrl:
        '/optimized/boom/boom_overview.webp',
      featuresImageUrl:
        '/optimized/boom/boom_overview.webp',
      whyChooseUs: accessControlWhyChooseUs,
      productTypes: [
        {
          name: 'Automatic Boom Barriers',
          description:
            'A bar or pole pivoted to control vehicle access. Ideal for parking lots, toll booths, and corporate entrances.',
          imageUrl:
            '/optimized/boom/automatic.webp',
          specifications: {
            'Arm Length': 'Up to 6 meters',
            'Opening Speed': '1.5 - 6 seconds',
            Motor: '24V DC Brushless',
            Safety: 'Loop Detector, Photocell',
          },
        },
        {
          name: 'Flap Barriers',
          description:
            'Retracting wings for pedestrian access control inside buildings like corporate lobbies, metro stations, and airports.',
          imageUrl:
            '/optimized/boom/flap.webp',
          specifications: {
            Throughput: '30-40 people/minute',
            Material: 'SUS304 Stainless Steel',
            'Lane Width': '550 - 900mm',
            'Safety Sensors': 'Infrared (IR) Sensors',
          },
        },
        {
          name: 'Tripod Turnstiles',
          description:
            'A three-armed rotating barrier for managing pedestrian flow, commonly used at stadiums, amusement parks, and public transport stations.',
          imageUrl:
            '/optimized/boom/tripod.webp',
          specifications: {
            Throughput: '25-30 people/minute',
            Material: 'SUS304 Stainless Steel',
            Power: 'AC 220V/110V',
            Operation: 'Semi-automatic / Full-automatic',
          },
        },
        {
          name: 'Swing Gates',
          description:
            'ADA-compliant barriers that provide wider access for wheelchairs and deliveries, often used alongside flap barriers.',
          imageUrl:
            '/optimized/boom/swing.webp',
          specifications: {
            'Lane Width': '900 - 1200mm',
            Material: 'Stainless Steel / Acrylic',
            Safety: 'Infrared Sensors, Anti-tailgating',
            Application: 'Wheelchair & Delivery Access',
          },
        },
      ],
      faq: [
        {
          question: 'How fast do the boom barriers open and close?',
          answer:
            'Opening and closing speeds vary by model, but we offer high-speed options that can operate in as little as 1-3 seconds for high-traffic areas.',
        },
        {
          question: 'What safety features are included?',
          answer:
            'Our barriers are equipped with safety photocells and loop detectors that prevent the arm from lowering if a vehicle or person is detected in its path.',
        },
        {
          question: 'Can these barriers be used with a payment system?',
          answer:
            'Yes, they integrate seamlessly with parking management and payment systems, automatically raising for authorized or paid vehicles.',
        },
        {
          question: 'How do they perform in harsh weather?',
          answer:
            'The barriers are built with weatherproof materials and powerful motors designed to operate reliably in a wide range of weather conditions.',
        },
        {
          question: 'What is the maintenance requirement?',
          answer:
            'We recommend a regular maintenance schedule to ensure the longevity and smooth operation of the mechanical and electronic components. We offer annual maintenance contracts for this purpose.',
        },
      ],
    },
  ];

  // 3. Alarm & Safety Systems
  const alarmSafetyProducts: Product[] = [
    {
      id: 'burglar-alarm',
      path: '/products/burglar-alarm',
      name: 'Burglar Alarm Systems',
      icon: BellAlertIcon,
      tagline: 'Intelligent Protection Against Intruders.',
      description:
        'Protect your property from intruders with our reliable and intelligent burglar alarm systems. Designed to secure every potential entry point, our systems use a network of sensors to detect unauthorized entry and immediately trigger a loud siren while alerting you and our monitoring center. We offer both wired and wireless solutions tailored to the specific layout of your home or business for comprehensive protection.',
      features: [
        'Advanced Door/Window Magnetic Sensors',
        'Pet-Immune Infrared Motion Detectors',
        'High-Decibel Sirens to Deter Intruders',
        '24/7 Professional Monitoring Options',
        'Full Control and Real-time Alerts via Smartphone App',
        'Integration with Smoke and Carbon Monoxide Detectors',
        'Panic Buttons for Immediate Emergency Response',
      ],
      imageUrl:
        '/optimized/burglar/burglar_banner.webp',
      overviewImageUrl:
        '/optimized/burglar/burglar_overview.webp',
      featuresImageUrl:
        '/optimized/burglar/burglar_overview.webp',
      whyChooseUs: alarmSafetyWhyChooseUs,
      productTypes: [
        {
          name: 'Wired Alarm Systems',
          description:
            'A highly reliable and robust solution where all sensors are physically wired to a central control panel. Ideal for new constructions.',
          imageUrl:
            '/optimized/burglar/wired.webp',
          specifications: {
            Zones: '8 to 128+ Wired Zones',
            Reliability: 'Extremely High',
            'Sensor Types': 'PIR, Magnetic, Vibration',
            Power: 'Mains with Battery Backup',
          },
        },
        {
          name: 'Wireless Alarm Systems',
          description:
            'Offers easy, mess-free installation using battery-powered sensors that communicate wirelessly, perfect for existing homes and businesses.',
          imageUrl:
            '/optimized/burglar/wireless.webp',
          specifications: {
            Frequency: '433MHz / 868MHz',
            'Wireless Range': 'Up to 2km (Line of Sight)',
            'Sensor Battery Life': '1-3 Years',
            Installation: 'Fast & Clean',
          },
        },
        {
          name: 'Hybrid Alarm Systems',
          description:
            'Combines the best of both worlds, allowing for a mix of wired and wireless sensors to provide a flexible and scalable security solution.',
          imageUrl:
            '/optimized/burglar/hybrid.webp',
          specifications: {
            Zones: 'Expandable Wired & Wireless Zones',
            Flexibility: 'High',
            Scalability: 'Excellent for future expansion',
            'Key Features': 'Combines reliability and convenience',
          },
        },
      ],
      faq: [
        {
          question: 'What happens when the burglar alarm is triggered?',
          answer:
            'When a sensor is triggered, a loud siren activates locally. Simultaneously, a signal is sent to your smartphone and, if you have monitoring, to our central station who will contact you and dispatch authorities if necessary.',
        },
        {
          question: 'Can I have pets without setting off the alarm?',
          answer:
            'Yes, we use pet-immune motion sensors that are calibrated to ignore the movement of small animals up to a certain weight, preventing false alarms.',
        },
        {
          question: 'Will the system work during a power outage?',
          answer:
            'Yes, all our alarm panels have a built-in backup battery that keeps the system fully operational for several hours during a power failure.',
        },
        {
          question: 'Is a wireless system as reliable as a wired one?',
          answer:
            'Modern wireless alarm systems are extremely reliable. They use encrypted signals to communicate securely and have long-lasting batteries with low-battery indicators.',
        },
        {
          question: 'Can I arm or disarm the system remotely?',
          answer:
            'Absolutely. Our systems come with a smartphone app that allows you to arm, disarm, and check the status of your alarm system from anywhere in the world.',
        },
      ],
    },
    {
      id: 'fire-alarm-system',
      path: '/products/fire-alarm-system',
      name: 'Fire Alarm System',
      icon: ShieldExclamationIcon,
      tagline: 'Early Detection for Ultimate Protection.',
      description:
        'Ensure the safety of lives and property with our intelligent fire alarm systems. Providing crucial early detection of smoke, heat, and carbon monoxide, our systems are designed to alert occupants and emergency services at the first sign of danger. We offer both conventional systems for smaller buildings and advanced addressable systems for larger facilities, ensuring compliance with all safety regulations.',
      features: [
        'High-Sensitivity Smoke and Heat Detectors',
        'Manual Call Points for Manual Activation',
        'Loud Audio and Visual Alarms (Strobes)',
        'Addressable Systems for Pinpointing Fire Location',
        'Integration with Public Address and Building Management Systems',
        'Automated Emergency Service Notification',
        'Regular System Self-Diagnostic Checks',
      ],
      imageUrl:
        '/optimized/firealarm/fire_alarm_banner.webp',
      overviewImageUrl:
        '/optimized/firealarm/fire_alarm_overview.webp',
      featuresImageUrl:
        '/optimized/firealarm/fire_alarm_overview.webp',
      whyChooseUs: alarmSafetyWhyChooseUs,
      productTypes: [
        {
          name: 'Conventional Systems',
          description:
            'Divides the building into broad zones. When a detector is triggered, the panel indicates the zone but not the specific device. Suitable for smaller buildings.',
          imageUrl:
            '/optimized/firealarm/conventional.webp',
          specifications: {
            'System Type': 'Zoned',
            'Detector Capacity': 'Up to 32 per zone',
            Application: 'Small Shops, Offices, Warehouses',
            Compliance: 'Local Fire Codes',
          },
        },
        {
          name: 'Addressable Systems',
          description:
            'Assigns a unique address to each detector and call point, allowing the fire alarm panel to pinpoint the exact location of a fire. Essential for larger facilities.',
          imageUrl:
            '/optimized/firealarm/addressable.webp',
          specifications: {
            'System Type': 'Addressable Loop',
            'Device Capacity': 'Up to 254 per loop',
            'Location ID': 'Pinpoint Accuracy',
            Application: 'Hospitals, Hotels, Large Buildings',
          },
        },
        {
          name: 'Wireless Systems',
          description:
            "Uses wireless detectors and devices, offering a flexible and easy-to-install solution for buildings where wiring is difficult, such as historic properties.",
          imageUrl:
            '/optimized/firealarm/wireless.webp',
          specifications: {
            Frequency: '868 MHz',
            'Wireless Range': 'Up to 1.5 km (Line of Sight)',
            'Device Battery Life': 'Up to 10 Years',
            Compliance: 'EN54-25 Standard',
          },
        },
      ],
      faq: [
        {
          question:
            'What is the difference between a conventional and an addressable fire alarm system?',
          answer:
            'A conventional system divides the building into broad zones. An addressable system assigns a unique address to each detector, allowing you to identify the exact location of a fire, which is crucial for large buildings.',
        },
        {
          question: 'How often does a fire alarm system need to be tested?',
          answer:
            'Regulations typically require fire alarm systems to be professionally inspected and tested at least annually. We offer maintenance contracts to ensure your system remains compliant and fully functional.',
        },
        {
          question: 'Can the system alert the fire department automatically?',
          answer:
            'Yes, our systems can be connected to a monitoring service that will automatically notify the fire department when an alarm is triggered, ensuring the fastest possible response.',
        },
        {
          question: 'What types of detectors do I need?',
          answer:
            'The type of detectors needed (smoke, heat, multi-sensor) depends on the environment. Our experts will conduct a site survey to recommend the optimal solution for each area of your building.',
        },
        {
          question: 'Does the system work if the power fails?',
          answer:
            'Yes, all fire alarm systems are required by code to have a battery backup that keeps the system operational for at least 24 hours in standby and 5 minutes in full alarm.',
        },
      ],
    },
    {
      id: 'metal-detector',
      path: '/products/metal-detector',
      name: 'Metal Detectors',
      icon: ShieldCheckIcon,
      tagline: 'High-Sensitivity Screening for a Safer Environment.',
      description:
        'Enhance security screening at your facility with our high-sensitivity metal detectors. We provide both walk-through archway models for high-traffic areas and portable hand-held units for secondary screening. Ideal for schools, event venues, airports, and corporate buildings, our detectors are designed to accurately and efficiently detect concealed weapons and contraband, ensuring a safer environment for everyone.',
      features: [
        'Multi-Zone Detection in Walk-Through Models',
        'High Accuracy Screening with Minimal False Alarms',
        'Adjustable Sensitivity Levels for Different Security Needs',
        'Durable, Weatherproof Construction for Indoor/Outdoor Use',
        'Integrated Traffic Counters and Alarm Indicators',
        'Lightweight and Ergonomic Hand-Held Scanners',
        'Compliance with International Security Standards',
      ],
      imageUrl:
        '/optimized/metal/metal_banner.webp',
      overviewImageUrl:
        '/optimized/metal/metal_overview.webp',
      featuresImageUrl:
        '/optimized/metal/metal_overview.webp',
      whyChooseUs: alarmSafetyWhyChooseUs,
      productTypes: [
        {
          name: 'Walk-Through Metal Detectors',
          description:
            'Archway detectors for high-volume screening at entry points, providing rapid, full-body scans to keep traffic flowing.',
          imageUrl:
            '/optimized/metal/walk.webp',
          specifications: {
            'Detection Zones': '6, 18, 33 Zones',
            'Sensitivity Levels': '0-255 Adjustable',
            Throughput: '~60 people/minute',
            Compliance: 'NILECJ-0601.00',
          },
        },
        {
          name: 'Hand-Held Metal Detectors',
          description:
            'Portable wands used by security personnel for secondary screening to pinpoint the exact location of a detected metal object.',
          imageUrl:
            '/optimized/metal/hand.webp',
          specifications: {
            Sensitivity: 'High, for all metals',
            Indicators: 'Audio, LED Light, Vibration',
            'Battery Life': 'Up to 80 hours',
            Weight: '~200g',
          },
        },
      ],
      faq: [
        {
          question: 'What is multi-zone detection in a metal detector?',
          answer:
            "Multi-zone walk-through detectors pinpoint the location of a detected metal object on a person's body (e.g., left ankle, right torso), which speeds up the secondary screening process.",
        },
        {
          question:
            'Will the detector be triggered by everyday items like keys or coins?',
          answer:
            'The sensitivity of the detector can be adjusted to ignore small, harmless metal objects while still detecting larger items that pose a potential threat.',
        },
        {
          question:
            'Are walk-through metal detectors safe for pregnant women or people with pacemakers?',
          answer:
            'Yes, our metal detectors use low-frequency magnetic fields and are certified to be completely safe for all individuals, including those with medical implants and expectant mothers.',
        },
        {
          question: 'How many people can be screened per minute?',
          answer:
            'A walk-through metal detector can screen a high volume of people, typically 50-60 individuals per minute, making them ideal for high-traffic entry points.',
        },
        {
          question: 'Are the hand-held detectors easy to use?',
          answer:
            'Yes, our hand-held scanners are lightweight, user-friendly, and provide clear audible and vibrating alarms, requiring minimal training for security personnel.',
        },
      ],
    },
    {
      id: 'acousto-magnetic-eas',
      path: '/products/acousto-magnetic-eas',
      name: 'Acousto Magnetic (EAS) Systems',
      icon: ShieldCheckIcon,
      tagline: 'Protecting Your Merchandise, Preventing Loss.',
      description:
        'Protect your merchandise and reduce shrinkage with our high-performance Acousto-Magnetic (AM) Electronic Article Surveillance (EAS) systems. Ideal for retail environments, our systems offer a high detection rate and wide exit coverage to prevent theft effectively. From discreet adhesive labels to reusable hard tags, we provide a complete solution to safeguard your inventory without disrupting the customer shopping experience.',
      features: [
        'Superior Detection Rate for All Tag Types',
        'Wide Exit Coverage to Protect Even Large Entrances',
        'Advanced Signal Processing to Minimize False Alarms',
        'Durable and Reusable Hard Tags for Apparel',
        'Discreet Adhesive Labels for Packaged Goods',
        'Seamless Deactivation at the Point-of-Sale (POS)',
        'Jammer Detection to Combat Professional Shoplifters',
      ],
      imageUrl:
        '/optimized/acousto/acousto_banner.webp',
      overviewImageUrl:
        '/optimized/acousto/acousto_overview.webp',
      featuresImageUrl:
        '/optimized/acousto/acousto_overview.webp',
      whyChooseUs: alarmSafetyWhyChooseUs,
      productTypes: [
        {
          name: 'EAS Pedestal Systems',
          description:
            'The visible antenna systems placed at store entrances and exits, providing a strong visual deterrent to shoplifters.',
          imageUrl:
            '/optimized/acousto/eas.webp',
          specifications: {
            Technology: 'Acousto-Magnetic (AM)',
            Frequency: '58 KHz',
            'Detection Range': 'Up to 2.4 meters',
            Material: 'ABS / Acrylic',
          },
        },
        {
          name: 'Concealed EAS Systems',
          description:
            "Hidden systems installed within the door frame or under the floor for discreet protection that doesn't affect store aesthetics.",
          imageUrl:
            '/optimized/acousto/concealed.webp',
          specifications: {
            Installation: 'Door-frame / Under-floor',
            Aesthetics: 'Completely Invisible',
            'Detection Range': 'Up to 2 meters',
            Performance: 'High, resistant to interference',
          },
        },
        {
          name: 'Security Tags & Labels',
          description:
            'A wide variety of reusable hard tags for clothing and disposable soft labels for packaged goods.',
          imageUrl:
            '/optimized/acousto/security.webp',
          specifications: {
            Type: 'Hard Tags, Soft Labels',
            Frequency: '58 KHz (AM)',
            Durability: 'Reusable / Disposable',
            Application: 'Apparel, Packaged Goods, Cosmetics',
          },
        },
        {
          name: 'Deactivators & Detachers',
          description:
            'Essential point-of-sale tools to quickly and safely deactivate labels and remove hard tags from purchased items.',
          imageUrl:
            '/optimized/acousto/deactivators.webp',
          specifications: {
            Technology: 'Magnetic / Contact',
            'Deactivation Height': 'Up to 15cm',
            Power: 'Mains Powered',
            Compatibility: 'AM Tags & Labels',
          },
        },
      ],
      faq: [
        {
          question: 'How does an EAS system work?',
          answer:
            'An EAS system consists of two pedestals at the store exit that create a surveillance zone. If a product with an active security tag passes through this zone, an alarm is triggered.',
        },
        {
          question: 'What is the difference between AM and RF technology?',
          answer:
            'Acousto-Magnetic (AM) systems operate at a lower frequency (58 KHz) and are generally better at protecting wider exits and detecting tags near metal objects, making them ideal for a variety of retail stores.',
        },
        {
          question: 'Will the system interfere with my other electronic devices?',
          answer:
            'No, our EAS systems are designed to operate on a specific frequency that does not interfere with other electronics like POS systems, Wi-Fi, or mobile phones.',
        },
        {
          question: 'How are the security tags removed or deactivated?',
          answer:
            'Reusable hard tags are removed at the checkout counter with a special detacher, while adhesive labels are deactivated by a deactivation pad integrated into the POS scanner.',
        },
        {
          question: 'Can the appearance of the pedestals be customized?',
          answer:
            "Yes, we offer a range of pedestal designs and can incorporate custom advertising panels to ensure the system complements your store's aesthetic.",
        },
      ],
    },
  ];

  // 4. Communication Systems
  const communicationProducts: Product[] = [
    {
      id: 'intercom-system',
      path: '/products/intercom-system',
      name: 'Intercom Systems',
      icon: PhoneIcon,
      tagline: 'Seamless Communication for Secure Access.',
      description:
        'Streamline communication and enhance visitor management with our advanced intercom systems. We offer a range of solutions, from simple audio-only units to sophisticated IP-based video intercoms that integrate with your smartphone. Ideal for residential buildings, gated communities, and corporate offices, our systems provide a secure and convenient way to screen visitors before granting access.',
      features: [
        'High-Definition Video and Crystal-Clear Audio',
        'Remote Door/Gate Release Functionality',
        'Multi-Unit Scalability for Apartment Complexes',
        'Integration with Access Control and CCTV Systems',
        'Call Forwarding to Mobile Devices',
        'Visitor Image and Video Capture',
        'Weatherproof and Vandal-Resistant Outdoor Stations',
      ],
      imageUrl:
        '/optimized/intercom/intercom_banner.webp',
      overviewImageUrl:
        '/optimized/intercom/intercom_overview.webp',
      featuresImageUrl:
        '/optimized/intercom/intercom_overview.webp',
      whyChooseUs: communicationWhyChooseUs,
      productTypes: [
        {
          name: 'Audio Intercoms',
          description:
            'Provides clear, two-way voice communication between an entrance and internal handsets. A simple and reliable solution for visitor screening.',
          imageUrl:
            '/optimized/intercom/audio.webp',
          specifications: {
            Type: 'Audio Only',
            Wiring: '2-wire / 4-wire',
            'Max Units': 'Scalable for Multi-Apartment',
            'Key Features': 'Door Release, Intercommunication',
          },
        },
        {
          name: 'Video Intercoms',
          description:
            'Adds a video screen, allowing you to see visitors before you speak to them, significantly enhancing security.',
          imageUrl:
            '/optimized/intercom/video.webp',
          specifications: {
            'Screen Size': '4.3" / 7" Color Display',
            'Video Resolution': '720p HD',
            Wiring: '4-wire / CAT5',
            'Key Features': 'Video & Audio, Door Release',
          },
        },
        {
          name: 'IP-Based Intercoms',
          description:
            'Leverages your network to provide high-quality audio/video and advanced features like smartphone integration and remote access.',
          imageUrl:
            '/optimized/intercom/ip.webp',
          specifications: {
            Connectivity: 'TCP/IP, PoE',
            'Video Resolution': '1080p Full HD',
            'App Support': 'iOS & Android',
            Integration: 'CCTV, Access Control',
          },
        },
        {
          name: 'Wireless Intercoms',
          description:
            'Offers a convenient, cable-free installation, ideal for properties where running new wires is not feasible.',
          imageUrl:
            '/optimized/intercom/wireless.webp',
          specifications: {
            Frequency: 'DECT / 2.4 GHz',
            Range: 'Up to 300m',
            Power: 'Battery / Mains Adapter',
            'Key Features': 'Easy Installation, Portable Handset',
          },
        },
      ],
      faq: [
        {
          question: 'What is the advantage of an IP intercom system?',
          answer:
            'IP intercoms use your network infrastructure, offering greater flexibility, scalability, and advanced features like smartphone integration and remote management compared to traditional analog systems.',
        },
        {
          question: "Can I see and talk to visitors when I'm not home?",
          answer:
            "Yes, our IP-based systems can forward calls directly to your smartphone app, allowing you to interact with visitors and unlock the door from anywhere in the world.",
        },
        {
          question: 'What kind of wiring is required for an intercom?',
          answer:
            'The wiring depends on the system type. Analog systems typically require dedicated multi-core cabling, while IP systems can run on standard network (Ethernet) cables, which can also provide power (PoE).',
        },
        {
          question: 'Can the system be expanded in the future?',
          answer:
            'Absolutely. Our systems, especially the IP-based ones, are highly scalable. You can easily add more indoor monitors or outdoor stations as your needs grow.',
        },
        {
          question: 'Is the outdoor unit durable?',
          answer:
            'Yes, our outdoor stations are built to last. They feature IP weatherproof ratings to protect against rain and dust, and IK vandal-resistance ratings to withstand impact.',
        },
      ],
    },
    {
      id: 'walkie-talkie',
      path: '/products/walkie-talkie',
      name: 'Walkie-Talkies',
      icon: ChatBubbleLeftRightIcon,
      tagline: 'Instant Communication, Unbreakable Connection.',
      description:
        'Enable instant, reliable team communication with our professional-grade two-way radios (walkie-talkies). Perfect for industries like construction, event management, hospitality, and security, our radios are built to be durable and provide clear audio in noisy environments. We offer both license-free models for simple use and licensed radios for extended range and private channels.',
      features: [
        'Long-Range and Clear Communication',
        'Multiple Channels with Privacy Codes',
        'Rugged, Drop-Resistant, and Weather-Resistant Design',
        'Extended Battery Life for Full-Shift Operation',
        'Advanced Noise-Cancelling Technology',
        'Emergency/SOS Button Feature',
        'Hands-Free (VOX) Operation Capability',
      ],
      imageUrl:
        '/optimized/walkie/walkie-talkie_banner.webp',
      overviewImageUrl:
        '/optimized/walkie/walkie_overview.webp',
      featuresImageUrl:
        '/optimized/walkie/walkie_overview.webp',
      whyChooseUs: communicationWhyChooseUs,
      productTypes: [
        {
          name: 'License-Free Radios (PMR446)',
          description:
            'Simple, out-of-the-box radios for basic, short-range communication. Ideal for small sites and teams.',
          imageUrl:
            '/optimized/walkie/license.webp',
          specifications: {
            'Frequency Band': '446 MHz',
            Channels: '8 / 16 Channels',
            'Power Output': '0.5 Watt',
            Range: 'Up to 3km (Line of Sight)',
          },
        },
        {
          name: 'Licensed Radios (VHF/UHF)',
          description:
            'Professional radios that require a license to operate on dedicated frequencies, offering greater power, extended range, and more secure communication.',
          imageUrl:
            '/optimized/walkie/license_vhf.webp',
          specifications: {
            'Frequency Band': 'VHF (136-174MHz) / UHF (400-470MHz)',
            'Power Output': 'Up to 5 Watts',
            Range: 'Up to 10km+',
            Durability: 'MIL-STD-810 Rated',
          },
        },
        {
          name: 'Digital Radios (DMR)',
          description:
            'Provide superior audio clarity, enhanced battery life, and advanced features like text messaging and GPS tracking compared to analog radios.',
          imageUrl:
            '/optimized/walkie/dmr.webp',
          specifications: {
            Technology: 'Digital Mobile Radio (DMR)',
            'Audio Quality': 'Superior with Noise Cancellation',
            'Key Features': 'Text Messaging, GPS, Encryption',
            'Battery Life': 'Up to 40% better than Analog',
          },
        },
      ],
      faq: [
        {
          question: 'What is the typical range of a walkie-talkie?',
          answer:
            'Range depends on the model and terrain. License-free radios typically have a range of up to 1-2 km in open areas, while licensed radios can achieve much greater distances.',
        },
        {
          question: 'Do I need a license to operate these radios?',
          answer:
            'We offer both license-free (PMR446) radios for general use and licensed radios that require a license from the WPC. Licensed radios offer more power, greater range, and dedicated frequencies.',
        },
        {
          question: 'How long does the battery last?',
          answer:
            'Our professional radios are designed for all-day use, with batteries typically lasting from 8 to 16 hours on a single charge, depending on usage.',
        },
        {
          question: 'Are the radios durable enough for a construction site?',
          answer:
            'Yes, we specialize in rugged radios that are built to military standards for durability and often have IP ratings for water and dust resistance, making them ideal for harsh environments.',
        },
        {
          question: 'Can I communicate privately with my team?',
          answer:
            'Yes, by using channels and privacy codes (CTCSS/DCS), you can significantly reduce interference from other radio users in the area, ensuring your communications are clear.',
        },
      ],
    },
    {
      id: 'public-address-voice-alarm',
      path: '/products/public-address-system',
      name: 'Public Address & Voice Alarm',
      icon: SpeakerWaveIcon,
      tagline: 'Clarity in Communication, Certainty in Safety.',
      description:
        'Deliver crystal-clear announcements and ensure safety with our integrated Public Address and Voice Alarm (PA/VA) systems. Essential for public spaces like schools, malls, hospitals, and airports, these systems are used for general announcements, background music, and, most critically, for automated, intelligible voice evacuation instructions during emergencies. Our solutions are reliable, scalable, and compliant with safety standards.',
      features: [
        'Zoned Audio Control for Targeted Announcements',
        'High-Clarity Speakers for Excellent Intelligibility',
        'Automated, Pre-recorded Emergency Messages',
        'Seamless Integration with Fire Alarm Systems',
        'Ambient Noise Sensors for Automatic Volume Adjustment',
        'System Supervision and Fault Reporting',
        'Multi-source Input for Music, Microphones, and Alerts',
      ],
      imageUrl:
        '/optimized/voice_alarm/public_address_banner.webp',
      overviewImageUrl:
        '/optimized/voice_alarm/voice_alarm_overview.webp',
      featuresImageUrl:
        '/optimized/voice_alarm/voice_alarm_overview.webp',
      whyChooseUs: communicationWhyChooseUs,
      productTypes: [
        {
          name: 'Centralized Systems',
          description:
            'A traditional PA system where all amplifiers and controllers are located in a central rack. A reliable choice for single buildings.',
          imageUrl:
            '/optimized/voice_alarm/centralized.webp',
          specifications: {
            'Amplifier Power': '120W to 1000W+',
            Zoning: '6 to 24+ Zones',
            Inputs: 'Mic, Aux, BGM',
            Compliance: 'EN54-16 for Voice Alarm',
          },
        },
        {
          name: 'Decentralized / IP-Based Systems',
          description:
            'A modern solution that uses your network to distribute audio, offering incredible flexibility, scalability, and remote management for large or multi-site campuses.',
          imageUrl:
            '/optimized/voice_alarm/decentralized.webp',
          specifications: {
            Connectivity: 'IP / Ethernet Network',
            Scalability: 'Virtually Unlimited Zones',
            'Audio Quality': 'High-Fidelity Digital Audio',
            Management: 'Web-based Software',
          },
        },
      ],
      faq: [
        {
          question: 'What is the main purpose of a Voice Alarm system?',
          answer:
            'A Voice Alarm system is a life safety system that provides clear, unambiguous voice instructions to guide people during an emergency, such as a fire, leading to a more orderly and faster evacuation than traditional bells or sirens.',
        },
        {
          question:
            'How is a PA/VA system different from a regular PA system?',
          answer:
            'A PA/VA system is built to higher life-safety standards. It includes features like system monitoring, battery backup, and fire-resistant cabling to ensure it works reliably during an emergency.',
        },
        {
          question: 'Can I play background music through the system?',
          answer:
            'Yes, one of the key functions is to provide high-quality background music. In an emergency, music is automatically overridden by the alarm or voice message.',
        },
        {
          question: 'What does "zoned audio" mean?',
          answer:
            'Zoning allows you to divide a building into different areas and send specific announcements or music only to selected zones. This is useful for targeted messaging and phased evacuation.',
        },
        {
          question: 'Is the system difficult to operate?',
          answer:
            'No, the systems are designed for ease of use. Paging microphones have simple controls for zone selection and making announcements, while emergency functions are typically automated.',
        },
      ],
    },
  ];

  // 5. Smart & IT Solutions
  const smartITProducts: Product[] = [
    {
      id: 'home-automation-systems',
      path: '/products/home-automation',
      name: 'Home Automation Systems',
      icon: HomeModernIcon,
      tagline: 'Smart Living, Simplified.',
      description:
        "Transform your house into a smart home with our intuitive automation systems. Seamlessly integrate and control your lighting, climate, entertainment, and security from a single app on your smartphone or with simple voice commands. Our solutions are designed to enhance your comfort, convenience, and energy efficiency, creating a living experience that is perfectly tailored to your lifestyle.",
      features: [
        'Centralized Control of Lighting, Climate, and More',
        'Compatibility with Voice Assistants like Alexa and Google Home',
        'Create Custom "Scenes" (e.g., "Movie Night", "Good Morning")',
        'Energy-Saving Schedules and Automation Rules',
        'Remote Access and Control from Anywhere in the World',
        'Integration with Security Systems, Cameras, and Smart Locks',
        'Modular Design to Start Small and Expand Over Time',
      ],
      imageUrl:
        '/optimized/smart_home/smart_home_banner.webp',
      overviewImageUrl:
        '/optimized/smart_home/home_smart_overview.webp',
      featuresImageUrl:
        '/optimized/smart_home/home_smart_overview.webp',
      whyChooseUs: smartITWhyChooseUs,
      productTypes: [
        {
          name: 'Lighting Control',
          description:
            "Automate your home's lighting with smart switches, dimmers, and bulbs to create ambiance, save energy, and enhance security.",
          imageUrl:
            '/optimized/smart_home/lighting.webp',
          specifications: {
            Protocol: 'Wi-Fi, Zigbee, Z-Wave',
            Compatibility: 'Alexa, Google Home, Apple HomeKit',
            Features: 'Dimming, Color Change (RGBW)',
            Control: 'App, Voice, Schedules',
          },
        },
        {
          name: 'Climate Control',
          description:
            'Smart thermostats and AC controllers that learn your schedule to optimize comfort and reduce your energy bills.',
          imageUrl:
            '/optimized/smart_home/climate.webp',
          specifications: {
            Compatibility: 'Central AC, Mini-Splits, Radiators',
            Features: 'Learning Schedule, Geofencing',
            'Energy Saving': 'Up to 20%',
            Control: 'App, Voice, Remote Sensors',
          },
        },
        {
          name: 'Security & Safety Integration',
          description:
            'Unify your smart locks, cameras, sensors, and alarms into a single system for comprehensive home protection.',
          imageUrl:
            '/optimized/smart_home/safety.webp',
          specifications: {
            Protocol: 'Wi-Fi, Zigbee, Z-Wave',
            Sensors: 'Door/Window, Motion, Smoke',
            Alerts: 'Push Notifications, Email',
            'Central Hub': 'Required for some systems',
          },
        },
        {
          name: 'Smart Entertainment',
          description:
            'Control your entire home theater or multi-room audio system with a single remote, app, or voice command.',
          imageUrl:
            '/optimized/smart_home/smart.webp',
          specifications: {
            'Devices Supported': 'TV, Soundbar, AV Receiver, Streaming Box',
            'Control Method': 'Universal Remote, App, Voice',
            'Multi-Room Audio': 'Sonos, HEOS, etc.',
            'Voice Control': 'Alexa, Google Assistant',
          },
        },
      ],
      faq: [
        {
          question: 'Do I need to rewire my house for home automation?',
          answer:
            'Not necessarily. Many modern smart home devices are wireless and can be retrofitted into your existing home with minimal disruption. We offer both wired and wireless solutions.',
        },
        {
          question: 'Can I start with just one or two smart devices?',
          answer:
            'Absolutely. Our systems are modular, so you can start with smart lighting in one room or a smart thermostat and expand your system over time as your needs and budget allow.',
        },
        {
          question: 'Is my smart home system secure from hacking?',
          answer:
            'Security is a top priority. We use products from reputable brands that employ robust encryption and security protocols to protect your system and your data from unauthorized access.',
        },
        {
          question: 'How does home automation save energy?',
          answer:
            "By automatically turning off lights in unoccupied rooms, adjusting the thermostat when you're away, and scheduling appliance usage, a smart home can significantly reduce your energy consumption.",
        },
        {
          question: 'What happens if my internet connection goes down?',
          answer:
            'Many core automation functions, such as schedules and sensor-based triggers, will continue to work locally without an internet connection. Remote access would be unavailable until the connection is restored.',
        },
      ],
    },
    {
      id: 'digital-signage',
      path: '/products/digital-signage',
      name: 'Digital Signage Solutions',
      icon: PlayIcon,
      tagline: 'Dynamic Displays to Captivate Your Audience.',
      description:
        "Capture your audience's attention with our dynamic digital signage solutions. Perfect for retail stores, restaurants, corporate offices, and public venues, digital signage allows you to display engaging content, from advertisements and menus to important information and live updates. We provide a complete solution, including commercial-grade displays, media players, and user-friendly cloud-based software for easy content management.",
      features: [
        'Centralized Cloud-Based Content Management',
        'Support for High-Definition and 4K Displays',
        'Advanced Content Scheduling and Dayparting',
        'Interactive Touchscreen and Wayfinding Options',
        'Multi-Display Synchronization for Video Walls',
        'Durable Commercial-Grade Screens for 24/7 Operation',
        'Easy Integration with Live Data Feeds and Social Media',
      ],
      imageUrl:
        '/optimized/digital/digital_banner.webp',
      overviewImageUrl:
        '/optimized/digital/digital_overview.webp',
      featuresImageUrl:
        '/optimized/digital/digital_overview.webp',
      whyChooseUs: smartITWhyChooseUs,
      productTypes: [
        {
          name: 'Standalone Displays',
          description:
            'Single screens that are updated manually via USB. A simple, cost-effective solution for displaying static content.',
          imageUrl:
            '/optimized/digital/standalone.webp',
          specifications: {
            'Update Method': 'USB Plug-and-Play',
            'Content Format': 'JPEG, MP4, MPEG',
            'Size Options': '22" to 55"',
            Brightness: '350-500 nits',
          },
        },
        {
          name: 'Networked Displays',
          description:
            'Displays connected to a network, allowing for remote content management and scheduling from a central, cloud-based platform.',
          imageUrl:
            '/optimized/digital/networked.webp',
          specifications: {
            Connectivity: 'Wi-Fi, Ethernet',
            CMS: 'Cloud-Based Software',
            Scheduling: 'Advanced Dayparting',
            'Size Options': '32" to 98"',
          },
        },
        {
          name: 'Interactive/Touchscreen Displays',
          description:
            'Engage your audience with interactive content, perfect for wayfinding, product catalogs, and information kiosks.',
          imageUrl:
            '/optimized/digital/touchscreen.webp',
          specifications: {
            'Touch Technology': 'Infrared (IR) / PCAP',
            'Touch Points': '10-20 Points',
            'Operating System': 'Android / Windows',
            Application: 'Wayfinding, Kiosks, Retail',
          },
        },
        {
          name: 'Video Walls',
          description:
            'Multiple screens tiled together to create one large, seamless, and high-impact visual display.',
          imageUrl:
            '/optimized/digital/video_walls.webp',
          specifications: {
            Configuration: '2x2, 3x3, Custom',
            'Bezel Width': 'Ultra-Narrow (0.88mm to 3.5mm)',
            Brightness: '500-700 nits',
            Resolution: 'Up to 4K per display',
          },
        },
      ],
      faq: [
        {
          question: 'How do I update the content on the digital signage screens?',
          answer:
            'Our systems use cloud-based software, allowing you to upload, schedule, and manage content on any screen, from anywhere, using a simple web browser.',
        },
        {
          question: 'What kind of content can I display?',
          answer:
            'You can display a wide variety of content, including images, videos, presentations, web pages, live TV, social media feeds, and custom-designed templates.',
        },
        {
          question:
            'What is the difference between a commercial display and a regular TV?',
          answer:
            'Commercial displays are designed for long hours of operation (often 24/7), are brighter, have better warranties, and include features for remote management that consumer TVs lack.',
        },
        {
          question: 'Can I schedule content to play at specific times?',
          answer:
            'Yes, a key feature is the ability to schedule different content to play on different days and at different times (a practice called dayparting), which is perfect for restaurant menus or daily promotions.',
        },
        {
          question: "Do I need a separate computer for each screen?",
          answer:
            "No, each screen is connected to a small, dedicated media player. All these players are managed centrally from the cloud software, so you don't need a PC at each location.",
        },
      ],
    },
    {
      id: 'it-products',
      path: '/products/it-products',
      name: 'IT & Networking Products',
      icon: CogIcon,
      tagline: 'The Foundation for Your Digital Success.',
      description:
        'Build a powerful and reliable foundation for your business with our comprehensive range of IT products and services. We specialize in designing and implementing robust network infrastructures, including structured cabling, high-performance networking hardware, and enterprise-grade Wi-Fi solutions. From a small office to a large campus, we provide the backbone that your business operations depend on.',
      features: [
        'Professional Structured Cabling (Cat6, Cat6a, Fiber Optic)',
        'High-Performance Routers, Switches, and Access Points',
        'Enterprise-Grade Network Security and Firewalls',
        'Scalable Server and Data Storage Solutions',
        'Seamless, High-Density Wi-Fi Coverage',
        'Network Design, Implementation, and Maintenance Services',
        'Uninterruptible Power Supply (UPS) Solutions',
      ],
      imageUrl:
        '/optimized/it_network/networking_banner.webp',
      overviewImageUrl:
        '/optimized/it_network/it_network_overview.webp',
      featuresImageUrl:
        '/optimized/it_network/it_network_overview.webp',
      whyChooseUs: smartITWhyChooseUs,
      productTypes: [
        {
          name: 'Structured Cabling',
          description:
            'The organized installation of your network cabling (Cat6, Fiber Optic) to create a reliable and scalable IT foundation.',
          imageUrl:
            '/optimized/it_network/structured-jpeg.webp',
          specifications: {
            'Cable Type': 'Cat6, Cat6A, Fiber Optic',
            Standard: 'TIA/EIA-568',
            Performance: 'Up to 10 Gbps',
            Application: 'Data, Voice, Video',
          },
        },
        {
          name: 'Networking Hardware',
          description:
            'A complete range of enterprise-grade routers, switches, and firewalls to manage and secure your network traffic.',
          imageUrl:
            '/optimized/it_network/networking.webp',
          specifications: {
            Type: 'Router, Switch, Firewall',
            Ports: '8, 16, 24, 48 Ports',
            Speed: 'Gigabit / 10-Gigabit Ethernet',
            Features: 'PoE+, VLAN, QoS, VPN',
          },
        },
        {
          name: 'Wireless Solutions',
          description:
            'Professionally designed Wi-Fi networks with strategically placed access points to provide seamless, high-speed coverage.',
          imageUrl:
            '/optimized/it_network/wireless.webp',
          specifications: {
            'Wi-Fi Standard': 'Wi-Fi 6 (802.11ax)',
            Speed: 'Up to 5.4 Gbps',
            Coverage: 'High-Density Access Points',
            Security: 'WPA3 Enterprise',
          },
        },
        {
          name: 'Servers & Storage',
          description:
            'Reliable server and Network Attached Storage (NAS) solutions for centralized data management, file sharing, and backups.',
          imageUrl:
            '/optimized/it_network/storage.webp',
          specifications: {
            Type: 'Rackmount / Tower Server, NAS',
            Capacity: 'Scalable from Terabytes to Petabytes',
            'Form Factor': '1U, 2U, 4U Rackmount',
            'Use Case': 'File Sharing, Backup, Virtualization',
          },
        },
      ],
      faq: [
        {
          question: 'Why is structured cabling important for my business?',
          answer:
            'Structured cabling is the standardized architecture for your IT network. A properly designed and installed system provides a reliable, scalable, and organized foundation that reduces downtime and simplifies future upgrades.',
        },
        {
          question:
            'What is the difference between a managed and unmanaged switch?',
          answer:
            'An unmanaged switch is a simple plug-and-play device. A managed switch provides greater control over your network, with features like VLANs, QoS, and security monitoring, which are essential for business networks.',
        },
        {
          question: 'How can I improve the Wi-Fi in my office?',
          answer:
            'We conduct a Wi-Fi site survey to identify dead zones and interference. Based on this, we design a solution with multiple, strategically placed access points to provide seamless, high-speed coverage throughout your entire office.',
        },
        {
          question: 'Do I need a firewall for my business?',
          answer:
            'Absolutely. A firewall is a critical security device that monitors and controls incoming and outgoing network traffic, protecting your business from cyber threats like malware and unauthorized access.',
        },
        {
          question: 'What is a UPS and why do I need one?',
          answer:
            'An Uninterruptible Power Supply (UPS) provides emergency power to your critical IT equipment (like servers and routers) during a power outage. This prevents data loss and downtime by allowing systems to shut down gracefully.',
        },
      ],
    },
  ];

  // --- Categories ---
  export const PRODUCT_CATEGORIES: ProductCategory[] = [
    {
      id: 'surveillance-monitoring',
      name: 'Surveillance & Monitoring',
      path: '/products#surveillance-monitoring',
      shortDescription:
        'Advanced CCTV solutions to keep a watchful eye on your assets and properties.',
      description:
        'Our Surveillance & Monitoring category offers state-of-the-art systems for complete protection. From high-definition CCTV and smart video door phones to mobile asset tracking, we provide the tools you need to maintain visibility and security.',
      products: surveillanceProducts,
      icon: CameraIcon,
      imageUrl:
        '/optimized/camera/camera_overview.webp',
    },
    {
      id: 'access-control',
      name: 'Access Control Solutions',
      path: '/products#access-control',
      shortDescription:
        'Manage and monitor entry to your premises with advanced, keyless solutions.',
      description:
        'Take full control of who enters your property with our sophisticated Access Control systems. We offer state-of-the-art biometric, smart lock, and automated barrier solutions to provide secure, convenient, and auditable access for your facility.',
      products: accessControlProducts,
      icon: FingerPrintIcon,
      imageUrl:
        '/optimized/access_control/access_control_overview.webp',
    },
    {
      id: 'alarm-safety',
      name: 'Alarm & Safety Systems',
      path: '/products#alarm-safety',
      shortDescription:
        'Proactive detection and alert systems to protect against intrusion, fire, and theft.',
      description:
        'Safeguard your property and personnel with our reliable Alarm & Safety Systems. This category includes intelligent burglar alarms, early-warning fire detection, and specialized retail security solutions to mitigate risks and ensure rapid response.',
      products: alarmSafetyProducts,
      icon: BellAlertIcon,
      imageUrl:
        '/optimized/firealarm/fire_alarm_overview.webp',
    },
    {
      id: 'communication-systems',
      name: 'Communication Systems',
      path: '/products#communication-systems',
      shortDescription:
        'Reliable systems for clear, instant communication in any environment.',
      description:
        'Stay connected with our robust Communication Systems. We provide everything from professional intercom and public address systems for buildings to rugged two-way radios for on-the-go coordination, ensuring your message always gets through.',
      products: communicationProducts,
      icon: SpeakerWaveIcon,
      imageUrl:
        '/optimized/intercom/intercom_overview.webp',
    },
    {
      id: 'smart-it-solutions',
      name: 'Smart & IT Solutions',
      path: '/products#smart-it-solutions',
      shortDescription:
        'Integrate and automate your environment for intelligent living and robust business operations.',
      description:
        'Step into the future with our Smart & IT Solutions. Automate your home for ultimate convenience, build a powerful IT infrastructure for your business, and engage your audience with dynamic digital signage. We provide the backbone for modern efficiency.',
      products: smartITProducts,
      icon: CogIcon,
      imageUrl:
        '/optimized/it_network/networking_banner.webp',
    },
  ];

  // --- Flattened Lists for App-wide use ---
  export const ALL_PRODUCTS: Product[] = PRODUCT_CATEGORIES.flatMap(
    (category) => category.products
  );