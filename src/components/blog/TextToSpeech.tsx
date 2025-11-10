"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Row, Column, Button, Icon, Text, useToast } from "@once-ui-system/core";

interface TextToSpeechProps {
  title: string;
  articleSelector?: string;
}

export function TextToSpeech({ title, articleSelector = "article" }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [isSupported, setIsSupported] = useState(false);
  const { addToast } = useToast();
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    // Check if browser supports speech synthesis
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true);
      synthRef.current = window.speechSynthesis;
    } else {
      setIsSupported(false);
    }

    // Cleanup on unmount
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Extract clean text from rendered article DOM
  const getCleanText = useCallback(() => {
    try {
      // Find the article element
      const articleElement = document.querySelector(articleSelector);
      if (!articleElement) {
        console.warn(`Article element not found with selector: ${articleSelector}`);
        return title;
      }

      // Clone the element to avoid modifying the original
      const clone = articleElement.cloneNode(true) as HTMLElement;
      
      // Remove elements that shouldn't be read
      const elementsToRemove = clone.querySelectorAll(
        'script, style, nav, aside, .skip-to-content, button, [role="button"]'
      );
      elementsToRemove.forEach((el) => el.remove());

      // Extract text content
      let text = clone.textContent || clone.innerText || "";
      
      // Clean up text: remove extra whitespace, newlines, etc.
      text = text
        .replace(/\s+/g, " ") // Replace multiple spaces with single space
        .replace(/\n+/g, " ") // Replace newlines with space
        .trim();
      
      // Combine title and content
      const fullText = `${title}. ${text}`;
      
      // Limit text length to avoid issues (Web Speech API has limits)
      const maxLength = 50000; // Safe limit
      if (fullText.length > maxLength) {
        return fullText.substring(0, maxLength) + "...";
      }
      
      return fullText;
    } catch (error) {
      console.error("Error extracting text:", error);
      return title;
    }
  }, [title, articleSelector]);

  const handlePlay = useCallback(() => {
    if (!synthRef.current || !isSupported) {
      addToast({
        variant: "danger",
        message: "Вашият браузър не поддържа изговаряне на текст",
      });
      return;
    }

    // If paused, resume
    if (isPaused && utteranceRef.current) {
      synthRef.current.resume();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    // Cancel any ongoing speech
    synthRef.current.cancel();

    // Create new utterance
    const text = getCleanText();
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure utterance
    utterance.lang = "bg-BG"; // Bulgarian
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Event handlers
    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    utterance.onerror = (event) => {
      console.error("Speech synthesis error:", event);
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
      addToast({
        variant: "danger",
        message: "Грешка при изговаряне на текст",
      });
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  }, [isPaused, rate, isSupported, getCleanText, addToast]);

  const handlePause = useCallback(() => {
    if (synthRef.current && isPlaying && !isPaused) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  }, [isPlaying, isPaused]);

  const handleStop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    }
  }, []);

  const handleRateChange = useCallback((newRate: number) => {
    setRate(newRate);
    // If currently playing, update the rate
    if (isPlaying && utteranceRef.current) {
      utteranceRef.current.rate = newRate;
    }
  }, [isPlaying]);

  // Don't render if not supported
  if (!isSupported) {
    return null;
  }

  return (
    <Column
      fillWidth
      gap="12"
      marginTop="32"
      marginBottom="16"
      data-border="rounded"
      padding="16"
      onBackground="neutral-weak"
    >
      <Row gap="8" vertical="center" horizontal="center" wrap>
        <Icon name="speaker" size="s" />
        <Text variant="label-default-m" onBackground="neutral-weak">
          Изслушай статията
        </Text>
      </Row>
      
      <Row gap="8" horizontal="center" wrap>
        {!isPlaying ? (
          <Button
            variant="secondary"
            size="s"
            onClick={handlePlay}
            prefixIcon="play"
          >
            Пусни
          </Button>
        ) : isPaused ? (
          <>
            <Button
              variant="secondary"
              size="s"
              onClick={handlePlay}
              prefixIcon="play"
            >
              Продължи
            </Button>
            <Button
              variant="tertiary"
              size="s"
              onClick={handleStop}
              prefixIcon="stop"
            >
              Спри
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="secondary"
              size="s"
              onClick={handlePause}
              prefixIcon="pause"
            >
              Пауза
            </Button>
            <Button
              variant="tertiary"
              size="s"
              onClick={handleStop}
              prefixIcon="stop"
            >
              Спри
            </Button>
          </>
        )}
      </Row>

      <Row gap="8" vertical="center" horizontal="center" wrap>
        <Text variant="label-default-xs" onBackground="neutral-weak">
          Скорост:
        </Text>
        <Row gap="4">
          {[0.75, 1, 1.25, 1.5].map((speed) => (
            <Button
              key={speed}
              variant={rate === speed ? "primary" : "tertiary"}
              size="xs"
              onClick={() => handleRateChange(speed)}
              data-border="rounded"
            >
              {speed}x
            </Button>
          ))}
        </Row>
      </Row>
    </Column>
  );
}
