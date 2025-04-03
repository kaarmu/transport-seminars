
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeminarCard from '../components/SeminarCard';
import { Card, CardContent } from '@/components/ui/card';
import config from '../data/config.json';
import seminars from '../data/seminars.json';

const Index = () => {
  // Get just the next upcoming seminar
  const nextSeminar = seminars.upcomingSeminars[0];
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
            {config.seriesTitle}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {config.seriesDescription}
          </p>
          <div className="mt-4 text-gray-600">
            <p>{config.regularSchedule}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0A2342] mb-6 pb-2 border-b border-gray-200">
            {seminars.currentSeries} Series
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0A2342] mb-4">Next Seminar</h3>
            {nextSeminar && (
              <SeminarCard 
                title={nextSeminar.title}
                speaker={nextSeminar.speaker}
                affiliation={nextSeminar.affiliation}
                date={nextSeminar.date}
                time={nextSeminar.time}
                location={nextSeminar.location}
                abstract={nextSeminar.abstract}
                isUpcoming={true}
              />
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#0A2342] mb-4">Upcoming Seminars</h3>
            <Card className="bg-white shadow-sm">
              <CardContent className="pt-6">
                <ul className="divide-y divide-gray-100">
                  {seminars.upcomingSeminars.slice(1).map((seminar) => (
                    <li key={seminar.id} className="py-3">
                      <div className="flex items-start">
                        <div className="min-w-[100px] text-gray-600 text-sm">
                          {seminar.date}
                        </div>
                        <div>
                          <h4 className="font-medium text-[#0A2342]">{seminar.title}</h4>
                          <p className="text-sm text-gray-700">{seminar.speaker}, {seminar.affiliation}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
