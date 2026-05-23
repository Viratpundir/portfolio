import { pathToFileURL } from "node:url";

function AIMLPortfolio() {
  const projects = [
    {
      title: "Speech-to-Text AI System",
      description:
        "Developed an AI-powered speech recognition system focused on improving transcription accuracy in noisy environments using Python and deep learning techniques.",
      tech: ["Python", "Deep Learning", "Speech Processing", "Noise Reduction"],
    },
    {
      title: "LegiScan",
      description:
        "Built an intelligent legal document analysis platform capable of extracting, organizing, and summarizing important legal information from uploaded files.",
      tech: ["NLP", "Python", "Document Processing", "AI"],
    },
    {
      title: "RAG Chatbot",
      description:
        "Created a Retrieval-Augmented Generation chatbot that retrieves contextual information from custom datasets to generate accurate and intelligent responses.",
      tech: ["RAG", "LLM", "Vector Database", "LangChain"],
    },
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Generative AI",
    "RAG",
    "TensorFlow",
    "Data Analysis",
    "SQL",
    "Power Apps",
    "Streamlit",
    "App Development",
  ];

  const about =
    "I am a passionate AI/ML enthusiast focused on building innovative solutions using Artificial Intelligence, Machine Learning, and Generative AI technologies. My interests include speech processing, intelligent chatbots, NLP, and real-time AI applications. I enjoy solving real-world problems through technology and continuously learning modern AI frameworks and tools.";

  const experience = {
    title: "App Development & App Review Intern",
    company: "LeverageAxiom",
    duration: "1 Month",
    summary:
      "Worked on app development tasks and tested applications to ensure proper functionality and client satisfaction. Collaborated on improving app performance and usability.",
  };

  return {
    name: "Virat Pundir",
    headline: "AI/ML Enthusiast | Generative AI Developer | Building intelligent systems with real-world impact.",
    projects,
    skills,
    about,
    experience,
    contact: {
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Resume",
    },
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const portfolio = AIMLPortfolio();
  console.log(JSON.stringify(portfolio, null, 2));
}

export default AIMLPortfolio;
