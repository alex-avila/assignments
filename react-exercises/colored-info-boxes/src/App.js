import React from 'react';
import ColoredBox from './ColoredBox';

import './App.css';

const App = () => {
  const propsArr = [
    {
      background: {background: 'linear-gradient(135deg, #55efc4, #00b894 155%)'},
      title: 'Hello',
      subtitle: 'A Formal Greeing',
      info: 'Hello is a very formal greeting that should only be used for very formal occassions.'
    },
    {
      background: {background: 'linear-gradient(135deg, #81ecec, #00cec9 155%)'},
      title: 'Hey',
      subtitle: 'An Informal Greeting',
      info: 'Hey is an informal greeting that you should avoid using at all costs.'
    },
    {
      background: {background: 'linear-gradient(135deg, #74b9ff, #0984e3 155%)'},
      title: 'Hi',
      subtitle: 'A Neutral Greeting',
      info: 'Hi is a neutral greeting. We suggest that you only ever greet people using this greeting.'
    },
    {
      background: {background: 'linear-gradient(135deg, #a29bfe, #6c5ce7 155%)'},
      title: 'Greetings',
      subtitle: 'An Odd Greeting',
      info: 'Just don\'t ever use this greeting. It\'s weird.'
    },
    {
      background: {background: 'linear-gradient(135deg, #dfe6e9, #b2bec3 155%)'},
      title: 'Sup',
      subtitle: 'A Bad Greeting',
      info: 'Sup is a very bad greeting. Only use it ironically.'
    },
    {
      background: {background: 'linear-gradient(135deg, #ffeaa7, #fdcb6e 155%)'},
      title: '你好',
      subtitle: 'A Chinese Greeting',
      info: '你好 is a greeting in Chinese. Use it if you\'re speaking Chinese'
    },
    {
      background: {background: 'linear-gradient(135deg, #fab1a0, #e17055 155%)'},
      title: 'Hello',
      subtitle: 'A Formal Greeting',
      info: 'I got bored of writing this. I got bored of writing this. I got bored of writing this.'
    },
    {
      background: {background: 'linear-gradient(135deg, #ff7675, #d63031 155%)'},
      title: 'Hello',
      subtitle: 'A Formal Greeting',
      info: 'I got bored of writing this. I got bored of writing this. I got bored of writing this.'
    },
    {
      background: {background: 'linear-gradient(135deg, #fd79a8, #e84393 155%)'},
      title: 'Hello',
      subtitle: 'A Formal Greeting',
      info: 'I got bored of writing this. I got bored of writing this. I got bored of writing this.'
    },
    {
      background: {background: 'linear-gradient(135deg, #ffffff, #f1f2f6 155%)'},
      title: 'Hello',
      subtitle: 'A Formal Greeting',
      info: 'I got bored of writing this. I got bored of writing this. I got bored of writing this.'
    }
  ]

  // Mapping JSX Elements usiung a function //
  // const generateBoxes = () => {
  //   return propsArr.map((props, index) => {
  //     return (
  //       <ColoredBox
  //         key={props.name + String(index)}
  //         background={props.background}
  //         title={props.title}
  //         subtitle={props.subtitle}
  //         information={props.info}
  //       />
  //     )
  //   })
  // }

  // Mapping JSX Elements using a variable //
  const mappedBoxes = propsArr.map((props, index) => {
    return (
      <ColoredBox
        key={props.name + String(index)}
        background={props.background}
        title={props.title}
        subtitle={props.subtitle}
        information={props.info}
      />
    )
  });
  return (
    <div className='colored-boxes'>
      {/* Mapping JSX Elements using a function */}
      {/* {generateBoxes()} */}

      {/* Mapping JSX Elements using a variable */}
      {mappedBoxes}

      {/* Mapping JSX Elements using map directly */}
      {/* {
        propsArr.map((props, index) => {
          return <ColoredBox key={index} background={props.background} title={props.title} subtitle={props.subtitle} information={props.info} />
        })
      } */}

    </div>
  );
}

export default App;
