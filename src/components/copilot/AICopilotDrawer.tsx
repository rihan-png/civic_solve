import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Trash2, 
  Bot, 
  User, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useCopilot } from '../../context/CopilotContext';

export const AICopilotDrawer: React.FC = () => {
  const { isOpen, setIsOpen, messages, sendMessage, clearChat } = useCopilot();
  const [inputText, setInputText] = useState('');

  if (!isOpen) return null;

  const promptChips = [
    'Which districts have the highest unresolved water problems?',
    'Which universities can work on rural water monitoring?',
    'Why is Challenge CIV-2026-1042 high priority?',
    'How does duplicate incident clustering work?'
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText('');
  };

  const handleChipClick = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] bg-slate-950 border-l border-slate-800 text-slate-100 shadow-2xl flex flex-col">
      {/* Copilot Header */}
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 flex items-center justify-center shadow-md">
            <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
              <span>CivicSolve Intelligence</span>
              <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                AI Copilot
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">Ground-truth query engine for Jharkhand platform data</p>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={clearChat}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Clear Chat History"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Suggested Chips */}
      <div className="p-3 bg-slate-900/50 border-b border-slate-800/80 space-y-1.5">
        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
          Suggested Queries:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {promptChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleChipClick(chip)}
              className="text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-lg transition-colors text-left cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {messages.map((m) => {
          const isAi = m.sender === 'assistant';
          return (
            <div
              key={m.id}
              className={`flex items-start space-x-2.5 ${isAi ? '' : 'flex-row-reverse space-x-reverse'}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                isAi ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/30' : 'bg-blue-600 text-white'
              }`}>
                {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                isAi 
                  ? 'bg-slate-900 border border-slate-800 text-slate-200' 
                  : 'bg-blue-600 text-white rounded-br-none'
              }`}>
                <div className="whitespace-pre-line">{m.text}</div>
                <span className={`text-[9px] mt-1.5 block ${isAi ? 'text-slate-500' : 'text-blue-200'}`}>
                  {m.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="p-3 border-t border-slate-800 bg-slate-900/90 flex items-center space-x-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about districts, universities, challenges, priority..."
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 p-2 rounded-xl transition-colors font-bold cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
