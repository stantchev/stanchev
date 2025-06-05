import { useState } from 'react';
import { jsPDF } from 'jspdf';
import notoSerifFont from '../fonts/notoserif-normal-esm.js';

export const useCV = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCV = async () => {
    setIsGenerating(true);

    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Регистрирaне на шрифта
      doc.addFileToVFS('notoserif.ttf', notoSerifFont);
      doc.addFont('notoserif.ttf', 'notoserif', 'normal');
      doc.setFont('notoserif', 'normal');

      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;
      let y = 20;

      // HEADER
      doc.setFillColor(20, 20, 40);
      doc.rect(0, 0, pageWidth, 40, 'F');

      doc.setTextColor(147, 51, 234);
      doc.setFontSize(32);
      doc.text('Станчев', pageWidth / 2, 22, { align: 'center' });

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      doc.text('SEO Специалист', pageWidth / 2, 32, { align: 'center' });

      // Тънка сива линия
      y = 42;
      doc.setDrawColor(180, 180, 180);
      doc.setLineWidth(0.3);
      doc.line(margin, y, pageWidth - margin, y);
      y += 8;

      // Контактна информация
      doc.setFontSize(12);
      doc.setTextColor(50, 50, 50);
      const contactInfo = 'Имейл: hello@stanchev.bg | Телефон: +359 88 888 8888 | София, България';
      doc.text(contactInfo, pageWidth / 2, y, { align: 'center' });

      y += 15;

      // Профил
      doc.setTextColor(147, 51, 234);
      doc.setFontSize(16);
      doc.text('Профил', margin, y);
      y += 10;

      doc.setTextColor(50, 50, 50);
      doc.setFontSize(11);
      const profileText =
        'SEO специалист с 1 година опит в оптимизацията за търсачки за българския пазар. Експерт в изграждането на стратегии за подобряване на онлайн видимостта и повишаване на органичния трафик. Специализиран в локално SEO, техническа оптимизация и създаване на съдържание.';
      const profileLines = doc.splitTextToSize(profileText, contentWidth);
      doc.text(profileLines, margin, y);
      y += profileLines.length * 6 + 10;

      // Опит
      doc.setTextColor(147, 51, 234);
      doc.setFontSize(16);
      doc.text('Опит', margin, y);
      y += 10;

      doc.setTextColor(6, 182, 212);
      doc.setFontSize(14);
      doc.text('Стажант | WebStation', margin, y);
      y += 7;

      doc.setTextColor(100, 100, 100);
      doc.setFontSize(11);
      doc.text('2025 - до момента', margin, y);
      y += 7;

      doc.setTextColor(50, 50, 50);
      const expDesc =
        '• Консултирам на над 30 бизнеса за подобряване на тяхното SEO присъствие в българския пазар. Разработване на персонализирани стратегии за повишаване на органичния трафик.';
      const expLines = doc.splitTextToSize(expDesc, contentWidth);
      doc.text(expLines, margin, y);
      y += expLines.length * 6 + 10;

      // Образование
      doc.setTextColor(147, 51, 234);
      doc.setFontSize(16);
      doc.text('Образование', margin, y);
      y += 10;

      doc.setTextColor(6, 182, 212);
      doc.setFontSize(14);
      doc.text('Военна Академия "Г. С. Раковски"', margin, y);
      y += 7;

      doc.setTextColor(50, 50, 50);
      doc.setFontSize(11);
      doc.text('Бакалавър по Сигурност и Отбрана | 2020–2024', margin, y);
      y += 6;

      doc.setTextColor(50, 50, 50);
      doc.setFontSize(11);

      const bulletText = '• Оценявах различни заплахи и рискове, свързани със сигурността, формулирайки противодействия.';
      const bulletLines = doc.splitTextToSize(bulletText, contentWidth);

      doc.text(bulletLines, margin, y);
      y += bulletLines.length * 6 + 4;

      // Финал
      doc.save('stanchev-seo-cv.pdf');
    } catch (error) {
      console.error('Грешка при генериране на CV:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    generateCV,
    isGenerating,
  };
};
