import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Sermons from "./pages/Sermons";
import Contact from "./pages/Contact";
import Give from "./pages/Give";
import PrayerRequest from "./pages/PrayerRequest";
import NotFound from "./pages/NotFound";
// Ministry pages
import GlobalMinistersAssembly from "./pages/ministries/GlobalMinistersAssembly";
import SchoolOfMinistry from "./pages/ministries/SchoolOfMinistry";
import GlobalOutreachMinistry from "./pages/ministries/GlobalOutreachMinistry";
import MusicAcademy from "./pages/ministries/MusicAcademy";
import BOCTV from "./pages/ministries/BOCTV";
import PrayerMinistry from "./pages/ministries/PrayerMinistry";
// Department pages
import MensEmpowerment from "./pages/departments/MensEmpowerment";
import WomensMinistry from "./pages/departments/WomensMinistry";
import HospitalityDepartment from "./pages/departments/HospitalityDepartment";
import YouthMinistry from "./pages/departments/YouthMinistry";
import TeensMinistry from "./pages/departments/TeensMinistry";
import SundaySchool from "./pages/departments/SundaySchool";
import PraiseWorship from "./pages/departments/PraiseWorship";
import CompassionMercy from "./pages/departments/CompassionMercy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/ministries" element={<Ministries />} />
              <Route path="/events" element={<Events />} />
              <Route path="/sermons" element={<Sermons />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/give" element={<Give />} />
              <Route path="/prayer-request" element={<PrayerRequest />} />
              {/* Ministry routes */}
              <Route path="/ministries/global-ministers-assembly" element={<GlobalMinistersAssembly />} />
              <Route path="/ministries/school-of-ministry" element={<SchoolOfMinistry />} />
              <Route path="/ministries/global-outreach" element={<GlobalOutreachMinistry />} />
              <Route path="/ministries/music-academy" element={<MusicAcademy />} />
              <Route path="/ministries/boc-tv" element={<BOCTV />} />
              <Route path="/ministries/prayer-ministry" element={<PrayerMinistry />} />
              {/* Department routes */}
              <Route path="/departments/mens-empowerment" element={<MensEmpowerment />} />
              <Route path="/departments/womens-ministry" element={<WomensMinistry />} />
              <Route path="/departments/hospitality" element={<HospitalityDepartment />} />
              <Route path="/departments/youth-ministry" element={<YouthMinistry />} />
              <Route path="/departments/teens-ministry" element={<TeensMinistry />} />
              <Route path="/departments/sunday-school" element={<SundaySchool />} />
              <Route path="/departments/praise-worship" element={<PraiseWorship />} />
              <Route path="/departments/compassion-mercy" element={<CompassionMercy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
