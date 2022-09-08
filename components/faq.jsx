import { useState } from "react";
const Faq = () => {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i){
        return setSelected(null)
    }

    setSelected(i)
  }

  const data = [
    {
      question:'Question 1',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      question:'Question 2',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      question:'Question 3',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      question:'Question 4',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    }
  ]

  return (
    <div className="wrapper">
      <div className="accordion">
        
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected == i ? '-' : '+'}</span>
              </div>
              <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default Faq;