"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Send, 
  Mic, 
  ThumbsUp, 
  ThumbsDown, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type Message = {
  id: string;
  type: 'user' | 'arjuna';
  content: string;
  timestamp: Date;
};

const suggestions = [
  "I'm feeling overwhelmed at work",
  "I keep comparing myself to others",
  "I'm having trouble with my relationships",
  "I feel like I lack purpose",
  "I'm struggling with change in my life",
  "I feel anxious about the future"
];

export default function TalkToArjunaPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial welcome message
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          type: 'arjuna',
          content: "Namaste! I'm Arjuna, your guide based on the Bhagavad Gita's teachings. What's on your mind today? Feel free to share your concerns, and I'll offer guidance from ancient wisdom.",
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowSuggestions(false);
    
    // Simulate Arjuna typing
    setIsTyping(true);
    
    // Simulate response after a delay
    setTimeout(() => {
      const arjunaResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'arjuna',
        content: getResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, arjunaResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Simplified response function for demo purposes
  const getResponse = (input: string) => {
    const responses = [
      "The Bhagavad Gita teaches us: \"You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.\" (Chapter 2, Verse 47) This means we should focus on doing our best without attachment to outcomes.",
      
      "Lord Krishna advises Arjuna: \"For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing, and primeval.\" (Chapter 2, Verse 20) This eternal perspective can help us see beyond our temporary challenges.",
      
      "The Gita reminds us: \"Whatever happened, happened for good. Whatever is happening, is happening for good. Whatever will happen, will also happen for good.\" This perspective can help you find peace even in difficult situations.",
      
      "A relevant story from the Mahabharata is about Draupadi's unwavering faith during her moment of humiliation. When all seemed lost, her surrender to Krishna saved her. Similarly, in your challenges, trusting in a higher power can provide unexpected strength and solutions.",
      
      "Ancient Indian wisdom suggests practicing pratyahara (withdrawal of senses) through 10 minutes of daily meditation. This can help you gain clarity and reduce anxiety about your situation."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="container px-4 py-6 sm:py-12 max-w-4xl">
      <div className="mx-auto mb-6 sm:mb-8 max-w-3xl text-center">
        <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold">Talk to Arjuna</h1>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
          Share your concerns and receive guidance based on the timeless wisdom of the Bhagavad Gita
        </p>
      </div>
      
      <Card className="mx-auto border-2">
        <CardHeader className="bg-primary/5 border-b p-4 sm:p-6">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10 mr-3">
              <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg sm:text-xl">Arjuna</CardTitle>
              <CardDescription className="text-sm">
                Guided by Bhagavad Gita wisdom
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="h-[60vh] sm:h-[500px] overflow-y-auto p-4 sm:p-6">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "mb-4 flex",
                    message.type === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  {message.type === 'arjuna' && (
                    <Avatar className="mt-1 mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={cn(
                      "rounded-lg px-3 sm:px-4 py-2 sm:py-3 max-w-[85%] sm:max-w-[80%]",
                      message.type === 'user' 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    )}
                  >
                    <p className="text-sm sm:text-base">{message.content}</p>
                    {message.type === 'arjuna' && (
                      <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs sm:text-sm">
                          <ThumbsUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
                          Helpful
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs sm:text-sm">
                          <ThumbsDown className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
                          Not helpful
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2 text-xs sm:text-sm">
                          <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
                          Learn more
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {message.type === 'user' && (
                    <Avatar className="ml-2 sm:ml-3 mt-1 h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                      <AvatarFallback className="bg-accent text-accent-foreground">U</AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start"
                >
                  <Avatar className="mt-1 mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        
        <div className="p-3 sm:p-4 border-t bg-secondary/20">
          {showSuggestions && messages.length < 3 && (
            <div className="mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm font-medium mb-2">Suggested topics:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {suggestions.map((suggestion, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-accent transition-colors py-1 px-2 text-xs sm:text-sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 text-sm sm:text-base"
            />
            <Button 
              onClick={handleSendMessage}
              size="icon"
              className="shrink-0"
            >
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline"
              size="icon"
              className="shrink-0"
            >
              <Mic className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}