import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("i18nextLng") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        MySelf: {
          name: "Mohamed Mrabet",
          job: "Full Stack js developer",
          description: `I am a passionate full-stack developer with a knack for crafting
              robust and scalable web applications. I have honed my skills in
              front-end technologies like React.js and Next.js, as well as
              back-end technologies like Node.js, MySQL, Express, and MongoDB.
              My goal is to leverage my expertise to create innovative solutions
              that drive business growth and deliver exceptional user
              experiences.`,
        },
        Techno: {
          name: "Technologies",
        },
        Experience: {
          name: "Experiences",
          exp1: "Internship",
          exp2: "Technicien",
          exp3: "Cashier",
          exp4: "Internship",
        },
        education: {
          name: "Education",
          education1: "License in Electronics and Industrial Systems",
          education2:
            "Higher Institute of Applied Sciences and Technology Mateur",
          education3: "Baccalaureate degree",
          education4:
            "Baccalaureate in Mathematical Sciences,Main Session Mohamed Ali Ennabi Secondary School – Ras Jebel, Bizerte",
        },
        certicats: {
          name: "Certification",
          description: "Full Stack Web Development",
        },
        project: {
          name: "Projects",
          project0: "Jalyss _ Web Site",
          sous_project1:
            "Setting up back-end systems based on Nest.js to efficiently manage data and facilitate seamless operations.",
          sous_project2:
            "Using React to build dynamic and interactive front-end interfaces, ensuring optimal user experiences.",
          project00: "Codini _ Web Site",
          sous_project01:
            "Developed SQL-based back-end systems to efficiently manage data and facilitate seamless operations.",
          sous_project02:
            "Utilized Next.js to construct dynamic and interactive front-end interfaces,ensuring optimal user experiences.",
          project000: "Market Place _ Web Site",
          sous_project001:
            "Developed a sleek and responsive front-end utilizing Material-UI to create modern and visually appealing user interfaces",
          sous_project002:
            "Implemented a robust back-end infrastructure using SQL to efficiently manage and store data, ensuring a secure and scalable foundation for seamless application functionality.",
        },
        Contact: {
          name: "Get in Touch",
          adress: "Rue Romarin_Ras Jebel_Bizerte",
          tlf: `+ 216 92 015 910`,
          gmail: `mohamed10021995@gmail.com`,
        },
        About: {
          aboutme: "About",
          aboutme1: "Me",
          aboutm2: `  I am a dedicated and versatile Full Stack Developer with a passion
              for building efficient and user-centric web applications. With
              over a year of professional experience, I have developed expertise
              in a wide range of technologies, including React, Next.js, MySQL,
              PostgreSQL, and MongoDB. My journey in web development began with
              a curiosity for how technology works, which has evolved into a
              continuous pursuit of innovation and growth. I thrive on solving
              complex challenges and staying up to date with emerging trends in
              the tech industry. Beyond coding, I enjoy staying active,
              exploring new technologies, and contributing to open-source
              projects.`,
        },
      },
    },
    ar: {
      translation: {
        MySelf: {
          name: "محمد مرابط",
          job: "Full Stack JS مطور واب",
          description: `.أنا مطور واب  شغوف ومتخصص في بناء تطبيقات واب قوية وقابلة للتطوير
          لقد طورت مهاراتي في تقنيات الواجهة الأمامية مثل REACT وNEXT.js,
          وكذلك في تقنيات الواجهة الخلفية مثل NODEوEXPRESSوMySQLوMongoDB,
          هدفي هو استثمار خبرتي لتقديم حلول مبتكرة تعزز نمو الأعمال وتوفير تجربة للمستخدم استثنائية.`,
        },
        Techno: {
          name: "التقنيات",
        },
        Experience: {
          name: "التجارب مهنية",
          exp1: "تدريب",
          exp2: "تقني سامي",
          exp3: "محاسب",
          exp4: "تدريب",
        },
        education: {
          name: "السلم الدراسي",
          education1: "إجازة في الإلكترونيات والأنظمة الصناعية",
          education2: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بماطر",
          education3: "شهادة البكالوريا",
          education4:
            "بكالوريا في العلوم الرياضية، الدورة الرئيسية، معهد محمد علي النبي، رأس الجبل، بنزرت",
        },
        certicats: {
          name: "شهادات علمية",
          description: "Full Stack JS مطور واب",
        },
        project: {
          name: "مشاريع تعليمية",
          project0: "جليس",
          sous_project1:
            "Nest.js إعداد أنظمة لإدارة البيانات بكفاءة وتسهيل العمليات بسلاسة باستخدام",
          sous_project2:
            "مما يضمن تجارب مثالية لبناء واجهات أمامية React استخدام",
          project00: "كوديني",
          sous_project01:
            "Sequelize إعداد أنظمة لإدارة البيانات بكفاءة وتسهيل العمليات بسلاسة باستخدام",
          sous_project02:
            "مما يضمن تجارب مثالية لبناء واجهات أمامية React استخدام",
          project000: "ماركت بلا يس",
          sous_project001:
            "MySql إعداد أنظمة لإدارة البيانات بكفاءة وتسهيل العمليات بسلاسة باستخدام",
          sous_project002:
            "مما يضمن تجارب مثالية لبناء واجهات أمامية React استخدام",
        },
        Contact: {
          name: " لمراسلتي",
          adress: "نهج الإكليل راس الجبل",
          tlf: `+ 216 92 015 910`,
          gmail: `mohamed10021995@gmail.com`,
        },
        About: {
          aboutme: "تعرف",
          aboutme1: "عني",
          aboutm2: `أنا مطور Full Stack متمكن ومتعدد المهارات، شغوف ببناء تطبيقات ويب فعالة وموجهة نحو المستخدم. لدي أكثر من عام من الخبرة المهنية حيث طورت خبرة واسعة في مجموعة متنوعة من التقنيات، بما في ذلك React، Next.js، MySQL، PostgreSQL، وMongoDB. بدأ مشواري في تطوير الويب بدافع الفضول لمعرفة كيفية عمل التكنولوجيا، وتطور إلى سعي مستمر للابتكار والنمو. أستمتع بحل التحديات المعقدة والبقاء على اطلاع دائم بالاتجاهات الجديدة في صناعة التكنولوجيا. إلى جانب البرمجة، أحب الحفاظ على النشاط، استكشاف تقنيات جديدة، والمساهمة في مشاريع مفتوحة المصدر.`,
        },
      },
    },
    fr: {
      translation: {
        MySelf: {
          name: "Mohamed Mrabet",
          job: "Développeur Full Stack JS",
          description: `Je suis un développeur full-stack passionné, spécialisé dans la création
            d'applications web robustes et évolutives. J'ai perfectionné mes compétences
            dans les technologies front-end comme React.js et Next.js, ainsi que dans les
            technologies back-end comme Node.js, MySQL, Express et MongoDB.
            Mon objectif est de mettre mon expertise au service de solutions innovantes
            qui stimulent la croissance des entreprises et offrent une expérience utilisateur exceptionnelle.`,
        },
        Techno: {
          name: "Les Technologies",
        },
        Experience: {
          name: "Les Experiences",
          exp1: "Stage",
          exp2: "Technicien",
          exp3: "Caissier",
          exp4: "Stage-PFE",
        },
        education: {
          name: "L'Education",
          education1: "Licence en Électronique et Systèmes Industriels",
          education2:
            "Institut Supérieur des Sciences Appliquées et de la Technologie Mateur",
          education3: "Baccalauréat",
          education4:
            "Baccalauréat en Sciences Mathématiques, Session Principale Lycée Mohamed Ali Ennabi, Ras Jebel, Bizerte ",
        },
        certicats: {
          name: "Les Certificats",
          description: "Développement Web Full Stack",
        },
        project: {
          name: "Les Projets",
          project0: "Jalyss - Site Web",
          sous_project1:
            "Mise en place de systèmes back-end basés sur Microservice Nest.js pour gérer efficacementles données et faciliter les opérations sans heurts.",
          sous_project2:
            "Utilisation de React pour construire des interfaces front-end dynamiques et interactives, assurant des expériences utilisateur optimales.",
          project00: "Codini - Site Web",
          sous_project01:
            "Mise en place de systèmes back-end basés sur SQL pour gérer efficacement les données et faciliter les opérations sans heurts.",
          sous_project02:
            "Utilisation de Next.js pour construire des interfaces front-end dynamiques et interactives, assurant des expériences utilisateur optimales.",
          project000: "Market Place - Site Web",
          sous_project001:
            "Développement d'une interface front-end élégante et réactive en utilisant Material-UI pour créer des interfaces utilisateur modernes et visuellement attrayantes.",
          sous_project002:
            "Mise en place d'une infrastructure back-end robuste à l'aide de SQL pour gérer et stocker efficacement les données, assurant une base sécurisée et évolutive pour la fonctionnalité transparente de l'application.",
        },
        Contact: {
          name: "Pour me contacter",
          adress: "Rue Romarin_Ras Jebel_Bizerte",
          tlf: `+ 216 92 015 910`,
          gmail: `mohamed10021995@gmail.com`,
        },
        About: {
          aboutme: "À propos",
          aboutme1: "de moi",
          aboutm2: `Je suis un développeur Full Stack dédié et polyvalent, passionné par la création d'applications web efficaces et centrées sur l'utilisateur. Avec plus d'un an d'expérience professionnelle, j'ai développé une expertise dans une large gamme de technologies, notamment React, Next.js, MySQL, PostgreSQL et MongoDB. Mon parcours dans le développement web a commencé par une curiosité pour le fonctionnement de la technologie, qui s'est transformée en une quête continue d'innovation et de croissance. J'aime relever des défis complexes et me tenir à jour avec les tendances émergentes de l'industrie technologique. En dehors du codage, j'apprécie rester actif, explorer de nouvelles technologies et contribuer à des projets open-source.`,
        },
      },
    },
  },
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
