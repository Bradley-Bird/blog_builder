import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('hello2');
  const [subtitle, setSubtitle] = useState('henlo');
  const [font, setFont] = useState("Architect's Daughter");
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('henlo');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} text={text} font={font} />
      <Editor
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        font={font}
        setFont={setFont}
        align={align}
        setAlign={setAlign}
        setText={setText}
      />
    </main>
  );
}
