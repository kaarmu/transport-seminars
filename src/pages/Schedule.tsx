
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SeminarCard from '../components/SeminarCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import config from '../data/config.json';
import seminars from '../data/seminars.json';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0A2342] mb-2">Seminar Schedule</h1>
          <p className="text-gray-600">{seminars.currentSeries} Series</p>
        </div>
        
        <div className="mb-6">
          <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="all">All Seminars</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming">
              <div className="space-y-1 mb-6">
                <h2 className="text-xl font-semibold text-[#0A2342]">Upcoming Seminars</h2>
                <p className="text-gray-600 text-sm">
                  Regular schedule: {config.regularSchedule} | Location: {config.location}
                </p>
              </div>
              
              {seminars.upcomingSeminars.length === 0 ? (
                <p className="text-center py-8 text-gray-500">No upcoming seminars scheduled at this time.</p>
              ) : (
                <div>
                  {seminars.upcomingSeminars.map((seminar) => (
                    <SeminarCard
                      key={seminar.id}
                      title={seminar.title}
                      speaker={seminar.speaker}
                      affiliation={seminar.affiliation}
                      date={seminar.date}
                      time={seminar.time}
                      location={seminar.location}
                      abstract={seminar.abstract}
                      isUpcoming={true}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              <div className="space-y-1 mb-6">
                <h2 className="text-xl font-semibold text-[#0A2342]">Past Seminars</h2>
                <p className="text-gray-600 text-sm">{seminars.currentSeries} Series</p>
              </div>
              
              {seminars.pastSeminars.length === 0 ? (
                <p className="text-center py-8 text-gray-500">No past seminars available.</p>
              ) : (
                <div>
                  {seminars.pastSeminars.map((seminar) => (
                    <SeminarCard
                      key={seminar.id}
                      title={seminar.title}
                      speaker={seminar.speaker}
                      affiliation={seminar.affiliation}
                      date={seminar.date}
                      time={seminar.time}
                      location={seminar.location}
                      abstract={seminar.abstract}
                      isUpcoming={false}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="all">
              <div className="space-y-1 mb-6">
                <h2 className="text-xl font-semibold text-[#0A2342]">All Seminars</h2>
                <p className="text-gray-600 text-sm">{seminars.currentSeries} Series</p>
              </div>
              
              <div>
                {seminars.upcomingSeminars.length > 0 && (
                  <>
                    <h3 className="text-lg font-medium text-[#0A2342] mt-8 mb-4">Upcoming</h3>
                    {seminars.upcomingSeminars.map((seminar) => (
                      <SeminarCard
                        key={seminar.id}
                        title={seminar.title}
                        speaker={seminar.speaker}
                        affiliation={seminar.affiliation}
                        date={seminar.date}
                        time={seminar.time}
                        location={seminar.location}
                        abstract={seminar.abstract}
                        isUpcoming={true}
                      />
                    ))}
                  </>
                )}
                
                {seminars.pastSeminars.length > 0 && (
                  <>
                    <h3 className="text-lg font-medium text-[#0A2342] mt-8 mb-4">Past</h3>
                    {seminars.pastSeminars.map((seminar) => (
                      <SeminarCard
                        key={seminar.id}
                        title={seminar.title}
                        speaker={seminar.speaker}
                        affiliation={seminar.affiliation}
                        date={seminar.date}
                        time={seminar.time}
                        location={seminar.location}
                        abstract={seminar.abstract}
                        isUpcoming={false}
                      />
                    ))}
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Schedule;
