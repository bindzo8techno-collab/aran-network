import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';

export interface AccordionItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
  defaultOpenIndex?: number | null;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenIndex = null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `accordion-item-${index}`;
        return (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <h3>
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75 rounded"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
              >
                <span className="text-lg font-medium text-dark flex-1 pr-2">{item.title}</span>
                {isOpen ? <MinusIcon className="h-6 w-6 text-primary flex-shrink-0" /> : <PlusIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />}
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
            >
              <div className="p-4 bg-gray-50 text-gray-600 rounded-b-md">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
