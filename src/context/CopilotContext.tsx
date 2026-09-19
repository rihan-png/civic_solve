import React, { createContext, useContext, useState } from 'react';

export interface CopilotMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  relatedChallengeId?: string;
}

interface CopilotContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: CopilotMessage[];
  sendMessage: (query: string) => void;
  clearChat: () => void;
}

const CopilotContext = createContext<CopilotContextType | undefined>(undefined);

export const CopilotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<CopilotMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: 'Namaste! I am CivicSolve Intelligence, your AI Copilot for societal innovation across Jharkhand. You can ask me about district challenge hot spots, university research matching, priority rationale, or duplicate clustering.',
      timestamp: 'Just now'
    }
  ]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('water') || q.includes('arsenic') || q.includes('fluoride')) {
      return `Based on active platform data for Jharkhand, Ranchi District (specifically Angara Block, Incident #INC-1932) has the highest concentration of severe groundwater fluorosis and arsenic anomalies (fluoride at 3.8 mg/L). 

Recommended HEI: Birla Institute of Technology (BIT Mesra) has been matched with a 92% capability score due to its DST-supported Advanced Water Quality Lab and electrocoagulation patents. Central University of Jharkhand (CUJ) also offers strong hydrological watershed modeling.`;
    }

    if (q.includes('district') || q.includes('highest') || q.includes('unresolved') || q.includes('hotspot')) {
      return `Based on real-time Jharkhand district metrics:
1. Ranchi: 2,410 total reports, 88 active in progress (top domains: Urban Roads & Tribal Water Quality).
2. East Singhbhum (Jamshedpur): 1,890 reports, 64 in progress.
3. Dhanbad: 1,650 reports, 52 in progress (highest environmental/bio-medical waste density).
4. Hazaribagh: 980 reports (highest agricultural crop blight alerts).

Average resolution time across all verified projects is currently 18.4 days.`;
    }

    if (q.includes('university') || q.includes('hei') || q.includes('college') || q.includes('capability')) {
      return `Top matched Higher Education Institutions (HEIs) on CivicSolve:
• BIT Mesra (Ranchi): Water Purification, IoT Telemetry, Rural Microgrids (18 active projects).
• NIT Jamshedpur: Renewable Energy Microgrids, Battery Management, Robotics (14 active projects).
• IIT (ISM) Dhanbad: Industrial Effluent Treatment, Groundwater Aquifers, Air Quality (26 active projects).
• Birsa Agricultural University (BAU): Phytopathology, Crop Pest Modeling, Drip Irrigation (11 active projects).
• Central University of Jharkhand (CUJ): Community Watershed Hydraulics & RuTAG Rural Tech (9 active projects).`;
    }

    if (q.includes('why') && (q.includes('priority') || q.includes('doranda') || q.includes('pothole') || q.includes('1042'))) {
      return `Explainable Priority Rationale for Challenge CIV-2026-1042 (Doranda School Road):
Formula: Severity (4/5) × Affected Population (1,850 children) × Safety Hazard (5/5) × Recurrence (Frequent) × Unresolved (19 days) = Score 88.4 (HIGH).

Key Drivers:
1. Immediate perimeter of St. Xavier Primary & Secondary School with heavy pedestrian student volume.
2. Monsoon waterlogging conceals cavity depths up to 1.5 ft, causing skidding hazard for school vans and autos.
3. 27 independent citizen reports consolidated under Incident #INC-2841, proving high community severity.`;
    }

    if (q.includes('cluster') || q.includes('duplicate') || q.includes('noise')) {
      return `CivicSolve eliminates administrative ticket noise through Semantic Vector Embeddings + PostGIS geospatial clustering:
Currently, across 4 active clusters in Jharkhand:
• Doranda Crater Cluster (#INC-2841): 27 citizen reports consolidated into 1 incident (88% noise reduction).
• Angara Fluoride Belt (#INC-1932): 18 reports consolidated into 1 HEI collaborative project.
• Barkagaon Rice Blight (#INC-3104): 14 farmer reports grouped.
• Dhanbad Waste (#INC-0842): 11 reports grouped.`;
    }

    return `I analyzed platform records for "${query}". CivicSolve currently monitors 12,480 crowdsourced reports across Jharkhand with 8,920 verified by AI. We have 486 connected universities, 312 community NGOs, and 1,240 solutions actively piloted. 

Try asking:
- "Which universities can solve rural water contamination?"
- "Why is the Doranda school road challenge high priority?"
- "How does duplicate incident clustering work?"
- "Show me district hot spots in Jharkhand."`;
  };

  const sendMessage = (query: string) => {
    if (!query.trim()) return;

    const userMsg: CopilotMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const replyText = generateAnswer(query);
      const aiMsg: CopilotMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 400);
  };

  const clearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        text: 'Chat history cleared. How can I assist you with CivicSolve data?',
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <CopilotContext.Provider
      value={{
        isOpen,
        setIsOpen,
        messages,
        sendMessage,
        clearChat
      }}
    >
      {children}
    </CopilotContext.Provider>
  );
};

export const useCopilot = () => {
  const context = useContext(CopilotContext);
  if (!context) {
    throw new Error('useCopilot must be used within a CopilotProvider');
  }
  return context;
};
