
import React from 'react';
import { CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SeminarProps {
  title: string;
  speaker: string;
  affiliation: string;
  date: string;
  time: string;
  location: string;
  abstract: string;
  isUpcoming?: boolean;
}

const SeminarCard: React.FC<SeminarProps> = ({
  title,
  speaker,
  affiliation,
  date,
  time,
  location,
  abstract,
  isUpcoming = false
}) => {
  return (
    <Card className={`mb-6 overflow-hidden transition-all duration-200 hover:shadow-lg ${
      isUpcoming ? 'border-l-4 border-l-[#2CA6A4]' : ''
    }`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-[#0A2342]">{title}</CardTitle>
          {isUpcoming && (
            <span className="bg-[#2CA6A4] text-white text-xs px-2 py-1 rounded uppercase">
              Upcoming
            </span>
          )}
        </div>
        <div className="mt-2 text-lg font-medium">{speaker}</div>
        <div className="text-gray-600 text-sm">{affiliation}</div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4 text-sm text-gray-700">
          <CalendarDays className="h-4 w-4 mr-2 text-[#2CA6A4]" />
          <span className="mr-2">{date} |</span>
          <span className="mr-2">{time} |</span>
          <span>{location}</span>
        </div>
        <p className="text-gray-700 text-sm">{abstract}</p>
      </CardContent>
    </Card>
  );
};

export default SeminarCard;
