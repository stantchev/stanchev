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
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setIsSupported(true);
      synthRef.current = window.speechSynthesis;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const getCleanText = useCallback(() => {
    try {
      const articleElement = document.querySelector(articleSelector);
      if (!articleElement) {
        console.warn(`Article element not found with selector: ${articleSelector}`);
        return title;
      }

      const clone = articleElement.cloneNode(true) as HTMLElement;
      
      const elementsToRemove = clone.querySelectorAll(
        'script, style, nav, aside, .skip-to-content, button, [role="button"]'
      );
      elementsToRemove.forEach((el) => el.remove());

      let text = clone.textContent || clone.innerText || "";
      
      text = text
        .replace(/\s+/g, " ")
        .replace(/\n+/g, " ")
        .trim();
      
      const fullText = `${title}. ${text}`;
      
      const maxLength = 50000;
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

    if (isPaused && utteranceRef.current) {
      synthRef.current.resume();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    synthRef.current.cancel();

    const text = getCleanText();
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.lang = "bg-BG";
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
      console.error("Speech synthesis error:", event.error);
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
    if (isPlaying && utteranceRef.current) {
      utteranceRef.current.rate = newRate;
    }
  }, [isPlaying]);

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
              size="s"
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
