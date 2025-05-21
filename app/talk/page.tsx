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
    <div className="container max-w-4xl py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="font-poppins text-3xl font-bold sm:text-4xl">Talk to Arjuna</h1>
        <p className="mt-3 text-muted-foreground">
          Share your concerns and receive guidance based on the timeless wisdom of the Bhagavad Gita
        </p>
      </div>
      
      <Card className="mx-auto border-2">
        <CardHeader className="bg-primary/5 border-b">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Arjuna</CardTitle>
              <CardDescription>
                Guided by Bhagavad Gita wisdom
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="h-[500px] overflow-y-auto p-6">
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
                    <Avatar className="mt-1 mr-3 h-8 w-8 flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={cn(
                      "rounded-lg px-4 py-3 max-w-[80%]",
                      message.type === 'user' 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                    {message.type === 'arjuna' && (
                      <div className="mt-3 flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                          Helpful
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          <ThumbsDown className="h-3.5 w-3.5 mr-1" />
                          Not helpful
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          <BookOpen className="h-3.5 w-3.5 mr-1" />
                          Learn more
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {message.type === 'user' && (
                    <Avatar className="ml-3 mt-1 h-8 w-8 flex-shrink-0">
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
                  <Avatar className="mt-1 mr-3 h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg px-4 py-3">
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
        
        <div className="p-4 border-t bg-secondary/20">
          {showSuggestions && messages.length < 3 && (
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Suggested topics:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-accent transition-colors py-1.5"
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
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Mic className="h-5 w-5" />
            </Button>
            <div className="relative flex-1">
              <Input
                placeholder="Type your question or concern..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pr-10"
              />
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <CardFooter className="flex justify-between border-t p-4 text-xs text-muted-foreground">
          <p>Your conversations are private and secure</p>
          <p>Based on Bhagavad Gita teachings</p>
        </CardFooter>
      </Card>
    </div>
  );
}