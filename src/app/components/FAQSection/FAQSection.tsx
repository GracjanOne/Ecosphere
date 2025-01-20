"use client"

import React, { useState } from 'react';


interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='web-margins ' style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ fontWeight: 'bold' }}>{question}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      <div
        style={{
          maxHeight: isOpen ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p style={{ marginTop: '10px', color: '#555', padding: isOpen ? '10px 0' : '0' }}>{answer}</p>
      </div>
    </div>
  );
};

// Komponent główny FAQSection
const FAQSection: React.FC = () => {
  const faqData = [
    { question: 'Jakie korzyści przynosi inwestycja w panele fotowoltaiczne?', answer: 'Inwestycja w panele fotowoltaiczne pozwala znacząco obniżyć rachunki za prąd, zwiększyć niezależność od rosnących cen energii oraz zmniejszyć ślad węglowy. Dodatkowo, korzystając z dotacji lub ulg podatkowych, możesz obniżyć koszty instalacji nawet o 50%.' },
    { question: 'Czy moje domostwo lub firma kwalifikuje się do instalacji ekologicznych systemów?', answer: 'Tak, prawie każda nieruchomość może być dostosowana do zastosowania ekologicznych technologii. Przeprowadzamy darmowy audyt, aby określić najlepsze rozwiązanie w zależności od dostępnej przestrzeni, nasłonecznienia oraz zapotrzebowania na energię.' },
    { question: ' Ile czasu zajmuje instalacja systemu fotowoltaicznego lub pompy ciepła?', answer: 'Typowy czas instalacji paneli fotowoltaicznych wynosi od 1 do 3 dni, w zależności od wielkości systemu. Instalacja pompy ciepła zajmuje zazwyczaj od 3 do 5 dni. Dokładny harmonogram ustalamy indywidualnie z każdym klientem.' },
    { question: 'Jak długo trwa zwrot z inwestycji w ekologiczne technologie?', answer: 'Średni czas zwrotu z inwestycji w panele fotowoltaiczne wynosi od 5 do 7 lat, a dla pomp ciepła – od 6 do 9 lat. Czas zwrotu może być krótszy w przypadku korzystania z dotacji lub innych ulg finansowych.' },
    { question: 'Czy mogę uzyskać dofinansowanie na instalację ekologicznych technologii?', answer: 'Tak, w wielu przypadkach możesz skorzystać z programów dotacyjnych, takich jak „Mój Prąd”, „Czyste Powietrze” lub ulg podatkowych. Pomagamy w przygotowaniu wszystkich niezbędnych dokumentów, abyś mógł maksymalnie obniżyć koszty swojej inwestycji.' },
  ];

  return (
    <div className='web-margins section-margins' style={{  margin: '0 auto', padding: '20px' }}>
      <h6 className='web-margins section-header' style={{marginBottom: "2%"}}>FAQs</h6>
      <p className='web-margins'  style={{marginBottom: "2%"}}>Znajdź odpowiedź na najczęstsze pytania</p>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
