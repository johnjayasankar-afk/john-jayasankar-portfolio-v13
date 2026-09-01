import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { WorkPage } from "@/pages/WorkPage";
import { CasePage } from "@/pages/CasePage";
import { ApproachPage } from "@/pages/ApproachPage";
import { WritingPage } from "@/pages/WritingPage";
import { AboutPage } from "@/pages/AboutPage";
import { AgentFitPage } from "@/pages/AgentFitPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CasePage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/agentfit" element={<AgentFitPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
