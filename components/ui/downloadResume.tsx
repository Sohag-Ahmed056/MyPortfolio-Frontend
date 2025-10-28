// components/ui/downloadResume.tsx
import React from "react";

interface DownloadResumeProps {
  fileName?: string; // Optional: custom filename for download
  filePath?: string; // Optional: path to PDF, defaults to /resume.pdf
}

const DownloadResume: React.FC<DownloadResumeProps> = ({
  fileName = "Sohag_Ahmed_CV.pdf",
  filePath = "/221002198.pdf",
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
    >
      Download CV
    </button>
  );
};

export default DownloadResume;
